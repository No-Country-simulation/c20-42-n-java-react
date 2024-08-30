package com.telemedicina.app.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;
import java.util.List;
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
@Entity
public class HistoriaClinica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(orphanRemoval = true, cascade = CascadeType.ALL)
    @JoinColumn
    private List<RegistroMedico> registroMedicos;
    @OneToOne(cascade = CascadeType.ALL)
    private Paciente paciente;
}
