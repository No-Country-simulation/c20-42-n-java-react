package com.telemedicina.app.model;

import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author olive
 */

@Getter
@Setter
public class PdfFile {
    
    private Long id;
    private String fileName;
    private byte[] file;
    private LocalDateTime fechaDeSubido;
    
}
