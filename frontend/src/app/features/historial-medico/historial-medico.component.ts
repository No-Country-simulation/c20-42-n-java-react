import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {getUserFromLocalStorage} from "../../core/guards/auth.guard";
import {HistoriaClinicaControllerService, HistoriaClinicaRes} from "../../core/services/api-client";

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historial-medico.component.html',
  styleUrl: './historial-medico.component.css'
})
export class HistorialMedicoComponent implements OnInit{

  historialMedico?: HistoriaClinicaRes;
  user: any;

  constructor(
    private _route: ActivatedRoute,
    private _historiaClinicaService: HistoriaClinicaControllerService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.user = getUserFromLocalStorage();
    const pacienteId = this.user.rol === 'PACIENTE' ? this.user.entidadId  : this._route.snapshot.params['id'];
    this._historiaClinicaService.obtenerHistorial( pacienteId).subscribe({
      next: (value) => {
        this.historialMedico = value;
      }
    });
  }

  irAPacientes(){
    this._router.navigateByUrl('/pacientes');
  }



}
