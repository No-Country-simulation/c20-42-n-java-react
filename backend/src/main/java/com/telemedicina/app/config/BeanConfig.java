package com.telemedicina.app.config;

import com.telemedicina.app.utils.Bootstrap;
import net.kaczmarzyk.spring.data.jpa.web.SpecificationArgumentResolver;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class BeanConfig implements WebMvcConfigurer{

  @Bean
  CommandLineRunner commandLineRunner(Bootstrap bootstrap) {
   return args -> {
    bootstrap.cargarTablas();
   };
  }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(new SpecificationArgumentResolver());
    }


}
