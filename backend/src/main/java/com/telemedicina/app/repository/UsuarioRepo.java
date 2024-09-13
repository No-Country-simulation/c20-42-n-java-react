package com.telemedicina.app.repository;

import com.telemedicina.app.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepo extends JpaRepository<Usuario, Long> {
  Usuario findByEmail(String email);
}
