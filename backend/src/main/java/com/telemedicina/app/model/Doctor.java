package com.telemedicina.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author oliver
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Doctor{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
    private Persona persona;
    private int numero_doctor; //Licencia del doctor
    private double ganancias;
    @Transient
    private Especialidad especialidad;
    @Transient
    private List<Paciente> paciente;


    
    
    
}
