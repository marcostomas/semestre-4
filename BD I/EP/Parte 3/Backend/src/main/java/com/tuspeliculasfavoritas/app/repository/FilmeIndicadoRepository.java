package com.tuspeliculasfavoritas.app.repository;

import com.tuspeliculasfavoritas.app.model.FilmeIndicado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmeIndicadoRepository extends JpaRepository<FilmeIndicado, String> {
}
