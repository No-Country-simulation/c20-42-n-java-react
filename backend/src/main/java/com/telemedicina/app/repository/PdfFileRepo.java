package com.telemedicina.app.repository;

import com.telemedicina.app.model.PdfFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author oliver
 */

@Repository
public interface PdfFileRepo extends JpaRepository<PdfFile, Long> {
    
}
