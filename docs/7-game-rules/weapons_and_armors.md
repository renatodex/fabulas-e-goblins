---
id: weapons-and-armors
title: Armas e Armaduras
slug: /7-game-rules/weapons-and-armors
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C49a1608a-71af-4124-a8bb-f92b20c0ae0f.jpg
---

![Lista de Equipamentos encontrados nas Terras Místicas...](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cfeb0a893-8ce7-4be0-9619-15ea3085c7fa.jpg)

Seria impossível listar todas as Armas, Armaduras, equipamentos e itens existentes nas Terras Místicas, mas com certeza existem itens bastante comuns que você pode encontrar por ai.

Além disso, diferente dos Poderes, os equipamentos não evoluem de acordo com o Grau, e você como personagem vai sempre precisar buscar a arma certa para o momento certo.

Para simplificar o processo de listar as armas, criamos um sistema simples, porém robusto, que você pode aplicar para qualquer arma e saber quanto ela causará de dano.

## Compondo um equipamento

Para compor um equipamento, você deverá juntar 7 componentes que fazem um equipamento ser como ele é. São os seguintes:

1. Item Base
2. Material
3. Qualidade
4. Conservação
5. Aditivos
6. Refinamento
7. Magia

Juntos, esses componentes permitem que você crie praticamente qualquer tipo de arma no jogo, e de quebra simplificam as tabelas, caso contrário precisariamos quase que criar um livro só pra te mostrar todos os equipamentos disponíveis.

### 1. Item Base

O componente item base determina qual é a forma do seu item.
Seria ele uma Espada? um Arco? Um Cajado?

Basicamente é o que as pessoas diriam que o seu item é caso olhassem para ele sem nunca tê-lo visto.

Esse primeiro componente vai te dizer qual é a fórmula base de dano, assim como o atributo necessário, o tipo de dano, de ataque, e o preço base de compra do item.

| Nome                 | Tipo Ataque    | Dado de Dano Variável     | Valor de Dano Fixo           | Atributo      | Tipo Dano  | Preço (T$) |
| -------------------- | -------------- | ------------------------- | ---------------------------- | ------------- | ---------- | ---------- |
| Adaga                | Físico         | <code>d4</code>           | <code>5</code>               | Destino       | Cortante   | 60         |
| Arco                 | Físico         | <code>d8</code>           | <code>3</code>               | Força         | Perfurante | 130        |
| Bastão               | Físico         | <code>d6</code>           | <code>3</code>               | Resiliência   | Contusivo  | 90         |
| Bengala              | Físico         | <code>d4</code>           | <code>4</code>               | Influência    | Contusivo  | 70         |
| Besta                | Físico         | <code>d10</code>          | <code>1</code>               | Força         | Perfurante | 150        |
| Bomba                | Mágico         | <code>d8</code>           | <code>3</code>               | Intelecto     | Mágico     | 100        |
| Cajado               | Mágico         | <code>d6</code>           | <code>3</code>               | Elo Mágico    | Mágico     | 140        |
| Cetro                | Mágico         | <code>d8</code>           | <code>3</code>               | Elo Mágico    | Mágico     | 170        |
| Chicote              | Físico         | <code>d6</code>           | <code>2</code>               | Força         | Cortante   | 80         |
| Clava                | Físico         | <code>d8</code>           | <code>4</code>               | Força         | Contusivo  | 110        |
| Cruz                 | Mágico         | <code>d6</code>           | <code>4</code>               | Espírito      | Mágico     | 120        |
| Dardos               | Físico         | <code>d4</code>           | <code>4</code>               | Destino       | Perfurante | 60         |
| Espada               | Físico         | <code>d8</code>           | <code>4</code>               | Força         | Cortante   | 100        |
| Estilingue           | Físico         | <code>d6</code>           | <code>3</code>               | Força         | Contusivo  | 75         |
| Foice                | Físico         | <code>d8</code>           | <code>4</code>               | Força         | Cortante   | 150        |
| Graveto              | Físico         | <code>d4</code>           | <code>3</code>               | Intelecto     | Contusivo  | 50         |
| Katar                | Físico         | <code>d6</code>           | <code>3</code>               | Força         | Perfurante | 95         |
| Lança                | Físico         | <code>d10</code>          | <code>2</code>               | Força         | Perfurante | 170        |
| Machado              | Físico         | <code>d12</code>          | <code>4</code>               | Força         | Cortante   | 130        |
| Manopla              | Físico         | <code>d8</code>           | <code>2</code>               | Resiliência   | Contusivo  | 110        |
| Martelo              | Físico         | <code>d8</code>           | <code>3</code>               | Força         | Contusivo  | 160        |
| Maça                 | Físico         | <code>d8</code>           | <code>4</code>               | Resiliência   | Contusivo  | 140        |
| Orbe                 | Mágico         | <code>d6</code>           | <code>3</code>               | Elo Mágico    | Mágico     | 155        |
| Picareta             | Físico         | <code>d8</code>           | <code>2</code>               | Força         | Cortante   | 120        |
| Prisma               | Mágico         | <code>d6</code>           | <code>3</code>               | Elo Mágico    | Mágico     | 150        |
| Projéteis (ex: Pedras)| Físico        | <code>d6</code>           | <code>2</code>               | Força         | Contusivo  | 25         |
| Punhal               | Físico         | <code>d6</code>           | <code>3</code>               | Destino       | Cortante   | 90         |
| Saxo                 | Físico         | <code>d8</code>           | <code>3</code>               | Força         | Cortante   | 130        |
| Tábua                | Físico         | <code>d4</code>           | <code>4</code>               | Resiliência   | Contusivo  | 70         |
| Tridente             | Físico         | <code>d10</code>          | <code>1</code>               | Força         | Perfurante | 165        |
| Urna                 | Mágico         | <code>d6</code>           | <code>4</code>               | Espírito      | Mágico     | 180        |

