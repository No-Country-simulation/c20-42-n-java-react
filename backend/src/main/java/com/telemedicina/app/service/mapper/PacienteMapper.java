package com.telemedicina.app.service.mapper;

import com.telemedicina.app.dto.request.PacienteReq;
import com.telemedicina.app.dto.response.PacienteRes;
import com.telemedicina.app.model.HistoriaClinica;
import com.telemedicina.app.model.Paciente;
import java.util.ArrayList;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PacienteMapper {
  private final PersonaMapper personaMapper;


  public Paciente toPaciente(PacienteReq p){
    Paciente paciente =  new Paciente();
    paciente.setPersona(personaMapper.toPersona(p.getPersona()));
    paciente.setHistoriaClinica(HistoriaClinica.builder()
            .registroMedicos(new ArrayList<>())
        .build());
    return paciente;
  }

  public PacienteRes toPacienteRes(Paciente p){
    return PacienteRes.builder()
        .id(p.getId())
        .persona(p.getPersona())
        .build();
  }

}
