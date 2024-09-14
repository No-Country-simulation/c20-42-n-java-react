package com.telemedicina.app.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig{

  String[] allowedEndpoints = {
          "/v2/api-docs",
          "/v3/api-docs",
          "/v3/api-docs/**",
          "/swagger-resources",
          "/swagger-resources/**",
          "/configuration/ui",
          "/configuration/security",
          "/swagger-ui/**",
          "/webjars/**",
          "/swagger-ui.html",
          "/doctores",
          "/doctores/**",
      "/pacientes",
      "/pacientes/**",
      "/turnos",
      "/turnos/**",
          "/especialidades",
          "/especialidades/**"
  };

  @Bean
  public SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception {
    http
            .cors(Customizer.withDefaults())
            .csrf(AbstractHttpConfigurer :: disable)
            .authorizeHttpRequests(req -> req.requestMatchers(allowedEndpoints).permitAll().anyRequest().authenticated())
            .oauth2ResourceServer((oauth2) -> oauth2
            .jwt(Customizer.withDefaults()));

    return http.build();
  }

  @Bean
  public CorsFilter corsFilter() {
    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    final CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true);
    config.setAllowedOrigins(Arrays.asList("https://telemedicina-536ac.web.app", "https://telemedicina-536ac.firebaseapp.com", "http://localhost:4200"));
    config.setAllowedHeaders(Arrays.asList(
            HttpHeaders.ORIGIN,
            HttpHeaders.CONTENT_TYPE,
            HttpHeaders.ACCEPT,
            HttpHeaders.AUTHORIZATION
    ));
    config.setAllowedMethods(Arrays.asList("GET", "POST", "DELETE", "PUT", "PATCH"));
    source.registerCorsConfiguration("/**", config);
    return new CorsFilter(source);
  }

}
//
//@Configuration
//
//public class SecurityConfig implements WebMvcConfigurer {
//
//  @Override
//  public void addCorsMappings(CorsRegistry registry) {
//    registry.addMapping("/**") // Permite CORS para todas las rutas
//        .allowedOrigins("https://telemedicina-536ac.web.app", "https://telemedicina-536ac.firebaseapp.com", "http://localhost:4200") // Permite solicitudes desde tu frontend
//        .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos HTTP permitidos
//        .allowedHeaders("*") // Permite todos los encabezados
//        .allowCredentials(true); // Permite enviar cookies si es necesario
//  }
//
//}
