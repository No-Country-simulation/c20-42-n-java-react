package com.telemedicina.app.service;

import com.telemedicina.app.dto.TurnoDTO;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.model.Turno;
import com.telemedicina.app.repository.TurnoRepository;
import jakarta.persistence.EntityNotFoundException;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

/**
 *
 * @author olive
 */
@Service
@AllArgsConstructor
public class TurnoService {

    private final GoogleCalendarService googleCalendarService;
    private final TurnoRepository turnoRepository;
    private final DoctorService doctorService;
    private final PacienteService pacienteService;

    public TurnoDTO agendarTurno(TurnoDTO turnoDTO) throws GeneralSecurityException, IOException {
        Turno turno = toTurno(turnoDTO);

        //Asignamos el paciente a la lista del doctor
        if (!turno.getDoctor().getPacientes().contains(turno.getPaciente())) {
            turno.getDoctor().getPacientes().add(turno.getPaciente());
        }

        //Agregamos el evento pasandole el objeto turno
        googleCalendarService.agregarEvento(turno);

        turno = turnoRepository.save(turno);

        turnoDTO.setId(turno.getId());
        return turnoDTO;
    }

    //Aca eliminamos el turno
    public void eliminarTurno(Long id) throws GeneralSecurityException, IOException {
        Turno turno = turnoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Turno no encontrado"));

        //Eliminamos el evento en el cloud de google
        googleCalendarService.eliminarEvento(turno.getEventId());

        //Eliminados el evento de la bd
        turnoRepository.deleteById(id);
    }

    //Aca editamos el turno
    public TurnoDTO editarTurno(Long id, TurnoDTO turnoDTO) throws GeneralSecurityException, IOException {
        Turno turno = turnoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se encontro el turno que quieres editar"));
        Doctor doctor = doctorService.findDoctor(turnoDTO.getDoctorId());
        Paciente paciente = pacienteService.findPaciente(turnoDTO.getPacienteId());

        turno.setDoctor(doctor);
        turno.setPaciente(paciente);
        turno.setFechaHora(turnoDTO.getFechaHora());

        //Actualizamos el evento
        turnoRepository.save(turno);
        turnoDTO.setId(turno.getId());

        //Actualizamos el evento en la cloud de google
        googleCalendarService.modificarEvento(turno.getEventId(), turno);
        return turnoDTO;
    }

    public List<TurnoDTO> obtenerTurnos() {
      return turnoRepository.findAll().stream().map(this::toTurnoDTO).toList();
    }

    public List<TurnoDTO> obtenerTurnoPorDoctor(Long idDoctor) {
        doctorService.findDoctor(idDoctor);
        return turnoRepository.findAllByDoctor_Id(idDoctor).stream().map(this::toTurnoDTO).toList();
    }

    public List<TurnoDTO> obtenerTurnoPorPaciente(Long id) {
        pacienteService.findPaciente(id);
        return  turnoRepository.findAllByPaciente_Id(id).stream().map(this::toTurnoDTO).toList();
    }

    public Turno toTurno(TurnoDTO turnoDTO) {
        Doctor doctor = doctorService.findDoctor(turnoDTO.getDoctorId());
        Paciente paciente = pacienteService.findPaciente(turnoDTO.getPacienteId());
        return Turno.builder()
            .doctor(doctor)
            .paciente(paciente)
            .fechaHora(turnoDTO.getFechaHora())
            .build();
    }

    public TurnoDTO toTurnoDTO(Turno turno){
        return TurnoDTO.builder()
            .doctorId(turno.getDoctor().getId())
            .pacienteId(turno.getPaciente().getId())
            .fechaHora(turno.getFechaHora())
            .build();
    }

}
