package com.telemedicina.app.utils;

import com.github.javafaker.Faker;
import com.telemedicina.app.model.Doctor;
import com.telemedicina.app.model.Especialidad;
import com.telemedicina.app.model.HistoriaClinica;
import com.telemedicina.app.model.Paciente;
import com.telemedicina.app.model.Persona;
import com.telemedicina.app.repository.DoctorRepo;
import com.telemedicina.app.repository.EspecialidadRepo;
import com.telemedicina.app.repository.PacienteRepo;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Random;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Bootstrap {
  private final EntityManager em;
  private Faker faker = new Faker(new Locale("es", "AR"));
  private final DoctorRepo doctorRepo;
  private final EspecialidadRepo especialidadRepo;
  private final PacienteRepo pacienteRepo;

  @Transactional
  public void cargarTablas(){
    cargarEspecialidades();
    cargarDoctores(10);
    cargarPacientes(10);
  }


  private List<Persona> crearPersonas(int n){
    List<Persona> personas = new ArrayList<>();
    for (int i = 0; i < n; i++) {
      Persona persona = Persona.builder()
          .nombre(faker.name().firstName())
          .dni(faker.number().digits(8))
          .edad(faker.number().numberBetween(18,100))
          .email(faker.internet().emailAddress())
          .telefono(faker.phoneNumber().cellPhone())
          .build();
      personas.add(persona);
    }
    return personas;
  }

  private List<Especialidad> crearEspecialidades(){
    List<String> especialidadesMedicas = Arrays.asList(
        "Medicina General",
        "Pediatría",
        "Cardiología",
        "Dermatología",
        "Ginecología",
        "Psiquiatría",
        "Neurología",
        "Endocrinología",
        "Gastroenterología",
        "Neumología",
        "Urología",
        "Oncología",
        "Reumatología",
        "Oftalmología",
        "Otorrinolaringología",
        "Traumatología",
        "Nefrología",
        "Infectología",
        "Alergología",
        "Hematología",
        "Geriatría",
        "Medicina Interna",
        "Nutrición",
        "Psicología",
        "Fisiatría",
        "Medicina del Deporte",
        "Medicina del Trabajo",
        "Cirugía General",
        "Odontología",
        "Sexología",
        "Genética Médica",
        "Medicina Preventiva",
        "Anestesiología",
        "Radiología",
        "Cirugía Plástica",
        "Medicina Estética"
    );
    List<Especialidad> especialidades = new ArrayList<>();
    for (String especialidadesMedica : especialidadesMedicas) {
      Especialidad especialidad = Especialidad.builder()
          .nombre(especialidadesMedica)
          .descripcion(faker.lorem().characters(10, 30))
          .build();
      especialidades.add(especialidad);
      especialidadRepo.save(especialidad);
    }
    return especialidades;
  }

  private void cargarDoctores(int n){
    if(tablaVacia("Doctor")){
      List<Especialidad> especialidades = especialidadRepo.findAll();
      List<Persona> personas = crearPersonas(n);
      Random random = new Random();
      personas.forEach(persona -> {
        Doctor doctor = Doctor.builder()
            .licencia(UUID.randomUUID().toString())
            .honorarios(faker.number().numberBetween(50000,500000))
            .persona(persona)
            .especialidad(especialidades.get(random.nextInt(36)))
            .build();
        doctorRepo.save(doctor);
      });
    }
  }

  private void cargarEspecialidades(){
    if(tablaVacia("Especialidad")){
      List<Especialidad> especialidades = crearEspecialidades();
      especialidadRepo.saveAll(especialidades);
    }
  }

  private void cargarPacientes(int n){
    if(tablaVacia("Paciente")){
      List<Persona> personas = crearPersonas(n);
      personas.forEach(persona -> {
        Paciente paciente = Paciente.builder()
            .persona(persona)
            .build();
        paciente.setHistoriaClinica(HistoriaClinica.builder()
            .registroMedicos(new ArrayList<>())
            .build());
        pacienteRepo.save(paciente);
      });
    }
  }

  private boolean tablaVacia(String tabla){
    return em.createQuery("SELECT 1 FROM " + tabla ).getResultList().isEmpty();
  }
}
