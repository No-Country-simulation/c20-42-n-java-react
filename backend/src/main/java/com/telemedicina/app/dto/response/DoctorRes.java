package com.telemedicina.app.dto.response;

import com.telemedicina.app.dto.request.EspecialidadReq;
import com.telemedicina.app.model.Persona;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DoctorRes {
    private Long id;
    private Persona persona;
    private String licencia;
    private double honorarios;
    private EspecialidadReq especialidad;
}
