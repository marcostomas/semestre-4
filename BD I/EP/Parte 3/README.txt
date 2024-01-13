Turma 94
Nome dos integrantes: Elisa Yea Ji Lee - 11892473
                      Leonardo Zoppello Fernandes - 13838749
                      Marcos Paulo Tomás Ferreira - 13747950
                      Rafael Moura de Almeida - 11225505


A pasta frontend contém arquivos html, css e javascript que permitem
a inserção de dados no banco de dados usando uma interface gráfica
no navegador. Para usar, abra a pasta no VS Code, instale a 
extensão Live Server, clique com o botão direito sobre index.hmtl,
e selecione "Open with live server". Isto irá abrir a página em um
navegador na porta 5500.

A pasta backend contém uma API desenvolvida em Java com endpoints
a serem consumidos pelo frontend, e com comunição com o banco de dados
para salvar os dados que o cliente requisita. Os dados são enviados no
formato json para a api. A api possui classes que representam as entidades
do banco de dados e que são instanciadas usando os atributos do json, 
e o framework Spring Data JPA é responsável por fazer a persistência dados
objetos no banco de dados gerando scripts em sql que fazem a inserção dos
dados nas tabelas relativas.

A API foi feita usando o framework Spring Web. Para usar, é necessário ter
o mvn instalado em seu computador, e também é recomando usar o intellij
para lançar o servidor. O servidor é lançado por padrão na porta 8080. A versão
do Java usada foi a 21.

Essa pasta também tem um arquivo chamado script.sql, com todo o script de sql
que escrevemos para criar todas as tabelas no banco de dados, bem como as
restrições de integridade solicitadas, e também rules que implementam as
restrições de integridade necessárias.

Não conseguimos implementar a parte dos gráficos, mas as restrições de integridade
solicitadas na parte 1 e a inserção de dados da parte 2.a) do enunciado sim.

O vídeo com a explicação do EP está no seguinte link:
https://drive.google.com/drive/folders/13ozzTTC1mFDanwqzr8tNdZU6E3PtgDI8?usp=sharing