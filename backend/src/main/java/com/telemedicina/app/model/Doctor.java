package com.telemedicina.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author oliver
 */

@Data
@NoArgsConstructor
@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Debes ingresar tu licencia")
    private String licencia; //Licencia del doctor
    private double ganancias;
    
    @OneToOne(cascade = CascadeType.ALL)
    private Persona persona;
    
    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Especialidad especialidad;
    
    //Relacion OneToMany para el manejo de la lista de pacientes
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.PERSIST)
    private List<Paciente> paciente;

}
