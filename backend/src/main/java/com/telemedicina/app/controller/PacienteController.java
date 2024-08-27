package com.telemedicina.app.controller;

import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.service.IPacienteService;
import jakarta.websocket.server.PathParam;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author oliver
 */
@RestController
public class PacienteController {

    @Autowired
    private IPacienteService pacienteService;

    //Endpoint para obtener todos los pacientes
    @GetMapping("/pacientes")
    public List<Paciente> obtenerPacientes() {
        return pacienteService.obtenerPacientes();
    }

    //Endpoint para crear un paciente
    @PutMapping("/paciente/crearusuario")
    public String crearPaciente(@RequestBody Paciente paciente) {
        pacienteService.agregarPaciente(paciente);

        return "Paciente creado exitosamente!";
    }

    //Endpoint para editar un paciente
    @PostMapping("/paciente/editarusuario")
    public String editarPaciente(@RequestBody Paciente paciente) {
        pacienteService.editarPaciente(paciente);
        return "Paciente editado exitosamente!";
    }

    //Endpoint para eliminar un paciente
    @DeleteMapping("/paciente/{id}")
    public String eliminarPaciente(@PathParam("id") Long id) {
        pacienteService.eliminarPaciente(id);
        return "Paciente eliminado exitosamente!";
    }

    //Endpoint para obetener un paciente en especifico
    @GetMapping("/paciente/user/{id}")
    public Paciente obtenerPaciente(@PathParam("id") Long id) {
        return pacienteService.encontrarPaciente(id);
    }

}
