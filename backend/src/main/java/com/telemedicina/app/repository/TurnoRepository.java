package com.telemedicina.app.repository;

import com.telemedicina.app.model.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author oliver
 */

@Repository
public interface TurnoRepository extends JpaRepository<Turno, Long>{
    
}
