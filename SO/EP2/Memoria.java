import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;

public class Memoria {
    private boolean estaEmUso = false;
    private List<String> memoria = new ArrayList<String>();
    private Set<Thread> threads_em_execucao = new HashSet<Thread>();

    public Memoria() {
        try {
            File arq = new File("bd.txt");
            Scanner leitor_de_arq = new Scanner(arq);

            while (leitor_de_arq.hasNextLine())
                memoria.add(leitor_de_arq.nextLine());

            leitor_de_arq.close();

        } catch (Exception e) {
            e.getMessage();
        }
    }

    public String getMem() {
        ThreadLocalRandom generator = ThreadLocalRandom.current();
        int position = generator.nextInt(100);

        return this.memoria.get(position);
    }

    public void setMem(String str) {
        ThreadLocalRandom generator = ThreadLocalRandom.current();
        int position = generator.nextInt(100);

        this.memoria.set(position, str);
    }

    public boolean getUso(Thread quemEstaAcessando) {
        this.threads_em_execucao.add(quemEstaAcessando);
        return this.estaEmUso;
    }

    public void toggleUso(Thread quemEstaAcessando) {
        if (this.estaEmUso) {
            this.threads_em_execucao.remove(quemEstaAcessando);
            this.estaEmUso = false;
        } else
            this.estaEmUso = true;
    }

    public boolean temReader() {
        for (Thread t : threads_em_execucao) {
            if (t.getClass() == Reader.class)
                return true;
        }

        return false;
    }
}
