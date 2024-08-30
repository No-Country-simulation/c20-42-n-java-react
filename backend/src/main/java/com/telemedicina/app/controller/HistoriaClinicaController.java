package com.telemedicina.app.controller;

import com.telemedicina.app.dto.request.HistoriaClinicaReq;
import com.telemedicina.app.dto.response.HistoriaClinicaRes;
import com.telemedicina.app.model.HistoriaClinica;
import com.telemedicina.app.service.HistoriaClinicaService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author oliver
 */
@RequestMapping("/historial")
@RestController
@RequiredArgsConstructor
public class HistoriaClinicaController {
    private final HistoriaClinicaService historiaClinicaService;


    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public HistoriaClinicaRes obtenerHistorial(@PathVariable("id") Long id) {
        return historiaClinicaService.obtenerHistorial(id);
    }

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<HistoriaClinicaRes> obtenerTodoLosHistoriales() {
        return historiaClinicaService.obtenerTodosLosHistoriales();
    }


    //Endpoint para crear un historial
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public void crearHistorial(@RequestBody @Validated HistoriaClinicaReq historiaClinicaReq) {
        historiaClinicaService.crearHistorial(historiaClinicaReq);
    }

    //Endpoint para editar un historial
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public String editarHistorial(@PathVariable("id") Long id, @RequestBody
    HistoriaClinica historiaClinica) {
        historiaClinicaService.editarHistorial(historiaClinica);
        return "Historial editado correctamente!";
    }

    //Endpoint para eliminar un historial
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public String eliminarHistorial(@PathVariable("id") Long id) {
        historiaClinicaService.eliminarHistorial(id);
        return "Historial eliminado correctamente!";
    }
}
