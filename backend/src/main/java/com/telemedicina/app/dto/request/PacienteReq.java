package com.telemedicina.app.dto.request;

import com.telemedicina.app.model.Persona;
import lombok.Data;

@Data
public class PacienteReq {
  private Persona persona;
}
