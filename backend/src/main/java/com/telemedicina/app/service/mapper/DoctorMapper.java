package com.telemedicina.app.service.mapper;

import com.telemedicina.app.dto.request.DoctorReq;
import com.telemedicina.app.dto.response.DoctorRes;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.Especialidad;
import com.telemedicina.app.repository.EspecialidadRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DoctorMapper {
    private final PersonaMapper personaMapper;
    private final EspecialidadRepo especialidadRepo;

    public DoctorRes toDoctorRes(Doctor doctor){
        return DoctorRes.builder()
                .id(doctor.getId())
                .persona(doctor.getPersona())
                .especialidadId(Optional.ofNullable(doctor.getEspecialidad()).map(Especialidad::getId).orElse(null))
                .licencia(doctor.getLicencia())
                .honorarios(doctor.getHonorarios())
                .build();
    }

    public Doctor toDoctor(DoctorReq d){
        return Doctor.builder()
                .persona(personaMapper.toPersona(d.getPersona()))
                .especialidad(especialidadRepo.findById(d.getEspecialidadId()).orElseThrow(()-> new EntityNotFoundException("Especialidad no encontrada")))
                .honorarios(d.getHonorarios())
                .licencia(d.getLicencia())
                .build();
    }
}
