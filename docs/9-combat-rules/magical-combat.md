---
id: magical-combat
title: Ataque e Defesa com Magia
slug: /9-combat-rules/magical-combat
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C97132ead-7b95-40cb-ad24-8ac4af65d437.jpg
---

import GrimoCostMod from '@site/src/components/grimo_cost_modifier/index'

import { SpellFromJson } from './../../src/components/skill_block/index'
import lunns_echo from './../../data/spells/spells-lunn/ultimates/lunns_echo.json'
import bash from './../../data/spells/spells-giurad/tier1/bash.json'
import double_blast from './../../data/spells/spells-allura/tier3/double_blast.json'
import apprentice_blast from './../../data/spells/spells-allura/tier1/apprentice_blast.json'
import linear_beam from './../../data/spells/spells-allura/tier2/linear_beam.json'
import summon_sombrizir from './../../data/spells/spells-zanari/tier2/summon_sombrizir.json'
import upgrade_sombrizir from './../../data/spells/spells-zanari/tier3/upgrade_sombrizir.json'
import super_runic_trail from './../../data/spells/spells-ixin/tier3/super_runic_trail.json'

![Como utilizar o mais poderoso dos recursos no combate](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C97132ead-7b95-40cb-ad24-8ac4af65d437.jpg)

A Magia é um dos recursos mais poderosos das **Terras Místicas**. Devido ao advento do [Blecaute](/docs/11-the-world/the-blackout) o acesso à magia natural foi banido à todas as civilizações senscientes do mundo, e foi graças aos **Grimos** que os aventureiros puderam usufruir novamente dos conhecimentos mágicos ancestrais.

No jogo, os Personagens podem utilizar o vínculo com seus Grimos para desferirem **poderosos ataques mágicos**, e por mais que este acesso seja limitado, ele se expande a medida que os Personagens evoluem.

Diferente dos ataques comuns, os ataques mágicos estão frequentemente atrelados à **Elementos de Magia**, tais como **Fogo**, **Água**, **Materia** e outros. Ao todo, existem **12 elementos** conhecidos no mundo.

Nesta seção, vamos abordar diversos aspectos práticos da Magia, explicando os **elementos**, as **fichas de poder mágico**, e por  fim as regras de **Ataque e Defesa com Magia** durante o combate.

## Atacando com Magia

Sempre que um personagem **declara um ataque mágico**, é a **descrição do poder** que ditará como **realizar o ataque** e calcular o **dano de combate**, assim como ocorre em um **ataque físico**.

De formaa geral, a *Ação de atacar com Magia* pode ser entendida em 4 etapas:

1. Realizar Ataque.
2. Determinando o Sucesso.
3. Aplicar Efeito/Dano.

### 1. Realizar o Ataque

Um **Ataque Mágico** é sempre realizado contra a **Defesa Mágico** do Alvo.

Ao declarar o Ataque, o Personagem deverá selecionar os <a href="/docs/9-combat-rules/magical-combat#tipos-de-área">Alvos ou a Área que será afetada</a>.

**Cada um dos alvos na área de ataque** deverá ser testado. A fórmula de ataque mágico é a seguinte:

![Ataque-Magico.jpg](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cdd668aa7-f647-4de4-9f02-0339436de681.jpg)

É importante dizer que a **Ficha de Poder** pode impor diferenças na forma como o ataque mágico será realizado.

:::note Utilizando Armas Elementais
Se o ataque tiver **natureza mágica**, mas for realizado com uma Arma Física (ex: **Espada de Fogo**), então o dano é aplicado normalmente seguindo as [Regras do Combate Físico](/docs/9-combat-rules/physical-combat), mas **verifica-se as Resistências e Fraquezas mágicas** do Alvo para determinar se ele ele sofrerá o dobro ou metade do dano. Caso ele não tenha nem fraqueza nem resistência, aplica-se o dano normal.

Apesar de cada elemento possuir seu **Efeitos elemental**, estes efeitos (Paralizia, Silêncio, etc) apenas se aplicam **se a Arma determinar explicitamente**.
:::

:::note Poderes Mágicos Não-Elementais
Alguns poderes mágicos, como a [Pancada, do Grimo de Giurad](/docs/4-grimos-and-spells/giurads-crest), não possuem nenhum **elemento mágico** atrelado, e mesmo assim, é considerado como um **ataque mágico**.
:::

