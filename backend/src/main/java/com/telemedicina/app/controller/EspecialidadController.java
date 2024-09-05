package com.telemedicina.app.controller;

import com.telemedicina.app.dto.request.EspecialidadReq;
import com.telemedicina.app.model.Especialidad;
import com.telemedicina.app.service.EspecialidadService;
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


@RestController
@RequiredArgsConstructor
@RequestMapping("/especialidades")
public class EspecialidadController {
    
    private final EspecialidadService especialidadService;
    
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Especialidad> obtenerEspecialidad(){
        return especialidadService.obtenerEspecialidades();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Especialidad crearEspecialidad(@RequestBody @Validated EspecialidadReq especialidad){
        especialidadService.crearEspecialidad(especialidad);
        return especialidadService.crearEspecialidad(especialidad);
    }
    
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Especialidad editarEspecialidad(@PathVariable Long id, @RequestBody EspecialidadReq especialidad){
        return especialidadService.editarEspecialidad(id, especialidad);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String eliminarEspecialidad(@PathVariable Long id){
        especialidadService.eliminarEspecialidad(id);
        return "Especialidad eliminada correctamente";
    }
    
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Especialidad obtenerEspecialidad(@PathVariable Long id){
        return especialidadService.encontrarEspecialidad(id);
    }
}
