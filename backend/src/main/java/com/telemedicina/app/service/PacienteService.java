package com.telemedicina.app.service;

import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.repository.IPacienteRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author olive
 */

@Service
@RequiredArgsConstructor
public class PacienteService implements IPacienteService{

    private final IPacienteRepository pacienteRepository;

    @Override
    public List<Paciente> obtenerPacientes() {
      return pacienteRepository.findAll();
    }

    @Override
    public void agregarPaciente(Paciente paciente) {
        pacienteRepository.save(paciente);
    }

    @Override
    public void editarPaciente(Paciente paciente) {
        //TODO
    }

    @Override
    public void eliminarPaciente(Long id) {
        pacienteRepository.deleteById(id);
    }

    @Override
    public Paciente encontrarPaciente(Long id) {
      return pacienteRepository.findById(id).orElse(null);
    }
    
    
}
