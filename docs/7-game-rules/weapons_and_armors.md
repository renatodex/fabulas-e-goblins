---
id: weapons-and-armors
title: Armas e Armaduras
slug: /7-game-rules/weapons-and-armors
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C49a1608a-71af-4124-a8bb-f92b20c0ae0f.jpg
---

import EquipmentBlock from './../../src/components/equipment_block/index'

![Lista de Equipamentos encontrados nas Terras Místicas...](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cfeb0a893-8ce7-4be0-9619-15ea3085c7fa.jpg)

Seria impossível listar todas as Armas, Armaduras, equipamentos e itens existentes nas Terras Místicas, mas com certeza existem itens bastante comuns que você pode encontrar por ai.

Além disso, diferente dos Poderes, os equipamentos não evoluem de acordo com o Grau, e você como personagem vai sempre precisar buscar a arma certa para o momento certo.

Para simplificar o processo de listar as armas, criamos um sistema simples, porém robusto, que você pode aplicar para qualquer arma e saber quanto ela causará de dano.

## Compondo um equipamento

Para compor um equipamento, você deverá juntar 5 componentes que fazem um equipamento ser como ele é. São os seguintes:

1. Item Base
2. Material
3. Afixos Físicos
4. Afixos Mágicos
5. Refinamento

Juntos, esses componentes permitem que você crie praticamente qualquer tipo de arma no jogo, e de quebra simplificam as tabelas, caso contrário precisariamos quase que criar um livro só pra te mostrar todos os equipamentos disponíveis.

### 1. Item Base

O componente item base determina qual é a forma do seu item.
Seria ele uma Espada? um Arco? Um Cajado?

Basicamente é o que as pessoas diriam que o seu item é caso olhassem para ele sem nunca tê-lo visto.

Esse primeiro componente vai te dizer qual é a fórmula base de dano, assim como o atributo necessário, o tipo de dano, de ataque, e o preço base de compra do item.

| Nome                 | Tipo Ataque | Dano Base             | Atributo    | Tipo Dano  | Preço (T$) |
|----------------------|-------------|-----------------------|-------------|------------|------------|
| Adaga                | Físico      | <code>2d4 + 7</code>  | Destino     | Cortante   | 200         |
| Arco                 | Físico      | <code>d8 + 7</code>   | Força       | Perfurante | 200        |
| Bastão               | Físico      | <code>d6 + 9</code>   | Resiliência | Contusivo  | 200         |
| Bengala              | Físico      | <code>d4 + 11</code>  | Influência  | Contusivo  | 200         |
| Besta                | Físico      | <code>d10 + 5</code>  | Força       | Perfurante | 200        |
| Bomba                | Mágico      | <code>d8 + 7</code>   | Intelecto   | -     | 300        |
| Cajado               | Mágico      | <code>d6 + 9</code>   | Elo Mágico  | -     | 300        |
| Cetro                | Mágico      | <code>d8 + 7</code>   | Elo Mágico  | -     | 300        |
| Chicote              | Físico      | <code>d6 + 8</code>   | Força       | Cortante   | 200         |
| Clava                | Físico      | <code>d8 + 7</code>   | Força       | Contusivo  | 200         |
| Cruz                 | Mágico      | <code>2d6 + 3</code>   | Espírito    | -     | 300         |
| Dardos               | Físico      | <code>2d4 + 7</code>  | Destino     | Perfurante | 200         |
| Espada               | Físico      | <code>d8 + 7</code>   | Força       | Cortante   | 200         |
| Estilingue           | Físico      | <code>d6 + 9</code>   | Força       | Contusivo  | 200         |
| Foice                | Físico      | <code>d8 + 7</code>   | Força       | Cortante   | 200        |
| Graveto              | Físico      | <code>d4 + 11</code>  | Intelecto   | Contusivo  | 200         |
| Katar                | Físico      | <code>d6 + 9</code>   | Força       | Perfurante | 200         |
| Lança                | Físico      | <code>d10 + 6</code>  | Força       | Perfurante | 200        |
| Machado              | Físico      | <code>d12 + 4</code>  | Resiliência       | Cortante   | 200        |
| Manopla              | Físico      | <code>d8 + 7</code>   | Resiliência | Contusivo  | 200         |
| Martelo              | Físico      | <code>d8 + 7</code>   | Força       | Contusivo  | 200        |
| Maça                 | Físico      | <code>d8 + 7</code>   | Resiliência | Contusivo  | 200         |
| Orbe                 | Mágico      | <code>d6 + 9</code>   | Elo Mágico  | -     | 300        |
| Picareta             | Físico      | <code>d8 + 8</code>   | Força       | Cortante   | 200         |
| Prisma               | Mágico      | <code>d6 + 9</code>   | Elo Mágico  | -     | 300        |
| Projéteis (ex: Pedras)| Físico     | <code>d6 + 9</code>   | Força       | Contusivo  | 50         |
| Punhal               | Físico      | <code>d6 + 9</code>   | Destino     | Cortante   | 200         |
| Saxo                 | Físico      | <code>d8 + 7</code>   | Força       | Cortante   | 200        |
| Tábua                | Físico      | <code>d4 + 11</code>  | Resiliência | Contusivo  | 200         |
| Tridente             | Físico      | <code>d10 + 5</code>  | Força       | Perfurante | 200        |
| Urna                 | Mágico      | <code>d6 + 8</code>   | Espírito    | -     | 300        |


