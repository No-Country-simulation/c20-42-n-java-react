package com.telemedicina.app.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class EspecialidadReq {
    @NotBlank(message = "Ingresa una especialidad")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "La especialidad debe contener solo letras")
    private String nombre;
    private String descripcion;

}
