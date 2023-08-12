# Instala o pacote 'languageserver'
install.packages("languageserver", repos = "https://vps.fmvz.usp.br/CRAN/")
# Instala o pacote 'MVA'
install.packages("MVA", repos = "https://vps.fmvz.usp.br/CRAN/")

# Os pacotes abaixo são dependências para o uso das demonstrações (demo())

# Instala o pacote 'mvtnorm'
install.packages("mvtnorm", repos = "https://vps.fmvz.usp.br/CRAN/")

# Instala o pacote 'scatterplot3d'
install.packages("scatterplot3d", repos = "https://vps.fmvz.usp.br/CRAN/")

# Instala o pacote 'ape'
install.packages("ape", repos = "https://vps.fmvz.usp.br/CRAN/")

# Instala o pacote 'mclust'
install.packages("mclust", repos = "https://vps.fmvz.usp.br/CRAN/")

# Instala o pacote 'flexclust'
install.packages("flexclust", repos = "https://vps.fmvz.usp.br/CRAN/")

# Instala o pacote 'sem'
install.packages("sem", repos = "https://vps.fmvz.usp.br/CRAN/")

# Instala o pacote 'RLRsim'
install.packages("RLRsim", repos = "https://vps.fmvz.usp.br/CRAN/")


library("MVA") # Carrega o pacote 'MVA' para ser utilizado

demo("Ch-MVA") ### Introduction to Multivariate Analysis
demo("Ch-Viz") ### Visualization
demo("Ch-PCA") ### Principal Components Analysis
demo("Ch-EFA") ### Exploratory Factor Analysis
demo("Ch-MDS") ### Multidimensional Scaling
demo("Ch-CA") ### Cluster Analysis
demo("Ch-SEM") ### Structural Equation Models
demo("Ch-LME") ### Linear Mixed-Effects Models
