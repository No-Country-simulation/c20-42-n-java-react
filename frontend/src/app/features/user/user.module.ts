import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDashboardComponent} from './components/user-dashboard/user-dashboard.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    UserDashboardComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class UserModule { }
