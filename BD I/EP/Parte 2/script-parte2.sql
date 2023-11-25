--Esse script foi escrito para ser executado
--usando postgresql v 7.6
CREATE SCHEMA IF NOT EXISTS tuspeliculasfavoritas
    AUTHORIZATION pg_database_owner;

GRANT USAGE ON SCHEMA tuspeliculasfavoritas TO PUBLIC;

GRANT ALL ON SCHEMA tuspeliculasfavoritas TO pg_database_owner;

CREATE TABLE tuspeliculasfavoritas.EVENTO
(
	Nome VARCHAR(20) CONSTRAINT PK_NOME PRIMARY KEY,
	Nacionalidade VARCHAR(20),
	Tipo_evento VARCHAR(20),
	Numero_jurados INT,
	Ano_inicio NUMERIC(4)
);
CREATE TABLE tuspeliculasfavoritas.EDICAO
(
	Nome_evento VARCHAR(20),
	Ano NUMERIC(4),
	Data_evento DATE,
	Local_evento VARCHAR(55),
	PRIMARY KEY(Nome_evento, Ano),
	FOREIGN KEY(Nome_evento) REFERENCES tuspeliculasfavoritas.EVENTO(Nome)
);
CREATE TABLE tuspeliculasfavoritas.ARTISTA
(
	Nome_artistico VARCHAR(55) CONSTRAINT PK_NOMEARTISTICO PRIMARY KEY,
	AnosdeCinema INT,
	Site VARCHAR(55),
	Sexo CHAR,
	AnoInicio NUMERIC(4),
	AnoNascimento DATE,
	NomeVerdadeiro VARCHAR(55),
	EstadoAtual VARCHAR(20),
	--As flags servem para identificar se o artista é
	--um ator, diretor, produtor ou roteirista. Como
	--essas classes são sobrepostas, para um mesmo
	--artista todas elas podem valer true
	Flag_ator BOOLEAN,
	Flag_diretor BOOLEAN,
	Flag_produtor BOOLEAN,
	Flag_roteirista BOOLEAN
);
CREATE TABLE tuspeliculasfavoritas.FILME
(
	Titulo_original VARCHAR(55),
	Ano_de_producao NUMERIC(4),
	Titulo_pt_br VARCHAR(20),
	Tema VARCHAR(20),
	Tipo VARCHAR(20),
	Arrecadacao_1Ano NUMERIC(14, 2),
	Idioma_original VARCHAR(20),
	Total_arrecadado NUMERIC(14, 2),
	Nacionalidade VARCHAR(20),
	PRIMARY KEY(Titulo_original, Ano_de_producao)
);
CREATE TABLE tuspeliculasfavoritas.E_JURADO
(
	Nome_artistico VARCHAR(55),
	Nome_evento VARCHAR(20),
	Ano_edicao NUMERIC(4),
	PRIMARY KEY(Nome_artistico, Nome_evento, Ano_edicao),
	FOREIGN KEY(Nome_artistico) REFERENCES tuspeliculasfavoritas.ARTISTA ON DELETE CASCADE,
	FOREIGN KEY(Nome_evento, Ano_edicao) 
	REFERENCES tuspeliculasfavoritas.EDICAO(Nome_evento, Ano) ON DELETE CASCADE
);
CREATE TABLE tuspeliculasfavoritas.PREMIO
(
	Nome_premio VARCHAR(55),
	Nome_evento VARCHAR(20),
	Ano_edicao NUMERIC(4),
	PRIMARY KEY(Nome_premio, Nome_evento, Ano_edicao),
	FOREIGN KEY(Nome_evento, Ano_edicao) REFERENCES tuspeliculasfavoritas.EDICAO(Nome_evento, Ano) ON DELETE CASCADE
);
CREATE TABLE tuspeliculasfavoritas.ARTISTA_INDICADO
(
	Nome_artistico VARCHAR(55),
	Nome_evento VARCHAR(20),
	Ano_edicao NUMERIC(4),
	PRIMARY KEY(Nome_artistico, Nome_evento, Ano_edicao),
	FOREIGN KEY(Nome_artistico) REFERENCES tuspeliculasfavoritas.ARTISTA ON DELETE CASCADE,
	FOREIGN KEY(Nome_evento, Ano_edicao) REFERENCES tuspeliculasfavoritas.EDICAO(Nome_evento, Ano) ON DELETE CASCADE
);
CREATE TABLE tuspeliculasfavoritas.PARTICIPA_DE
(
	Nome_artistico VARCHAR(55),
	Titulo_filme_original VARCHAR(55),
	Ano_de_producao NUMERIC(4),
	--Aqui, as flags servem para identificar quais papéis
	--um artista assume em um filme específico. Se o
	--artista atuar como ator e diretor, os valores
	--seriam: Flag_ator = true, Flag_diretor = true,
	--Flag_produtor = true, Flag_roteirista = true
	Flag_ator BOOLEAN, 
	Flag_diretor BOOLEAN,
	Flag_produtor BOOLEAN,
	Flag_roteirista BOOLEAN,
	PRIMARY KEY(Nome_artistico, Titulo_filme_original, Ano_de_producao),
	FOREIGN KEY(Nome_artistico) REFERENCES tuspeliculasfavoritas.ARTISTA ON DELETE CASCADE,
	FOREIGN KEY(Titulo_filme_original, Ano_de_producao) 
	REFERENCES tuspeliculasfavoritas.Filme(Titulo_original, Ano_de_producao) ON DELETE CASCADE
);
CREATE TABLE tuspeliculasfavoritas.FILME_INDICADO
(
	Titulo_filme_original VARCHAR(55),
	Ano_de_producao NUMERIC(4),
	Nome_evento VARCHAR(20),
	Ano_edicao NUMERIC(4),
	PRIMARY KEY(Titulo_filme_original, Nome_evento, Ano_edicao),
	FOREIGN KEY(Titulo_filme_original, Ano_de_producao)
	REFERENCES tuspeliculasfavoritas.FILME(Titulo_original, Ano_de_producao) ON DELETE CASCADE,
	FOREIGN KEY(Nome_evento, Ano_edicao) REFERENCES tuspeliculasfavoritas.EDICAO(Nome_evento, Ano) ON DELETE CASCADE
);
CREATE TABLE tuspeliculasfavoritas.LANCAMENTO
(
	Titulo_filme_original VARCHAR(55),
	Ano_de_producao NUMERIC(4),
	Local_de_estreia VARCHAR(55),
	Data_de_estreia DATE,
	Sala_de_exibicao NUMERIC(3),
	PRIMARY KEY(Titulo_filme_original, Ano_de_producao, Local_de_estreia),
	FOREIGN KEY(Titulo_filme_original, Ano_de_producao)
	REFERENCES tuspeliculasfavoritas.FILME(Titulo_original, Ano_de_producao) ON DELETE CASCADE
)