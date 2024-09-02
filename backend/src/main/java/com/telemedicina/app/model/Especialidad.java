package com.telemedicina.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
 *
 * @author oliver
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Especialidad {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id_especialidad;
    
    @NotBlank(message = "Ingresa una especialidad")
    @NotNull(message = "Debes ingresar una especialidad")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "La especialidad debe contener solo letras")
    private String especialidad_nombre;
    
    
    private String descripcion;
    
    
}
