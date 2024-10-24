export * from './doctorController.service';
import {DoctorControllerService} from './doctorController.service';
import {EspecialidadControllerService} from './especialidadController.service';
import {HistoriaClinicaControllerService} from './historiaClinicaController.service';
import {PacienteControllerService} from './pacienteController.service';
import {RegistroMedicoControllerService} from './registroMedicoController.service';
import {TurnoControllerService} from './turnoController.service';
import {UsuarioControllerService} from './usuarioController.service';

export * from './especialidadController.service';
export * from './historiaClinicaController.service';
export * from './pacienteController.service';
export * from './registroMedicoController.service';
export * from './turnoController.service';
export * from './usuarioController.service';
export const APIS = [DoctorControllerService, EspecialidadControllerService, HistoriaClinicaControllerService, PacienteControllerService, RegistroMedicoControllerService, TurnoControllerService, UsuarioControllerService];
