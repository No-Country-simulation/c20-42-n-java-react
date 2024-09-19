package com.telemedicina.app.service;

import com.telemedicina.app.dto.request.PacienteReq;
import com.telemedicina.app.dto.response.PacienteRes;
import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.repository.PacienteRepo;
import com.telemedicina.app.service.mapper.PacienteMapper;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PacienteService{
    private final PacienteMapper pacienteMapper;
    private final PacienteRepo pacienteRepository;

  @Parameters({
      @Parameter(name = "especialidad", description = "ID de la especialidad", required = false),
      @Parameter(name = "nombre", description = "Nombre del doctor", required = false)
  })
    public List<PacienteRes> obtenerPacientes() {
      return pacienteRepository.findAll().stream().map(pacienteMapper::toPacienteRes).toList();
    }

    public PacienteRes agregarPaciente(PacienteReq paciente) {
        return pacienteMapper.toPacienteRes(pacienteRepository.save(pacienteMapper.toPaciente(paciente)));
    }

    public PacienteRes editarPaciente(Long id, PacienteReq pacienteReq) {
       Paciente paciente = pacienteMapper.toPaciente(pacienteReq);
       paciente.setId(id);
        return pacienteMapper.toPacienteRes(pacienteRepository.save(paciente));
    }

    public void eliminarPaciente(Long id) {
        findPaciente(id);
        pacienteRepository.deleteById(id);
    }

    public PacienteRes encontrarPaciente(Long id) {
      return pacienteMapper.toPacienteRes(pacienteRepository.findById(id).orElseThrow(()-> new EntityNotFoundException("Paciente con id " + id + " no encontrado")));
    }

    public Paciente findPaciente(Long id) {
        return pacienteRepository.findById(id).orElseThrow(()-> new EntityNotFoundException("Paciente no encontrado"));
    }
    
    
}
