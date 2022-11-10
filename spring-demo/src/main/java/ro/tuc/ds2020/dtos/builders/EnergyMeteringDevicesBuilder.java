package ro.tuc.ds2020.dtos.builders;
import ro.tuc.ds2020.dtos.EnergyMeteringDevicesDTO;
import ro.tuc.ds2020.dtos.UserDTO;
import ro.tuc.ds2020.entities.EnergyMeteringDevices;
import ro.tuc.ds2020.entities.User;

public class EnergyMeteringDevicesBuilder {
    private EnergyMeteringDevicesBuilder(){}
    public static EnergyMeteringDevicesDTO toDto(EnergyMeteringDevices energyMeteringDevices)
    {
        return new EnergyMeteringDevicesDTO(energyMeteringDevices.getId(), energyMeteringDevices.getDescription(), energyMeteringDevices.getAddress(), energyMeteringDevices.getMax_hourly_energy_consumption());
    }
    public static EnergyMeteringDevices toEntity(EnergyMeteringDevicesDTO energyMeteringDevicesDTO)
    {
        return new EnergyMeteringDevices(energyMeteringDevicesDTO.getId(), energyMeteringDevicesDTO.getDescription(), energyMeteringDevicesDTO.getAddress(), energyMeteringDevicesDTO.getMax_hourly_energy_consumption());
    }
}
