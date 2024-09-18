import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HistoriaClinica} from "../../core/services/api-client/models/historia-clinica";
import {
  HistoriaClinicaControllerService
} from "../../core/services/api-client/services/historia-clinica-controller.service";
import {getUserFromLocalStorage} from "../../core/guards/auth.guard";

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrl: './historial-medico.component.css'
})
export class HistorialMedicoComponent implements OnInit{

  historialMedico?: HistoriaClinica;
  user: any;

  constructor(
    private _route: ActivatedRoute,
    private _historiaClinicaService: HistoriaClinicaControllerService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.user = getUserFromLocalStorage();
    const pacienteId = this.user.rol === 'PACIENTE' ? this.user.entidadId  : this._route.snapshot.params['id'];
    this._historiaClinicaService.obtenerHistorial({paciendId: pacienteId}).subscribe({
      next: (value) => {
        this.historialMedico = value;
      }
    });
  }

  irAPacientes(){
    this._router.navigateByUrl('/pacientes');
  }



}