### 2. Determinando o sucesso

Todos os testes de Ataques são considerados **Ações de Desafio**. É o Narrador que determina qual é a **dificuldade do teste**. Um **Ataque Mágico** será bem sucedido se o resultado da rolagem de ataque **superar a Defesa Mágica do Inimigo**.

Caso você não ultrapasse esse resultado, sua ação é considerada como uma **Falha**. Por padrão, uma falha significa que seu ataque não acertou o alvo. Mas o Narrador pode interpretar sua ação dependendo do contexto, e decidir que você cause dano no inimigo, ao mesmo em que sua ação gera algumas **consequências negativas**.

Na tabela abaixo listamos algumas **consequências** que o Narrador pode utilizar neste tipo de ocasião rolando um D8:

| D8 | Se aplica a | Descrição |
| ------------- | ----------- | --------- |
| 1 | Qualquer ocasião | O personagem tropeça após o ataque, recebendo o modificador **Derrubado 1** até o próximo turno. |
| 2 | Qualquer ocasião | O personagem causa apenas **metade do Dano** que seria causado normalmente com um **sucesso** |
| 3 | Aliados próximos | A magia atinge o inimigo normalmente, mas rebate ou acidentalmente atinge um aliado, aplicando nele metade do dano. |
| 4 | Grimo | O personagem extrai o Poder do Grimo de forma bruta , e este recebe o modificador **Anulado 1** no próximo turno. |
| 5 | Inimigos | O personagem realiza o ataque, mas ao invés de atingir o inimigo desejado, atinge um outro inimigo. Se for uma área, pode atingir uma área diferente. |
| 6 | Ambiente | Seu ataque atinge o inimigo normalmente, mas seu movimento atrapalhado derruba um objeto do cenário, que atinge você ou um aliado próximo. Dano a ser decidido pelo Narrador |
| 7 | Ambiente | Seu ataque atinge o inimigo normalmente, mas uma reação em cadeia atinge um elemento do ambiente que de alguma forma cria uma vantagem para os inimigos. |
| 8 | Ambiente | Seu ataque atinge o inimigo normalmente, mas uma reação em cadeia atrai um inimigo adicional ao combate. |

Mas essas são apenas algumas sugestões, elas não são colocadas em **forma de regra**, mas em forma de **sugestão Narrativa** que pode ser usada em casos de **Falha**.

### 3. Aplicar Efeito/Dano

Caso o Narrador confirme que seu **Ataque foi bem sucedido**, significa que você **conseguiu** acertar seu(s) inimigo(s) com precisão!

Se o poder causar Dano, basta **rolar o Dano Mágico**, cuja fórmula é:

![Rolagem-Ataque---Mágico.jpg](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Ca735ec26-1b34-4c10-b3ec-9d2435ea995c.jpg)

A mesma fórmula se aplica para **poderes de Cura**.

Como você vê, o Dano vêm exclusivamente da **Ficha de Poder**, não dependendo de qualquer atributo que o personagem possua.

:::note Exemplo de Ataque

Para dar um **exemplo de ataque mágico**, pegaremos o poder **Pancada**, do [Grimo de Giurad](/docs/4-grimos-and-spells/giurads-crest):

<SpellFromJson expanded={false} spellData={bash} /><br/>

Este poder é interessante, pois apesar de ser um **Poder Mágico**, ele possui o **Tipo de Poder** como **Físico**, o que significa que ele causa **Dano Não-Elemental**.

---

Vamos ao exemplo:

**Ramón** é um **Adepto de Giurad**, e atacará um **Fougrat Mago** usando o Poder **Pancada** com seu **Machado +2**.

O Machado é uma **arma de Força**, cujo **atributo nosso herói possui +1**. Isso significa que o seu **Ataque Principal é +3**.

O *Fougrat* possui **Defesa Física 14**.

Normalmente, os **Poderes Mágicos** utilizam o **Ataque Mágico** como Bônus do Ataque, mas o poder **Pancada**, especifica que o Ataque deve ser feito utilizando-se o **Ataque Físico** do Personagem, ao invés do **Ataque Mágico**. O **Ataque Físico** no nosso caso é o **Ataque Principal**, que posssui o valor de **+3**.

Por isso, Ramón **rolará 2d20 + 3** para determinar se ele conseguirá **acertar a Pancada** no Fougrat.

