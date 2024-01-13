-- Turma 94
-- Nome dos integrantes: Elisa Yea Ji Lee - 11892473
--						 Leonardo Zoppello Fernandes - 13838749
--						 Marcos Paulo Tomás Ferreira - 13747950
--						 Rafael Moura de Almeida - 11225505


CREATE TABLE EVENTO
(
	Nome VARCHAR(20) CONSTRAINT PK_NOME PRIMARY KEY,
	Nacionalidade VARCHAR(20),
	Tipo_evento VARCHAR(20) NOT NULL,
	Numero_jurados INT NOT NULL,
	Ano_inicio NUMERIC(4)
);
CREATE TABLE EDICAO
(
	Nome_evento VARCHAR(20),
	Ano NUMERIC(4),
	Data_evento DATE NOT NULL,
	Local_evento VARCHAR(55) NOT NULL,
	PRIMARY KEY(Nome_evento, Ano),
	FOREIGN KEY(Nome_evento) REFERENCES EVENTO(Nome)
);

CREATE TABLE ARTISTA
(
	nome_artistico VARCHAR(55) CONSTRAINT PK_NOMEARTISTICO PRIMARY KEY,
	anos_de_cinema INT NOT NULL,
	site VARCHAR(55),
	sexo VARCHAR(20) NOT NULL,
	ano_inicio NUMERIC(4) NOT NULL,
	ano_nascimento NUMERIC(4) NOT NULL,
	nome_verdadeiro VARCHAR(55),
	estado_atual VARCHAR(20),
	--As flags servem para identificar se o artista é
	--um ator, diretor, produtor ou roteirista. Como
	--essas classes são sobrepostas, para um mesmo
	--artista todas elas podem valer true
	flag_ator BOOLEAN NOT NULL,
	flag_diretor BOOLEAN NOT NULL,
	flag_produtor BOOLEAN NOT NULL,
	flag_roteirista BOOLEAN NOT NULL
);
CREATE TABLE FILME
(
	Titulo_original VARCHAR(55),
	Ano_de_producao NUMERIC(4),
	Titulo_pt_br VARCHAR(20),
	Tema VARCHAR(20) NOT NULL,
	Tipo VARCHAR(20) NOT NULL,
	Arrecadacao_Prim_Ano INT,
	Idioma_original VARCHAR(20),
	Total_arrecadado INT,
	Nacionalidade VARCHAR(20),
	PRIMARY KEY(titulo_original, ano_de_producao)
);
CREATE TABLE EJURADO
(
	nome_artistico VARCHAR(55),
	nome_evento VARCHAR(20),
	ano_edicao NUMERIC(4),
	PRIMARY KEY(nome_artistico, nome_evento, ano_edicao),
	FOREIGN KEY(nome_artistico) REFERENCES ARTISTA ON DELETE CASCADE,
	FOREIGN KEY(Nome_evento, Ano_edicao) 
	REFERENCES EDICAO(Nome_evento, Ano) ON DELETE CASCADE
);
CREATE TABLE PREMIO
(
	nome_premio VARCHAR(55),
	nome_evento VARCHAR(20),
	ano_edicao NUMERIC(4),
	PRIMARY KEY(Nome_premio, Nome_evento, Ano_edicao),
	FOREIGN KEY(Nome_evento, Ano_edicao) REFERENCES EDICAO(Nome_evento, Ano) ON DELETE CASCADE
);
CREATE TABLE ARTISTA_INDICADO
(
	nome_artistico VARCHAR(55),
	nome_premio VARCHAR(55),
	nome_evento VARCHAR(20),
	ano_edicao NUMERIC(4),
	titulo_original VARCHAR(55) NOT NULL,
	ano_de_producao NUMERIC(4) NOT NULL,
	ganhou BOOLEAN NOT NULL,
	PRIMARY KEY(Nome_artistico, Nome_premio, Nome_evento, Ano_edicao),
	FOREIGN KEY(Nome_artistico) REFERENCES ARTISTA ON DELETE CASCADE,
	FOREIGN KEY(Nome_premio, Nome_evento, Ano_edicao) REFERENCES PREMIO(Nome_premio, Nome_evento, Ano_edicao) ON DELETE CASCADE,
	FOREIGN KEY(Titulo_original, Ano_de_producao) REFERENCES FILME(Titulo_original, Ano_de_producao) ON DELETE CASCADE
);
CREATE TABLE PARTICIPA_DE
(
	nome_artistico VARCHAR(55),
	titulo_filme_original VARCHAR(55),
	ano_de_producao NUMERIC(4),
	--Aqui, as flags servem para identificar quais papéis
	--um artista assume em um filme específico. Se o
	--artista atuar como ator e diretor, os valores
	--seriam: Flag_ator = true, Flag_diretor = true,
	--Flag_produtor = true, Flag_roteirista = true
	flag_ator BOOLEAN,
	e_ator_principal BOOLEAN,
	flag_diretor BOOLEAN,
	e_diretor_principal BOOLEAN,
	flag_produtor BOOLEAN,
	flag_roteirista BOOLEAN,
	PRIMARY KEY(Nome_artistico, Titulo_filme_original, Ano_de_producao),
	FOREIGN KEY(Nome_artistico) REFERENCES ARTISTA ON DELETE CASCADE,
	CONSTRAINT FK_FILME FOREIGN KEY(Titulo_filme_original, Ano_de_producao)
	REFERENCES Filme(Titulo_original, Ano_de_producao) ON DELETE CASCADE
);
CREATE TABLE FILME_INDICADO
(
	titulo_original VARCHAR(55),
	ano_de_producao NUMERIC(4),
	nome_premio VARCHAR(55),
	nome_evento VARCHAR(20),
	ano_edicao NUMERIC(4),
	ganhou BOOLEAN NOT NULL,
	PRIMARY KEY(Titulo_original, Ano_de_producao, Nome_premio, Nome_evento, Ano_edicao),
	FOREIGN KEY(Titulo_original, Ano_de_producao)
	REFERENCES FILME(Titulo_original, Ano_de_producao) ON DELETE CASCADE,
	FOREIGN KEY(Nome_premio, Nome_evento, Ano_edicao) REFERENCES PREMIO(Nome_premio, Nome_evento, Ano_edicao) ON DELETE CASCADE
);
CREATE TABLE LANCAMENTO
(
	titulo_filme_original VARCHAR(55),
	ano_de_producao NUMERIC(4),
	local_de_estreia VARCHAR(55),
	data_de_estreia DATE,
	sala_de_exibicao NUMERIC(3),
	PRIMARY KEY(Titulo_filme_original, Ano_de_producao, Local_de_estreia),
	FOREIGN KEY(Titulo_filme_original, Ano_de_producao)
	REFERENCES FILME(Titulo_original, Ano_de_producao) ON DELETE CASCADE
);

