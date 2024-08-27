package com.telemedicina.app.model;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author oliver
 */

@Getter
@Setter
class Especialidad {
    
    private Long id_especialidad;
    private String especialidad_nombre;
    private String descripcion;

    public Especialidad() {
    }

    public Especialidad(Long id_especialidad, String especialidad_nombre, String descripcion) {
        this.id_especialidad = id_especialidad;
        this.especialidad_nombre = especialidad_nombre;
        this.descripcion = descripcion;
    }
    
    
}
