import {Component, OnInit} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {
  DoctorControllerService,
  DoctorRes,
  Especialidad,
  EspecialidadControllerService
} from "../../../../core/services/api-client";


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
})
export class DoctorsComponent implements OnInit {
  especialidad! : Especialidad;
  doctores! : DoctorRes[];
  especialidades: Especialidad[] = [];
  isLoading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private especialidadService: EspecialidadControllerService,
    private doctorService: DoctorControllerService
  ) {}

  ngOnInit() {
    let especialidadId = this._route.snapshot.params['id'];
    this.obtenerEspecialidad(especialidadId);
    this.obtenerDoctores(especialidadId);
  }

  obtenerEspecialidad(especialidadId : number) {
    this.especialidadService.obtenerEspecialidadPorId(especialidadId).subscribe({
      next : especialidad  => {this.especialidad = especialidad}
    })
  }

  obtenerDoctores(especialidadId : number){

    this.doctorService.obtenerDoctores(especialidadId.toString()).subscribe({
      next : (doctores : DoctorRes[]) => {
        this.doctores = doctores;
        this.isLoading = false;
        }
      }
    );
  }

  protected readonly faStar = faStar;
}
