package com.tuspeliculasfavoritas.app.controller;

import com.tuspeliculasfavoritas.app.model.Artista;
import com.tuspeliculasfavoritas.app.repository.ArtistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/artista")
public class ArtistaController {

    @Autowired
    ArtistaRepository artistaRepository;

    @PostMapping("/save")
    public void inserir(@RequestBody Artista artista) {
        artista.setNomeArtistico("Will Smith");
        System.out.println("Recebendo artista");
        System.out.println(artista.getNomeArtistico());
        System.out.println(artista.getAnoInicio());
        artistaRepository.save(artista);
    }

}
