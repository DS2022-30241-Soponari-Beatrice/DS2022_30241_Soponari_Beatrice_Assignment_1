package ro.tuc.ds2020.dtos.builders;

import ro.tuc.ds2020.dtos.EnergyConsumptionDTO;
import ro.tuc.ds2020.entities.EnergyConsumption;

public class EnergyConsumptionBuilder {
    private EnergyConsumptionBuilder(){}
    public static EnergyConsumptionDTO toDto(EnergyConsumption energyConsumption)
    {
        return new EnergyConsumptionDTO(energyConsumption.getId(), energyConsumption.getTimestamp(), energyConsumption.getEnergyConsumption(), energyConsumption.getEnergyMeteringDevices());
    }
    public static EnergyConsumption toEntity(EnergyConsumptionDTO energyConsumptionDTO)
    {
        return new EnergyConsumption(energyConsumptionDTO.getId(), energyConsumptionDTO.getTimestamp(), energyConsumptionDTO.getEnergyConsumption(), energyConsumptionDTO.getEnergyMeteringDevices());
    }
}
