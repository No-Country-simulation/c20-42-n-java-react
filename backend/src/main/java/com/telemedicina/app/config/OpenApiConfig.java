package com.telemedicina.app.config;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

  @Bean
  public OpenAPI apiGatewayAPI(){
    return new OpenAPI()
        .info(new Info().title("Telemedicina API")
            .description(":V")
            .version("v0.0.1")
            .license(new License().name("Apache 2.0")));
  }
}