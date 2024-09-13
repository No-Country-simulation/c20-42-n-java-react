package com.telemedicina.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author olive
 */
@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
public class Turno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_turno;

    @OneToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private Doctor doctor;

    @OneToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    private Paciente paciente;

    @NotBlank(message = "Debes seleccionar una fecha y hora")
    @NotNull(message = "No hay fecha y hora")
    private LocalDateTime fechaHora;

    private String eventId;

}
