package com.telemedicina.app.repository;

import com.telemedicina.app.model.Turno;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author oliver
 */

@Repository
public interface TurnoRepository extends JpaRepository<Turno, Long>{
    
    @Query(value = "SELECT t.* "
            + "FROM turno t "
            + "WHERE t.doctor_id = :doctorId", nativeQuery = true)
    public List<Turno> findByDoctor(@Param("doctorId") Long doctorId);
    
    @Query(value = "SELECT t.* "
            + "FROM turno t "
            + "WHERE t.paciente_id = :pacienteId", nativeQuery = true)
    public List<Turno> findByPaciente(@Param("pacienteId") Long pacienteId);
}
