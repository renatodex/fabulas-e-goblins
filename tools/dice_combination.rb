require 'set'

# Função para calcular o valor mínimo e máximo de uma combinação de dados
def calcular_valores_dados(combinacao)
  minimo = combinacao.sum { |dado| dado[1..].to_i }
  maximo = combinacao.sum { |dado| dado[1..].to_i * (dado[1..].to_i / 2 + 1) }
  return minimo, maximo
end

def possiveis_formulas(meta_dano, dados_disponiveis)
  # Calculando todas as combinações possíveis de dados, considerando a ordem irrelevante
  combinacoes_dados = []
  (1..5).each do |i|
    combinacoes_dados += dados_disponiveis.repeated_combination(i).to_a
  end

  # Encontrando combinações que podem atingir a meta de dano
  formulas_validas = Set.new
  
  combinacoes_dados.each do |combinacao|
    minimo, maximo = calcular_valores_dados(combinacao)
    if minimo <= meta_dano && meta_dano <= maximo
      valor_fixo = meta_dano - minimo
      formula = combinacao.join(' + ') + (valor_fixo > 0 ? " + #{valor_fixo}" : '')
      formulas_validas.add(formula)
    end
  end

  # Adicionando combinações com um único dado e um valor fixo
  dados_disponiveis.each do |dado|
    dado_minimo = dado[1..].to_i
    if dado_minimo <= meta_dano
      valor_fixo = meta_dano - dado_minimo
      formula = dado + (valor_fixo > 0 ? " + #{valor_fixo}" : '')
      formulas_validas.add(formula)
    end
  end

  # Ordenando e removendo duplicatas
  formulas_validas.to_a.sort
end

# Mostrando todas as fórmulas válidas
possiveis_formulas(ARGV[0].to_i, ['d4', 'd6', 'd8', 'd10', 'd12']).each { |formula| puts formula }
