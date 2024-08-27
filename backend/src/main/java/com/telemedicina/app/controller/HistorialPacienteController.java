package com.telemedicina.app.controller;

import com.telemedicina.app.model.HistorialPaciente;
import com.telemedicina.app.service.IHistorialPacienteService;
import jakarta.websocket.server.PathParam;
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
public class HistorialPacienteController {

    @Autowired
    private IHistorialPacienteService historialPaSer;

    //EndPoint para obtener el historial del paciente
    @GetMapping("/historial/{id}")
    public HistorialPaciente obtenerHistorial(@PathParam("id") Long id) {
        return historialPaSer.obtenerHistorial(id);
    }

    //Endpoint para crear un historial
    @PostMapping("/historial/crear")
    public String crearHistorial(@RequestBody HistorialPaciente historialPaciente) {
        historialPaSer.crearHistorial(historialPaciente);
        return "Historial creado exitosamente!";
    }

    //Endpoint para editar un historial
    @PutMapping("/historial/editar")
    public String editarHistorial(@RequestBody HistorialPaciente historialPaciente) {
        historialPaSer.editarHistorial(historialPaciente);
        return "Historial editado correctamente!";
    }

    //Endpoint para eliminar un historial
    @DeleteMapping("historial/eliminar/{id}")
    public String eliminarHistorial(@PathParam("id") Long id) {
        historialPaSer.eliminarHistorial(id);
        return "Historial eliminado correctamente!";
    }
}
