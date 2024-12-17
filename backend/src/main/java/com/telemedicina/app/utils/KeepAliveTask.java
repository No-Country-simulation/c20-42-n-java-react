package com.telemedicina.app.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class KeepAliveTask {
  private final RestTemplate restTemplate;
  @Value("${backend.url}")
  private String backendUrl;

  @Scheduled(fixedRate = 840000)
  public void keepAlive() {
    String url =  backendUrl + "/doctores";
    restTemplate.getForObject(url, String.class);
  }
}
