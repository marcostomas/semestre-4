package com.tuspeliculasfavoritas.app.repository;

import com.tuspeliculasfavoritas.app.model.Artista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistaRepository extends JpaRepository<Artista, String> {
}
