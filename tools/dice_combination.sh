#!/bin/bash

# Verifique se o Python está instalado
if ! command -v python3 &> /dev/null
then
    echo "Python não encontrado. Por favor, instale o Python para executar este script."
    exit
fi

# O script Python
read -r -d '' PYTHON_SCRIPT << EOM
from itertools import combinations

# Função para calcular o valor mínimo e máximo de uma combinação de dados
def calcular_valores_dados(combinacao):
  minimo = sum(int(dado[1:]) for dado in combinacao)
  maximo = sum(int(dado[1:]) * (int(dado[1:]) // 2 + 1) for dado in combinacao)
  return minimo, maximo

def possiveis_formulas(meta_dano, dados_disponiveis):
  # Calculando todas as combinações possíveis de dados, considerando a ordem irrelevante
  combinacoes_dados = sum([list(combinations(dados_disponiveis, i)) for i in range(1, 6)], [])
  # Encontrando combinações que podem atingir a meta de dano
  formulas_validas = []
  
  for combinacao in combinacoes_dados:
    minimo, maximo = calcular_valores_dados(combinacao)
    if minimo <= meta_dano <= maximo:
      valor_fixo = meta_dano - minimo
      formula = " + ".join(combinacao) + (" + " + str(valor_fixo) if valor_fixo > 0 else "")
      formulas_validas.append(formula)

  # Adicionando combinações com um único dado e um valor fixo
  for dado in dados_disponiveis:
    dado_minimo = int(dado[1:])
    if dado_minimo <= meta_dano:
      valor_fixo = meta_dano - dado_minimo
      formula = dado + (" + " + str(valor_fixo) if valor_fixo > 0 else "")
      formulas_validas.append(formula)

  # Adicionando combinações com dois dados e um valor fixo
  for dado1 in dados_disponiveis:
    for dado2 in dados_disponiveis:
      minimo = int(dado1[1:]) + int(dado2[1:])
      if minimo <= meta_dano:
        valor_fixo = meta_dano - minimo
        formula = dado1 + " + " + dado2 + (" + " + str(valor_fixo) if valor_fixo > 0 else "")
        formulas_validas.append(formula)

  # Ordenando e removendo duplicatas
  formulas_validas_unicas = list(set(formulas_validas))
  formulas_validas_unicas.sort()
  return formulas_validas_unicas

# Mostrando todas as fórmulas válidas
for formula in possiveis_formulas($1, ['d4', 'd6', 'd8', 'd10', 'd12']):
    print(formula)
EOM

# Execute o script Python
python3 -c "$PYTHON_SCRIPT"
