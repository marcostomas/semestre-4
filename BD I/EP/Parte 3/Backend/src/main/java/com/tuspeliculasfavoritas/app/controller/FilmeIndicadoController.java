package com.tuspeliculasfavoritas.app.controller;

import com.tuspeliculasfavoritas.app.model.FilmeIndicado;
import com.tuspeliculasfavoritas.app.repository.FilmeIndicadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
public class FilmeIndicadoController {

    @Autowired
    FilmeIndicadoRepository filmeIndicadoRepository;

    @PostMapping("/filmeindicado/save")
    public void inserir(@RequestBody FilmeIndicado filmeIndicado){
        System.out.println(filmeIndicado.getTituloOriginal());
        System.out.println(filmeIndicado.getAnoDeProducao());
        System.out.println(filmeIndicado.getNomePremio());
        System.out.println(filmeIndicado.getNomeEvento());
        System.out.println(filmeIndicado.getAnoEdicao());
        filmeIndicadoRepository.save(filmeIndicado);
    }
}
