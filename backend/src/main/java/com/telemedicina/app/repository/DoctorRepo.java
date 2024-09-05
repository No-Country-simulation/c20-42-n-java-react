package com.telemedicina.app.repository;

import com.telemedicina.app.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Long> {
    @Query(value = "SELECT d "
            + "FROM Doctor d "
            + "WHERE d.especialidad.id = :especialidadId ")
    public List<Doctor> findByEspecialidad(Long especialidadId);
}
