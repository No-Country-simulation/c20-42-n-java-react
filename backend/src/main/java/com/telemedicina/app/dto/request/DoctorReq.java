package com.telemedicina.app.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorReq {
    @Valid
    private PersonaReq persona;
    @NotBlank(message = "El campo licencia no puede estar vacío")
    private String licencia;
    @NotNull(message = "El campo honorarios no puede estar vacío")
    private double honorarios;
    @NotNull(message = "El campo especialidad no puede estar vacío")
    private Long especialidadId;
}
