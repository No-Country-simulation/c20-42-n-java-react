package com.telemedicina.app.dto.response;


import com.telemedicina.app.model.Persona;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PacienteRes {
  private Long id;
  private Persona persona;
}
