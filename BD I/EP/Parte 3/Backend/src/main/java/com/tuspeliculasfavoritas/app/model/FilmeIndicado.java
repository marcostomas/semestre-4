package com.tuspeliculasfavoritas.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FilmeIndicado {
    @Id
    @Column(name = "tituloOriginal", length = 55)
    private String tituloOriginal;

    @Column(name = "ano_de_producao")
    private Integer anoDeProducao;

    @Column(name = "nome_premio", length = 55)
    private String nomePremio;

    @Column(name = "nome_evento", length = 20)
    private String nomeEvento;

    @Column(name = "ano_edicao")
    private Integer anoEdicao;
    
    public String getTituloFilmeOriginal() {
        return tituloOriginal;
    }

    public void setTituloOriginal(String tituloOriginal) {
        this.tituloOriginal = tituloOriginal;
    };

    public Integer getAnoDeProducao() {
        return anoDeProducao;
    }

    public void setAnoDeProducao(Integer anoDeProducao) {
        this.anoDeProducao = anoDeProducao;
    };

    public String getNomePremio() {
        return nomePremio;
    }

    public void setNomePremio(String nomePremio) {
        this.nomePremio = nomePremio;
    };

    public String getNomeEvento() {
        return nomeEvento;
    }

    public void setNomeEvento(String nomeEvento) {
        this.nomeEvento = nomeEvento;
    };

    public Integer getAnoEdicao() {
        return anoEdicao;
    }

    public void setAnoEdicao(Integer anoEdicao) {
        this.anoEdicao = anoEdicao;
    };
}
