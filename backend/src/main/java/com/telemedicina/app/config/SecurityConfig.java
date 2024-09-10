package com.telemedicina.app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

public class SecurityConfig implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**") // Permite CORS para todas las rutas
        .allowedOrigins("https://telemedicina-536ac.web.app", "https://telemedicina-536ac.firebaseapp.com") // Permite solicitudes desde tu frontend
        .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos HTTP permitidos
        .allowedHeaders("*") // Permite todos los encabezados
        .allowCredentials(true); // Permite enviar cookies si es necesario
  }

}
