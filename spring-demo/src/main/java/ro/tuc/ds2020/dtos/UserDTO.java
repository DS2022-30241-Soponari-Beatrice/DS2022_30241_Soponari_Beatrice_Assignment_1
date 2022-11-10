package ro.tuc.ds2020.dtos;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ro.tuc.ds2020.entities.Role;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private UUID id;
    private String name;
    private String username;
    private String password;
    private Role role;
    private List<EnergyMeteringDevicesDTO> energyMeteringDevicesDTOS;

    public UserDTO(UUID id, String name, Role role, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.role = role;
    }
}