### 2. Material

Esse componente determina a qualidade do material utilizado na confecção do item.
Alguns podem ser feitos de madeira, outros de Ouro, e outros até de Aço Galiriano, ou até Balarita.

Cada material pode possuir propriedades únicas, e pode influenciar no dano, na sua durabilidade, e óbviamente, no preço.

| Nome          | Incremento de Dano | Durabilidade base | Preço (T$)   |
| ----------    | --------------     | ----------------- | ---------    |
| Madeira       | <code>1</code>     | 3                 | 50           |
| Pedra         | <code>2</code>     | 4                 | 50           |
| Aço/Ferro     | <code>4</code>     | 4                 | 100          |
| Cobre         | <code>6</code>     | 5                 | 150          |
| Prata         | <code>8</code>     | 5                 | 200          |
| Cristal       | <code>10</code>    | 3                 | 250          |
| Ouro          | <code>12</code>    | 6                 | 400          |
| Obsidiana     | <code>14</code>    | 6                 | 600          |
| Aço Galiriano | <code>16</code>    | 7                 | 800          |
| Grimônio      | <code>18</code>    | 6                 | 1000         |
| Zigônio       | <code>20</code>    | 6                 | 1200         |
| Alizarita     | <code>15</code>    | 5                 | 1500         |
| Urikirita     | <code>15</code>    | 5                 | 2000         |
| Balarita      | <code>15</code>    | 5                 | 2500         |
| Danarita      | <code>15</code>    | 5                 | 3000         |

### 3. Qualidade

A Qualidade determina o primor de construção do item.
Uma espada feita de sobras de material sempre será inferior em termos de corte e eficiência, enquanto obras primas criadas por ferreiros lendários costumam utilizar materiais de primeira e que duram por gerações.

| Nome       | Descrição                                                                                                                                                                                                       | Incremento de Dano              | Preço (T$) | Durabilidade |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------  | ------------ |
| Pobre      | Um item feito de material frágil/poroso que possui baixa qualidade/durabilidade. Provavelmente foi criado nas pressas por algum ferreiro de esquina.                                                            | <code>-1 dado</code>            | 20         | -1 Carga     |
| Comum      | Um item feito com materiais acessíveis, mas que é honesto ao cumprir sua função.                                                                                                                                | --                              | 80        | 0 Cargas     |
| Mediano    | Um item de fabricação mediana. Não é feito com o que há de melhor, mas parece ter sido construído com materiais de qualidade razoável.                                                                          | <code>+1 dado</code>            | 200        | +1 Carga     |
| Superior   | O mínimo que um bom ferreiro poderia esperar. Itens superiores são de ótima fabricação e acabamento, feito com materiais mais difíceis de encontrar, mão de obra de qualidade e que com certeza não decepciona. | <code>+2 dados</code>           | 2000       | +2 Cargas    |
| Obra prima | Um item excepcional, feito com materiais raros e que foi feito para passar por várias gerações.                                                                                                                 | <code>+3 dados</code>           | 5000       | +3 Cargas    |

