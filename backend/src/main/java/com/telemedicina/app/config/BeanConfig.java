package com.telemedicina.app.config;

import com.telemedicina.app.utils.Bootstrap;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

  @Bean
  CommandLineRunner commandLineRunner(Bootstrap bootstrap) {
   return args -> {
    bootstrap.cargarTablas();
   };
  }
}
