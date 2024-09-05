
package com.telemedicina.app.repository;

import com.telemedicina.app.model.Especialidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author oliver
 */
@Repository
public interface EspecialidadRepo extends JpaRepository<Especialidad, Long> {
    
}
