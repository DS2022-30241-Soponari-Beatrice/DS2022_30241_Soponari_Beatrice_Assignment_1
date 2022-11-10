package ro.tuc.ds2020.dtos;
import lombok.AllArgsConstructor;
import lombok.Data;
import ro.tuc.ds2020.entities.EnergyConsumption;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
public class EnergyMeteringDevicesDTO {
    private UUID id;
    private String description;
    private String address;
    private int max_hourly_energy_consumption;

}
