package com.telemedicina.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author oliver
 */

@Getter
@Setter
@Entity
public class HistorialPaciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long id_historial;
    private String descripcion;
    
    
    @Transient
    private PdfFile pdfFile;
    @Transient
    private Paciente paciente;

    public HistorialPaciente() {
    }

    public HistorialPaciente(Long id_historial, String descripcion, PdfFile pdfFile, Paciente paciente) {
        this.id_historial = id_historial;
        this.descripcion = descripcion;
        this.pdfFile = pdfFile;
        this.paciente = paciente;
    }
    
        
    
}
