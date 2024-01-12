package com.tuspeliculasfavoritas.app.controller;

import com.tuspeliculasfavoritas.app.model.ArtistaIndicado;
import com.tuspeliculasfavoritas.app.repository.ArtistaIndicadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class ArtistaIndicadoController {

    @Autowired
    ArtistaIndicadoRepository artistaIndicadoRepository;

    @PostMapping("/artistaIndicado/save")
    public void inserir(@RequestBody ArtistaIndicado artistaIndicado){
        artistaIndicadoRepository.save(artistaIndicado);
    }
}
