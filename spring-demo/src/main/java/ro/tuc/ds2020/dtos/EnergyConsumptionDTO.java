package ro.tuc.ds2020.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import ro.tuc.ds2020.entities.EnergyMeteringDevices;

import java.sql.Timestamp;
import java.util.UUID;
@Data
@AllArgsConstructor
public class EnergyConsumptionDTO {
    private UUID id;
    private Timestamp timestamp;
    private int energyConsumption;
    private EnergyMeteringDevices energyMeteringDevices;
}
