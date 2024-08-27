package com.telemedicina.app.controller;

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

/**
 *
 * @author oliver
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/pacientes")
public class PacienteController {
    private final PacienteService pacienteService;


    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<Paciente> obtenerPacientes() {
        return pacienteService.obtenerPacientes();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public String crearPaciente(@RequestBody Paciente paciente) {
        pacienteService.agregarPaciente(paciente);
        //TODO retornar al paciente creado
        return "Paciente creado exitosamente!";
    }

    @PutMapping("/{id}")
    public String editarPaciente(@PathVariable Long id, @RequestBody Paciente paciente) {
        pacienteService.editarPaciente(paciente);
        //TODO retornar al paciente modificado
        return "Paciente editado exitosamente!";
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String eliminarPaciente(@PathVariable Long id) {
        pacienteService.eliminarPaciente(id);
        return "Paciente eliminado exitosamente!";
    }

    //Endpoint para obetener un paciente por id
    @GetMapping("/{id}")
    public Paciente obtenerPaciente(@PathVariable("id") Long id) {
        return pacienteService.encontrarPaciente(id);
    }

}
