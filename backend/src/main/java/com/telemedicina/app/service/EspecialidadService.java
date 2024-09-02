package com.telemedicina.app.service;

import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.Especialidad;
import com.telemedicina.app.repository.DoctorRepo;
import com.telemedicina.app.repository.EspecialidadRepo;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 *
 * @author olive
 */

@Service
@RequiredArgsConstructor
public class EspecialidadService {
    
    private final EspecialidadRepo especialidadRepository;
    
    private final DoctorRepo doctorRepository;
    
    //Obtener las especialidades
    public List<Especialidad> obtenerEspecialidades(){
        List<Especialidad> listaEspecialidad = especialidadRepository.findAll();
        
        return listaEspecialidad;
    }
    
    public void crearEspecialidad(Especialidad especialidad){
        especialidadRepository.save(especialidad);
    }
    
    public void editarEspecialidad(Especialidad especialidad){
        this.crearEspecialidad(especialidad);
    }
    
    public void eliminarEspecialidad(Long id){
        
        //Primero desvilculamos, esto debido a la relacion del tipo cascade
        this.desvincularEspecialidadDeDoctores(id);
        //Metodo para eliminar la especialidad
        especialidadRepository.deleteById(id);
    }
    
    public Especialidad encontrarEspecialidad(Long id){
        return especialidadRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Especialidad no encontrada"));
    }
    
    //Metodo creado para desvincular la especialidad del doctor y luego eliminarla
    public void desvincularEspecialidadDeDoctores(Long id){
        
        //La desvinculamos de todos los doctores que la posean
        List<Doctor> doctores = doctorRepository.findByEspecialidad(id);
        for (Doctor doctor : doctores){
            doctor.setEspecialidad(null);
            doctorRepository.save(doctor);
        }
    }
}
