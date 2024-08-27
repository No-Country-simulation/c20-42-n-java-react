package com.telemedicina.app.service;

import com.telemedicina.app.model.HistorialPaciente;

/**
 *
 * @author oliver
 */

public interface IHistorialPacienteService {
    
    //Metodo para obtener el historial del paciente
    public HistorialPaciente obtenerHistorial(Long id);
    
    //Metodo para crear el historial del paciente
    public void crearHistorial(HistorialPaciente historialPaciente);
    
    //Metodo para editar el historial del paciente
    public void editarHistorial(HistorialPaciente historialPaciente);
    
    //Metodo para eliminar el historial del paciente
    public void eliminarHistorial(Long id);
    
}
