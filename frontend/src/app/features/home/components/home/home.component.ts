import {Component, OnInit} from '@angular/core';
import {DoctorControllerService, DoctorRes} from "../../../../core/services/api-client";
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  doctoresCarousel!:DoctorRes[];

  constructor(private _doctorService : DoctorControllerService) {
  }

  ngOnInit(): void {
    this.obtenerDoctores();
  }

  obtenerDoctores(){
    this._doctorService.obtenerDoctores().subscribe({
      next : doctores => {
        if(doctores.length > 5) {
          this.doctoresCarousel = doctores.slice(0, 5);
        }
      }
    })
  }

  protected readonly faStar = faStar;
}
