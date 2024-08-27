package com.telemedicina.app.repository;

import com.telemedicina.app.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author oliver
 */

@Repository
public interface PacienteRepo extends JpaRepository<Paciente, Long> {
    
}
