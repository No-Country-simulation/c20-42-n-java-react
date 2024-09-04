package com.telemedicina.app.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Builder
@AllArgsConstructor
public class Paciente{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    private Persona persona;
    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
    private HistoriaClinica historiaClinica;

}
