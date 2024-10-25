import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import {CalendarOptions,} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Subject} from 'rxjs';
import {createPopper} from '@popperjs/core';
import esLocale from '@fullcalendar/core/locales/es';
import {TurnoControllerService} from "../../core/services/api-client";

declare var bootstrap: any;

@Component({
  selector: 'app-turnos-doctor',
  templateUrl: './turnos-doctor.component.html',
  styleUrl: './turnos-doctor.component.css',
})
export class TurnosDoctorComponent implements OnInit {
  @ViewChild('calendar') calendarComponent!: ElementRef;
  events: any[] = [];
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  selectedEvent: any; // Define selectedEvent

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.events,
    locale: esLocale, // Configurar el idioma a español
    contentHeight: 'auto',
    aspectRatio: 1.35,
    handleWindowResize: true,
    windowResizeDelay: 100,
    eventMouseEnter: this.handleEventMouseEnter.bind(this),
    eventMouseLeave: this.handleEventMouseLeave.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  constructor(
    private turnoControllerService: TurnoControllerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const doctorId = this.getDoctorId();
    if (doctorId !== null) {
      this.turnoControllerService
        .obtenerTurnoPorDoctor(doctorId)
        .subscribe((turnos) => {
          this.events = turnos.map((turno) => ({
            start: new Date(turno.fechaHora!),
            title: `Turno con ${turno.paciente?.persona?.nombre}`,
            allDay: false,
            paciente: turno.paciente // Añadir el paciente a los eventos
          }));
          this.calendarOptions = {
            ...this.calendarOptions,
            events: this.events,
          };
          this.refresh.next({});
          setTimeout(() => {
            this.cdr.detectChanges();
          }, 0);
        });
    } else {
      console.warn('No se pudo obtener el ID del doctor.');
    }
  }

  handleEventMouseEnter(info: any) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = info.event.title;
    document.body.appendChild(tooltip);
    createPopper(info.el as HTMLElement, tooltip, {
      placement: 'top',
    });
    info.el.setAttribute('data-tooltip', tooltip.outerHTML);
  }

  handleEventMouseLeave(info: any) {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip && tooltip.parentNode) {
      tooltip.parentNode.removeChild(tooltip);
    }
  }

  handleEventClick(clickInfo: any) {
    this.selectedEvent = clickInfo.event; // Actualiza selectedEvent
    const modal = document.getElementById('eventDetailsModal');
    if (modal) {
      const modalTitle = modal.querySelector('.modal-title');
      const modalBody = modal.querySelector('.modal-body');
      if (modalTitle && modalBody) {
        modalTitle.textContent = 'Detalles del Evento';
        const eventStart = clickInfo.event.start
          ? new Date(clickInfo.event.start).toLocaleString()
          : 'Fecha no disponible';
        modalBody.innerHTML = `
          <p><strong>Título:</strong> ${clickInfo.event.title}</p>
          <p><strong>Fecha y Hora:</strong> ${eventStart}</p>
          <p></p>
        `;
      }
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  handleWindowResize() {
    const calendarApi = (this.calendarComponent.nativeElement as any).getApi();
    if (calendarApi) {
      if (window.innerWidth < 768) {
        calendarApi.changeView('listMonth');
      } else {
        calendarApi.changeView('dayGridMonth');
      }
    }
  }

  getUserFromLocalStorage = () => {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      try {
        const parsedUsuario = JSON.parse(usuario);
        return parsedUsuario.entidadId ? parsedUsuario : null;
      } catch (error) {
        console.error('Error parsing usuario from localStorage:', error);
        return null;
      }
    }
    return null;
  };

  getDoctorId(): number | null {
    const usuario = this.getUserFromLocalStorage();
    return usuario ? usuario.entidadId : null;
  }

  onEventClick(event: any) {
    this.selectedEvent = event.event;
  }

  onConsultaMedica(paciente: any) {
    localStorage.setItem('paciente', JSON.stringify(paciente));
  }
}
