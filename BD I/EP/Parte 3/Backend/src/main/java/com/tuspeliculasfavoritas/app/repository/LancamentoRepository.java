package com.tuspeliculasfavoritas.app.repository;

import com.tuspeliculasfavoritas.app.model.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LancamentoRepository extends JpaRepository<Lancamento, String> {
}
