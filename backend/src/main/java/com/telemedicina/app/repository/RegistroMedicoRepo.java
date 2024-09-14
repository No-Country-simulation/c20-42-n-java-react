package com.telemedicina.app.repository;

import com.telemedicina.app.model.RegistroMedico;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RegistroMedicoRepo extends JpaRepository<RegistroMedico, Long> {

  @Query(value = "SELECT r.*, h.id as historia_clinica_id FROM registro_medico r " +
      "LEFT JOIN historia_clinica h ON r.historia_clinica_id = h.id " +
      "WHERE h.paciente_id = :pacienteId", nativeQuery = true)
  List<RegistroMedico> findRegistroMedicoByPaciente(@Param("pacienteId") Long pacienteId);

}
