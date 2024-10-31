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
                .apellido(p.getApellido())
                .fdn(p.getFdn())
                .sexo(p.getSexo())
                .telefono(p.getTelefono())
                .dni(p.getDni())
                .email(p.getEmail())
                .fotoUrl(p.getFotoUrl())
                .build();
    }
}