**O resultado dos dois 2d20 são 9 e 11**. Ramón seleciona o maior valor (11), e soma a ele seu bônus de **+3 do Ataque Principal**.

O **valor final de 14** é suficiente para atingir o Fougrat, **cuja defesa física é 14**.

Agora Ramón aplicará o **Dano da Pancada**, que de acordo com a **Ficha de Poder**, possui a seguinte fórmula: `Dano da Arma + GRAU*(1D12+5)`

Como o **Grimo de Ramón** está no **GRAU 1** e o **Dano do Machado** é `1d12 + 3`, o Dano final que **Ramón** aplicará será de `1d12 + 3 + 1d12 + 5`, que podemos simplificar para `2d12 + 8`.

Ramón rola os dois D12, tirando 5 e 12, que somados com 8, resultam em **25 de Dano**!
:::

## Defendendo-se de Magias

Defender é o ato de bloquear, absorver ou aparar um golpe inimigo direto.

A Defesa mágica, assim como a Defesa física, é uma ação reativa. Você apenas se Defende quando um inimigo te ataca.

Mas no nosso sistema, os **inimigos não fazem rolagens de ataque**, e por isso, para se Defender de um **Poder Mágico**, você também dependerá dos dados.

Enquanto no **Ataque Mágico** você rola dados para superar a *Defesa inimiga* utilizando seus **Pontos de Ataque Mágico**, na *Defesa Mágica* você rola dados para superar o *Ataque Mágico inimigo* utilizando os seus **Pontos de Defesa Mágica**.

### Na prática

Assim como o **Ataque Mágico**, a *Defesa Mágica* é uma **ação opcional**. Isso significa que um personagem pode escolher receber o dano de um inimigo se assim desejar.

Além disso, a **Defesa Mágica** é uma das **poucas ações** que o personagem pode realizar **multiplas vezes** fora de seu [Turno de Combate](/docs/9-combat-rules/player-turn).

Na maioria das vezes você vai **querer evitar** um ataque mágico inimigo bem sucedido, por isso é importante saber que a Defesa Mágica é realizada em 3 etapas:

1. Teste de Defesa
2. Determinando o Sucesso
3. Resolução do Efeito/Dano

### 1. Teste de Defesa Mágica

O objetivo desta etapa é **determinar se você consegue ou não desviar/aparar/absorver** o *ataque mágico* de seu inimigo.

Falhar em um *teste de defesa mágica* é possível, o que significa que você **não conseguiu de Defender de forma eficiente**.

Nessas ocasiões, podemos interpretar de várias maneiras: Talvez *o ataque do inimigo seja muito forte*, ou talvez a *técnica mágica* te pegou de surpresa, ou talvez você apenas estava mal posicionado e o *ataque te acertou em cheio*!

Seja como for, a fórmula para determinar o resultado do **teste de Defesa Mágica** é:

![Rolagem-Defesa-Magica.jpg](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C2f8f83e8-6f68-48fe-a3d6-45c5dd7fe9bc.jpg)

### 2. Determinando o sucesso

Todos os testes de Defesa são considerados **Ações de Desafio**. É o Narrador que determina qual é a **dificuldade do teste**. Uma **Defesa Mágica** será bem sucedida se o resultado da rolagem de ataque **superar o Ataque Mágico do Inimigo**.

Caso você não ultrapasse esse resultado, o seu teste é considerado como uma **Falha**. Por padrão, uma falha significa que você foi capaz de se defender de seu inimigo, mas o Narrador pode interpretar sua ação dependendo do contexto, e decidir que você cause dano, ao mesmo tempo em que sua ação gera algumas **consequências negativas**.

Na tabela abaixo listamos algumas **consequências** que o Narrador pode utilizar neste tipo de ocasião rolando um D8:

| D8 | Se aplica a | Descrição |
| ------------- | ----------- | --------- |
| 1 | Qualquer ocasião | O personagem tropeça após a Defesa, recebendo o modificador **Derrubado 1** até o próximo turno. |
| 2 | Qualquer ocasião | O personagem se defende parcialmente, recebendo **metade do Dano** que seria causado. |
| 3 | Aliados próximos | O personagem se defende do ataque, mas ele rebate e acidentalmente atinge um aliado, aplicando nele metade do dano. |
| 4 | Grimo | O personagem bloqueia o ataque, mas abre sua guarda acidentalmente, permitindo que outros inimigos recebam vantajem até o seu próximo turno. |
| 5 | Inimigos | O personagem se defende parcialmente do ataque, recebendo **metade do Dano** e sendo empurrado N quadrados **na direção oposta** do poder. |
| 6 | Ambiente | O personagem se defende do ataque, mas seu movimento atrapalhado rebate o poder, que derruba um objeto do cenário e atinge um aliado próximo. Dano a ser decidido pelo Narrador |
| 7 | Ambiente | O personagem se defende do ataque, mas uma reação em cadeia atinge um elemento do ambiente que de alguma forma cria uma vantagem para os inimigos. |
| 8 | Ambiente | O personagem se defende do ataque, mas um outro inimigo percebe uma abertura em sua guarda e pode realizar uma ação de ataque contra ele imediatamente com **+2 de Bônus**. |

Mas essas são apenas algumas sugestões, elas não são colocadas em **forma de regra**, mas em forma de **sugestão Narrativa** que pode ser usada em casos de **Falha**.

### 3. Resolução do Efeito/Dano

Caso o Narrador confirme que sua **Defesa foi bem sucedida**, significa que você **conseguiu** aparar, absorver ou bloquear o ataque inimigo com precisão!

Diferente do **Ataque Mágico**, onde você precisa **rolar o Dano** depois de acertar o ataque, a **Ação de Defesa Mágico** termina **quando o personagem é bem sucedido**, não sendo necessário realizar nenhuma rolagem adicional.

:::note Exemplo de Defesa Mágica
Diferente dos Personagens, os inimigos não rolam dados de ataque, e possuem seu próprio valor de **Ataque Mágico**. Esse valor é a **Dificuldade do Teste** da [Ação de Desafio](/docs/7-game-rules/challenge-checks).

Exemplo:

**Corbe** é um *Adepto de Allura*, e possui **Defesa Mágica +3**.

Corbe está sofrendo um ataque de um **Fougrat Mago**, cujo **Ataque Mágico é 15**. <br/>
Secretamente, o Narrador utilizará o valor 15 como a **Dificuldade do Teste** de Defesa.

**Nosso herói** então deve **rolar 2D20** para determinar se ele conseguirá **bloquear ou absorver o ataque** do Fougrat.

**O resultado dos dois 2d20 são 6 e 7**. Ramón seleciona o maior valor (7), e soma a ele seu bônus de **+3 de Defesa Mágica**.

Infelizmente, o **valor de 10** não é suficiente para obter um sucesso, já que o **Ataque Mágico do Fougrat é 15**. Nesse caso a Defesa falha, e Corbe recebe o Dano do Ataque do Fougrat.
:::

## Utilizando Poderes em GRAUS superiores

Os Poderes de Grimo são separados em **GRAUS**, que variam de **GRAU 1** até **GRAU 4**.

Geralmente, cada poder especifica uma quantidade de **Pontos de Magia** que precisam ser consumidos para utilizá-lo.

Pegamos por exemplo o poder **Rajada do Aprendiz**, do Grimo de Allura de **GRAU 1**:

<p>
  <SpellFromJson expanded={false} spellData={apprentice_blast} />
</p>

Sempre que um personagem quiser usar a **Rajada do Aprendiz** no **GRAU 2**, ele deverá verificar o **"Modificador de Custo de PM"** para o **GRAU 2**. Essa informação pode ser consultada diretamente na página do Grimo. No caso, o modificador do GRAU 2 deste Grimo é o seguinte:

<GrimoCostMod upCost={2} downCost={2} marginClass="" />
<br/><br/>

Isso significa que utilizar **Rajada do Aprendiz** num GRAU superior ao dele <i>(no caso superior ao GRAU 1)</i>, custará um adicional de <code>+2 Pontos de Magia</code>.

Enquanto ao utilizar um poder de <code>GRAU 3</code> no <code>GRAU 2</code>, você poderá reduzir seu custo em <code>-2 Pontos de Magia</code>

Essa regra serve para que o jogador possa utilizar seus poderes de forma estratégica, podendo conjurar "versões mais fracas" dos poderes que gastam menos pontos de magia, e vice versa.

Vejamos como ficaria a tabela de conjuração da Rajada em cada GRAU:

