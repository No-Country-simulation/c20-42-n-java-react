
package com.telemedicina.app.controller;

import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.service.DoctorService;
import jakarta.websocket.server.PathParam;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping("/doctores")
public class DoctorController {
    
    private final DoctorService doctorService;
    
    @GetMapping //Funcionando bien
    @ResponseStatus(HttpStatus.OK)
    public List<Doctor> obtenerDoctores(){
        //Listamos los doctores
        return doctorService.obtenerDoctores();
    }
    
    @PostMapping("/crear")//Funcionando Bien
    @ResponseStatus(HttpStatus.CREATED)
    public String crearDoctor(@RequestBody Doctor doctor){
        doctorService.agregarDoctor(doctor);
        // retornamos al doctor creado
        return "Doctor creado exitosamente";
    }
    
    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public String editarDoctor(@RequestBody Doctor doctor){
        doctorService.editarDoctor(doctor);
        // retornamos al doctor editado
        return "Doctor editado exitosamente!";
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String eliminarDoctor(@PathParam("id") Long id){
        doctorService.eliminarDoctor(id);
        // retornamos un mensaje de eliminado
        return "Doctor eliminado correctamente";
    }
    
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Doctor obtenerDoctor(@PathParam("id") Long id){
        //Encontramos el doctor
        return doctorService.encontrarDoctor(id);
    }
    
    
}
