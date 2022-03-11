---
id: magical-combat
title: Ataque e Defesa com Magia
slug: /9-combat-rules/magical-combat
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C97132ead-7b95-40cb-ad24-8ac4af65d437.jpg
---

import { SpellFromJson } from './../../src/components/skill_block/index'
import bash from './../../data/spells/spells-giurad/tier1/bash.json'

![Como utilizar o mais poderoso dos recursos no combate](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C97132ead-7b95-40cb-ad24-8ac4af65d437.jpg)

A Magia é um dos recursos mais poderosos das **Terras Místicas**. Devido ao advento do [Blecaute](/docs/13-the-world/the-blackout) o acesso à magia natural foi banido à todas as civilizações senscientes do mundo, e foi graças aos **Grimos** que os aventureiros puderam usufruir novamente dos conhecimentos mágicos ancestrais.

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

Mas caso você não ultrapasse esse resultado, ainda é possível obter um **Sucesso Imperfeito**, que faz com que seu Dano/Efeito seja aplicado normalmente*, mas pode gerar algumas consequências. Na tabela abaixo listamos algumas **consequências** que o Narrador pode utilizar neste tipo de ocasião rolando um D8:

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

Mas essas são apenas algumas sugestões, elas não são colocadas em **forma de regra**, mas em forma de **ferramenta Narrativa** que pode ser usada para dar sentido aos **Sucessos Imperfeitos**.

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

Agora Ramón aplicará o **Dano da Pancada**, que de acordo com a **Ficha de Poder**, possui a seguinte fórmula: `Dano da Arma + TIER*(1D12+5)`

Como o **Grimo de Ramón** está no **TIER 1** e o **Dano do Machado** é `1d12 + 3`, o Dano final que **Ramón** aplicará será de `1d12 + 3 + 1d12 + 5`, que podemos simplificar para `2d12 + 8`.

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

Mas caso você não ultrapasse esse resultado, ainda é possível obter um **Sucesso Imperfeito**, que faz com que sua defesa seja bem sucedida, mas com possíveis consequências. Na tabela abaixo listamos algumas **consequências** que o Narrador pode utilizar neste tipo de ocasião rolando um D8:

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

Mas essas são apenas algumas sugestões, elas não são colocadas em **forma de regra**, mas em forma de **ferramenta Narrativa** que pode ser usada para dar sentido aos **Sucessos Imperfeitos**.

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