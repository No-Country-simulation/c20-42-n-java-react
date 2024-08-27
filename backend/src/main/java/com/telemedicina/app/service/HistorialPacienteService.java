/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.telemedicina.app.service;

import com.telemedicina.app.model.HistorialPaciente;
import com.telemedicina.app.repository.HistorialRepo;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 *
 * @author oliver
 */

@Service
@RequiredArgsConstructor
public class HistorialPacienteService{
    private final HistorialRepo historialRepo;

    public List<HistorialPaciente> obtenerTodosLosHistoriales(){
        return historialRepo.findAll();
    }

    public HistorialPaciente obtenerHistorial(Long id) {
        return historialRepo.findById(id).orElse(null);
    }

    public void crearHistorial(HistorialPaciente historialPaciente) {
        historialRepo.save(historialPaciente);
    }

    public void editarHistorial(HistorialPaciente historialPaciente) {
        //TODO
    }

    public void eliminarHistorial(Long id) {
        historialRepo.deleteById(id);
    }

}
