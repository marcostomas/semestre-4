package com.tuspeliculasfavoritas.app.repository;

import com.tuspeliculasfavoritas.app.model.ArtistaIndicado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ArtistaIndicadoRepository extends JpaRepository<ArtistaIndicado, String>{

    @Query(value = "SELECT *  FROM Artista_indicado WHERE ganhou = true", nativeQuery = true)
    List<ArtistaIndicado> recuperaArtistasMaisPremiados();

}
