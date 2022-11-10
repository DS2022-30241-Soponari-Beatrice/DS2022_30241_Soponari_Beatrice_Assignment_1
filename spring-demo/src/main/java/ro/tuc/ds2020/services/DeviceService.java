package ro.tuc.ds2020.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.tuc.ds2020.dtos.EnergyMeteringDevicesDTO;

import ro.tuc.ds2020.dtos.builders.EnergyMeteringDevicesBuilder;

import ro.tuc.ds2020.entities.EnergyMeteringDevices;

import ro.tuc.ds2020.repositories.EnergyMeteringDevicesRepository;


import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class DeviceService {

    private final EnergyMeteringDevicesRepository energyMeteringDevicesRepository;

    @Autowired
    public DeviceService(EnergyMeteringDevicesRepository energyMeteringDevicesRepository) {
        this.energyMeteringDevicesRepository = energyMeteringDevicesRepository;
    }

    public List<EnergyMeteringDevicesDTO> findDevices() {
        List<EnergyMeteringDevices> userList = energyMeteringDevicesRepository.findAll();
        return userList.stream()
                .map(EnergyMeteringDevicesBuilder::toDto)
                .collect(Collectors.toList());
    }
    public UUID insert(EnergyMeteringDevicesDTO energyMeteringDevicesDTO) {
        EnergyMeteringDevices energyMeteringDevices = EnergyMeteringDevicesBuilder.toEntity(energyMeteringDevicesDTO);
        energyMeteringDevices = energyMeteringDevicesRepository.save(energyMeteringDevices);
        return energyMeteringDevices.getId();
    }
    public void update(EnergyMeteringDevicesDTO energyMeteringDevicesDTO, UUID id){
        Optional<EnergyMeteringDevices> energyMeteringDevices = energyMeteringDevicesRepository.findById(id);
        if(energyMeteringDevices.isPresent())
        {
            EnergyMeteringDevices EnergyMeteringDevices = EnergyMeteringDevicesBuilder.toEntity(energyMeteringDevicesDTO);
            energyMeteringDevices.get().setAddress(EnergyMeteringDevices.getAddress());
            energyMeteringDevices.get().setDescription(EnergyMeteringDevices.getDescription());
            energyMeteringDevicesRepository.save(energyMeteringDevices.get());
        }
    }

    public void delete(UUID id){
        Optional<EnergyMeteringDevices> energyMeteringDevices = energyMeteringDevicesRepository.findById(id);
        if(energyMeteringDevices.isPresent())
        {
            energyMeteringDevicesRepository.delete(energyMeteringDevices.get());
        }
    }
}
