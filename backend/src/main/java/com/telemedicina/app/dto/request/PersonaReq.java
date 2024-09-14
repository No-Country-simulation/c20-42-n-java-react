package com.telemedicina.app.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PersonaReq {
    @NotBlank(message = "El campo nombre no puede estar vacío")
    //@Pattern(regexp = "^[a-zA-Z]+$", message = "El nombre debe contener letras solamente")
    private String nombre;

    @NotNull(message = "El campo edad no puede estar vacío")
    private int edad;

    @NotBlank(message = "El campo DNI no puede estar vacío")
    private String dni;

    @NotBlank(message = "El campo telefono no puede estar vacío")
    private String telefono;

    @NotBlank(message = "El campo email no puede estar vacío")
    @Email(message = "Debes ingresar un correo válido")
    private String email;
}
