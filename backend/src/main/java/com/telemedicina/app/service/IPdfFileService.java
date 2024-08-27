package com.telemedicina.app.service;

import com.telemedicina.app.model.PdfFile;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author olive
 */


public interface IPdfFileService {
    
    //Metodo para guardar pdf
    public PdfFile guardarPdf(MultipartFile pdf);
    
    //Metodo para eliminar pdf
    public PdfFile obtenerPdf(Long id);
    
    //Metodo para eliminar Pdf
    public void eliminarPdf(Long id);
}
