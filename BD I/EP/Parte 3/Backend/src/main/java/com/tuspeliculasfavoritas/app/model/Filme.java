package com.tuspeliculasfavoritas.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Filme {

    @Id
    @Column(name = "tituloOriginal", length = 55)
    private String tituloOriginal;

    @Column(name = "ano_de_producao")
    private Integer anoDeProducao;

    @Column(name = "titulo_pt_br", length = 20)
    private String tituloPtBr;

    @Column(name = "tema", length = 20, nullable = false)
    private String tema;

    @Column(name = "tipo", length = 20, nullable = false)
    private String tipo;

    @Column(name = "arrecadacao_prim_ano")
    private Integer arrecadacaoPrimAno;

    @Column(name = "idioma_original", length = 20)
    private String idiomaOriginal;

    @Column(name = "total_arrecadado")
    private Integer totalArrecadado;

    @Column(name = "nacionalidade", length = 20)
    private String nacionalidade;

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

    public String getTituloPtBr() {
        return tituloPtBr;
    }

    public void setTituloPtBr(String tituloPtBr) {
        this.tituloPtBr = tituloPtBr;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getArrecadaoPrimAno() {
        return arrecadacaoPrimAno;
    }

    public void setArrecadaoPrimAno(Integer arrecadaoPrimAno) { this.arrecadacaoPrimAno = arrecadaoPrimAno;}

    public String getIdiomaOriginal() { return idiomaOriginal;}

    public void setIdiomaOriginal(String idiomaOriginal) { this.idiomaOriginal = idiomaOriginal;}

    public Integer getTotalArrecadado() { return totalArrecadado;}

    public void setTotalArrecado(Integer totalArrecado) { this.totalArrecadado = totalArrecadado;}

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }
}
