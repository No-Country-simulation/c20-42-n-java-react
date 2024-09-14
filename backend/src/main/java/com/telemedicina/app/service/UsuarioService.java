package com.telemedicina.app.service;

import com.telemedicina.app.model.Usuario;
import com.telemedicina.app.repository.UsuarioRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioService {
  private final UsuarioRepo usuarioRepo;

  public Usuario findByEmail(String email) {
    return usuarioRepo.findByEmail(email);
  }

  public Usuario save(Usuario usuario) {
    return usuarioRepo.save(usuario);
  }

}
