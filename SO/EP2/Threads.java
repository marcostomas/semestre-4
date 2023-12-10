public class Threads {
    private Thread th;
    private Boolean estaExecutando;
    private static int n_escritores = 0;
    private static int n_leitores = 0;

    public Threads(Thread th, Boolean estaExecutando, String nome) {
        this.th = th;
        this.estaExecutando = estaExecutando;
        if (nome == "Leitor") {
            n_leitores++;
            this.th.setName("Leitor - " + n_leitores);
        } else if (nome == "Escritor") {
            n_escritores++;
            this.th.setName("Escritor - " + n_escritores);
        }
    }

    public Thread getThread() {
        return this.th;
    }

    public void setThread(Thread th) {
        this.th = th;
        this.estaExecutando = false;
    }

    public Boolean getEstado() {
        return this.estaExecutando;
    }

    public void setEstado(Boolean novoEstado) {
        this.estaExecutando = novoEstado;
    }

    public int getLeitores() {
        return n_leitores;
    }

    public int getEscritores() {
        return n_escritores;
    }

}
