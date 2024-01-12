package com.tuspeliculasfavoritas.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EJurado {

    @Id
    @Column(name = "nomeArtistico", length = 55)
    private String nomeArtistico;

    @Column(name = "nome_evento", length = 20)
    private String nomeEvento;

    @Column(name = "ano_edicao")
    private Integer anoEdicao;

    public String getNomeArtistico() {
        return nomeArtistico;
    }

    public void setNomeArtistico(String nomeArtistico) {
        this.nomeArtistico = nomeArtistico;
    }

    public String getNomeEvento() {
        return nomeEvento;
    }

    public void setNomeEvento(String nomeEvento) {
        this.nomeEvento = nomeEvento;
    }

    public Integer getAnoEdicao() {
        return anoEdicao;
    }

    public void setAnoEdicao(Integer anoEdicao) {
        this.anoEdicao = anoEdicao;
    }
}
