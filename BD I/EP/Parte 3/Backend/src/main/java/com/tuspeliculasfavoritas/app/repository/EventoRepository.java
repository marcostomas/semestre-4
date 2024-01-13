package com.tuspeliculasfavoritas.app.repository;

import com.tuspeliculasfavoritas.app.model.Evento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventoRepository extends JpaRepository<Evento, String> {
}
