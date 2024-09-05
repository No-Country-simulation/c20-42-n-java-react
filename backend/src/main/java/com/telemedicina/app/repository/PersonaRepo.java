/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.telemedicina.app.repository;

import com.telemedicina.app.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author olive
 */
public interface PersonaRepo extends JpaRepository<Persona, Long>{
    
}
