package com.telemedicina.app.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Usuario {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Rol rol;
  @Column(nullable = false, unique = true)
  private String email;
  private Long entidadId;
}
