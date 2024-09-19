package com.telemedicina.app.dto.response;

import java.time.LocalDate;
import java.util.List;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegistroMedicoRes {
  private Long id;
  private LocalDate fecha;
  private DoctorRes doctor;
  private String motivoDeLaConsulta;
  private List<String> sintomas;
  private String diagnostico;
  private String tratamiento;
  private String seguimiento;
  private String observaciones;
}
