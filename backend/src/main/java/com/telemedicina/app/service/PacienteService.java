package com.telemedicina.app.service;

import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.repository.PacienteRepo;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 *
 * @author olive
 */

@Service
@RequiredArgsConstructor
public class PacienteService{

    private final PacienteRepo pacienteRepository;

    public List<Paciente> obtenerPacientes() {
      return pacienteRepository.findAll();
    }

    public void agregarPaciente(Paciente paciente) {
        pacienteRepository.save(paciente);
    }

    public void editarPaciente(Paciente paciente) {
        //TODO
    }

    public void eliminarPaciente(Long id) {
        pacienteRepository.deleteById(id);
    }

    public Paciente encontrarPaciente(Long id) {
      return pacienteRepository.findById(id).orElse(null);
    }
    
    
}
