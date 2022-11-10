package ro.tuc.ds2020.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.tuc.ds2020.dtos.PersonDTO;
import ro.tuc.ds2020.dtos.PersonDetailsDTO;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.services.UserService;

import javax.servlet.http.PushBuilder;
import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping(value = "/user")
public class UserController {
    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping()
    public ResponseEntity<List<UserDTO>> findUsers() {
        List<UserDTO> dtos = service.findUsers();

        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<UUID> insertUser(@Valid @RequestBody UserDTO userDTO) {
        UUID userID = service.insert(userDTO);
        return new ResponseEntity<>(userID, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public void updateUser(@Valid @RequestBody UserDTO userDTO, @PathVariable UUID id)
    {
        service.update(userDTO, id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable UUID id)
    {
        service.delete(id);
    }
}
