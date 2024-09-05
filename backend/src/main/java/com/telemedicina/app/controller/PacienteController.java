package com.telemedicina.app.controller;

import com.telemedicina.app.dto.request.PacienteReq;
import com.telemedicina.app.dto.response.PacienteRes;
import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.service.PacienteService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@RequestMapping("/pacientes")
public class PacienteController {
    private final PacienteService pacienteService;


    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<PacienteRes> obtenerPacientes() {
        return pacienteService.obtenerPacientes();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public PacienteRes crearPaciente(@RequestBody PacienteReq paciente) {
        return pacienteService.agregarPaciente(paciente);
    }

    @PutMapping("/{id}")
    public PacienteRes editarPaciente(@PathVariable Long id, @RequestBody PacienteReq paciente) {
        return pacienteService.editarPaciente(id, paciente);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String eliminarPaciente(@PathVariable Long id) {
        pacienteService.eliminarPaciente(id);
        return "Paciente eliminado exitosamente!";
    }

    @GetMapping("/{id}")
    public Paciente obtenerPaciente(@PathVariable("id") Long id) {
        return pacienteService.encontrarPaciente(id);
    }

}
