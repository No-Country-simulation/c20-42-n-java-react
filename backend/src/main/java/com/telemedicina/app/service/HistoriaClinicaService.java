package com.telemedicina.app.service;

import com.telemedicina.app.dto.response.HistoriaClinicaRes;
import com.telemedicina.app.model.HistoriaClinica;
import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.model.RegistroMedico;
import com.telemedicina.app.repository.HistoriaClinicaRepo;
import com.telemedicina.app.repository.PacienteRepo;
import com.telemedicina.app.service.mapper.HistoriaClinicaMapper;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class HistoriaClinicaService {

    private final HistoriaClinicaRepo historiaClinicaRepo;
    private final HistoriaClinicaMapper historiaClinicaMapper;
    private final PacienteService pacienteService;

    public HistoriaClinicaRes obtenerHistorial(Long pacienteId) {
        Paciente paciente = pacienteService.encontrarPacientePorId(pacienteId);
        return historiaClinicaMapper.toHistoriaClinicaRes(paciente.getHistoriaClinica());
    }

    public HistoriaClinica obtenerHistoriaClinica(Long pacienteId) {
        Paciente paciente = pacienteService.encontrarPacientePorId(pacienteId);
        return paciente.getHistoriaClinica();
    }

    public void agregarRegistroMedico(Long pacienteId, RegistroMedico registroMedico) {
        HistoriaClinica h = obtenerHistoriaClinica(pacienteId);
        h.getRegistroMedicos().add(registroMedico);
        historiaClinicaRepo.save(h);
    }
/*
    public List<HistoriaClinicaRes> obtenerTodosLosHistoriales(){
        return historiaClinicaRepo.findAll().stream().map(historiaClinicaMapper::toHistoriaClinicaRes).toList();
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

 */

}