| Poder |  GRAU   | Custo | Modificador de P.M | Dano   |
|-------|---------|--------|--------|----|
| Rajada do Aprendiz | GRAU 1 | 3 P.M | --  | 5d4 + 5 |
| Rajada do Aprendiz | GRAU 2 | 5 P.M | 3 + 2 | 5d8 + 10 |
| Rajada do Aprendiz | GRAU 3 | 7 P.M | 3 + 2 + 2 | 5d12 + 15 |
| Rajada do Aprendiz | GRAU 4 | 12 P.M | 3 + 2 + 2 + 5 | 5d20 + 20 |

Percebe como o Custo vai se acumulando a cada GRAU? Por via de regra, **para todo o poder que possui Fórmula de Dano/Cura com GRAU** podemos usar a seguinte fórmula de custo <code>CustoPoder = CustoOriginal + ModificadoresDeCustoDoGrauUtilizado</code>

Dessa forma, o Personagem pode utilizar seus poderes em **GRAUS inferiores!**

Vamos ver alguns exemplos?

### 1. Exemplo Simples

Imagine que nosso **Mago de Allura** queira utilizar a **Rajada do Aprendiz** no **GRAU 3**, o que custaria a ele um total de **7 Pontos de Magia**.
Porém, nosso Mago não tem toda essa quantidade de Pontos, ele já usou todo o seu poder no combate, e agora possui apenas **6 Pontos de Magia**.

Uma coisa que ele pode fazer então é utilizar a **Rajada de Aprendiz** no **GRAU 2**, ao invés de utilizá-la no **GRAU 3**. Usar o poder no **GRAU 2** teria um custo de apenas **5 Pontos de Magia**, que ele poderia gastar, já que possui **6 Pontos**.

| Poder |  GRAU   | Custo |  Dano   |
|-------|---------|--------|--------|
| Rajada do Aprendiz | GRAU 1 | 3 P.M | 5d4 + 5 |
| **Rajada do Aprendiz** | **GRAU 2** | **5 P.M** | **5d8 + 10**     |
| Rajada do Aprendiz | GRAU 3 | 7 P.M | 5d12 + 15 |
| Rajada do Aprendiz | GRAU 4 | 12 P.M | 5d20 + 20 |

### 2. Poderes de GRAU 2 ou superior

A estratégia que comentamos na seção anterior é muito útil para qualquer aventureiro. Pegue por exemplo o poder **Feixe Linear**, do **GRAU 2** do Grimo de Allura:

<p>
  <SpellFromJson expanded={false} spellData={linear_beam} />
</p>

De acordo com a lista de poderes, o **Feixe Linear** só é introduzido ao **Mago de Allura** no **GRAU 2**, o que significa que não existe uma versão de **GRAU 1** do **Feixe Linear**.

Mas e se eu quiser usar o **Feixe Linear** no **GRAU 1**? É possível?

Sim, é possível, e a regra é a mesma. Para isso, você deverá olhar o **valor negativo** do **"Modificador de Custo de PM"** do GRAU que você deseja usar o poder, no caso, o GRAU 1. No Grimo de Allura, você encontraria esse valor:

<GrimoCostMod downCost={3} marginClass="" />
<br/><br/>

Isso significa que quando você usar o **Feixe Linear**, ao invés de custar **8 P.M**, ele custará apenas **5 P.M**:

Logo, a tabela de custo do **Feixe Linear** fica da seguinte maneira:

| Poder |  GRAU   | Custo | Modificador de P.M | Dano   |
|-------|---------|--------|---|--------|
| **Feixe Linear** | **GRAU 1** | **5 P.M** | **8 - 3** | **d8 + d6 + 12** |
| Feixe Linear | GRAU 2 | 8 P.M |  --   |2d8 + 2d6 + 2d12 |
| Feixe Linear | GRAU 3 | 10 P.M | 8 + 2  |3d8 + 3d6 + 3d12 |
| Feixe Linear | GRAU 4 | 15 P.M | 8 + 2 + 5 | 4d8 + 4d6 + 4d12 |

### 3. Poderes com interações - Exemplo complexo

Mesmo com a regra da Seção anterior para poderes introduzidos a partir do **GRAU 2**, existem poderes que podem ser ainda mais complexos!
Para esse exemplo, vamos nos basear num poder que tem interação com outros poder:

<p>
  <SpellFromJson expanded={false} spellData={double_blast} />
</p>