### 2. Material

Esse componente determina a qualidade do material utilizado na confecção do item.
Alguns podem ser feitos de madeira, outros de Ouro, e outros até de Aço Galiriano, ou até Balarita.

Cada material pode possuir propriedades únicas, e pode influenciar no dano, na sua durabilidade, e óbviamente, no preço.

| Nome          | Dano por Grau      | Multiplicador       | Grau Recomendado |
| ----------    | ----------------   | ------------------- | ---------------- |
| Madeira       | <code>0</code>     | 0.5                 | 1                |
| Pedra         | <code>5</code>     | 1                   | 1                |
| Aço           | <code>6</code>     | 1.5                 | 1                |
| Bronze         | <code>7</code>    | 2.0                 | 2                |
| Prata         | <code>8</code>     | 2.5                 | 2                |
| Ouro          | <code>10</code>    | 3.5                 | 2                |
| Platina       | <code>10</code>    | 4.0                 | 3                |
| Diamante       | <code>9</code>    | 4.5                 | 3                |
| Obsidiana     | <code>12</code>    | 5.0                 | 3                |
| Aço Galiriano | <code>14</code>    | 5.5                 | 3                |
| Grimônio      | <code>16</code>    | 6.0                 | 4                |
| Zigônio       | <code>18</code>    | 7.0                 | 4                |
| Alizarita     | <code>20</code>    | 8.0                 | 4                |
| Urikirita     | <code>22</code>    | 8.0                 | 4                |
| Balarita      | <code>24</code>    | 8.0                 | 4                |
| Danarita      | <code>26</code>    | 8.0                 | 4                |

### 3. Afixos Físicos

Armas podem possuir as mais diversas propriedades, adquiridas durante o seu uso, ou até mesmo em sua construção para torná-las mais eficientes, potentes e duráveis.

Diferente dos outros componentes, uma mesma arma pode possuir diversos Afixos ao mesmo tempo, desde que não entrem em conflito com o próprio espaço físico do objeto.

