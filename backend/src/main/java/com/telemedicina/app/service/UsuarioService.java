package com.telemedicina.app.service;

import com.telemedicina.app.model.Usuario;
import com.telemedicina.app.repository.UsuarioRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioService {
  private final UsuarioRepo usuarioRepo;

  public Usuario findByEmail(String email) {
    Usuario usuario = usuarioRepo.findByEmail(email);
    if(usuario == null)
      throw new EntityNotFoundException("Usuario con email " + email + " no encontrado");
    return usuario;
  }

  public Usuario save(Usuario usuario) {
    return usuarioRepo.save(usuario);
  }

}
