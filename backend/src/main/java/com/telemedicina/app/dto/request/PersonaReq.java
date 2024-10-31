package com.telemedicina.app.dto.request;

import com.telemedicina.app.model.Sexo;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PersonaReq {
    @NotBlank(message = "El campo nombre no puede estar vacío")
    //@Pattern(regexp = "^[a-zA-Z]+$", message = "El nombre debe contener letras solamente")
    private String nombre;

    @NotBlank(message = "El campo apellido no puede estar vacío")
    private String apellido;

    @NotNull(message = "El campo fdn no puede estar vacío")
    private LocalDate fdn;

    @NotNull(message = "El campo sexo no puede estar vacío")
    private Sexo sexo;

    @NotBlank(message = "El campo DNI no puede estar vacío")
    private String dni;

    @NotBlank(message = "El campo telefono no puede estar vacío")
    private String telefono;

    @NotBlank(message = "El campo email no puede estar vacío")
    @Email(message = "Debes ingresar un correo válido")
    private String email;

    private String fotoUrl;
}
