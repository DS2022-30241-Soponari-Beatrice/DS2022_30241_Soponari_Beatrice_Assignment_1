package ro.tuc.ds2020.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ro.tuc.ds2020.entities.Role;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginJwtDTO {

    private Role role;
    private String accessToken;
}