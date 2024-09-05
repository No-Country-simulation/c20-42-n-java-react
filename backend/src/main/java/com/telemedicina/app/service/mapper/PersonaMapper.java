package com.telemedicina.app.service.mapper;

import com.telemedicina.app.dto.request.PersonaReq;
import com.telemedicina.app.model.Persona;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PersonaMapper {
    Persona toPersona(PersonaReq p){
        return Persona.builder()
                .nombre(p.getNombre())
                .edad(p.getEdad())
                .telefono(p.getTelefono())
                .dni(p.getDni())
                .email(p.getEmail())
                .build();
    }
}
