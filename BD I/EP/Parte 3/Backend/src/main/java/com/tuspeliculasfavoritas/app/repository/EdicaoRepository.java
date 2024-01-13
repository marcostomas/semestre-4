package com.tuspeliculasfavoritas.app.repository;

import com.tuspeliculasfavoritas.app.model.Edicao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EdicaoRepository extends JpaRepository<Edicao, String> {
}
