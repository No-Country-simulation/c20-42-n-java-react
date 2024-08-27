package com.telemedicina.app.model;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author oliver
 */

@Getter @Setter
public class Persona {
    
    private Long id_persona;
    private String nombre_persona;
    private int edad_persona;
    private int dni;
    private int telefono;
    private String correo;

    public Persona() {
    }

    public Persona(Long id_persona, String nombre_persona, int edad_persona, int dni, int telefono, String correo) {
        this.id_persona = id_persona;
        this.nombre_persona = nombre_persona;
        this.edad_persona = edad_persona;
        this.dni = dni;
        this.telefono = telefono;
        this.correo = correo;
    }
    
    
}
