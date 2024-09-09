package com.telemedicina.app.repository;

import com.telemedicina.app.model.HistoriaClinica;
import com.telemedicina.app.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HistoriaClinicaRepo extends JpaRepository<HistoriaClinica, Long> {
}