### 4. Conservação

Mesmo o mais primoroso dos Machados está sujeito à ação do tempo.
Com a utilização prolongada, as lâminas e as pontas das armas, assim como as placas das armaduras tendem a enfraquecer e se tornarem menos eficientes ao longo dos anos.

| Nome       | Descrição                                                                                                                                 | Decremento de Cargas   | Preço (T$)            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------- |
| Inutilizável | Um item deteriorado, possivelmente quebrado e inviável de se utilizar.                                                                  | <code>Quebrado</code>  | 0                     |
| Usado | Um item provavelmente recondicionado, que já viu várias batalhas. Já não oferece mais os mesmos benefícios de antes, mas ainda pode ser usado. | <code>-2</code>        | <code>+ Preço/3</code>         |
| Pouco uso    | Um item com marcas visíveis de uso, que não está mais em seu estado original mas pode ser utilizado sem grandes problemas.              | <code>-1</code>        | <code>+ (Preço/2)</code>     |
| Impecável   | Um item em perfeito estado de conservação, provavelmente nunca foi usado e parece impecável.                                             | <code>0</code>         | <code>+ (Preço)</code>     |

### 5. Aditivos

Armas podem ser modificadas durante ou após sua construção para torná-las mais eficientes, potentes ou duráveis.

Diferente dos outros componentes, uma mesma arma pode possuir diversos Aditivos ao mesmo tempo, desde que não entrem em conflito com o próprio espaço físico do objeto.

| Nome                | Descrição                                                                                              | Incremento de Dano | Preço (T$) |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ---------  |
| Espinhos            | Adiciona espinhos afiados à arma, tornando cada golpe mais doloroso.                          | d4                 | 50         |
| Larga/Pesada        | Aumenta o peso e a dimensão da arma, tornando-a mais difícil de manusear, mas mais poderosa.           | d6                 | 60         |
| Perfurante          | Refina a lâmina para que ela possa penetrar armaduras com maior facilidade. <code>+(X) Ataque Físico</code>                           | d6                 | 90         |
| Vorpal              | Aumenta a chance de decapitar o adversário em um golpe bem-sucedido.                                   | d10 (5% chance)    | 200        |
| Ressonante          | A arma vibra com uma frequência única, causando dano extra a estruturas e construções.                | d6 contra estruturas | 85    |
| Reforçada           | Reforça o material da arma, adicionando <code>+(X)</code> de durabilidade tornando-a mais resistente a quebras e desgastes.                         | d4                 | 80         |
| Aterradora          | Aparência ameaçadora que causa <code>Terror M=(X)</code> em alvos padrões atingidos por ela.                                         | d4 + medo          | 120        |
| Leve                | Reduz significativamente o peso da arma, podendo ser usada com apenas <code>1 mão</code>.                         | d4                 | 70         |
| Longa               | Sua construção permite atacar alvos a até <code>(X) espaços</code> de distância adicional.                               | d4                 | 70         |

Exemplo:
Uma espada de madeira comum em excelente estado de conservação que causa <code>Terror 6</code> em inimigos, pode ser utilizada em <code>1 mão</code> e perfura Armaduras dando um <code>Bônus de +2</code> pode ser definida assim:

`Espada de Madeira Impecável +0 - Leve, Perfurante (2) e Aterradora (5)`<br/>
*(Sempre que a qualidade for `comum`, ela pode ser omitida do nome do item)*

### 6. Refinamento

Todo equipamento no jogo é apresentado com um **modificador de ataque/defesa** que segue o seguinte padrão:

- Espada de Madeira +0
- Orbe de Cristal +12
- Escudo de Pedra +2
- Armadura de Ouro +8

Enquanto armas utilizam **modificadores de ataque** (físico ou mágico, dependendo da arma), itens de proteção como escudos e armaduras utilizam **modificadores de defesa**.

Logo, o `Escudo de Pedra +2` por exemplo ofereceria ao aventureiro um **Bônus de +2 de Defesa Física**, enquanto `Espada de Madeira +0` ofereceria um **Bônus de +0 de Ataque Físico**, e uma `Orbe de Cristal +12` ofereceria um **Bônus de +12 de Ataque Mágico**. *(porque a Orbe é um tipo de arma mágica)*

Em um grupo de RPG balanceado, sugerimos que armas e armaduras sigam os seguintes  limites de modificadores:

