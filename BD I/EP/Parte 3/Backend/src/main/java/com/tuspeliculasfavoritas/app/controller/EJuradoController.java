package com.tuspeliculasfavoritas.app.controller;

import com.tuspeliculasfavoritas.app.model.EJurado;
import com.tuspeliculasfavoritas.app.repository.EJuradoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class EJuradoController {

    @Autowired
    EJuradoRepository eJuradoRepository;

    @PostMapping("/ejurado/save")
    public void inserir(@RequestBody EJurado eJurado){
        eJuradoRepository.save(eJurado);
    }
}
