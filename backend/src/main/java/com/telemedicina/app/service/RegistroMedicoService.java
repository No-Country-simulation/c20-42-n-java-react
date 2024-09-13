package com.telemedicina.app.service;

import com.telemedicina.app.dto.request.RegistroMedicoReq;
import com.telemedicina.app.dto.response.RegistroMedicoRes;
import com.telemedicina.app.model.RegistroMedico;
import com.telemedicina.app.repository.RegistroMedicoRepo;
import com.telemedicina.app.service.mapper.RegistroMedicoMapper;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegistroMedicoService {
  private final RegistroMedicoRepo registroMedicoRepo;
  private final RegistroMedicoMapper registroMedicoMapper;
  private final HistoriaClinicaService historiaClinicaService;
  private final PacienteService pacienteService;

  public List<RegistroMedico> obtenerRegistrosMedicos(Long pacienteId) {
    pacienteService.findPaciente(pacienteId);
    return registroMedicoRepo.findRegistroMedicoByPaciente(pacienteId);
  }

  public RegistroMedicoRes obtenerRegistroMedico(Long pacienteId, Long id) {
    pacienteService.findPaciente(pacienteId);
    RegistroMedico registroMedico = registroMedicoRepo.findById(id).orElseThrow(()-> new EntityNotFoundException("Registro Medico con id " + id + " no encontrado"));
    return registroMedicoMapper.toRegistroMedicoRes(registroMedico);
  }

  @Transactional
  public RegistroMedicoRes guardarRegistroMedico(Long pacienteId, RegistroMedicoReq registroMedicoReq) {
    RegistroMedico registroMedico = registroMedicoRepo.save(registroMedicoMapper.toRegistroMedico(registroMedicoReq));
    historiaClinicaService.agregarRegistroMedico(pacienteId, registroMedico);
    return registroMedicoMapper.toRegistroMedicoRes(registroMedico);
  }

  public void eliminarRegistroMedico(Long id) {
    registroMedicoRepo.deleteById(id);
  }

  public RegistroMedicoRes modificarRegistroMedico(Long pacienteId, Long id ,RegistroMedicoReq registroMedicoReq) {
    obtenerRegistroMedico(pacienteId,id);
    RegistroMedico registroMedico = registroMedicoMapper.toRegistroMedico(registroMedicoReq);
    registroMedico.setId(id);
    return registroMedicoMapper.toRegistroMedicoRes(registroMedicoRepo.save(registroMedico));
  }

}
