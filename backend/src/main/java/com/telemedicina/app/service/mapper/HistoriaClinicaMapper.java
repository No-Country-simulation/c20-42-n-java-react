package com.telemedicina.app.service.mapper;

import com.telemedicina.app.dto.request.HistoriaClinicaReq;
import com.telemedicina.app.dto.response.HistoriaClinicaRes;
import com.telemedicina.app.model.HistoriaClinica;
import com.telemedicina.app.repository.PacienteRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HistoriaClinicaMapper {
  private final PacienteRepo pacienteRepo;
  private final RegistroMedicoMapper registroMedicoMapper;

  public HistoriaClinica toHistoriaClinica(HistoriaClinicaReq historiaClinicaReq) {
    return HistoriaClinica.builder()
        .registroMedicos(historiaClinicaReq.getRegistroMedicos().stream().map(registroMedicoMapper::toRegistroMedico).toList())
        .build();
  }

  public HistoriaClinicaRes toHistoriaClinicaRes(HistoriaClinica historiaClinica) {
    return HistoriaClinicaRes.builder()
        .id(historiaClinica.getId())
        .registroMedicos(historiaClinica.getRegistroMedicos().stream().map(registroMedicoMapper::toRegistroMedicoRes).toList())
        .build();
  }

}
