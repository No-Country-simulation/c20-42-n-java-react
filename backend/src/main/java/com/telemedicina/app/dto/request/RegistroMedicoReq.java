package com.telemedicina.app.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegistroMedicoReq {
  @PastOrPresent
  @NotNull(message = "El campo fecha no debe ser nulo")
  private LocalDate fecha;
  @NotNull(message = "El campo doctorId no debe ser nulo")
  private Long doctorId;
  @NotBlank(message = "El campo motivoDeLaConsulta no debe estar vacío")
  private String motivoDeLaConsulta;
  @NotBlank(message = "El campo sintomas no debe estar vacío")
  private List<String> sintomas;
  @NotBlank(message = "El campo diagnostico no debe estar vacío")
  private String diagnostico;
  @NotBlank(message = "El campo tratamiento no debe estar vacío")
  private String tratamiento;
  @NotNull(message = "El campo seguimiento no debe ser nulo")
  private String seguimiento;
  @NotNull
  private String observaciones;
}
