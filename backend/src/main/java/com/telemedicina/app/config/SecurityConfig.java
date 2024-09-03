package com.telemedicina.app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

public class SecurityConfig implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**") // Permite CORS para todas las rutas
        .allowedOrigins("http://localhost:4200") // Permite solicitudes desde tu frontend
        .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos HTTP permitidos
        .allowedHeaders("*") // Permite todos los encabezados
        .allowCredentials(true); // Permite enviar cookies si es necesario
  }

}
