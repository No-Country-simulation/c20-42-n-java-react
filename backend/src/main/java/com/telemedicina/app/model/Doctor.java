package com.telemedicina.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
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
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private List<Paciente> pacientes = new ArrayList<>();

}
