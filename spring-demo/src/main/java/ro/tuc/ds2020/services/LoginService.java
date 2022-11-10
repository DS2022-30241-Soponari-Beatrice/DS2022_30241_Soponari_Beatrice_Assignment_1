package ro.tuc.ds2020.services;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import ro.tuc.ds2020.entities.JwtResponse;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.repositories.UserRepository;
import ro.tuc.ds2020.securityConfig.jwt.JwtUtils;
import ro.tuc.ds2020.services.auth.UserDetailsAuth;

import javax.transaction.Transactional;
import javax.validation.Valid;

@Service
@RequiredArgsConstructor
@Transactional
public class LoginService {
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    UserRepository userRepository;
    private static final String BEARER = "Bearer ";

    private final AuthenticationManager authenticationManager;

    private final JwtUtils jwtUtils;

    public JwtResponse login(String username, String password) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(username, password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        User user = userRepository.findUserByUsername(username).get();
        return new JwtResponse(user.getRole(), BEARER + jwt);
    }

    public User getLoggedInterviewerDetails() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ((UserDetailsAuth) authentication.getPrincipal()).getUser();
    }
    public ResponseEntity registerUser(@Valid @RequestBody User signUpRequest) {
        if (userRepository.findUserByUsername(signUpRequest.getUsername()).isPresent()) {
            return (ResponseEntity) new ResponseEntity<>(HttpStatus.BAD_REQUEST).getBody();
        }

        signUpRequest.setPassword(encoder.encode(signUpRequest.getPassword()));
        userRepository.save(signUpRequest);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
