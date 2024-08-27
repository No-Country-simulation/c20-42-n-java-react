package com.telemedicina.app.model;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author oliver
 */

@Getter
@Setter
public class Doctor extends Persona{
    
    private int numero_doctor; //Licencia del doctor
    private double ganancias;
    
    private Especialidad especialidad;
    private List<Paciente> paciente;

    public Doctor() {
    }

    public Doctor(int numero_doctor, double ganancias, Especialidad especialidad, List<Paciente> paciente, Long id_persona, String nombre_persona, int edad_persona, String dni, String telefono, String correo) {
        super(id_persona, nombre_persona, edad_persona, dni, telefono, correo);
        this.numero_doctor = numero_doctor;
        this.ganancias = ganancias;
        this.especialidad = especialidad;
        this.paciente = paciente;
    }

    
    
    
}
