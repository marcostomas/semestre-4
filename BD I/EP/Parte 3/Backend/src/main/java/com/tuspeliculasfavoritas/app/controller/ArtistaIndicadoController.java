package com.tuspeliculasfavoritas.app.controller;

import com.tuspeliculasfavoritas.app.model.ArtistaIndicado;
import com.tuspeliculasfavoritas.app.repository.ArtistaIndicadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class ArtistaIndicadoController {

    @Autowired
    ArtistaIndicadoRepository artistaIndicadoRepository;

    @PostMapping("/artistaIndicado/save")
    public void inserir(@RequestBody ArtistaIndicado artistaIndicado){
        artistaIndicadoRepository.save(artistaIndicado);
    }

    @GetMapping("/artistaIndicado/get")
    public void inserir() {
        List<ArtistaIndicado> artistas = artistaIndicadoRepository.recuperaArtistasMaisPremiados();
        Map<String, Integer> nomes = null;
        for(ArtistaIndicado artista : artistas){
            if(!nomes.containsKey(artista.getNomeArtistico())){
                nomes.put(artista.getNomeArtistico(), 1);
            } else{
                Integer value = nomes.get(artista.getNomeArtistico());
                nomes.replace(artista.getNomeArtistico(), value, value + 1);
            }
        }
        for(Map.Entry<String, Integer> entry : nomes.entrySet()){
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
    }
}