| Nome                | Descrição                                                                                              | Incremento de Dano | Preço (T$) |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | ---------  |
| Espinhos (F)            | Adiciona espinhos afiados ao item, adicionando a característica <code>Perfurar</code>. Em armas faz com que golpes infligidos causem um adicional de <code>(F)</code> de dano. Em armaduras faz com que golpes recebidos causem <code>(F)</code> de dano perfurante.                         | d4                 | 50         |
| Larga (F)       | Um item grande. No caso de armas, exige que seja manipulada com as duas mãos, além de causar <code>(F)</code> de dano adicional. No caso de armaduras, só pode ser utilizada por personagens grandes e largos e que sejam compatíveis com o Perfil do item. | d6                 | 60         |
| Perfurante          | Refina a lâmina para que ela possa penetrar armaduras com maior facilidade. <code>+(X) Ataque Físico</code>                           | d6                 | 90         |
| Vorpal (F)              | Aplica <code>Morte (F)</code> nos ataques, permitindo aniquilar o adversário em um único golpe.                                   | d10 (5% chance)    | 200        |
| Ressonante (F)          | A arma vibra com uma frequência sônica, causando <code>(F)</code> de dano extra a estruturas e construções.                | d6 contra estruturas | 85    |
| Predadora (F)          | Cada corte feito por essa arma em um alvo fazem com que cortes consecutivos causem <code>(F)</code> de dano adicional. Só funciona em armas.                                         | d4 + medo          | 120        |
| Trambolhenta (M)          | Esse item é Massivo e reduz os Pontos de Movimento em <code>-(M)</code> sempre que estiver sendo usado.                                         | d4 + medo          | 120        |
| Aterradora (M)          | Aparência ameaçadora que causa <code>Terror (M)</code> em alvos atingidos por ela que sejam da mesma categoria de tamanho do atacante.                                         | d4 + medo          | 120        |
| Telescópica (M)          | Armas Telescópicas aumentam a distância de ataque em armas à distância em <code>(M)</code> espaços. Similar ao Afixo <code>Longa</code>.                                         | d4 + medo          | 120        |
| Escoteira (X)          | Armaduras escoteiras aumentam o espaço de armazenamento em <code>+X</code>.                                         | d4 + medo          | 120        |
| Leve                | Reduz significativamente o peso da arma, podendo ser usada com apenas <code>1 mão</code>. Pode ser usada em conjunto com o afixo <code>Larga</code> para anular o requisito de <code>2 mãos</code>.                | d4                 | 70         |
| Longa (M)               | Sua construção permite atacar alvos a até <code>(M) espaços</code> de distância adicional.                               | d4                 | 70         |
| Clivada               | Ataques com armas desse tipo também atingem <b>alvos adjacentes</b> ao alvo escolhido.                               | d4                 | 70         |
| Inutilizável (X) | Um item deteriorado, quebrado e inviável de se utilizar. Possui durabilidade 0 até que seja refinado pelo menos <code>(X)</code> vezes. Itens inutilizáveis não podem ter níveis de refinamento prévio. | <code>0</code>     | 50         |
| Frágil (X)    | Um item prestes a quebrar feito de material frágil/poroso de baixíssima qualidade. Não possui durabilidade e quebrará permanentemente após <code>(X)</code> ataques, bloqueios ou impactos contra objetos/superfícies. | <code>0</code>     | 50         |
| Deteriorada | Um item desgastado e velho que já viu várias batalhas. Possui apenas <code>1</code> de Durabilidade máxima e não pode ser refinado. | <code>0</code>     | 50         |
| Usada (N/N)    | Um item com marcas visíveis de uso, que não está mais em seu estado original. Durabilidade reduzida em <code>N/N</code> cargas (sendo o primeiro a Durabilidade atual e o segundo a Durabilidade máxima). | <code>0</code>     | 50         |
| Reforçada (N/X?)           | Reforça o material do item, adicionando <code>+(N)</code> de durabilidade tornando-o mais resistente a quebras e desgastes. Em armaduras, aumenta a defesa em <code>+(X)</code>                       | d4                 | 80         |
| Obra prima | Um item excepcional, forjado com materiais superiores e pensado para durar por gerações. Para todos os efeitos é considerado um item de <b>Grau 5</b>. | <code>0</code>     | 50         |

Exemplo:
Uma espada de madeira comum em excelente estado de conservação que causa <code>Terror 6</code> em inimigos, pode ser utilizada em <code>1 mão</code> e perfura Armaduras dando um <code>Bônus de +2</code> pode ser definida assim:

`Espada de Madeira Impecável +0 - Leve, Perfurante (2) e Aterradora (5)`<br/>
*(Sempre que a qualidade for `comum`, ela pode ser omitida do nome do item)*

### 4. Afixos Mágicos

Por último, para completar a composição da sua arma, existem propriedades mágicas que itens podem ter para se tornarem ainda mais poderosos.

Aqui, provavelmente o céu é o limite, mas mesmo assim vamos descrever algumas propriedades comuns:

