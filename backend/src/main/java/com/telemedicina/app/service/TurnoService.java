package com.telemedicina.app.service;

import com.telemedicina.app.dto.request.TurnoReq;
import com.telemedicina.app.dto.response.TurnoRes;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.model.Turno;
import com.telemedicina.app.repository.TurnoRepository;
import com.telemedicina.app.service.mapper.DoctorMapper;
import com.telemedicina.app.service.mapper.PacienteMapper;
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
    private final DoctorMapper doctorMapper;
    private final PacienteMapper pacienteMapper;

    public TurnoRes agendarTurno(TurnoReq turnoReq) throws GeneralSecurityException, IOException {
        Turno turno = toTurno(turnoReq);

        //Asignamos el paciente a la lista del doctor
        if (!turno.getDoctor().getPacientes().contains(turno.getPaciente())) {
            turno.getDoctor().getPacientes().add(turno.getPaciente());
        }
        //Agregamos el evento pasandole el objeto turno
        googleCalendarService.agregarEvento(turno);

        return toTurnoRes(turnoRepository.save(turno));
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
    public TurnoRes editarTurno(Long id, TurnoReq turnoReq) throws GeneralSecurityException, IOException {
        turnoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se encontro el turno que quieres editar"));

        //Actualizamos el evento
       Turno turno = turnoRepository.save(toTurno(turnoReq));

        //Actualizamos el evento en la cloud de google
        googleCalendarService.modificarEvento(turno.getEventId(), turno);
        return toTurnoRes(turno);
    }

    public List<TurnoRes> obtenerTurnos() {
      return turnoRepository.findAll().stream().map(this::toTurnoRes).toList();
    }

    public List<TurnoRes> obtenerTurnoPorDoctor(Long idDoctor) {
        doctorService.findDoctor(idDoctor);
        return turnoRepository.findAllByDoctor_Id(idDoctor).stream().map(this::toTurnoRes).toList();
    }

    public List<TurnoRes> obtenerTurnoPorPaciente(Long id) {
        pacienteService.findPaciente(id);
        return  turnoRepository.findAllByPaciente_Id(id).stream().map(this::toTurnoRes).toList();
    }

    public Turno toTurno(TurnoReq turnoReq) {
        Doctor doctor = doctorService.findDoctor(turnoReq.getDoctorId());
        Paciente paciente = pacienteService.findPaciente(turnoReq.getPacienteId());
        return Turno.builder()
            .doctor(doctor)
            .paciente(paciente)
            .fechaHora(turnoReq.getFechaHora())
            .build();
    }

    public TurnoRes toTurnoRes(Turno turno){
        return TurnoRes.builder()
            .id(turno.getId())
            .doctor(doctorMapper.toDoctorRes(turno.getDoctor()))
            .paciente(pacienteMapper.toPacienteRes(turno.getPaciente()))
            .fechaHora(turno.getFechaHora())
            .build();
    }

}
