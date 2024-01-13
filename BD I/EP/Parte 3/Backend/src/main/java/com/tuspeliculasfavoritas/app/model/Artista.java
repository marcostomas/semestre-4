package com.tuspeliculasfavoritas.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Artista {

    @Id
    @Column(name = "nomeArtistico")
    private String nomeArtistico;

    @Column(name = "anos_de_cinema", nullable = false)
    private Integer anosDeCinema;

    @Column(name = "site", length = 50)
    private String site;

    @Column(name = "sexo", length = 20, nullable = false)
    private String sexo;

    @Column(name = "ano_inicio")
    private Integer anoInicio;

    @Column(name = "ano_nascimento")
    private Integer anoNascimento;

    @Column(name = "nome_verdadeiro", length = 50, nullable = false)
    private String nomeVerdadeiro;

    @Column(name = "estado_atual", length = 50)
    private String estadoAtual;

    @Column(name = "flag_ator", nullable = false)
    private Boolean flagAtor;

    @Column(name = "flag_diretor", nullable = false)
    private Boolean flagDiretor;

    @Column(name = "flag_produtor", nullable = false)
    private Boolean flagProdutor;

    @Column(name = "flag_roteirista", nullable = false)
    private Boolean flagRoteirista;

    public String getNomeArtistico() {
        return nomeArtistico;
    }

    public void setNomeArtistico(String nomeArtistico) {
        this.nomeArtistico = nomeArtistico;
    }

    public Integer getAnosDeCinema() {
        return anosDeCinema;
    }

    public void setAnosDeCinema(Integer anosDeCinema) {
        this.anosDeCinema = anosDeCinema;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public Integer getAnoInicio() {
        return anoInicio;
    }

    public void setAnoInicio(Integer anoInicio) {
        this.anoInicio = anoInicio;
    }

    public Integer getAnoNascimento() {
        return anoNascimento;
    }

    public void setAnoNascimento(Integer anoNascimento) {
        this.anoNascimento = anoNascimento;
    }

    public String getNomeVerdadeiro() {
        return nomeVerdadeiro;
    }

    public void setNomeVerdadeiro(String nomeVerdadeiro) {
        this.nomeVerdadeiro = nomeVerdadeiro;
    }

    public String getEstadoAtual() {
        return estadoAtual;
    }

    public void setEstadoAtual(String estadoAtual) {
        this.estadoAtual = estadoAtual;
    }

    public Boolean getFlagAtor() {
        return flagAtor;
    }

    public void setFlagAtor(Boolean flagAtor) {
        this.flagAtor = flagAtor;
    }

    public Boolean getFlagDiretor() {
        return flagDiretor;
    }

    public void setFlagDiretor(Boolean flagDiretor) {
        this.flagDiretor = flagDiretor;
    }

    public Boolean getFlagProdutor() {
        return flagProdutor;
    }

    public void setFlagProdutor(Boolean flagProdutor) {
        this.flagProdutor = flagProdutor;
    }

    public Boolean getFlagRoteirista() {
        return flagRoteirista;
    }

    public void setFlagRoteirista(Boolean flagRoteirista) {
        this.flagRoteirista = flagRoteirista;
    }
}
