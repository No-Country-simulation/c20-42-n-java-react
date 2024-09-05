package com.telemedicina.app.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class RegistroMedico {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  protected Long id;
  private String expediente;
  private LocalDate fecha;
  @ManyToOne
  private Doctor doctor;
  private String motivoDeLaConsulta;
  @ElementCollection
  private List<String> sintomas;
  private String diagnostico;
  private String tratamiento;
  private String seguimiento;
  private String observaciones;
}
