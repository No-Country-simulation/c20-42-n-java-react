package com.telemedicina.app.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author oliver
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TurnoDTO {
    private Long id;
    private Long doctorId;
    private Long pacienteId;
    private LocalDateTime fechaHora;
    
}
