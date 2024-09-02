package com.telemedicina.app.controller;

import com.telemedicina.app.model.Especialidad;
import com.telemedicina.app.service.EspecialidadService;
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

@RestController
@RequiredArgsConstructor
@RequestMapping("/especialidades")
public class EspecialidadController {
    
    private final EspecialidadService especialidadService;
    
    @GetMapping("/especialidades")
    @ResponseStatus(HttpStatus.OK)
    public List<Especialidad> obtenerEspecialidad(){
        return especialidadService.obtenerEspecialidades();
    }
    
    @PostMapping("/crear")
    @ResponseStatus(HttpStatus.CREATED)
    public String crearEspecialidad(@RequestBody Especialidad especialidad){
        especialidadService.crearEspecialidad(especialidad);
        return "Especialidad creada correctamente";
    }
    
    @PutMapping("/editar")
    @ResponseStatus(HttpStatus.OK)
    public String editarEspecialidad(@RequestBody Especialidad especialidad){
        especialidadService.editarEspecialidad(especialidad);
        return "Especialidad modificada correctamente";
    }
    
    @DeleteMapping("/eliminar/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String eliminarEspecialidad(@PathVariable Long id){
        especialidadService.eliminarEspecialidad(id);
        return "Especialidad eliminada correctamente";
    }
    
    @GetMapping("/encontrar/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Especialidad obtenerEspecialidad(@PathVariable Long id){
        return especialidadService.encontrarEspecialidad(id);
    }
}
