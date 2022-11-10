package ro.tuc.ds2020.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ro.tuc.ds2020.dtos.EnergyMeteringDevicesDTO;
import ro.tuc.ds2020.services.DeviceService;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping(value = "/device")
public class DeviceController {
    private final DeviceService service;

    @Autowired
    public DeviceController(DeviceService service) {
        this.service = service;
    }



    @GetMapping()
    public ResponseEntity<List<EnergyMeteringDevicesDTO>> findUsers() {
        List<EnergyMeteringDevicesDTO> dtos = service.findDevices();

        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<UUID> insertDevice(@Valid @RequestBody EnergyMeteringDevicesDTO energyMeteringDevicesDTO) {
        UUID id = service.insert(energyMeteringDevicesDTO);
        return new ResponseEntity<>(id, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public void updateDevice(@Valid @RequestBody EnergyMeteringDevicesDTO energyMeteringDevicesDTO, @PathVariable UUID id)
    {
        service.update(energyMeteringDevicesDTO, id);
    }

    @DeleteMapping("/{id}")
    public void deleteDevice(@PathVariable UUID id)
    {
        service.delete(id);
    }
}
