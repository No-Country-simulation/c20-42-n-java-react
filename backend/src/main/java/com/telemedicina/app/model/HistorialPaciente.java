package com.telemedicina.app.model;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author oliver
 */

@Getter
@Setter
public class HistorialPaciente {
    
    private Long id_historial;
    private String descripcion;
    
    
    
    private PdfFile pdfFile;
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
