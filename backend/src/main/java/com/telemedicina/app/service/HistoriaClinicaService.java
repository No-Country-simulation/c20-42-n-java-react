/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.telemedicina.app.service;

import com.telemedicina.app.dto.request.HistoriaClinicaReq;
import com.telemedicina.app.dto.response.HistoriaClinicaRes;
import com.telemedicina.app.model.HistoriaClinica;
import com.telemedicina.app.repository.HistoriaClinicaRepo;
import com.telemedicina.app.repository.PacienteRepo;
import com.telemedicina.app.service.mapper.HistoriaClinicaMapper;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 *
 * @author oliver
 */

@Service
@RequiredArgsConstructor
public class HistoriaClinicaService {

    private final HistoriaClinicaRepo historiaClinicaRepo;
    private final HistoriaClinicaMapper historiaClinicaMapper;

    public List<HistoriaClinicaRes> obtenerTodosLosHistoriales(){
        return historiaClinicaRepo.findAll().stream().map(historiaClinicaMapper::toHistoriaClinicaRes).toList();
    }

    public HistoriaClinicaRes obtenerHistorial(Long id) {
        return historiaClinicaMapper.toHistoriaClinicaRes(historiaClinicaRepo.findById(id).orElseThrow(()->new EntityNotFoundException("Historial no encontrada")));
    }

    public HistoriaClinicaRes crearHistorial(HistoriaClinicaReq historiaClinicaReq) {
        HistoriaClinica historiaClinica = historiaClinicaMapper.toHistoriaClinica(historiaClinicaReq);
        return historiaClinicaMapper.toHistoriaClinicaRes(historiaClinicaRepo.save(historiaClinica));
    }

    public void editarHistorial(HistoriaClinica historiaClinica) {
        //TODO
    }

    public void eliminarHistorial(Long id) {
        historiaClinicaRepo.deleteById(id);
    }

}