A **Rajada Dupla** é um poder de **GRAU 3** que utiliza como Dano o valor de dano do poder **Rajada de Aprendiz**, que é de **GRAU 1**.

Nesse caso, se o nosso Mago estiver no **GRAU 4** e quiser utilizar a **Rajada Dupla** no **GRAU 2**, ele pode? E qual é o custo?

**Sim! Nesse caso ele pode!**

A **Rajada Dupla** pode ser um poder de **GRAU 3**, mas a **intensidade dela** se baseia na intensidade de um poder de **GRAU 1**, logo devemos o custo base da **Rajada do Aprendiz GRAU 1**, aplicar a fórmula de Custo da **Rajada Dupla** (2x P.M), e então montar a tabela de custo seguindo a mesma regra do primeiro exemplo:

| Poder |  GRAU   | Custo |  Dano   |
|-------|---------|--------|--------|
| Rajada Dupla | GRAU 1 | 3+3 P.M | 2x (5d4 + 5) |
| **Rajada Dupla** | **GRAU 2** | **5+5 P.M** | **2x (5d8 + 10)** |
| Rajada Dupla | GRAU 3 | 7+7 P.M | 2x (5d12 + 15) |
| Rajada Dupla | GRAU 4 | 12+12 P.M | 2x (5d20 + 20) |

### 4. Poderes Aprimorados - Exemplo complexo

Um outro exemplo comum é quando um **Aprimoramento** altera a **intensidade de um poder baseado em GRAU**:

<p>
  <SpellFromJson expanded={false} spellData={summon_sombrizir} />
  <SpellFromJson expanded={false} spellData={upgrade_sombrizir} />
</p>

Neste exemplo, o Aprimoramento altera a **fórmula de Dano** de **Conjurar Sombrizir**, passando de ```GRAU*1d6``` para ```GRAU*1d12```.
Como a mudança foi apenas na formula, a regra se mantém igual, a única diferença é que nossa tabela de danos muda à partir do momento que o personagem obtém o aprimoramento:

**Antes de obter o aprimoramento:**

| Poder |  GRAU   | Custo | Modificador de P.M |  Dano   |
|-------|---------|--------|--|--------|
| Conjurar Sombrizir | GRAU 1 | 2 P.M | 4 - 2  | 1d6 |
| Conjurar Sombrizir | GRAU 2 | 4 P.M | -- | 2d6 |
| Conjurar Sombrizir | GRAU 3 | 6 P.M | 4 + 2  | 3d6 |
| Conjurar Sombrizir | GRAU 4 | 11 P.M | 4 + 2 + 5  | 4d6 |

**Depois de obter o aprimoramento:**


| Poder |  GRAU   | Custo | Modificador de P.M |  Dano   |
|-------|---------|--------|--|--------|
| Conjurar Sombrizir | GRAU 1 | 2 P.M | 4 - 2 | 1d12 |
| Conjurar Sombrizir | GRAU 2 | 4 P.M | -- | 2d12 |
| Conjurar Sombrizir | GRAU 3 | 6 P.M | 4 + 2 | 3d12 |
| Conjurar Sombrizir | GRAU 4 | 11 P.M | 4 + 2 + 5 | 4d12 |

## Errando Magias

Se pensarmos tecnicamente, qualquer magia no jogo pode ser dividida em 2 etapas:

- Canalizar a magia
- Lançar a magia

Canalizar é o ato de consumir seus **Pontos de Magia** para de fato materializar uma concentração mágica de qualquer natureza. Já Lançar é o ato de manipular aquela concentração já concretizada, e direcioná-la aos alvos desejados.

Vamos pegar como exemplo o poder **Rajada de Aprendiz** do Grimo de Allura:

<SpellFromJson expanded={false} spellData={apprentice_blast} />
<br/>
Este poder é bastante simples. O personagem canaliza um projétil mágico elemental e o dispara em direção a um inimigo.

Mas vamos supor que você siga as instruções do poder e faça uma rolagem contra a **Defesa Mágica** do inimigo, e então falhe nessa rolagem.

Nesse caso, em qual etapa da conjuração você falhou? Na Canalização ou no Lançamento?

A diferença entre essas duas situações é que na primeira, você nunca teria de fato **canalizado o poder**, e por isso nunca teria gasto seus **Pontos de Magia**. É como se você estivesse muito nervoso ou não se concentrasse corretamente para conjurar aquele poder.