| Nome               | Descrição                                                                                                                | Multiplicador |
|--------------------|--------------------------------------------------------------------------------------------------------------------------|------------|
| Mágica (F)         | Armas mágicas causam <code>(+F)</code> de dano mágico não elemental a cada golpe. Já armaduras mágicas protegem contra <code>(F)</code> de dano mágico. | 1        |
| Amplificadora (F)  | Itens Catalíticos ampliam o dano mágico causado pelo portador em <code>+(F)</code>.                                      | 1        |
| Brilhante (X)      | Itens brilhantes emitem luz própria não-controlável, iluminando <code>X</code> espaços.                                  | 1        |
| Detectora (T)      | Itens com essa propriedade podem pulsar quando detectam a presença próxima de inimigos do tipo <code>T</code>.           | 1        |
| Geomântica (T)     | Armas geomânticas atacam com vantagem quando estão em terreno do tipo <code>(T)</code>, e armaduras recebem vantagem ao se defender de ataques em terrenos <code>T</code>. | 1        |
| Regenerativa (N)   | Itens regenerativos se reparam automaticamente, recuperando <code>N</code> cargas de durabilidade por dia.               | 1        |
| Consciente         | O item possui consciência própria e pode se recusar a cumprir seu papel dependendo da relação com o utilizador.          | 1       |
| Protetiva (F)      | Em armaduras, reduz o dano mágico recebido em <code>-F</code>.                                                           | 1        |
| Venenosa           | A lâmina é coberta com um veneno paralisante, causando dano de Veneno.                                                   | 1        |
| Mortal             | Pode matar um inimigo em um único golpe.                                                                                 | 1       |
| Escaldante         | Está sempre em alta temperatura, causando queimaduras no alvo.                                                           | 1        |
| Congelante         | Encanta a arma com magia de gelo, podendo congelar o alvo brevemente.                                                    | 1        |
| Sônica (M)         | Itens com a característica Sônica emitem uma onda sônica ao entrar em contato com alvos, empurrando-os na direção oposta em <code>-(M)</code> espaços. | 1        |
| Minificável        | Independente do tamanho e peso, esse item pode ser reduzido ao tamanho da palma da mão do utilizador, com o custo de <b>1 Ação Menor</b>.           | 1        |
| Teleguiado         | Se o item for uma arma de alcance, disparos com seus projéteis sempre acertarão o alvo.                                  | 1       |
| Finalizadora (F)   | Causa <code>(F)</code> de dano adicional em lacaios fracos e alvos que estão com metade da vida ou menos.                | 1       |
| Elétrica           | Concede à arma o poder dos raios, podendo paralisar o inimigo com choques elétricos.                                     | 1        |
| Sagrada            | Abençoada por entidades divinas, eficaz contra mortos-vivos e entidades malignas.                                        | 1       |
| Profana            | Corrompida por energias sombrias, é especialmente eficaz contra criaturas celestiais.                                    | 1       |
| Corrosiva          | Danifica armas e armaduras ao contato.                                                                                   | 1        |
| Solar              | Encantada com a energia do sol, causa mais dano durante o dia.                                                           | 1        |
| Lunar              | Encantada com a energia da lua, causa mais dano durante a noite.                                                         | 1        |
| Ecliptica          | Tem seu dano acentuado em Eclipses e Luas de Orvalho.                                                                    | 1        |
| Invernal           | Causa dano acentuado no Inverno e em momentos de frio intenso.                                                           | 1        |
| Infernal           | Causa dano acentuado no Verão e em terras de calor intenso.                                                              | 1        |
| Zéfirica           | Acertos também desferem rajadas de vento que empurram o alvo.                                                            | 1        |
| Translocadora      | Acertos translocam o alvo para outra coordenada.                                                                         | 1        |
| Enraizante         | Acertos fazem brotar vinhas que prendem o alvo.                                                                          | 1        |
| Vampírica          | Absorve a vitalidade do alvo, restaurando a saúde do usuário.                                                            | 1       |
| Cegante            | Encantada para emitir uma luz brilhante, pode cegar temporariamente o inimigo.                                           | 1        |
| Adaptativa         | Adapta-se ao elemento da área ao redor (fogo, água, terra, ar) e usa esse poder contra os inimigos.                      | 1       |
| Elemental          | O item é embedado no elemento em questão (fogo, trovão, terra, etc), causando dano do elemento no caso de arma, ou absorvendo o elemento no caso de armadura. | 1       |
| Fênix              | Itens com afixo Fênix podem "reviver" ao se quebrarem com durabilidade 0. Para isso, o controlador deve passar em um <b>Teste de Perícia</b> do atributo <b>Destino</b>. | 1       |
| Transdimensional   | Golpes com armas transdimensionais podem atingir alvos a qualquer distância visível, através da abertura de um portal adjacente a vítima, aberto rapidamente apenas para desferir o golpe. Ataques transdimensionais são sempre feitos com vantagem. | 1       |
| Anti-Gravitacional | Ao ser atingido por uma arma anti-gravitacional, o alvo fica suspenso no ar durante 1 rodada, sem poder se locomover.       | 1       |
| Ilusional          | Ao ser atingido por uma arma ilusional, uma ilusão do alvo é conjurada adjacente a ele, realizando um ataque comum antes do próximo turno do alvo até que seja atingida. (possui 1 Ponto de Vida). | 1       |
| Camaleônica        | Muda de cor para se adaptar ao ambiente que está.                                                                        | 1        |
| Dimensiônica       | Pode armazenar o portador.                                                                                               | 1       |

