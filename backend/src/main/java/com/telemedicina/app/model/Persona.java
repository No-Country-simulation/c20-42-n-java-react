package com.telemedicina.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author oliver
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Debes ingresar tu nombre")
    @Pattern(regexp = "^[a-zA-Z]+$", message = "El nombre debe contener letras solamente")
    private String nombre;

    @NotBlank(message = "Ingresa tu edad")
    @NotNull(message = "Debes ingresar tu edad")
    private int edad;

    @NotBlank(message = "Ingresa tu DNI")
    @NotNull(message = "Debes ingresar tu DNI")
    private String dni;

    @NotBlank(message = "Ingresa tu telefono")
    @NotNull(message = "Debes ingresar tu telefono")
    private String telefono;

    @NotBlank(message = "Ingresa tu correo")
    @NotNull(message = "Debes ingresar tu correo")
    @Email(message = "Debes ingresar un correo válido")
    private String email;

}
