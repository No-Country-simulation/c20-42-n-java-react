package com.telemedicina.app.service;

import com.telemedicina.app.dto.request.PacienteReq;
import com.telemedicina.app.dto.response.PacienteRes;
import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.repository.PacienteRepo;
import com.telemedicina.app.service.mapper.PacienteMapper;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PacienteService{
    private final PacienteMapper pacienteMapper;
    private final PacienteRepo pacienteRepository;

    public List<PacienteRes> obtenerPacientes() {
      return pacienteRepository.findAll().stream().map(pacienteMapper::toPacienteRes).toList();
    }

    public PacienteRes agregarPaciente(PacienteReq paciente) {
        return pacienteMapper.toPacienteRes(pacienteRepository.save(pacienteMapper.toPaciente(paciente)));
    }

    public PacienteRes editarPaciente(Long id, PacienteReq paciente) {
        pacienteRepository.findById(id).orElseThrow(()-> new EntityNotFoundException("Paciente con id " + id + " no encontrado"));
        Paciente pacienteActual = pacienteMapper.toPaciente(paciente);
        pacienteActual.setId(id);
        return pacienteMapper.toPacienteRes(pacienteRepository.save(pacienteActual));
    }

    public void eliminarPaciente(Long id) {
        pacienteRepository.deleteById(id);
    }

    public Paciente encontrarPaciente(Long id) {
      return pacienteRepository.findById(id).orElse(null);
    }
    
    
}
