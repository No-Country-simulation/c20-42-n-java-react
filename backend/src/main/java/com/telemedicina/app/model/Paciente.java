package com.telemedicina.app.model;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author olive
 */

@Getter
@Setter
public class Paciente extends Persona {

    public Paciente() {
    }

    public Paciente(Long id_persona, String nombre_persona, int edad_persona, int dni, int telefono, String correo) {
        super(id_persona, nombre_persona, edad_persona, dni, telefono, correo);
    }
    
    
}
