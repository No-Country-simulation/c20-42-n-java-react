package com.telemedicina.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.java.Log;

/**
 *
 * @author olive
 */

@Getter
@Setter
@Entity
public class PdfFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fileName;
    private byte[] file;
    private LocalDateTime fechaDeSubido;
    
}
