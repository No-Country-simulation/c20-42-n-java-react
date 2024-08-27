package com.telemedicina.app.service;

import com.telemedicina.app.model.PdfFile;
import com.telemedicina.app.repository.PdfFileRepo;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author olive
 */

@Service
public class PdfFileService implements IPdfFileService {
    
    @Autowired
    private PdfFileRepo pdfRepository;

    //Metodo para guardar el pdf
    @Override
    public PdfFile guardarPdf(MultipartFile pdf) {
        PdfFile pdfFile = new PdfFile();
        
        //Aca obtenemos el nombre real del archivo para setearlo en el atributo fileName
        pdfFile.setFileName(pdf.getOriginalFilename());
        
        //Hacemos un try catch en caso el archivo presente algun error al momento
        //de subirlo a la base de datos
        try {
            pdfFile.setFile(pdf.getBytes());
            pdfFile.setFechaDeSubido(LocalDateTime.now()); //Agregamos la fecha en que se subio el pdf
        } catch (IOException ex) {
            Logger.getLogger(PdfFileService.class.getName())
                    .log(Level.SEVERE, null, ex);
            System.out.println("Message: " + ex.getMessage());
            System.out.println("Causa: " + ex.getCause());
        }
        return pdfRepository.save(pdfFile);
    }

    //Metodo para obtener el pdf
    @Override
    public PdfFile obtenerPdf(Long id) {
        return pdfRepository.findById(id).orElse(null);
    }

    //Metodo para borrar el pdf
    @Override
    public void eliminarPdf(Long id) {
        pdfRepository.deleteById(id);
    }
    
    
}
