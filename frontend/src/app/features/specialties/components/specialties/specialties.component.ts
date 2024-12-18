import {Component, OnInit} from '@angular/core';
import {Especialidad, EspecialidadControllerService} from "../../../../core/services/api-client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.css',
})

export class SpecialtiesComponent implements OnInit {
  especialidades: Especialidad[] = [];
  isLoading = true;

  constructor(private especialidadService: EspecialidadControllerService, private _router : Router) {}

  ngOnInit() {
    this.obtenerEspecialidades();
  }

  obtenerEspecialidades() {
    this.especialidadService.obtenerEspecialidad().subscribe({
      next: (value) => {
        this.especialidades = value;
        console.log(this.especialidades);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching especialidad:', err);
        this.isLoading = false;
      },
      complete: () => {
        console.log('especialidad fetching completed');
      },
    });
  }

  async redirigirADoctores(especialidadId: number | undefined) {
    if(especialidadId)
      await this._router.navigateByUrl(`/specialties/${especialidadId}`);
  }
}
