package com.telemedicina.app.config;

import com.telemedicina.app.utils.Bootstrap;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class BeanConfig implements WebMvcConfigurer{

  @Bean
  CommandLineRunner commandLineRunner(Bootstrap bootstrap) {
   return args -> {
    bootstrap.cargarTablas();
   };
  }


    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }


}
