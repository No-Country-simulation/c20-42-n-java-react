package com.telemedicina.app.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


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
    @ManyToOne(cascade = CascadeType.PERSIST)
    private Especialidad especialidad;
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Paciente> pacientes = new ArrayList<>();

}
