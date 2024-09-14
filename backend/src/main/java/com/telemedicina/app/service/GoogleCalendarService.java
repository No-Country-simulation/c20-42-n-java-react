package com.telemedicina.app.service;

import com.google.api.client.util.DateTime;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventAttendee;
import com.google.api.services.calendar.model.EventDateTime;
import com.google.api.services.calendar.model.ConferenceData;
import com.google.api.services.calendar.model.ConferenceSolutionKey;
import com.google.api.services.calendar.model.CreateConferenceRequest;
import com.telemedicina.app.config.GoogleCalendarConfig;
import com.telemedicina.app.model.Turno;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Date;
import java.util.TimeZone;
import java.util.UUID;
import org.springframework.stereotype.Service;

/**
 *
 * @author oliver
 */
@Service
public class GoogleCalendarService {

    public void agregarEvento(Turno turno) throws GeneralSecurityException, IOException {
        Calendar service = GoogleCalendarConfig.getCalendarService();

        Event event = new Event()
                .setSummary("Turno con el Dr. " + turno.getDoctor().getPersona().getNombre())
                .setDescription("Consulta médica con el doctor " + turno.getDoctor().getPersona().getNombre());

        //Fecha de inicio del evento que estamos creando
        Date startDate = Date.from(turno.getFechaHora().atZone(ZoneId.systemDefault()).toInstant());//Aca debe obtenerse la hora en la que se guardo el turno
        EventDateTime start = new EventDateTime()
                .setDateTime(new DateTime(startDate))
                .setTimeZone(TimeZone.getDefault().getID());
        event.setStart(start);

        //Fecha final del evento que estamos creando
        Date endDate = Date.from(turno.getFechaHora().plusHours(1).atZone(ZoneId.systemDefault()).toInstant());
        EventDateTime end = new EventDateTime()
                .setDateTime(new DateTime(endDate))
                .setTimeZone(TimeZone.getDefault().getID());
        event.setEnd(end);

        //Asistentes (doctor y paciente)
        EventAttendee[] asistentes = new EventAttendee[]{
            new EventAttendee().setEmail(turno.getDoctor().getPersona().getEmail()),
            new EventAttendee().setEmail(turno.getPaciente().getPersona().getEmail())
        };
        event.setAttendees(Arrays.asList(asistentes));

        //Codigo para agregar Google Meet al evento
        ConferenceData conferenceData = new ConferenceData();
        ConferenceSolutionKey conferenceSolutionKey = new ConferenceSolutionKey();
        conferenceSolutionKey.setType("hangoutsMeet");

        CreateConferenceRequest createConferenceRequest = new CreateConferenceRequest();
        createConferenceRequest.setRequestId(UUID.randomUUID().toString()); //Generar ID unico para cada reunion
        createConferenceRequest.setConferenceSolutionKey(conferenceSolutionKey);

        conferenceData.setCreateRequest(createConferenceRequest);
        event.setConferenceData(conferenceData);

        //Insertamos el evento en el calendario del usuario
        Event createdEvent = service.events().insert("primary", event)
                .setConferenceDataVersion(1)
                .setSendNotifications(true)
                .setSendUpdates("all")
                .execute();

        //Obtenemos el eventId para guardarlo en la bd
        String eventId = createdEvent.getId();

        //Guardamos el eventId junto con el turno
        turno.setEventId(eventId);

        System.out.println("Evento creado: " + createdEvent.getHtmlLink());
        if (createdEvent.getConferenceData() != null) {
            System.out.println("Meet link: " + createdEvent.getConferenceData().getEntryPoints().get(0).getUri());
        }
    }

    //Metodo para eliminar un turno, este metodo debera ser implementado por el paciente solamente
    public void eliminarEvento(String eventoId) throws GeneralSecurityException, IOException {
        Calendar service = GoogleCalendarConfig.getCalendarService();
        service.events().delete("primary", eventoId)
                .setSendNotifications(true)
                .setSendUpdates("all")
                .execute();
    }

    //Metodo para modificar un turno, este metodo puede utilizado tanto por el doctor, como por el paciente
    public void modificarEvento(String eventId, Turno nuevoTurno) throws GeneralSecurityException, IOException {
        Calendar service = GoogleCalendarConfig.getCalendarService();

        //Aca mandamos a llamar el evento que queremos modificar
        Event event = service.events().get("primary", eventId).execute();

        //Aca modificamos los detalles del evento
        event.setSummary("Turno modificado con el Dr. " + nuevoTurno.getDoctor().getPersona().getNombre());
        event.setDescription("Turno médico modificado");

        //Fecha de inicio del evento que estamos modificando
        Date startDate = Date.from(nuevoTurno.getFechaHora().atZone(ZoneId.systemDefault()).toInstant());
        EventDateTime start = new EventDateTime().setDateTime(new DateTime(startDate))
                .setTimeZone(TimeZone.getDefault().getID());

        event.setStart(start);

        //Fecha final del evento que estamos modificando
        Date endDate = Date.from(nuevoTurno.getFechaHora().atZone(ZoneId.systemDefault()).toInstant());
        EventDateTime end = new EventDateTime().setDateTime(new DateTime(endDate))
                .setTimeZone(TimeZone.getDefault().getID());

        event.setEnd(end);

        //Guardamos el evento
        service.events().update("primary", event.getId(), event)
                .setSendNotifications(true)
                .setSendUpdates("all")
                .execute();

    }
}
