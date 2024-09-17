package com.telemedicina.app.controller;

import com.telemedicina.app.dto.request.TurnoReq;
import com.telemedicina.app.dto.response.TurnoRes;
import com.telemedicina.app.service.TurnoService;
import jakarta.validation.Valid;
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
@RequestMapping("/turnos")
public class TurnoController {
    private final TurnoService turnoService;

    @PostMapping
    public TurnoRes agendarTurno(@RequestBody @Valid TurnoReq turnoReq)
            throws GeneralSecurityException, IOException {
        return turnoService.agendarTurno(turnoReq);
    }

    @DeleteMapping("/{idTurno}")
    public String eliminarTurno(@PathVariable Long idTurno)
            throws GeneralSecurityException, IOException {

        turnoService.eliminarTurno(idTurno);
        return "Turno eliminado correctamente!";
    }

    @PutMapping("/{idTurno}")
    public TurnoRes editarTurno(@PathVariable Long idTurno, @RequestBody @Valid TurnoReq turnoReq)
            throws GeneralSecurityException, IOException {
        return turnoService.editarTurno(idTurno, turnoReq);
    }
    
    @GetMapping("/doctores/{idDoctor}")
    @ResponseStatus(HttpStatus.OK)
    public List<TurnoRes> obtenerTurnoPorDoctor(@PathVariable Long idDoctor){
        return turnoService.obtenerTurnoPorDoctor(idDoctor);
    }
    
    @GetMapping("/pacientes/{idPaciente}")
    @ResponseStatus(HttpStatus.OK)
    public List<TurnoRes> obtenerTurnoPorPaciente(@PathVariable Long idPaciente){
        return turnoService.obtenerTurnoPorPaciente(idPaciente);
    }
    
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<TurnoRes> obtenerTurnos(){
        return turnoService.obtenerTurnos();
    }
    
    
 
}
