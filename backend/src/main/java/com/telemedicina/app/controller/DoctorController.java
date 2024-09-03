package com.telemedicina.app.controller;

import com.telemedicina.app.dto.request.DoctorReq;
import com.telemedicina.app.dto.response.DoctorRes;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.service.DoctorService;
import jakarta.websocket.server.PathParam;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/doctores")
public class DoctorController {
    private final DoctorService doctorService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DoctorRes> obtenerDoctores(){
        return doctorService.obtenerDoctores();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public DoctorRes crearDoctor(@RequestBody @Validated DoctorReq doctor){
        return doctorService.agregarDoctor(doctor);
    }
    
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public DoctorRes editarDoctor(@PathVariable Long id, @RequestBody DoctorReq doctor){
        return doctorService.editarDoctor(id, doctor);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String eliminarDoctor(@PathVariable("id") Long id){
        doctorService.eliminarDoctor(id);
        return "Doctor eliminado correctamente";
    }
    
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public DoctorRes obtenerDoctor(@PathVariable("id") Long id){
        return doctorService.encontrarDoctor(id);
    }
    
    
}
