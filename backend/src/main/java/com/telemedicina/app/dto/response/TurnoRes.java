package com.telemedicina.app.dto.response;

import com.telemedicina.app.model.EstadoTurno;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TurnoRes {
  private Long id;
  private DoctorRes doctor;
  private PacienteRes paciente;
  private LocalDateTime fechaHora;
  private EstadoTurno estadoTurno;

}
