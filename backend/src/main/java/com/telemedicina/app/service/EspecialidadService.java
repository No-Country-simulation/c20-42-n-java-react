package com.telemedicina.app.service;

import com.telemedicina.app.dto.request.EspecialidadReq;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.Especialidad;
import com.telemedicina.app.repository.DoctorRepo;
import com.telemedicina.app.repository.EspecialidadRepo;
import com.telemedicina.app.service.mapper.EspecialidadMapper;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class EspecialidadService {
    
    private final EspecialidadRepo especialidadRepository;
    private final EspecialidadMapper mapper;
    private final DoctorRepo doctorRepository;

    public List<Especialidad> obtenerEspecialidades(){
        return especialidadRepository.findAll();
    }
    
    public Especialidad crearEspecialidad(EspecialidadReq especialidad){
        return especialidadRepository.save(mapper.toEspecialidad(especialidad));
    }
    
    public Especialidad editarEspecialidad(Long id, EspecialidadReq especialidadReq){
        especialidadRepository.findById(id).orElseThrow(()-> new EntityNotFoundException("Especialidad con id " + id + "no encontrada"));
        Especialidad especialidad = mapper.toEspecialidad(especialidadReq);
        especialidad.setId(id);
        return especialidadRepository.save(especialidad);
    }
    
    public void eliminarEspecialidad(Long id){
        desvincularEspecialidadDeDoctores(id);
        especialidadRepository.deleteById(id);
    }
    
    public Especialidad encontrarEspecialidad(Long id){
        return especialidadRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Especialidad no encontrada"));
    }
    

    public void desvincularEspecialidadDeDoctores(Long id){
        List<Doctor> doctores = doctorRepository.findByEspecialidad(id);
        doctores.forEach(d -> {
            d.setEspecialidad(null);
            doctorRepository.save(d);
        });
    }
}
