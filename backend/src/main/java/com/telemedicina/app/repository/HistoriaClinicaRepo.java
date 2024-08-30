package com.telemedicina.app.repository;

import com.telemedicina.app.model.HistoriaClinica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author oliver
 */

@Repository
public interface HistoriaClinicaRepo extends JpaRepository<HistoriaClinica, Long> {
    
}
