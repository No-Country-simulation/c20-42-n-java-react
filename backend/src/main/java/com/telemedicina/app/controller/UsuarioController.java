package com.telemedicina.app.controller;

import com.telemedicina.app.model.Usuario;
import com.telemedicina.app.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
@RequiredArgsConstructor
public class UsuarioController {
  private final UsuarioService usuarioService;

  @GetMapping
  @ResponseStatus(HttpStatus.OK)
  public Usuario obtenerUsuario(Authentication authentication) {
    Jwt token = (Jwt) authentication.getPrincipal();
    String email = token.getClaimAsString("email");
    return usuarioService.findByEmail(email);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Usuario crearUsuario(Authentication authentication ,@RequestBody Usuario usuario) {
    Jwt token = (Jwt) authentication.getPrincipal();
    String email = token.getClaimAsString("email");
    usuario.setEmail(email);
    return usuarioService.save(usuario);
  }

}
