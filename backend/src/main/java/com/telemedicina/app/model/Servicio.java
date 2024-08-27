package com.telemedicina.app.model;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author olive
 */

@Getter
@Setter
public class Servicio {
    
    private Long id_servicio;
    private String titulo;
    private String descripcion;
    private double monto;
    
    private MetodoPago metodoPago;

    public Servicio() {
    }

    public Servicio(Long id_servicio, String titulo, String descripcion, 
            double monto, MetodoPago metodoPago) {
        this.id_servicio = id_servicio;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.monto = monto;
        this.metodoPago = metodoPago;
    }
    
    
    
    
}
