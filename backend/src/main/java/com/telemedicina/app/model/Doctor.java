package com.telemedicina.app.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Doctor{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(orphanRemoval = true, cascade = CascadeType.ALL)
    private Persona persona;
    private String licencia;
    private double honorarios;
    @ManyToOne
    private Especialidad especialidad;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private List<Paciente> pacientes = new ArrayList<>();

}