| Grau | Ataque Físico            | Ataque Mágico | Defesa Física | Defesa Mágica |
|------|--------------------------|---------------|---------------|---------------|
| Grau 1 (Níveis 1 a 5)    | Entre +0 e +2            | Entre +0 e +2            | Entre +0 e +2            | Entre +0 e +2            |
| Grau 2 (Níveis 5 a 10)    | Entre +2 e +4            | Entre +2 e +4            | Entre +2 e +4            | Entre +2 e +4            |
| Grau 3 (Níveis 11 a 15)   | Entre +4 e +8            | Entre +4 e +8            | Entre +4 e +8            | Entre +4 e +8            |
| Grau 4 (Níveis 16 a 20)   | Entre +8 e +16           | Entre +8 e +16           | Entre +8 e +16           | Entre +8 e +16           |

Cada nível de refinamento aumenta o preço da arma em questão, seguindo a tabela:

| Grau | Preço (Temirs) |
|------|--------------------------|
| +1 |  50 |
| +2 |  200 |
| +3 |  600 |
| +4 |  1.200 |
| +5 |  1.600 |
| +6 |  2.000 |
| +7 |  2.400 |
| +8 |  3.000 |
| +9 |  4.000 |
| +10 |  5.000 |
| +11 |  5.800 |
| +12 |  6.400 |
| +13 |  7.000 |
| +14 |  7.800 |
| +15 |  8.500 |
| +16 |  9.500 |

### 7. Magia

Por último, para completar a composição da sua arma, existem propriedades mágicas que itens podem ter para se tornarem ainda mais poderosos.

Aqui, provavelmente o céu é o limite, mas mesmo assim vamos descrever algumas propriedades comuns:

| Nome                | Descrição                                                                                              | Incremento de Dano | Preço (T$) |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ---------  |
| Venenosa            | A lâmina é coberta com um veneno paralisante, causando dano de Veneno                                 | d4 por 3 turnos    | 70         |
| Mortal              | Pode matar um inimigo em um único golpe.                                                              | d8                 | 80         |
| Escaldante          | Está sempre em alta temperatura, causando queimaduras no alvo.                                   | d6                 | 90         |
| Congelante          | Encanta a arma com magia de gelo, podendo congelar o alvo brevemente.                                 | d4 + imobilização  | 100        |
| Elétrica            | Concede à arma o poder dos raios, podendo paralisar o inimigo com choques elétricos.                  | d6 + atordoamento  | 110        |
| Sagrada             | Abençoada por entidades divinas, eficaz contra mortos-vivos e entidades malignas.                     | d8 contra mortos-vivos | 120 |
| Profana             | Corrompida por energias sombrias, é especialmente eficaz contra criaturas celestiais.                  | d8 contra celestiais | 130  |
| Corrosiva           | Danifica armas e armaduras ao contato.                                                                                  | d8 contra celestiais | 130  |
| Solar               | Encantada com a energia do sol, causa mais dano durante o dia.                                      | d8 à noite         | 110        |
| Lunar               | Encantada com a energia da lua, causa mais dano durante a noite.                                      | d8 à noite         | 110        |
| Ecliptica               | Tem seu dano acentuado em Eclipses e Luas de Orvalho.                                      | d8 à noite         | 110        |
| Invernal            | Causa dano acentuado no Inverno e em momentos de frio intenso.                                                    | d8 à noite         | 110        |
| Infernal            | Causa dano acentuado no Verão e em terras de calor intenso.                                                    | d8 à noite         | 110        |
| Zéfirica            | Acertos também desferem rajadas de vento que empurram o alvo.                                                    | d8 à noite         | 110        |
| Translocadora       | Acertos translocam o alvo para outra coordenada.                                                    | d8 à noite         | 110        |
| Enraizante          | Acertos fazem brotar vinhas que prendem o alvo.                                                    | d8 à noite         | 110        |
| Vampírica           | Absorve a vitalidade do alvo, restaurando a saúde do usuário.                                         | d4, +2 de vida     | 140        |
| Cegante             | Encantada para emitir uma luz brilhante, pode cegar temporariamente o inimigo.                        | d4 + cegueira      | 95         |
| Adaptativa           | Adapta-se ao elemento da área ao redor (fogo, água, terra, ar) e usa esse poder contra os inimigos.  | d6 variável        | 150        |
| Elemental           | O item é embedado no elemento em questão (fogo, trovão, terra, etc), causando dano do elemento no caso de arma, ou absorvendo o elemento no caso de armadura. | d6 variável        | 150        |
