package ro.tuc.ds2020.entities;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
public class EnergyMeteringDevices implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Type(type = "uuid-binary")
    private UUID id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "max_hourly_energy_consumption", nullable = false)
    private int max_hourly_energy_consumption;


    @OneToMany(mappedBy = "energyMeteringDevices")
    private List<EnergyConsumption> energyConsumptionList;

    public EnergyMeteringDevices(UUID id, String description, String address, int max_hourly_energy_consumption) {
        this.id = id;
        this.description = description;
        this.address = address;
        this.max_hourly_energy_consumption = max_hourly_energy_consumption;
    }
}