Já na segunda situação, você teria de fato materializado a **Rajada**, gastando seus **Pontos de Magia**, e falhando apenas no **lançamento dela**, possivelmente **errando o alvo**, ou até mesmo se o próprio alvo tivesse bloqueado ou absorvido o poder.

Para o jogador, parece que a primeira opção é muito mais interessante certo? Afinal de contas, isso preservaria os seus **Pontos de Magia**, beneficiando-o mecanicamente.

Mas qual é o certo? Abaixo sugerimos duas formas distintas na qual essa dinâmica possa se desenrolar. Nenhuma delas é certa ou errada, e vai depender do seu grupo de jogo como um todo definir o que é mais interessante.

### A autonomia é do Narrador

No caso da **Rajada do Aprendiz**, ela especificamente diz que você só conjura o projétil mágico **caso seja bem sucedido** no dado, mas por outro lado, sua rolagem não é uma **Ação de Perícia** que depende só das suas habilidades como Personagem, e sim uma **Ação de Desafio** contra a **Defesa Mágica** de um outro inimigo, o que por si só também deduz que o inimigo estaria "desviando" ou "absorvendo" um ataque que **já teria sido canalizado**.

Sabemos que isso dá margem para interpretar um mesmo ataque de duas maneiras diferentes, e por isso, neste formato, o próprio Narrador pode decidir se a **canalização ocorreu ou não**.

Dessa forma ele pode criar situações inusitadas onde inimigos estão constantemente se desviando de ataques, ou até situações onde por algum motivo os Personagens estão com dificuldades de canalizar a conexão de seus Grimos com seus **Elo Mágicos**. Cada uma dessas formas afetará o campo de batalha de forma única.

### A autonomia é do Jogador

Geralmente, uma grande maioria dos poderes mágicos assume que na ocasião de uma falha, é a **Canalização** do poder em sí que falhou, e não o seu **Lançamento**.

Fazemos isso pois pensamos que seria mais interessante para o jogador preservar seus **Pontos de Vida** para evitar frustrações desnecessárias, afinal de contas, você **já está errando sua ação de ataque** e vai precisar esperar **todo mundo jogar** pra tentar novamente.

Neste formato, o próprio jogador pode decidir se prefere narrar a falha no **lançamento do poder**, ou se prefera narrar a falha na **canalização do poder**, porque em alguns momentos pode ser interessante para você preservar seus **Pontos de Magia** naquele momento.

Lembre-se que **falhar frequentemente** na **canalização** de um poder pode ser ruim para a **auto-estima** do seu personagem! (caso ele tenha uma)

## Conjurando Poderes especiais

Todo Grimo possui ao menos **1 Poder especial**. Esse poder geralmente só pode ser usado uma vez por **descanso de jogo**, e costuma ser bastante poderoso e impactante.

Diferente de todos os outros poderes, os Especiais podem ser conjurados mesmo que você **não tenha os Pontos de Magia necessários** para canalizá-lo.

Pegue por exemplo o poder **Eco de Lunn**, do **Grimo de Lunn**:

<SpellFromJson expanded={false} spellData={lunns_echo} />
<br/>

Este poder tem um custo de **7 P.M**, e assim como outros poderes, ele também escala seu custo conforme utilizado em Graus superiores, veja a tabela:

| Poder |  GRAU   | Custo | Modificador de P.M  |
|-------|---------|--------|--------|
| Eco de Lunn | GRAU 1 | 7 P.M | -- |
| Eco de Lunn | GRAU 2 | 9 P.M | 7 + 2 |
| Eco de Lunn | GRAU 3 | 11 P.M | 7 + 2 + 2 |
| Eco de Lunn | GRAU 4 | 16 P.M | 7 + 2 + 2 + 5 |

Mas o que acontece se você não tiver **Pontos de Magia** suficiente para conjurar seu especial?

Se por exemplo você quiser usar o **Eco de Lunn** no **GRAU 3** mas possuir apenas <code>8 P.M</code>, você poderá usar o **especial** mesmo assim, simplesmente zerando todos os seus Pontos. Para isso, é obrigatório que você tenha pelo menos **1 Ponto de Magia**.

Dessa forma, mesmo personagens com o **Elo Mágico** enfraquecido podem brilhar novamente no auge do combate e utilizar seu **poder especial**, mesmo estando abaixo da quantidade de pontos necessários.
