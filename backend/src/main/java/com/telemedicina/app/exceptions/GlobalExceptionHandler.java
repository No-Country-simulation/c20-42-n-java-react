package com.telemedicina.app.exceptions;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(IllegalStateException.class)
  public ResponseEntity<?> handleException(IllegalStateException e) {
    return ResponseEntity.badRequest().body(e.getMessage());
  }

  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<String> handleEntityNotFoundException(final EntityNotFoundException e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<?> handleException(MethodArgumentNotValidException e){
    Set<String> errorMessages = e.getBindingResult().getAllErrors().stream().map(
        DefaultMessageSourceResolvable::getDefaultMessage).collect(Collectors.toSet());
    return ResponseEntity.badRequest().body(errorMessages);
  }

  @ExceptionHandler(ConstraintViolationException.class)
  public ResponseEntity<?> handleException(ConstraintViolationException e){
    Set<String>
        errorMessages = e.getConstraintViolations().stream().map(ConstraintViolation::getMessage).collect(
        Collectors.toSet());
    return ResponseEntity.badRequest().body(errorMessages);
  }

  @ExceptionHandler(InvalidFormatException.class)
  public ResponseEntity<Object> handleInvalidFormatException(InvalidFormatException ex, WebRequest request) {
    String errorMessage = "Formato invalido: " + ex.getValue() + " no es un valor valido para " + ex.getTargetType().getSimpleName();
    return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(MethodArgumentTypeMismatchException.class)
  public ResponseEntity<Object> handleMethodArgumentTypeMismatchException(
      MethodArgumentTypeMismatchException ex, WebRequest request) {
    String errorMessage = "Tipo invalido: " + ex.getValue() + " no es un tipo valido para " + ex.getName();
    return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
  }
}
