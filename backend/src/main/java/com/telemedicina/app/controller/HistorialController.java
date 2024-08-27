package com.telemedicina.app.controller;

import com.telemedicina.app.model.HistorialPaciente;
import com.telemedicina.app.service.HistorialPacienteService;
import jakarta.websocket.server.PathParam;
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
@RequestMapping("/historial")
@RestController
@RequiredArgsConstructor
public class HistorialController {

    private final HistorialPacienteService historialPacienteService;

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public HistorialPaciente obtenerHistorial(@PathVariable("id") Long id) {
        return historialPacienteService.obtenerHistorial(id);
    }

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<HistorialPaciente> obtenerTodoLosHistoriales() {
        return historialPacienteService.obtenerTodosLosHistoriales();
    }


    //Endpoint para crear un historial
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public String crearHistorial(@RequestBody HistorialPaciente historialPaciente) {
        historialPacienteService.crearHistorial(historialPaciente);
        return "Historial creado exitosamente!";
    }

    //Endpoint para editar un historial
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public String editarHistorial(@PathVariable("id") Long id, @RequestBody HistorialPaciente historialPaciente) {
        historialPacienteService.editarHistorial(historialPaciente);
        return "Historial editado correctamente!";
    }

    //Endpoint para eliminar un historial
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String eliminarHistorial(@PathVariable("id") Long id) {
        historialPacienteService.eliminarHistorial(id);
        return "Historial eliminado correctamente!";
    }
}
