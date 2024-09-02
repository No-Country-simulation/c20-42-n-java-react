package com.telemedicina.app.repository;

import com.telemedicina.app.model.Doctor;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Long>{
    
    
    @Query(value = "SELECT d.* "
            + "FROM doctor d "
            + "WHERE d.especialidad_id_especialidad = :especialidadId "
            , nativeQuery = true)
    public List<Doctor> findByEspecialidad(@Param("especialidadId") Long especialidadId);
}
