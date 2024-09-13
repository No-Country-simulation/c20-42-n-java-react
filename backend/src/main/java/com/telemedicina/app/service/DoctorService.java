package com.telemedicina.app.service;

import com.telemedicina.app.dto.request.DoctorReq;
import com.telemedicina.app.dto.response.DoctorRes;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.repository.DoctorRepo;
import com.telemedicina.app.repository.EspecialidadRepo;
import com.telemedicina.app.service.mapper.DoctorMapper;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DoctorService {
    private final DoctorRepo doctorRepository;
    private final DoctorMapper doctorMapper;

    public List<DoctorRes> obtenerDoctores(Specification<Doctor> doctorSpec) {
        return doctorRepository.findAll(doctorSpec).stream().map(doctorMapper::toDoctorRes).toList();
    }

    public DoctorRes agregarDoctor(DoctorReq doctor) {
        return doctorMapper.toDoctorRes(doctorRepository.save(doctorMapper.toDoctor(doctor)));
    }

    public DoctorRes editarDoctor(Long id, DoctorReq doctorReq) {
        doctorRepository.findById(id).orElseThrow(()->new EntityNotFoundException("No se encontro el doctor"));
        Doctor doctor = doctorMapper.toDoctor(doctorReq);
        doctor.setId(id);
        return doctorMapper.toDoctorRes(doctorRepository.save(doctor));
    }

    public void eliminarDoctor(Long id) {
        doctorRepository.deleteById(id);
    }

    public DoctorRes encontrarDoctor(Long id) {
        return doctorMapper.toDoctorRes(doctorRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Doctor no encontrado")));
    }

    public Doctor findDoctor(Long id) {
        return doctorRepository.findById(id).orElseThrow(()->new EntityNotFoundException("Doctor no encontrado"));
    }
}
