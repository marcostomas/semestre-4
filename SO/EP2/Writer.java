public class Writer extends Thread {

    private Memoria memoria;

    public Writer(Memoria mem) {
        memoria = mem;
    }

    @Override
    public void run() {

        try {
            while (memoria.getUso(this) || memoria.temReader()) {
                wait();
            }
            synchronized (this) {
                if (!memoria.getUso(this)) {
                    memoria.toggleUso(this);
                    for (int i = 0; i < 100; ++i)
                        memoria.setMem("MODIFICADO");
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
