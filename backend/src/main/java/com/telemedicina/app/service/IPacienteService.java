package com.telemedicina.app.service;

import com.telemedicina.app.model.Paciente;
import java.util.List;

/**
 *
 * @author olive
 */
public interface IPacienteService {
    
    public List<Paciente> obtenerPacientes();
    
    public void agregarPaciente(Paciente paciente);
    
    public void editarPaciente(Paciente paciente);
    
    public void eliminarPaciente(Long id);
    
    public Paciente encontrarPaciente(Long id);
}
