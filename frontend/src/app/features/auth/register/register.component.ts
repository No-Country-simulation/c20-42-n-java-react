import {Component, Inject} from '@angular/core';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username?:string;
  email?:string;
  password?:string;
  authService = Inject(AuthService);
  router = Inject(Router);

  onSubmit(){
    this.authService.register(this.username, this.email, this.password).subscribe(()=> {
      this.router.navigateByUrl('/doctores/');
    });
  }


}
