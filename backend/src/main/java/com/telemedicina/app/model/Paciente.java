package com.telemedicina.app.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Paciente{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(cascade = CascadeType.ALL)
    private Persona persona;
    @OneToOne(orphanRemoval = true)
    private HistoriaClinica historiaClinica;

}
