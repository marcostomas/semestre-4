package com.tuspeliculasfavoritas.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Lancamento {

    @Id
    @Column(name = "tituloFilmeOriginal", length = 55)
    private String tituloFilmeOriginal;

    @Column(name = "ano_de_producao")
    private Integer anoDeProducao;

    @Column(name = "local_de_estreia", length = 55)
    private String localDeEstreia;

    @Column(name = "data_de_estreia")
    private Date dataDeEstreia;

    @Column(name = "sala_de_exibicao")
    private Integer salaDeExibicao;

    public String getTituloFilmeOriginal() {
        return tituloFilmeOriginal;
    }

    public void setTituloFilmeOriginal(String tituloFilmeOriginal) {
        this.tituloFilmeOriginal = tituloFilmeOriginal;
    }

    public Integer getAnoDeProducao() {
        return anoDeProducao;
    }

    public void setAnoDeProducao(Integer anoDeProducao) {
        this.anoDeProducao = anoDeProducao;
    }

    public String getLocalDeEstreia() {
        return localDeEstreia;
    }

    public void setLocalDeEstreia(String localDeEstreia) {
        this.localDeEstreia = localDeEstreia;
    }

    public Date getDataDeEstreia() {
        return dataDeEstreia;
    }

    public void setDataDeEstreia(Date dataDeEstreia) {
        this.dataDeEstreia = dataDeEstreia;
    }

    public Integer getSalaDeExibicao() {
        return salaDeExibicao;
    }

    public void setSalaDeExibicao(Integer salaDeExibicao) {
        this.salaDeExibicao = salaDeExibicao;
    }
}
