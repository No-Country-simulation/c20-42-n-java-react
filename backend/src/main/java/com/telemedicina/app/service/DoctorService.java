package com.telemedicina.app.service;

import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.Especialidad;
import com.telemedicina.app.model.Persona;
import com.telemedicina.app.repository.DoctorRepo;
import com.telemedicina.app.repository.EspecialidadRepo;
import com.telemedicina.app.repository.PersonaRepo;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DoctorService {

    private final DoctorRepo doctorRepository;
    private final EspecialidadRepo especialidadRepository;
    //private final PersonaRepo personaRepository;

    //Metodo para obtener a los doctores
    public List<Doctor> obtenerDoctores() {
        List<Doctor> listaDoctores = doctorRepository.findAll();
        return listaDoctores;
    }

    public void agregarDoctor(Doctor doctor) {

        //Verificar si la especialidad existe
        Especialidad especialidad = especialidadRepository
                .findById(doctor.getEspecialidad().getId_especialidad())
                .orElseThrow(() -> new EntityNotFoundException("Especialidad no encontrada"));

        //Le establecemos la especialidad al doctor
        doctor.setEspecialidad(especialidad);

        //Guardamos el doctor
        doctorRepository.save(doctor);
    }

    public void editarDoctor(Doctor doctor) {
        this.agregarDoctor(doctor);
    }

    public void eliminarDoctor(Long id) {
        doctorRepository.deleteById(id);
    }

    public Doctor encontrarDoctor(Long id) {
        return doctorRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Doctor no encontrado"));
    }
}
