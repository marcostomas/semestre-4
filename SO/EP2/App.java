import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

public class App {
    private static Thread threads[];
    private static Memoria memoria;
    private static long inicioUso = 0, finalUso = 0, deltaUso;
    private static List<Long> deltas;

    public static void main(String[] args) throws InterruptedException {
        for (int r = 0, w = 100; r <= 100 && w >= 0; r++, w--) {
            deltas = new ArrayList<Long>();

            for (int i = 0; i < 50; i++) {
                threads = new Thread[100];
                memoria = new Memoria();
                zeroToUpperBound(2, r, w);

                inicioUso = System.currentTimeMillis(); // Marca o início de uso, imediatamente após o vetor de threads
                                                        // ser populado

                for (Thread th : threads) {
                    th.start();
                    th.join();
                }

                try {
                    threads[99].join();
                } catch (Exception e) {
                    e.getMessage();
                }

                finalUso = System.currentTimeMillis(); // Marca o tempo final de uso. Logo após a última thread terminar
                                                       // de
                                                       // executar.
                deltaUso = finalUso - inicioUso;
                deltas.add(deltaUso);
            }

            Long soma = (long) 0;
            for (Long d : deltas) {
                soma += d;
            }
            Long media = soma / deltas.size();
            System.out.println("Média proporção (r=" + r + ", w=" + w + ") = " + media);
        }
    }

    /*
     * Gera números pseudo-aleatórios 0 ou 1. 0 = Reader e 1 = Writer. Baseado no
     * código de
     * http://www.javapractices.com/topic/TopicAction.do?Id=62 com pequenas
     * modificações.
     */
    private static void zeroToUpperBound(long upper, int r_count, int w_count) {
        while (r_count > 0) {
            int position = geraPosicao();
            threads[position] = new Reader(memoria);
            r_count--;
        }

        while (w_count > 0) {
            int position = geraPosicao();
            threads[position] = new Writer(memoria);
            w_count--;
        }
    }

    private static int geraPosicao() {
        ThreadLocalRandom generator = ThreadLocalRandom.current();

        int position = generator.nextInt(100);
        boolean posValida = threads[position] == null ? true : false;

        while (!posValida) {
            position = generator.nextInt(100);
            posValida = threads[position] == null ? true : false;
        }

        return position;
    }
}
