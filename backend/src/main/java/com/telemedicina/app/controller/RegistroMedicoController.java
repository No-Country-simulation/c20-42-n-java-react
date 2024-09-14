package com.telemedicina.app.controller;

import com.telemedicina.app.dto.request.RegistroMedicoReq;
import com.telemedicina.app.dto.response.RegistroMedicoRes;
import com.telemedicina.app.model.RegistroMedico;
import com.telemedicina.app.service.RegistroMedicoService;
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

@RestController
@RequestMapping("/pacientes/{pacienteId}/historia-clinica/registros-medicos")
@RequiredArgsConstructor
public class RegistroMedicoController {
  private final RegistroMedicoService registroMedicoService;

  @GetMapping
  @ResponseStatus(HttpStatus.OK)
  public List<RegistroMedico> obtenerRegistrosMedicos(@PathVariable long pacienteId) {
      return registroMedicoService.obtenerRegistrosMedicos(pacienteId);
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public RegistroMedicoRes obtenerRegistroMedico(@PathVariable long pacienteId, @PathVariable long id) {
    return registroMedicoService.obtenerRegistroMedico(pacienteId,id);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public RegistroMedicoRes crearRegistroMedico(@PathVariable long pacienteId, @RequestBody
  RegistroMedicoReq registroMedico) {
    return registroMedicoService.guardarRegistroMedico(pacienteId, registroMedico);
  }

  @PutMapping("/{id}")
  @ResponseStatus(HttpStatus.ACCEPTED)
  public RegistroMedicoRes modificarRegistroMedico(@PathVariable long pacienteId, @PathVariable long id, @RequestBody RegistroMedicoReq registroMedico){
    return registroMedicoService.modificarRegistroMedico(pacienteId,id,registroMedico);
  }
  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.ACCEPTED)
  public void eliminarRegistroMedico(@PathVariable long id) {
    registroMedicoService.eliminarRegistroMedico(id);
  }


}
