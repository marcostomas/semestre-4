package com.tuspeliculasfavoritas.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ArtistaIndicado {

    @Id
    @Column(name = "nomeArtistico", length = 55)
    private String nomeArtistico;

    @Column(name = "nome_premio", length = 55)
    private String nomePremio;

    @Column(name = "nome_evento", length = 20)
    private String nomeEvento;

    @Column(name = "ano_edicao")
    private Integer anoEdicao;

    @Column(name = "titulo_original", length = 55, nullable = false)
    private String tituloOriginal;

    @Column(name = "ano_de_producao", nullable = false)
    private Integer anoDeProducao;

    @Column(name = "ganhou", nullable = false)
    private Boolean ganhou;

    public String getNomeArtistico() {
        return nomeArtistico;
    }

    public void setNomeArtistico(String nomeArtistico) {
        this.nomeArtistico = nomeArtistico;
    }

    public String getNomePremio() {
        return nomePremio;
    }

    public void setNomePremio(String nomePremio) {
        this.nomePremio = nomePremio;
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

    public String getTituloOriginal() {
        return tituloOriginal;
    }

    public void setTituloOriginal(String tituloOriginal) {
        this.tituloOriginal = tituloOriginal;
    }

    public Integer getAnoDeProducao() {
        return anoDeProducao;
    }

    public void setAnoDeProducao(Integer anoDeProducao) {
        this.anoDeProducao = anoDeProducao;
    }

    public Boolean getGanhou() {
        return ganhou;
    }

    public void setGanhou(Boolean ganhou) {
        this.ganhou = ganhou;
    }
}
