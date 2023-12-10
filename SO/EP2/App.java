import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

public class App {
    private static Thread threads[];
    // private static String threads_nomes[] = new String[100];
    // private static int contador = 0, leitores = 0, escritores = 0;
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

                // HaThreadsSendoExecutadas();

                // System.out.println("Todas as threads terminaram");
                finalUso = System.currentTimeMillis(); // Marca o tempo final de uso. Logo após a última thread terminar
                                                       // de
                                                       // executar.
                deltaUso = finalUso - inicioUso;
                deltas.add(deltaUso);
                // System.out.println("Início: " + inicioUso + " Final: " + finalUso + " Delta:
                // " + deltaUso);
            }

            Long soma = (long) 0;
            for (Long d : deltas) {
                soma += d;
            }
            Long media = soma / deltas.size();
            System.out.println("Média proporção (r=" + r + ", w=" + w + ") = " + media);
        }
    }

    // private static Boolean HaThreadsSendoExecutadas() {
    // int contador_de_true = 100;
    // int contador_de_execucoes = 0;

    // while (contador_de_true > 0) {
    // System.out.println("Contador de True:" + contador_de_true);
    // for (Thread th : threads) {
    // contador_de_execucoes++;
    // if (th.isAlive() == false) {
    // contador_de_true--;
    // System.out.println(th.getName());
    // }
    // }
    // }
    // System.out.println("Contador de execuções:" + contador_de_execucoes);
    // System.out.println("Contador de true:" + contador_de_true);

    // return false;
    // }

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
        // logThreads(idx, random, position);
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

    /*
     * Incrementa contadores de leitores e escritores baseado no valor de random,
     * atualizando um array de threads. Ao atingir 100 execuções, exibe contadores e
     * o estado do array threads_numerico no console.
     */
    // private static void logThreads(int execucao, long random, int position) {
    // contador++;

    // if (random == 0) {
    // leitores++;
    // threads_nomes[position] = "Leitor-" + threads[position].getName();
    // } else if (random == 1) {
    // escritores++;
    // threads_nomes[position] = "Escritor-" + threads[position].getName();
    // }

    // if (execucao == 100) {
    // System.out.println("Contador: " + contador + " Leitores: " + leitores + "
    // Escritores: " + escritores
    // + " Tamanho de Threads: " + threads.length);

    // System.out.print("[");
    // for (String a : threads_nomes) {
    // System.out.print(a + " ");
    // }
    // System.out.println("]");
    // }
    // }
}
