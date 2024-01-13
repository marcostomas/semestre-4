package com.tuspeliculasfavoritas.app.repository;

import com.tuspeliculasfavoritas.app.model.Filme;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmeRepository extends JpaRepository<Filme, String> {
}
