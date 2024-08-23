package com.telemedicina.app.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class HelloController {

  @GetMapping
  @ResponseStatus(HttpStatus.OK)
  public String hello() {
    return "Hello World";
  }


}
