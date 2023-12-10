public class Reader extends Thread {
    private Memoria memoria;
    private String conteudo;

    public Reader(Memoria mem) {
        memoria = mem;
    }

    @Override
    public void run() {

        try {
            while (memoria.getUso(this)) {
                wait();
            }
            synchronized (this) {

                if (!memoria.getUso(this)) {
                    memoria.toggleUso(this);
                    for (int i = 0; i < 100; ++i) {
                        this.conteudo = memoria.getMem();
                    }
                }

                Thread.sleep(1);
                memoria.toggleUso(this);
                notifyAll();
            }

        } catch (Exception e) {
            e.getMessage();
            e.printStackTrace();
        }
    }
}
