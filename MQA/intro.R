# Neste arquivo, apresento os principais conceito até a aula 11. Veja mais sobre
# R em:https://www.youtube.com/playlist?list=PLWhiA_CuQkbCKivmr-5iZy-Fo8ic1iyB2

# Recomendo instalar esta extensão para VS Code:
# https://marketplace.visualstudio.com/items?itemName=REditorSupport.r
# Ou instalar o RStudio: https://posit.co/download/rstudio-desktop/

# Para saber mais como funciona os pacotes e a instalação de pacotes em R, veja:
# https://cran.r-project.org/doc/manuals/r-release/R-intro.html
# https://cran.r-project.org/doc/manuals/r-release/R-admin.html#Installing-packages
# https://www.dataquest.io/blog/install-package-r/

msg <- "Fala, Vagabundo!" # tipo: character
bool <- TRUE # logical
numero <- 2 # numeric
numero_int <- 2L # integer
numero_complexo <- 2 + 5i # complex
string_raw <- charToRaw(msg) # raw (bit do caracter)

print(msg)
print(class(msg))

print(bool)
print(class(bool))

print(numero)
print(class(numero))

print(numero_int)
print(class(numero_int))

print(numero_complexo)
print(class(numero_complexo))

print(string_raw) # Saída: 46 61 6c 61 2c 20 56 61 67 61 62 75 6e 64 6f 21
print(class(string_raw))

# Para rodar o código via CL, use 'Rscript <caminho do arquivo>'
# É possível fazer atribuições de duas formas: "<-" e "="

x <- 10
y <- 5

a <- 10
b <- 3

print(x + y)
print(x - y)
print(x * y)
print(x / y)
print(x^y) # potência. Saída: 1e+05
print(x %% y) # resto. Saída: 0
print(a %% b) # resto. Saída: 1
print(x %/% y) # quociente inteiro. Saída: 2
print(a %/% b) # quociente inteiro. Saída: 3

# Operadores relacionais são iguais ao de C e Java, isto é: <, >, ==, !=, <=, >=

print(5 == "5") # Saída: TRUE. O tipo não é verificado, como em Java e C, mas o conteúdo é validado.
print(5L == "5L") # Saída: FALSE
print(5L == "5") # Saída: TRUE

# Os operadores lógicos também funcionam de forma semelhante a C e Java: ! (negação), && (e), || (ou)

vetor1 <- 1:10 # Cria um vetor que contém os valores de 1 a 10
vetor2 <- 1:10
print(vetor1) # Saída: 1  2  3  4  5  6  7  8  9 10
print(vetor2) # Saída: 1  2  3  4  5  6  7  8  9 10
print(vetor1 + vetor2) # Saída: 2  4  6  8 10 12 14 16 18 20

v1 <- 8
v2 <- 11
vetor <- 1:10
print(v1 %in% vetor) # Verifica se a variável v1 está em vetor. Saída: TRUE
print(v2 %in% vetor) # Saída: FALSE

m <- matrix(c(2, 6, 5, 1, 10, 4), nrow = 2, ncol = 3, byrow = TRUE)
t <- m %*% t(m)
print(t)

# Condicionais funcionam de forma semelhante a C e Java. Exemplo:

if (is.numeric(30L)) {
    print("OK")
} else {
    print("NÃO OK")
}

x <- 51
if (x > 50) {
    print(paste(x, " > 50", sep = "||")) # paste() concatena strings
} else if (x > 30) {
    print(paste(x, " > 30", sep = ""))
} else {
    print(paste(x, " < 30", sep = ""))
}

x <- 2
posicao <- switch(x,
    "1º",
    "2º",
    "3º",
    "4º"
) # switch retorna a string em uma determinada posição.

print(posicao) # No caso, como x == 2, então ele imprimirá "2º"

# Estruturas de recepção funcionam de forma análoga a C e Java. Exemplo:byrow
cont <- 10
v3 <- 3:8
v4 <- c(1, 5, -1, TRUE, "TESTE", FALSE) # c() é uma função que cria um vetor com os argumentos passados por parâmetro
v5 <- LETTERS[1:26] # Cria um vetor desde a primeira até a última letra do alfabeto

while (0 < cont) {
    print(cont)
    cont <- cont - 1 # Em R, não é possível utilizar cont++ ou cont--, como em C e Java
}
print("FIM WHILE")
for (i in v3) { # Este for é equivalente ao "for(int i:numeros)" [foreach] do Java
    print(i)
}
print("FIM 1º FOR")
for (i in v4) {
    print(i)
}
print("FIM 2º FOR")
for (i in v5) {
    print(i)
}
print("FIM 3º FOR")

valorA <- 10
repeat{ # Cria um loop infinito, equivalente a while(true) em C ou Java. É possível parar a execução com uma condicional
    print(valorA)
    valorA <- valorA + 1

    if (valorA > 15) {
        break
    }
}

# Criando funções
# Funções em R não utilizam tipo de retorno. Para retornar um valor, usa-se a
# função return(). O primeiro exemplo é equivalente a um tipo de retorno void
# e o segundo é equivalente a um tipo de retorno String ou char*.
# O terceiro exemplo demonstra a criação de uma lambda function/arrow function.
# O quarto exemplo mostra como criar uma função que aceita múltiplos parâmetros,
# utilizando o operador splat/rest. Existem outras formas de criar funções em R,
# mas acredito que não serão necessárias, por agora, e por isso decidi pular.


# 1º exemplo
imprime_mensagem <- function(msg) {
    m <- paste("Mensagem", msg, sep = ": ")
    print(m)
}
imprime_mensagem("Olá, pessoas!")

# 2º exemplo
imprime_mensagem <- function(msg) {
    m <- paste("Mensagem", msg, sep = ": ")
    return(m)
}
ret <- imprime_mensagem("Olá, pessoas!")
print(ret)

# 3º exemplo
imprime_mensagem <- function(msg) paste("Mensagem", msg, sep = ": ")
msg <- imprime_mensagem("Salve!")
print(msg)

# 4º exemplo
soma <- function(...) {
    v <- c(...) # Faz com que os parâmetros se transformem em um vetor para usarmos o for
    s <- 0
    for (valor in v) {
        s <- s + valor
    }
    return(s)
}
ret <- soma(1, 54, 74, 23, 1, 34, 89)
print(ret) # Saída: 276


# O operador duplo dois-pontos (::) seleciona as definições (de funções) em um
# namespace específico, desde que elas sejam exportadas.

# Por exemplo, em R a função t() [função transposta] é possível de ser usada
# globalmente e está definada no namespace "base", mas caso o usuário queira
# definir sua própria função t(), é possível invocar a função t() global desta
# forma: "base::t"

# O operador triplo dois-pontos (:::) funciona de forma semelhante ao
# operador (::), mas o operador triplo permite o uso de objetos escondidos.
# O uso do operador triplo não é tão comum. É possível utilizar a função
# getAnywhere() para desempenhar a mesma função que o operador triplo.

# library() # Mostra todos os pacotes instalados
# search() # Mostra todos os pacotes carregados
# loadedNamespaces() # Mostra os namespaces. Namespaces são semelhantes às classes do Java

# R.home(component = "home") # Mostra o locar de instalação do R

# Mostra os mirrors (repositório disponíveis para download) disponíveis
# getCRANmirrors(all = FALSE, local.only = FALSE)

# chooseCRANmirror(graphics = getOption("menu.text"), ind = NULL, local.only = FALSE) Veja mais em: https://www.rdocumentation.org/packages/utils/versions/3.6.2/topics/chooseCRANmirror
