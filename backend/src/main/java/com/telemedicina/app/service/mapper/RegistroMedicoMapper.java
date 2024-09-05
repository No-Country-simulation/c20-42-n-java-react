package com.telemedicina.app.service.mapper;

import com.telemedicina.app.dto.request.RegistroMedicoReq;
import com.telemedicina.app.dto.response.RegistroMedicoRes;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.RegistroMedico;
import com.telemedicina.app.repository.DoctorRepo;
import jakarta.persistence.EntityNotFoundException;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegistroMedicoMapper {
  private final DoctorRepo doctorRepo;

  public RegistroMedico toRegistroMedico(RegistroMedicoReq registroMedico) {
    Doctor doctor = doctorRepo.findById(registroMedico.getDoctorId()).orElseThrow(()->new EntityNotFoundException("Doctor no encontrado"));
    return RegistroMedico.builder()
        .fecha(registroMedico.getFecha())
        .expediente(UUID.randomUUID().toString())
        .doctor(doctor)
        .motivoDeLaConsulta(registroMedico.getMotivoDeLaConsulta())
        .sintomas(registroMedico.getSintomas())
        .diagnostico(registroMedico.getDiagnostico())
        .tratamiento(registroMedico.getTratamiento())
        .seguimiento(registroMedico.getSeguimiento())
        .observaciones(registroMedico.getObservaciones())
        .build();
  }

  public RegistroMedicoRes toRegistroMedicoRes(RegistroMedico r) {
    return RegistroMedicoRes.builder()
        .id(r.getId())
        .fecha(r.getFecha())
        .doctorId(r.getDoctor().getId())
        .motivoDeLaConsulta(r.getMotivoDeLaConsulta())
        .sintomas(r.getSintomas())
        .diagnostico(r.getDiagnostico())
        .tratamiento(r.getTratamiento())
        .seguimiento(r.getSeguimiento())
        .observaciones(r.getObservaciones())
        .build();
  }



}
