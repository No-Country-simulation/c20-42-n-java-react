package com.telemedicina.app.service;

import com.telemedicina.app.model.Paciente;
import java.util.List;

/**
 *
 * @author olive
 */
public interface IPacienteService {
    
    List<Paciente> obtenerPacientes();
    
    void agregarPaciente(Paciente paciente);
    
    void editarPaciente(Paciente paciente);

    void eliminarPaciente(Long id);
    
    Paciente encontrarPaciente(Long id);
}
