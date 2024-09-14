package com.telemedicina.app.repository;

import com.telemedicina.app.model.Doctor;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Long>, JpaSpecificationExecutor<Doctor> {
    @Query(value = "SELECT d "
            + "FROM Doctor d "
            + "WHERE d.especialidad.id = :especialidadId ")
    public List<Doctor> findByEspecialidad(Long especialidadId);
}
