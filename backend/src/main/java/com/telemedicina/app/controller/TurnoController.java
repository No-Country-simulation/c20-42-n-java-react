package com.telemedicina.app.controller;

import com.telemedicina.app.dto.TurnoDTO;
import com.telemedicina.app.model.Turno;
import com.telemedicina.app.service.TurnoService;
import jakarta.validation.Valid;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
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
@RequestMapping("/turnos")
public class TurnoController {
    private final TurnoService turnoService;

    @PostMapping
    public TurnoDTO agendarTurno(@RequestBody @Valid TurnoDTO turnoDTO)
            throws GeneralSecurityException, IOException {
        return turnoService.agendarTurno(turnoDTO);
    }

    @DeleteMapping("/{idTurno}")
    public String eliminarTurno(@PathVariable Long idTurno)
            throws GeneralSecurityException, IOException {

        turnoService.eliminarTurno(idTurno);
        return "Turno eliminado correctamente!";
    }

    @PutMapping("/{idTurno}")
    public TurnoDTO editarTurno(@PathVariable Long idTurno, @RequestBody @Valid TurnoDTO turnoDTO)
            throws GeneralSecurityException, IOException {
        return turnoService.editarTurno(idTurno, turnoDTO);
    }
    
    @GetMapping("/doctores/{idDoctor}")
    @ResponseStatus(HttpStatus.OK)
    public List<TurnoDTO> obtenerTurnoPorDoctor(@PathVariable Long idDoctor){
        return turnoService.obtenerTurnoPorDoctor(idDoctor);
    }
    
    @GetMapping("/pacientes/{idPaciente}")
    @ResponseStatus(HttpStatus.OK)
    public List<TurnoDTO> obtenerTurnoPorPaciente(@PathVariable Long idPaciente){
        return turnoService.obtenerTurnoPorPaciente(idPaciente);
    }
    
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<TurnoDTO> obtenerTurnos(){
        return turnoService.obtenerTurnos();
    }
    
    
 
}
