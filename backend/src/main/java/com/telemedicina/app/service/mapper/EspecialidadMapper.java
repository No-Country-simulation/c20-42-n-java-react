package com.telemedicina.app.service.mapper;

import com.telemedicina.app.dto.request.EspecialidadReq;
import com.telemedicina.app.model.Especialidad;
import org.springframework.stereotype.Service;

@Service
public class EspecialidadMapper {
    public Especialidad toEspecialidad(EspecialidadReq e){
        return Especialidad.builder()
                .nombre(e.getNombre())
                .descripcion(e.getDescripcion())
                .fotoUrl(e.getFotoUrl())
                .build();
    }
}
