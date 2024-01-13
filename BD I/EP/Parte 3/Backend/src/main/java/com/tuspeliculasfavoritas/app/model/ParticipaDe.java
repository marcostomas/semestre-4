package com.tuspeliculasfavoritas.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ParticipaDe {

    @Id
    @Column(name = "nomeArtistico", length = 55)
    private String nomeArtistico;

    @Column(name = "titulo_filme_original", length = 55)
    private String tituloFilmeOriginal;

    @Column(name = "ano_de_producao")
    private Integer anoDeProducao;

    @Column(name = "flag_ator")
    private Boolean flagAtor;

    @Column(name = "e_ator_principal")
    private Boolean eAtorPrincipal;

    @Column(name = "flag_diretor")
    private Boolean flagDiretor;

    @Column(name = "e_diretor_principal")
    private Boolean eDiretorPrincipal;

    @Column(name = "flag_produtor")
    private Boolean flagProdutor;

    @Column(name = "flag_roteirista")
    private Boolean flagRoteirista;

    public String getNomeArtistico() {
        return nomeArtistico;
    }

    public void setNomeArtistico(String nomeArtistico) {
        this.nomeArtistico = nomeArtistico;
    }

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

    public Boolean getFlagAtor() {
        return flagAtor;
    }

    public void setFlagAtor(Boolean flagAtor) {
        this.flagAtor = flagAtor;
    }

    public Boolean geteAtorPrincipal() {
        return eAtorPrincipal;
    }

    public void seteAtorPrincipal(Boolean eAtorPrincipal) {
        this.eAtorPrincipal = eAtorPrincipal;
    }

    public Boolean getFlagDiretor() {
        return flagDiretor;
    }

    public void setFlagDiretor(Boolean flagDiretor) {
        this.flagDiretor = flagDiretor;
    }

    public Boolean geteDiretorPrincipal() {
        return eDiretorPrincipal;
    }

    public void seteDiretorPrincipal(Boolean eDiretorPrincipal) {
        this.eDiretorPrincipal = eDiretorPrincipal;
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
