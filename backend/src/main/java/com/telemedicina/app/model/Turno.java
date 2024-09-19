package com.telemedicina.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author olive
 */
@NoArgsConstructor
@Data
@Builder
@AllArgsConstructor
@Entity
public class Turno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private Doctor doctor;
    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private Paciente paciente;
    private LocalDateTime fechaHora;
    private String eventId;
    @Enumerated
    private EstadoTurno estadoTurno;
}