-- Restrição para impedir que atores
-- participem de um documentário
CREATE RULE restricaoDocumentario AS
	ON INSERT TO PARTICIPA_DE
	WHERE(NEW.Flag_ator = true)
	AND (SELECT Tipo 
		FROM FILME F
		WHERE NEW.Titulo_filme_original = F.Titulo_original) = 'Documentário'
	DO INSTEAD NOTHING;
	
	
-- Restrição para impedir que um artista que não
-- é ator, por exemplo, participe como ator em
-- algum filme. Isso vale para as outras
-- funções que um artista pode ter
CREATE RULE restricaoFuncaoArtista AS
	ON INSERT TO PARTICIPA_DE
	WHERE((NEW.flag_ator = true)
	AND EXISTS(SELECT Flag_ator 
		FROM ARTISTA AR
		WHERE NEW.nome_artistico = AR.nome_artistico
		AND Flag_ator = false))
	OR ((NEW.flag_diretor = true)
	AND EXISTS(SELECT Flag_diretor 
		FROM ARTISTA AR
		WHERE NEW.nome_artistico = AR.nome_artistico
		AND flag_diretor = false))
	OR ((NEW.flag_produtor = true)
	AND EXISTS(SELECT Flag_produtor 
		FROM ARTISTA AR
		WHERE NEW.nome_artistico = AR.nome_artistico
		AND flag_produtor = false))
	OR ((NEW.flag_roteirista = true)
	AND EXISTS(SELECT Flag_roteirista 
		FROM ARTISTA AR
		WHERE NEW.nome_artistico = AR.nome_artistico
		AND flag_roteirista = false))
	DO INSTEAD NOTHING;

-- Restrições para impedir que um artista que não participa
-- como ator de um filme seja ator principal, ou que não
-- seja diretor de um filme seja um diretor principal
CREATE RULE restricaoAtorPrincipal
	AS ON INSERT TO PARTICIPA_DE
	WHERE NEW.flag_ator = false
	AND NEW.e_ator_principal =  true
	DO INSTEAD NOTHING;
	
CREATE RULE restricaoDiretorPrincipal
	AS ON INSERT TO PARTICIPA_DE
	WHERE NEW.flag_diretor = false
	AND NEW.e_diretor_principal = true
	DO INSTEAD NOTHING;
	
-- Restrição para evitar que uma edição tenha
-- mais jurados que o número determinado
CREATE RULE restricaoNumeroJurados
	AS ON INSERT TO EJURADO
	WHERE(SELECT COUNT(*)
		 FROM EJURADO E
		 WHERE NEW.nome_evento = E.Nome_evento
		 AND NEW.Ano_edicao = E.Ano_edicao) >=
		 (SELECT Numero_jurados
		 FROM EVENTO EV
		 WHERE NEW.Nome_evento = EV.Nome)
	DO INSTEAD NOTHING;


CREATE RULE restricaoJuriAtor
	AS ON INSERT TO EJURADO
	WHERE NEW.nome_Artistico IN
	(
		SELECT nome_Artistico
			FROM Participa_de PART, Filme_Indicado FI
			WHERE PART.titulo_filme_original = FI.titulo_original
			AND FI.ano_edicao = NEW.ano_edicao
	)
	DO INSTEAD NOTHING;