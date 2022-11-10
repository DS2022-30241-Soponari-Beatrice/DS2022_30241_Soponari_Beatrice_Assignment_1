package ro.tuc.ds2020.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.tuc.ds2020.entities.EnergyMeteringDevices;

import java.util.UUID;

public interface EnergyMeteringDevicesRepository extends JpaRepository<EnergyMeteringDevices, UUID> {
}
