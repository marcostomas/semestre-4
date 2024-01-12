package com.tuspeliculasfavoritas.app.controller;

import com.tuspeliculasfavoritas.app.model.Artista;
import com.tuspeliculasfavoritas.app.repository.ArtistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class ArtistaController {

    @Autowired
    ArtistaRepository artistaRepository;

    @PostMapping("/artista/save")
    public void inserir(@RequestBody Artista artista) {
        System.out.println("Recebendo artista");
        System.out.println(artista.getNomeArtistico());
        System.out.println(artista.getAnoInicio());
        artistaRepository.save(artista);
    }

    @PostMapping("/artista/get")
    public void inserir() {
        artistaRepository.findAll();
    }

}
