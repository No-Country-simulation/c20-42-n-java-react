package com.telemedicina.app.service;

import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.repository.IPacienteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author olive
 */

@Service
public class PacienteService implements IPacienteService{
    
    @Autowired
    private IPacienteRepository pacienteRepository;

    //Traer a todos los pacientes
    @Override
    public List<Paciente> obtenerPacientes() {
        List<Paciente> listaPacientes = pacienteRepository.findAll();
        return listaPacientes;
    }

    //Agregar un Paciente
    @Override
    public void agregarPaciente(Paciente paciente) {
        pacienteRepository.save(paciente);
    }

    //Editar un Paciente
    @Override
    public void editarPaciente(Paciente paciente) {
        this.agregarPaciente(paciente);
    }

    //Eliminar un Paciente
    @Override
    public void eliminarPaciente(Long id) {
        pacienteRepository.deleteById(id);
    }

    //Encontrar un Paciente
    @Override
    public Paciente encontrarPaciente(Long id) {
        Paciente paciente = pacienteRepository.findById(id).orElse(null);
        
        return paciente;
    }
    
    
}
