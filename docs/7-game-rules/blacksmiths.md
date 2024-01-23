---
id: blacksmiths
title: Serviços do Ferreiro
slug: /7-game-rules/blacksmiths
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C0e89efdb-69a9-4b93-8699-98111c3c1150.jpg
---

![Criando e reparando itens](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C0e89efdb-69a9-4b93-8699-98111c3c1150.jpg)

Até mesmo o mais remoto dos vilarejos possui ao menos um **ferreiro de confiança** (ou talvez nem tão confiável).

Os Ferreiros são profissionais de qualidade muito utilizados para **refinar**, **reparar** e **criar itens na forja**.

Então, quando **visitar uma cidade ou vilarejo**, lembre-se de que sempre poderá **solicitar ao Narrador** que visite o estabelecimento do Ferreiro local para **solicitar seus serviços**.

Aqui, vamos listar alguns dos serviços mais comuns oferecidos por ferreiros e como eles funcionam.

## Reparo de Equipamentos

Neste jogo, Armas e Equipamentos possuem [Cargas de Durabilidade](/docs/9-combat-rules/durability), que de forma resumida, é um **número** que representa o **desgaste** que seus equipamentos já **receberam em combate**. Quando esse número zera, o equipamento "quebra", e o Personagem **não poderá usá-lo normalmente** até que **conserte o item** em um **Ferreiro ou profissional especializado**.

![Desgaste](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C2be3b19b-cca2-4e08-9012-b31d7164eaaa.jpg)

Ferreiros podem remover **Cargas de Desgaste** de Equipamentos, e o preço geralmente varia de acordo com o ferreiro e a qualidade do item, mas podemos te dar alguma idéia dos preços:

| Tipo do Item    | Preço Base do Reparo | Adicional por Carga | Adicional por Qualidade |
|:----------------|:---------------------|:--------------------|:------------------------|
| Item Comum      | 100                  | 50                  | 50                      |
| Item Mágico     | 500                  | 250                 | 250                     |
| Item de Herança | 2000                 | 500                 | 500                     |

:::note
Seguindo o exemplo do nosso <b>Escudo de Aço +1</b>, caso um aventureiro desejasse remover 1 única carga de Desgaste, o orçamento do reparo seria algo assim:
<code>Valor = [Preço Base do Reparo] + [Adicional por Carga] + [Adicional por Qualidade]</code>
<br/><br/>

Ou seja, considerando que é um <b>Item Comum</b>, se o Mercador cobrasse:

<ul>
  <li>T$ 100 pelo <b>Preço Base</b>.</li>
  <li>T$ 50 pelo <b>Adicional de Carga</b></li>
  <li>T$ 50 pelo <b>Adicional de Qualidade</b></li>
</ul>
<br/>

<b>A conta final ficaria assim:</b>
<br/><br/>
<code>Valor do Reparo = 100 + 50 * 1 (Número de Cargas a reparar) + 50 * 1 (Devido ao item ser +1)</code>
<br/>
<code>Valor do Reparo = 200 Temirs</code>
<br/><br/>

Mas lembre-se que essa é apenas um exemplo para que você entenda como funciona a economia do jogo. Fique despreocupado que esses cálculos sempre serão realizados pelo Narrador, e nunca pelos Jogadores!
:::

(Se quiser saber mais sobre a mecânica de Desgaste, explicamos com maiores detalhes no Capítulo **Regras de Combate**)

## Refinamento de Equipamentos

A técnica de Refinamento consiste no aumento da Qualidade de Itens.

O refinamento é uma técnica **extremamente arriscada**, e se não for feita da **forma correta**, pode trazer **sérias consequências** ao Item refinado.

**Qualquer jogador** pode ir a um ferreiro para tentar refinar a **Qualidade de um Item**, seja **Mágico** ou de **Herança**. Abaixo mostramos preços comumente praticados para esse serviço:

- **Itens Comuns**: *T$ 500*
- **Itens Mágicos**: *T$ 1000*
- **Itens de Herança**: *T$ 2000*

Para refinar, o Narrador usará a **Habilidade do Ferreiro** como um **teste especial de Resistência**. (por padrão, a *Habilidade de Ferreiros* comuns é **20**)

O **Narrador** então rolará <code>X+1 D20</code>, onde X é a **quantidade de vezes** que esse item já foi refinado anteriormente por você.

Caso a soma dos D20 rolados **não ultrapasse** a *Habilidade do Ferreiro* **(padrão 20)**, o Item **recebe +1 de Qualidade**, *(ex: Se for Arma, recebe +1 de Ataque, se for Armadura, recebe +1 de Defesa).*

Entretanto, caso a soma dos números rolados ultrapasse a **Habilidade do Ferreiro**, o Item não perde qualidade, mas recebe `-1` de **Durabilidade máxima permanente**. Essa Durabilidade perdida **não pode ser reparada em ferreiros**. Ao chegar em `0` de Durabilidade Máxima, o **Item é destruído**.

![Refinamento](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C470982cd-217c-4ab1-9c47-99239cbdcf03.jpg)

Importante ressaltar que neste tipo de teste especial rolado pelo Narrador, Triunfos não se aplicam, mas qualquer Desastre nos dados automaticamente resulta em um Fracasso, danificando a **durabilidade máxima** do Item.

Independente da **Falha ou Sucesso** no refinamento, **todos os itens que passam pelo processo** recebem uma **Condição de Estresse** que **dura 3 dias de jogo**, e **aumenta em +1** o número de Dados que precisam ser rolados no processo de Refinamento.

A condição existe para que o Item possa descansar e se recuperar do processo de refinamento, que pode ser traumático para o material.

## Criação de Itens

Também é possível **criar itens com Ferreiros**, mas o preço de cada item **deverá ser especificado pelo Narrador**, pois depende muito dos **itens disponíveis na campanha** e da **economia do Cenário** que está sendo jogado.

Para entender a precificação e construção de itens customizados, consulte a [Seção Criando Armas e Armaduras](/docs/10-the-guide/create-custom-equipment).

É importante também levar em consideração que o processo de **Criação de Armas em Ferreiros** podem **levar dias para serem realizados**, pois muitas vezes os Ferreiros **não possuem** todos os materiais de confecção *"à pronta entrega"*, e por isso, as vezes precisam fazer **pequenas viajens** para adquirir **componentes** de seus **fornecedores confiáveis**.
