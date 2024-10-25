package com.telemedicina.app.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HistoriaClinicaRes {
  private Long id;
  private List<RegistroMedicoRes> registroMedicos;
}
