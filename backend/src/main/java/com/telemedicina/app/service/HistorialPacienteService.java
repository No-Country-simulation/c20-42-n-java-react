/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.telemedicina.app.service;

import com.telemedicina.app.model.HistorialPaciente;
import com.telemedicina.app.repository.IHistorialPacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author oliver
 */

@Service
public class HistorialPacienteService implements IHistorialPacienteService {

    @Autowired
    private IHistorialPacienteRepository historialPaRepo;

    //Metodo para obtener el historial de un paciente
    @Override
    public HistorialPaciente obtenerHistorial(Long id) {
        return historialPaRepo.findById(id).orElse(null);
    }

    //Metodo para crear el historial del paciente
    @Override
    public void crearHistorial(HistorialPaciente historialPaciente) {
        historialPaRepo.save(historialPaciente);
    }

    //Metodo para editar el historial del paciente
    @Override
    public void editarHistorial(HistorialPaciente historialPaciente) {
        this.crearHistorial(historialPaciente);
    }

    //Metodo para elimianr el historial
    @Override
    public void eliminarHistorial(Long id) {
        historialPaRepo.deleteById(id);
    }

}
