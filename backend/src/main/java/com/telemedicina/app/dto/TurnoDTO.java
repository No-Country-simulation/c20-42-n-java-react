package com.telemedicina.app.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author oliver
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TurnoDTO {
    @JsonIgnore
    private Long id;
    @NotNull(message = "El campo doctorId no debe estar vacío")
    private Long doctorId;
    @NotNull(message = "El campo pacienteId no debe estar vacío")
    private Long pacienteId;
    @NotNull(message = "El campo fechaHora no debe estar vacío")
    @Future(message = "La fecha y hora del turno debe ser futura")
    private LocalDateTime fechaHora;
    
}
