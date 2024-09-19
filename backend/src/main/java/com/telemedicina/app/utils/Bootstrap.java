package com.telemedicina.app.utils;

import com.github.javafaker.Faker;
import com.telemedicina.app.model.*;
import com.telemedicina.app.repository.DoctorRepo;
import com.telemedicina.app.repository.EspecialidadRepo;
import com.telemedicina.app.repository.PacienteRepo;
import com.telemedicina.app.repository.UsuarioRepo;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class Bootstrap {
  private final EntityManager em;
  private Faker faker = new Faker(new Locale("es", "AR"));
  private final DoctorRepo doctorRepo;
  private final EspecialidadRepo especialidadRepo;
  private final PacienteRepo pacienteRepo;
  private final UsuarioRepo usuarioRepo;

  @Transactional
  public void cargarTablas(){
    if(tablaVacia("Doctor")&& tablaVacia("Paciente")&& tablaVacia("Usuario")){
      cargarEspecialidades();
      cargarDoctores(10);
      cargarPacientes(30);
      agregarPacientesADoctores();
      agregarUsuariosDePrueba();
    }
  }


  private List<Persona> crearPersonas(int n){
    List<Persona> personas = new ArrayList<>();
    for (int i = 0; i < n; i++) {
      String nombre = faker.name().firstName();
      String apellido = faker.name().lastName();
      Persona persona = Persona.builder()
          .nombre(nombre + " " + apellido)
          .dni(faker.number().digits(8))
          .edad(faker.number().numberBetween(18,100))
          .email((nombre + "-" + apellido + "@gmail.com").toLowerCase().trim())
          .telefono(faker.phoneNumber().cellPhone())
          .build();
      personas.add(persona);
    }
    return personas;
  }

  private List<Especialidad> crearEspecialidades(){
    Map<String, String> especialidadesMedicas = new HashMap<>();
    especialidadesMedicas.put("Medicina General", "Atención integral para adultos. Diagnóstico, tratamiento y prevención de enfermedades comunes. Consulta para recibir orientación o ser referido a un especialista.");
    especialidadesMedicas.put("Salud Mental", "Apoyo en problemas emocionales y psicológicos. Diagnóstico y tratamiento de trastornos mentales con psicólogos y psiquiatras especializados.");
    especialidadesMedicas.put("Pediatría", "Cuidado médico para niños desde el nacimiento hasta la adolescencia. Supervisión del crecimiento, desarrollo y tratamiento de enfermedades infantiles.");
    especialidadesMedicas.put("Nutrición", "Asesoramiento sobre alimentación saludable. Planes personalizados para mejorar tu dieta y manejar condiciones relacionadas con la nutrición.");
    especialidadesMedicas.put("Dermatología", "Tratamiento de afecciones de la piel, cabello y uñas. Diagnóstico de problemas como acné, eczema y cáncer de piel.");
    especialidadesMedicas.put("Ginecología", "Cuidado del sistema reproductivo femenino. Consultas sobre salud menstrual, embarazo, menopausia y enfermedades ginecológicas.");

    List<Especialidad> especialidades = new ArrayList<>();
    for (Map.Entry<String, String> entry : especialidadesMedicas.entrySet()){
      Especialidad especialidad = Especialidad.builder()
          .nombre(entry.getKey())
          .descripcion(entry.getValue())
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
            .especialidad(especialidades.get(random.nextInt(especialidades.size()-1)))
            .pacientes(new HashSet<>())
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

  private void agregarPacientesADoctores(){
    List<Doctor> doctores = doctorRepo.findAll();
    List<Paciente> pacientes = pacienteRepo.findAll();
    Random random = new Random();
    pacientes.forEach(paciente -> {
      var flag = true;
      while(flag){
        flag = !doctores.get(random.nextInt(doctores.size()-1))
                .getPacientes().add(paciente);
      }
    });
  }

  private void agregarUsuariosDePrueba(){
    Usuario usuarioDoctor = Usuario.builder()
            .rol(Rol.DOCTOR)
            .email("doctor@gmail.com")
            .entidadId(1L)
            .build();
    Usuario usuarioPaciente = Usuario.builder()
            .rol(Rol.PACIENTE)
            .email("paciente@gmail.com")
            .entidadId(1L)
            .build();
    usuarioRepo.save(usuarioPaciente);
    usuarioRepo.save(usuarioDoctor);
  }

  private boolean tablaVacia(String tabla){
    return em.createQuery("SELECT 1 FROM " + tabla ).getResultList().isEmpty();
  }
}
