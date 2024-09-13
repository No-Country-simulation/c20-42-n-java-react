package com.telemedicina.app.controller;

import com.telemedicina.app.dto.TurnoDTO;
import com.telemedicina.app.model.Turno;
import com.telemedicina.app.service.TurnoService;
import java.io.IOException;
import java.security.GeneralSecurityException;
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
 * @author olive
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/turno")
public class TurnoController {

    private final TurnoService turnoService;

    @PostMapping("/crear")
    public String agendarTurno(@RequestBody TurnoDTO turnoDTO)
            throws GeneralSecurityException, IOException {

        turnoService.agendarTurno(turnoDTO);

        return "Turno agendado exitosamente";
    }

    @DeleteMapping("/eliminar/{idTurno}")
    public String eliminarTurno(@PathVariable Long idTurno)
            throws GeneralSecurityException, IOException {

        turnoService.eliminarTurno(idTurno);

        return "Turno eliminado correctamente!";

    }

    @PutMapping("/editar")
    public String editarTurno(@RequestBody TurnoDTO turnoDTO)
            throws GeneralSecurityException, IOException {
        turnoService.editarTurno(turnoDTO);

        return "Turno editado correctamente";
    }
    
    @GetMapping("/doctor/{idDoctor}")
    @ResponseStatus(HttpStatus.OK)
    public List<Turno> obtenerTurnoPorDoctor(@PathVariable Long idDoctor){
        return turnoService.obtenerTurnoPorDoctor(idDoctor);
    }
    
    @GetMapping("/paciente/{idPaciente}")
    @ResponseStatus(HttpStatus.OK)
    public List<Turno> obtenerTurnoPorPaciente(@PathVariable Long idPaciente){
        return turnoService.obtenerTurnoPorPaciente(idPaciente);
    }
    
    @GetMapping("/todos")
    @ResponseStatus(HttpStatus.OK)
    public List<Turno> obtenerTurnos(){
        return turnoService.obtenerTurnos();
    }
    
    
 
}
