package com.telemedicina.app.repository;

import com.telemedicina.app.model.HistorialPaciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author oliver
 */

@Repository
public interface IHistorialPacienteRepository extends JpaRepository<HistorialPaciente, Long> {
    
}