### 5. Refinamento

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

| Grau Exigido | Nível de Refinamento | Multiplicador |
|--------------|----------------------|---------------|
| 1 |  +1 |  x1.0 |
| 1 |  +2 |  x3.0 |
| 2 |  +3 |  x6.0 |
| 2 |  +4 |  x9.0 |
| 3 |  +5 |  x12.0 |
| 3 |  +6 |  x14.0 |
| 3 |  +7 |  x15.0 |
| 4 |  +8 |  x16.0 |
| 4 |  +9 |  x17.0 |
| 4 |  +10 |  x18.0 |
| 4 |  +11 |  x19.0 |
| 4 |  +12 |  x20.0 |
| 4 |  +13 |  x21.0 |
| 4 |  +14 |  x23.0 |
| 4 |  +15 |  x25.0 |
| 4 |  +16 |  x30.0 |

### Perfil de Equipamento

Um Metalóide dificilmente entraria em uma armadura feita para Goblins, imagine então para Armadons.
O perfil do item serve para identificar a qual <b>espécie</b> esse item foi inicialmente desenhado.

Se desejar, o Narrador pode definir o perfil do item no momento que ele for encontrado pelos jogadores, caso contrário, pode-se assumir que o item será compatível ao primeiro jogador que demonstrar interesse em utilizá-lo.

E mesmo que o Narrador diga: *"Vocês encontram um Peitoral de Prata, que parece ser pequeno demais para um Goblin usar".*
Se houver um Goblin no grupo, ele pode interromper o Narrador para utilizar seu talento racial <b>Armadura da Sorte</b>, exigindo um <b>Teste de Perícia</b> do atributo <code>Destino</code> para fazer com que a armadura seja compatível com um Goblin médio.

Afixos de Armadura como <code>Larga</code> sempre vão se aplicar considerando o biótico da espécie a qual ele foi desenhado, logo, uma Armadura de Luminin com o afixo <b>Larga</b> talvez sirva num <b>Luminin com porte físico avantajado</b>, mas jamais serviria em um <b>Luminin magricelo</b>, um <b>Armadon</b>, e até mesmo em um <b>Goblin</b> pequeno.

Caso um jogador ainda queira utilizar uma armadura fora de seu perfil, ele ainda poderá fazê-lo, mas não receberá os bônus de Defesa concedidos pelo item.

### Precificando Itens

Com tantas variações, afixos e tipos de equipamentos, pode ser complexo avaliar o preço de um equipamento, mas com a ajuda das mais influentes casas de penhores das **Terras Místicos**, desenvolvemos um método infalível para te auxiliar com essa tarefa!

Para simplificar, definimos um Custo base para cada tipo de incremento, seja ele um Refinamento, Afixo físico ou mágico.
Esses valores aumentam conforme o Grau do item, que varia de 1 a 4 (salvo raras e).

| Grau                      | Custo Base de Material | Custo Base Afixo Físico  | Custo Base Afixo Mágico   | Custo Base Refinamento  |
|---------------------------|------------------------|--------------------------|---------------------------|-------------------------|
| Grau 1 (Níveis 1 a 5)     | 100                    | 200                      | 200                       | 150                     |
| Grau 2 (Níveis 5 a 10)    | 250                    | 800                     | 1600                      | 250                     |
| Grau 3 (Níveis 11 a 15)   | 500                   | 1600                     | 2400                       | 350                    |
| Grau 4 (Níveis 16 a 20)   | 1000                   | 2000                     | 3200                      | 500                    |

Com essa tabela em mãos, a fórmula de precificação fica fácil:

<div class="tailwindpage">
    <div class="border-solid border-gray-600 border rounded-xl shadow-md">
        <p class="text-center text-xl bg-gray-300 rounded-t-xl p-3">Calculando Preço do Equipamento</p>
        <p class="bg-gray-200 p-3 rounded-b-xl text-nowrap block whitespace-nowrap overflow-scroll">
            {' '}<span class="text-3xl align-top">{'('}</span>{' '}
            <span class="bg-emerald-200 border border-emerald-600 px-1 py-1 text-black rounded-xl">
                Mult. Material
            </span>
            {' '}<span class="text-3xl align-middle">*</span>{' '}
            <span class="bg-emerald-200 border border-emerald-600 px-1 py-1 text-black rounded-xl">
                Item Base
            </span>
            {' '}<span class="text-3xl align-top">{')'}</span>{''}
            {''}<span class="text-3xl align-base">+</span>{''} 
            {''}<span class="text-3xl align-top">{'('}</span>{' '}
            <span class="bg-sky-200 border border-sky-600 px-1 py-1 text-black rounded-xl">
                Mult. Afixo
            </span>
            {' '}<span class="text-3xl align-middle">*</span>{' '}
            <span class="bg-sky-200 border border-sky-600 px-1 py-1 text-black rounded-xl">
                Custo Base Afixo
            </span>
            {' '}<span class="text-3xl align-top">{')'}</span>{''}
            {''}<span class="text-3xl align-base">+</span>{''} 
            {''}<span class="text-3xl align-top">{'('}</span>{' '}
             <span class="bg-purple-200 border border-purple-600 px-1 py-1 text-black rounded-xl">
                Mult. Refinamento
            </span>
            {' '}<span class="text-3xl align-middle">*</span>{' '}
            <span class="bg-purple-200 border border-purple-600 px-2 py-1 text-black rounded-xl">
                Custo Base Refinamento
            </span>
             {' '}<span class="text-3xl align-top">{')'}</span>{' '}
        </p>
    </div>
</div>

## Exemplo: Machado de Madeira +0 (GRAU 1)

O <code>Machado de Madeira +0</code> é um exemplo bem simples de Arma para calcularmos o preço.

Se quebrarmos o item nos 5 complementos, teremos:

1. **Item Base**: Machado (T$ 200)
2. **Material**: Madeira (x1)
3. **Afixos Físicos**: Nenhum
4. **Afixos Mágicos**: Nenhum
5. **Refinamento**: Nenhum

É um item **Grau 1**, então usaremos os valores de Grau 1 da tabela:

<code>Preço = 1*200 (Material) + 0*300 (Afixo) + 0*800 (Afixo) + 0*400 (Refinamentos) = T$ 200.</code>
<br/><br/>

Nesse caso, **500** é o custo base de **Afixos Físicos**, **800** é o custo base de **Afixos Mágicos** e **400** o custo base de **Refinamento**.
Como não temos nada disso, o resultado é zero.

Simples certo? Agora vamos evoluir um pouco esse Machado.

## Exemplo: Machado Largo de Bronze +2 c/ Espinhos (GRAU 1)

Uau, agora sim esse Machado está começando a ficar interessante!

Se quebrarmos o item nos 5 complementos, teremos:

1. **Item Base**: Machado (T$ 200)
2. **Material**: Bronze (200x2.0)
3. **Afixos Físicos**: Largo (200x1.0), Espinhos (200x1.0)
4. **Afixos Mágicos**: Nenhum
5. **Refinamento**: +2 (150x3.0)

O preço final ficaria:

<code>Preço = 200*2.0 (Material) + 100*2.0 (Afixo) + 200*1.0 (Afixo) + 150*3.0 (Refinamentos) = T$ 1.250</code><br/><br/>


<EquipmentBlock data={{
  tier: 1,
  name: "Machado de Pedra",
  item_shape: {
    name: "Machado",
    base_damage: "d12 + 4",
    base_price: 200,
  },
  material: {
    name: "Pedra",
    multiplier: 1,
  },
  buy_price: 1280,
  slots: 1,
  speed: -1,
  durability: {
    current: 3,
    total: 3,
  },
  refinement: 2,
  affixes: [
    {
      name: "Larga (F)",
      is_physical: true,
      is_magical: false,
      multiplier: 1.0,
      empowers: [
        {
          name: "F",
          value: "1d10"
        }
      ]
    },
    {
      name: "Espinhos (F)",
      is_physical: true,
      is_magical: false,
      multiplier: 1.0,
      empowers: [
        {
          name: "F",
          value: "1d10",
        }
      ]
    }
  ]
}}></EquipmentBlock>