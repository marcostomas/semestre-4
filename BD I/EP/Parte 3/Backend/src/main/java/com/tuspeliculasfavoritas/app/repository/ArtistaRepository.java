package com.tuspeliculasfavoritas.app.repository;

import com.tuspeliculasfavoritas.app.model.Artista;
import com.tuspeliculasfavoritas.app.model.ArtistaIndicado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface ArtistaRepository extends JpaRepository<Artista, String> {
}
