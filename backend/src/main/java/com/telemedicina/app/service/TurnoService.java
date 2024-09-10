package com.telemedicina.app.service;

import com.telemedicina.app.dto.TurnoDTO;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.model.Turno;
import com.telemedicina.app.repository.TurnoRepository;
import jakarta.persistence.EntityNotFoundException;
import java.io.IOException;
import java.security.GeneralSecurityException;
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
        Turno turno = new Turno();

        Doctor doctor = doctorService.encontrarDoctor(turnoDTO.getDoctorId());
        Paciente paciente = pacienteService.encontrarPaciente(turnoDTO.getPacienteId());

        turno.setDoctor(doctor);
        turno.setPaciente(paciente);
        turno.setFechaHora(turnoDTO.getFechaHora());

        //Asignamos el paciente a la lista del doctor
        if (!doctor.getPaciente().contains(paciente)) {
            doctor.getPaciente().add(paciente);
        }

        //Agregamos el evento pasandole el objeto turno
        googleCalendarService.agregarEvento(turno);

        turno = turnoRepository.save(turno);

        turnoDTO.setId(turno.getId_turno());
        return turnoDTO;
    }

    //Aca eliminamos el turno
    public void eliminarTurno(Long idTurno) throws GeneralSecurityException, IOException {
        Turno turno = turnoRepository.findById(idTurno)
                .orElseThrow(() -> new EntityNotFoundException("Turno no encontrado"));

        //Eliminamos el evento en el cloud de google
        googleCalendarService.eliminarEvento(turno.getEventId());

        //Eliminados el evento de la bd
        turnoRepository.deleteById(idTurno);
    }

    //Aca editamos el turno
    public void editarTurno(TurnoDTO turnoDTO) throws GeneralSecurityException, IOException {
        Turno turno = turnoRepository.findById(turnoDTO.getId())
                .orElseThrow(() -> new EntityNotFoundException("No se encontro el turno que quieres editar"));
        Doctor doctor = doctorService.encontrarDoctor(turnoDTO.getDoctorId());
        Paciente paciente = pacienteService.encontrarPaciente(turnoDTO.getPacienteId());

        turno.setDoctor(doctor);
        turno.setPaciente(paciente);
        turno.setFechaHora(turnoDTO.getFechaHora());

        //Actualizamos el evento
        turnoRepository.save(turno);
        
        //Actualizamos el evento en la cloud de google
        googleCalendarService.modificarEvento(turno.getEventId(), turno);
    }

}
