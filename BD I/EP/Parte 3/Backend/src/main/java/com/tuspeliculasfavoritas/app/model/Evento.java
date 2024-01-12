package com.tuspeliculasfavoritas.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Evento {

    @Id
    @Column(name = "nome", length = 20)
    private String nome;

    @Column(name = "nacionalidade", length = 20)
    private String nacionalidade;

    @Column(name = "tipo_evento", length = 20, nullable = false)
    private String tipoEvento;

    @Column(name = "numero_jurados", nullable = false)
    private Integer numeroJurados;

    @Column(name = "ano_inicio")
    private Integer anoInicio;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public String getTipoEvento() {
        return tipoEvento;
    }

    public void setTipoEvento(String tipoEvento) {
        this.tipoEvento = tipoEvento;
    }

    public Integer getNumeroJurados() {
        return numeroJurados;
    }

    public void setNumeroJurados(Integer numeroJurados) {
        this.numeroJurados = numeroJurados;
    }

    public Integer getAnoInicio() {
        return anoInicio;
    }

    public void setAnoInicio(Integer anoInicio) {
        this.anoInicio = anoInicio;
    }
}
