package com.telemedicina.app.controller;

import com.telemedicina.app.dto.request.DoctorReq;
import com.telemedicina.app.dto.response.DoctorRes;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.service.DoctorService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import net.kaczmarzyk.spring.data.jpa.domain.Equal;
import net.kaczmarzyk.spring.data.jpa.domain.In;
import net.kaczmarzyk.spring.data.jpa.domain.Like;
import net.kaczmarzyk.spring.data.jpa.web.annotation.And;
import net.kaczmarzyk.spring.data.jpa.web.annotation.Spec;
import org.springframework.data.jpa.domain.Specification;
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

@RequiredArgsConstructor
@RestController
@RequestMapping("/doctores")
public class DoctorController {
    private final DoctorService doctorService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<DoctorRes> obtenerDoctores(
            @And({
                @Spec(path = "especialidad.nombre", params = "especialidad", spec = Equal.class),
                @Spec(path = "persona.nombre", params = "nombre", spec = Like.class),
            })
            Specification<Doctor> doctorSpec
    ){
        return doctorService.obtenerDoctores(doctorSpec);
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
