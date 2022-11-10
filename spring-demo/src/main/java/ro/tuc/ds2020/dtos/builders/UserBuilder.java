package ro.tuc.ds2020.dtos.builders;

import ro.tuc.ds2020.dtos.PersonDTO;
import ro.tuc.ds2020.dtos.PersonDetailsDTO;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.entities.Person;
import ro.tuc.ds2020.entities.User;

public class UserBuilder {
    private UserBuilder() {
    }

    public static UserDTO toDto(User user) {
        return new UserDTO(user.getId(), user.getName(), user.getRole(), user.getUsername(), user.getPassword());
    }

    public static User toEntity(UserDTO userDTO) {
        return new User(userDTO.getId(),
                userDTO.getName(),
                userDTO.getRole()
                );
    }
}
