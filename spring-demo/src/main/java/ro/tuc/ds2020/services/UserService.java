package ro.tuc.ds2020.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.dtos.builders.UserBuilder;
import ro.tuc.ds2020.entities.User;
import ro.tuc.ds2020.repositories.UserRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> findUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .map(UserBuilder::toDto)
                .collect(Collectors.toList());
    }
    public UUID insert(UserDTO userDTO) {
        User person = UserBuilder.toEntity(userDTO);
        person = userRepository.save(person);
        return person.getId();
    }
    public void update(UserDTO userDTO, UUID id){
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent())
        {
            User newUser = UserBuilder.toEntity(userDTO);
            user.get().setName(newUser.getName());
            user.get().setRole(newUser.getRole());
            userRepository.save(user.get());
        }
    }

    public void delete(UUID id){
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent())
        {
            userRepository.delete(user.get());
        }
    }
}
