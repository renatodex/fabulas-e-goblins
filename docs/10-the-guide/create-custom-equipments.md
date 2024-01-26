---
id: create-custom-equipments
title: Criando Armas e Armaduras
slug: /10-the-guide/create-custom-equipments
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C49a1608a-71af-4124-a8bb-f92b20c0ae0f.jpg
---

import EquipmentBlock from './../../src/components/equipment_block/index'
import DataTableBlock from './../../src/components/data_table_block/index'
import BaseWeaponList from './../../data/md_tables/base_weapon_list.md'
import BaseArmorList from './../../data/md_tables/base_armor_list.md'
import BaseMaterialListPhysical from './../../data/md_tables/base_material_list_physical.md'
import BaseMaterialListMagical from './../../data/md_tables/base_material_list_magical.md'
import BaseRefinementList from './../../data/md_tables/base_refinement_list.md'
import PhysicalAffixes from './../../data/md_tables/physical_affixes.md'
import MagicalAffixes from './../../data/md_tables/magical_affixes.md'
import ModifierExpectation from './../../data/md_tables/expectations/modifiers.md'
import EquipmentPricing from './../../data/md_tables/equipment_pricing.md'

![Aqui vamos falar um pouco sobre o sistema robusto que utilizamos para criar armas e armaduras nossas aventuras nas Terras Místicas...](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cfeb0a893-8ce7-4be0-9619-15ea3085c7fa.jpg)

Seria impossível listar todas as Armas, Armaduras, equipamentos e itens existentes nas Terras Místicas, mas com certeza existem itens bastante comuns que você pode encontrar por ai.

Além disso, diferente dos Poderes, os equipamentos **não evoluem de acordo com o Grau**, e os personagens vão sempre precisar buscar a arma certa para o momento certo.

Esta seção apresenta um sistema robusto de criação de **armas e equipamentos** e foi pensada para aqueles que querem criar seus próprios itens mantendo o balanceamento original do Fábulas & Goblins.

Porém, se o que você procura é apenas uma tabela de itens pré-pronta, temos uma seção no capítulo **Regras de Jogo** que fornece exatamente isso. Essa tabela foi criada utilizando o sistema que descreveremos nesta página.

## Compondo um equipamento

Para compor um equipamento, você deverá juntar 5 componentes que fazem um equipamento ser como ele é. São os seguintes:

1. Item Base
2. Material
3. Afixos Físicos
4. Afixos Mágicos
5. Refinamento

Juntos, esses componentes permitem que você crie praticamente qualquer tipo de arma ou armadura no jogo, e de quebra simplificam as tabelas, caso contrário precisariamos quase que criar um livro só pra te mostrar todos os equipamentos disponíveis.

## 1. Item Base

O componente item base determina qual é a forma do seu item.
Seria ele uma Espada? um Arco? Um Cajado?

Basicamente é o que as pessoas diriam que o seu item é caso olhassem para ele sem nunca tê-lo visto.

Com base neste item podemos saber qual será a **fórmula base de dano**, assim como o **atributo** necessário, o **tipo de dano**, de **ataque**, e o **preço base de compra** do item.

Vamos falar separadamente de armas e depois de armaduras.

### 1a. Item Base - Armas

Armas são a faca e a manteiga do aventureiro, pois portar uma arma confiável é o segredo para sobrevivência garantida nas diversas masmorras das Terras Místicas.

Algumas delas por natureza são **itens físicos**, como a **Espada**, o **Machado**, e o **Arco**, e por isso, causam ou anulam **dano físico**. Outras delas como a **Orbe**, o **Cetro**, e o **Prisma** são por natureza **itens arcanos**, usados para causar **dano mágico**. E alguns deles podem inclusive causar dano físico e mágico, apesar de geralmente uma dela ser mais eficaz.

Pense por exemplo na **Orbe**, é possível usá-la para acertar a cabeça de um inimigo adjacente, mas provavelmente conjurar seu feixe mágico com sua energia interior será muito mais efetivo!

Isso também não significa que você não possa causar **dano mágico** com uma **Espada** ou um **Machado**. Como veremos nas próximas seções, armas podem ser submetidas a um processo especial chamado de **Infusão Arcana**, que é capaz de alterar suas propriedades mecânicas.

A seguir, apresentamos uma lista de Armas e suas propriedades base.
Campos que possuem o valor `-` não podem receber esse tipo de dano, independente do material utilizado. Isso se aplica principalmente à coluna `Dano Base Mágico` em `Armas Físicas`, pois para causar `dano mágico`, essas armas precisam primeiro passar por um processo chamado **Infusão Arcana**. (falamos mais disso adiante)

<BaseWeaponList />

\* Tiaras, Cintos, Amuletos e Anéis não conferem **Redução de Dano físico**, independente do material utilizado.
\* Itens à distância (Arcos, Bestas, Cajados arcanos, etc) possuem alcance padrão `7`.

### 1b. Item Base - Armaduras

Da mesma forma que temos uma listagem padrão de Armas, temos também uma listagem padrão de peças de proteção ou armadura.
Esses itens podem ser encontrados em conjunto ou separadamente, mas aqui consideramos os valores individuais de redução de dano de cada parte.

Assim como na tabela de armas, os campos marcados com  `-` significam que independente do material, esse item não pode ter essa redução de dano.
Ou seja, uma **Tiara de Madeira** e uma **Tiara de Aço Galiriano** não vão reduzir nenhum dano físico, já uma **Tiara de Pó de Gema** reduzirá o **dano mágico** causado em `2`. (de acordo com a tabela de materiais)

<BaseArmorList />

:::info Exemplo de Armadura
Imagine um personagem que possua uma Armadura de Placas completa:
- Peitoral de Placas (+3)
- Grevas (+2)
- Manoplas (+1)
- Elmo fechado (+2)
- Ombreira (+1)

Concederia ao usuário uma proteção de `+9` por GRAU de personagem. (ex: redução de `36 Pontos de Dano` no GRAU 4)

Enquanto um Gibão de Couro completo:
- Peitoral de Gibão (+2)
- Capacete (+1)
- Luvas (+1)
- Botas (+1)
- Ombreira (+1)

Concederia ao usuário uma proteção de `+6` por GRAU de personagem. (ex: redução de `24 Pontos de Dano` no GRAU 4)
:::

## Calculando Adição e Redução de Dano

### Em Armas

Armas são primariamente usadas para causar dano físico ou mágico.

E como vimos anteriormente, o componente **Item Base** define a forma da sua arma, e além disso, também especifica um dado nas colunas **Dano Base Físico** e **Dano Base Mágico**.

Esses dado é parte da equação para montar o dano da arma, que é tão simples quanto:

`Dano Arma = (Dado Base de Dano)*(GRAU + 1) + GRAU*(Dano Extra do Material)`

Pra simplificar, pense que todas as armas iniciais de **Grau 1** já começam rolando **2 dados** de ataque  (seja d4, d6, d8, etc).
Já se estivermos falando de Armas **Grau 2**, essa rolagem aumenta para **3 dados**, aumentando para **4 dados** no **Grau 3** e por último **5 dados** no **Grau 4**. Aqui está uma tabela para simplificar:

| Grau | Dados   |
|:----:|---------|
|  `1` | 2 dados |
|  `2` | 3 dados |
|  `3` | 4 dados |
|  `4` | 5 dados |

Depois de rolar os dados, tudo que você precisa fazer é somar o Dano fixo concedido pelo material da arma. Na tabela que mostramos na seção anterior você encontra cada dano fixo de cada material. Lembrando que esse valor de Dano fixo também é multiplicado pelo Grau.

Então se a arma for uma **Espada de Ouro** de **Grau 2**, o cálculo da fórmula de dano será:

```
Dano Espada = d10*(2+1) + 10*2
```

Ou seja, no **Grau 2** nossa espada dourada causará `3d10 + 20` de **dano físico**.

### Em Armaduras

O objetivo das Armaduras é de primariamente reduzir o dano físico ou mágico causado.

Para calcular a Redução de dano total que um item ou um conjunto de itens concede, basta usar a fórmula da Armadura, que é bem parecida com a da Arma:

`Redução de Dano da Armadura  = GRAU*(Soma da Redução de Dano dos Items) + (# de Itens do Material)*(Redução de Dano do Material))`

Logo, se você quiser simular quanto você teria de Redução de dano se equipasse um **Escudo Pesado de Aço Galiriano** de **Grau 3**, e um **Peitoral de Ouro** de **Grau 4**, bastaria aplicar a fórmula:

`Redução de Dano da Armadura  = 3*(2) + 4*(3) + 1*(4) + 1*(3)`, onde:

- `3*(2)` equivale ao Grau do Escudo (**Grau 3**) multiplicado pela redução de dano dele (`2`)
- `4*(3)` equivale ao Grau do Peitoral (**Grau 4**) multiplicado pela redução de dano dele (`3`).
- `1*(4)` equivale ao número de itens (`1`) de **Aço Galiriano** (`4` de Redução).
- `1*(3)` equivale ao número de itens (`1`) de **Ouro** (`3` de Redução).

No final temos que a Redução destes dois itens equipados seria de `25 Pontos de Dano`!

## 2. Material

Determina a qualidade da matéria prima utilizada na confecção do item.
Alguns podem ser feitos de madeira, Ouro, Aço Galiriano e até Gemas mágicas, como veremos a seguir.

O material influencia nas seguintes propriedades do item:
- Dano causado *(no caso de armas)*
- Dano recebido *(no caso de armaduras)*
- Durabilidade do item
- Preço.

Eles podem ser divididos em 2 categorias:

- Materiais físicos *(madeira, couro, aço, ouro, etc)*
- Materiais arcanos *(gemas e mineirais de origem mágica)*

Nas tabelas a seguir apresentamos uma listagem separada para **materiais físicos** e outra para **materiais arcanos**.

Em ambas, o campo **Durabilidade Adicional** define o incremento de durabilidade do item. Por padrão todos os itens começam com `Durabilidade 3`, e escalam conforme o material e propriedades.

### Materiais físicos

<BaseMaterialListPhysical />

### Materiais arcanos

<BaseMaterialListMagical />

## Afixos

Os Afixos são melhorias individuais que podem ser infundidas nas **armas e armaduras** para que se tornem mais poderosas.

Essencialmente, **Itens Afixados** da forma que conhecemos

### 3. Afixos Físicos

Armas podem possuir as mais diversas propriedades, adquiridas durante o seu uso, ou até mesmo em sua construção para torná-las mais eficientes, potentes e duráveis.

Diferente dos outros componentes, uma mesma arma pode possuir diversos Afixos ao mesmo tempo, desde que não entrem em conflito com o próprio espaço físico do objeto.

<PhysicalAffixes />

Exemplo:
Uma espada de madeira comum em excelente estado de conservação que causa <code>Terror 6</code> em inimigos, pode ser utilizada em <code>1 mão</code> e perfura Armaduras dando um <code>Bônus de +2</code> pode ser definida assim:

`Espada de Madeira Impecável +0 - Leve, Perfurante (2) e Aterradora (5)`

### 4. Afixos Mágicos

Por último, para completar a composição da sua arma, existem propriedades mágicas que itens podem ter para se tornarem ainda mais poderosos.

Aqui, provavelmente o céu é o limite, mas mesmo assim vamos descrever algumas propriedades comuns:

<MagicalAffixes />

## Afixos e Variaveis

Como você viu anteriormente, muitos afixos como **Perfurante (F)** e **Larga (F)** possuem modificadores que melhoram a arma, aumentando o Dano, Ataque e outros atributos mecânicos.

Mas essas variáveis são descritas de forma genérica, então tecnicamente, pelo sistema de Armas, uma arma que possua **Perfurante (1)** tem o mesmo valor que uma Arma **Perfurante (6)**, correto?

Sim, e não!
Bom, tecnicamente você estaria certo a dizer que não temos uma mecânica que faça uma Arma com Afixo melhor ser **mais cara**, até porque muitos afixos vão usar fórmula de Dano e seria muito complexo pensar numa precificação TÃO TÃO granular.

Ao invés disso, a única coisa que fazemos é aumentar o valor do Item pelo seu Grau.

Porém, como você pode ver, vai depender muito do jogo de cintura do Narrador de tornar esses Afixos balanceados, afinal, se ele entregar uma arma tão poderosa a algum jogador, não existe nenhuma mecânica em nenhum Sistema de RPG que vai impedir que o jogo fique desbalanceado.

Então basicamente o que queremos passar aqui é que todos os valores e mecânicas que passamos aqui são **referências**, e cabe aos Jogadores e ao Narrador cuidarem para que o **equilíbrio mecânico** do jogo seja mantido, com armas sempre proporcionais ao nível de desafio.

Nada impede que você crie seu próprio balanceamento, ou seus próprios afixos, mas tudo deve ser feito com moderação para priorizar a diversão e o equilíbrio dos combates no jogo!

## 5. Refinamento

Nem todos os itens no jogo podem ser refinados.

Por uma questão de equilíbrio, restringimos o refinamento para os seguintes itens:

- Proteções para o Tronco (Armaduras no geral)
- Proteções para a Cabeça (Capacetes no geral)
- Escudos
- Armas

Esses itens podem possuir um **modificador de Refinamento**, que nada mais é do que um número que aumenta seu **ataque ou defesa**:

- Espada de Madeira +0
- Orbe de Cristal +4
- Escudo de Pedra +2
- Armadura de Ouro +6

Mas como saber se o número no item aumenta a defesa ou ataque? E como saber se é físico ou mágico?

Geralmente itens focados em **ataque físico** como **Machados** e **Espadas** possuem **modificadores de ataque físico**, enquanto **itens arcanos** focados  em **ataque mágico** como **Cetros** e **Orbes** geralmente possuem **modificadores de ataque mágico**.

Armaduras seguem um padrão similar, **Armaduras** e **Capacetes** com **modificadores de defesa física** e **Túnicas** e **Mantos** com **modificadores de defesa mágica**.

Uma forma simples de representar esse modificador de refinamento é adicionar a letra `F` para indicar o bônus `Físico` e `M` para indicar o bônus mágico (itens arcanos), como em:

- Escudo de Pedra +2F
- Orbe de Cristal +3M

Mas essa lógica varia muito de item para item e fica a cargo do Narrador. Por exemplo, nada impediria uma **Armadura de Placas +4F +3M** de existir, basta que o Narrador encontre um contexto apropriado para o item.

Em casos óbvios, é até preferível por questão de simplificação omitir esse caráctere do sufixo, como por exemplo em `Escudo de Pedra +2`. Nesse caso, ficaria implícito que como `Escudo` é uma peça de armadura que geralmente tem objetivo de conceder **proteção física**, assume-se que esse `+2` concede `Defesa Física`.

O mesmo se aplica para itens que não possuem refinamento, como é o caso de uma `Espada de Madeira`. Neste caso, assume-se que ela tem Nível 0 de refinamento, e por isso provê um **bônus de +0 de Ataque Físico**. Já uma `Orbe de Cristal +1` ofereceria um **Bônus de +1 de Ataque Mágico**. *(porque a Orbe é naturalmente um item arcano com foco geralmente mágico)*

### Grandes refinamentos, grandes responsabilidades

É bom ter em mente que refinamentos podem ser perigosos para o Balanço do jogo, tecnicamente, seguindo apenas as mecânicas deste livro à risca, já seria possível por exemplo que um único personagem tivesse até `+48 de Defesa Física` *(16 de Armadura, 16 de Elmo, 16 de Escudo)*, e tudo isso apenas com equipamentos. Este valor por exemplo seria bem **maior** que o valor de Ataque de uma das criaturas mais épicas do jogo, como por exemplo o **Knerotraco** (**35 de Físico**).

Assumimos que um **bom valor máximo** de Modificador no **Nível 20** (Nível Máximo) seria o de `+16 de Ataque/Defesa`, pois cada jogador, ao realizar um ataque ainda vai somar o resultado de **2d20**, que neste caso, se ele tirasse 20, já conseguiria o resultado de `36` *apenas com os modificadores de equipamentos*, e sabemos que jogadores de Nível máximo conseguiriam muito mais que isso utilizando seus poderes.

Então, para simplificar, pense que em um grupo de RPG balanceado, sugerimos que armas e armaduras sigam os seguintes limites de modificadores por Grau:

<ModifierExpectation />

### Precificando Itens Refinados

Como vimos anteriormente, você é livre para controlar o balanceamento do jogo, mas achamos de bom tom sentido introduzir algumas expectativas para que você possa ter uma referência e aumentar ou diminuir conforme sua necessidade.

Abaixo, apresentamos uma tabela de Refinamentos para Precificar um Item em um determinado Nível de Refinamento.
Cada Nível aumenta o preço da arma ou armadura em questão, seguindo a tabela:

<BaseRefinementList />

## Infusão Mágica

Como mostramos anteriormente, itens Físicos na tabela  de Armas não possuem dado de **dano mágico**, mas é possível encontrar espadas no jogo que causam Dano Mágico. Como isso funciona?

Alguns ferreiros transformam Armas físicas como **Espadas** e **Machados** em armas arcanas, e esse processo é conhecido por **Infusão Mágica**.
A infusão consiste em alterar as propriedades de um item físico para que ele se torne um item arcano.

Imagine uma **Espada de Pó de Gema**. Esse item, por ser forjado com **Gemas mágicas**, passa automaticamente a agir como um item arcano. Isso significa que qualquer coisa que se aplicaria a um item físico, agora não se aplica mais a espada, pois ela é, fundamentalmente, um item arcano.

Esse é um processo que só se aplica a armas, pois Armaduras no jogo não possuem nem dados de dano nem atributos.

Então por exemplo, sempre que uma Arma sofrer **Infusão Mágica**, seu atributo também se alterará, seguindo o seguinte mapeamento:

- Força -> Intelecto
- Influência -> Intelecto
- Resiliência -> Elo Mágico
- Agilidade -> Espírito

Isso significa que nossa espada, ao invés de **Força**, passaria ser um item de **Intelecto**.

E qual seria o dano dessa espada?

Tanto seu **dano físico** quanto seu **dano mágico** se alteram no processo, então a espada que causa `2d10 de dano físico` por Grau, agora causaria apenas `2d8 de dano físico` por Grau, reduzindo sempre uma categoria de **dado de dano** (de d10 para d8).
Esse é o **sacríficio** que o nosso item precisa aceitar para transgredir de sua forma física para sua forma mágica.

O **dano mágico** segue a mesma lógica do **dano físico**, ou seja, nossa Espada mágica causaria `2d8 de dano mágico` por Grau.

Além disso, a Espada não receberia mais **adição de dano físico** por material, já que sua construção agora usaria **materiais arcanos**, e esses por sua vez só fornecem **adição de dano mágico**.

Resumindo, se compararmos duas Espadas com materiais equivalentes:
- Na forma física, uma **Espada de Madeira** no **Grau 4** causaria `5d10 + 8` de **dano físico** e `0` de **dano mágico**.
- Na forma mágica, uma **Espada de Pó de Gema** no **Grau 4** causaria `5d8` de **dano físico** e `5d8 + 8` de **dano mágico**.

## Perfil de Equipamento

Um Metalóide dificilmente entraria em uma armadura feita para Goblins, imagine então para Armadons.
O perfil do item serve para identificar a qual <b>espécie</b> esse item foi inicialmente desenhado.

Se desejar, o Narrador pode definir o perfil do item no momento que ele for encontrado pelos jogadores, caso contrário, pode-se assumir que o item será compatível ao primeiro jogador que demonstrar interesse em utilizá-lo.

E mesmo que o Narrador diga: *"Vocês encontram um Peitoral de Prata, que parece ser pequeno demais para um Goblin usar".*
Se houver um Goblin no grupo, ele pode interromper o Narrador para utilizar seu talento racial <b>Armadura da Sorte</b>, exigindo um <b>Teste de Perícia</b> do atributo <code>Destino</code> para fazer com que a armadura seja compatível com um Goblin médio.

Afixos de Armadura como <code>Larga</code> sempre vão se aplicar considerando o biótico da espécie a qual ele foi desenhado, logo, uma Armadura de Luminin com o afixo <b>Larga</b> talvez sirva num <b>Luminin com porte físico avantajado</b>, mas jamais serviria em um <b>Luminin magricelo</b>, um <b>Armadon</b>, e até mesmo em um <b>Goblin</b> pequeno.

Caso um jogador ainda queira utilizar uma armadura fora de seu perfil, ele ainda poderá fazê-lo, mas não receberá os bônus de Defesa concedidos pelo item.

## Precificando Itens

Com tantas variações, afixos e tipos de equipamentos, pode ser complexo avaliar o preço de um equipamento, mas com a ajuda das mais influentes casas de penhores das **Terras Místicos**, desenvolvemos um método infalível para te auxiliar com essa tarefa!

Para simplificar, definimos um Custo base para cada tipo de incremento, seja ele um Refinamento, Afixo físico ou mágico.
Esses valores aumentam conforme o Grau do item, que varia de 1 a 4 (salvo raras e).

<EquipmentPricing />

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
            {''}<span class="text-3xl align-top">{'('}</span>{' '}
            <span class="bg-emerald-200 border border-emerald-600 px-1 py-1 text-black rounded-xl">
                Item Base
            </span>
            {''}<span class="text-3xl align-base">+</span>{''}
            <span class="bg-emerald-200 border border-emerald-600 px-1 py-1 text-black rounded-xl">
              Custo Base Material
            </span>
            {' '}<span class="text-3xl align-top">{')'}</span>{''}
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

### Exemplo: Machado de Madeira +0 (GRAU 1)

O <code>Machado de Madeira +0</code> é um exemplo bem simples de Arma para calcularmos o preço.

Se quebrarmos o item nos 5 complementos, teremos:

1. **Item Base**: Machado (T$ 200)
2. **Material**: Madeira (x1)
3. **Afixos Físicos**: Nenhum
4. **Afixos Mágicos**: Nenhum
5. **Refinamento**: Nenhum

É um item **Grau 1**, e como não possui Afixos nem Refinamento, o que vale aqui é só o valor do Item mesmo. Para isso, usaremos os valores de Grau 1 da tabela:

<code>Preço = 1*(200 + 100) = T$ 300.</code>
<br/><br/>

Nesse caso:

- `1` representa o multiplicador do **Material**, que é **Madeira**.
- `200` representa o valor base do **Machado**.
- `100` representa o **Custo Base do Material** de **Grau 1**.

Como não temos nenhum afixo nem refinamento, simplificamos a fórmula já que esses valores terão resultado é zero. Então o valor final do Machado é de **T$ 300**.

<EquipmentBlock data={{
  tier: 1,
  name: "Machado de Madeira",
  item_shape: {
    name: "Machado",
    base_damage: "2d12 + 4",
    base_price: 200,
    item_type: 'attack_physical',
    attribute: 'Resiliência',
  },
  material: {
    name: "Madeira",
    multiplier: 1,
  },
  buy_price: 200,
  weight: 1,
  speed: 0,
  durability: {
    current: 1,
    total: 3,
  },
  refinement: {
    attack_physical: 0,
    attack_magical: 0,
    defense_physical: 0,
    defense_magical: 0
  },
  affixes: []
}}></EquipmentBlock>
<br/>
Simples certo? Agora vamos evoluir um pouco esse Machado.

### Exemplo: Machado de Bronze Largo Espinhento e Perfurante +2 (GRAU 1)

Para este Machado usaremos 3x **Afixos Físicos**:

- **Larga (d10)**: Transforma a arma em Arma de 2 mãos e adiciona `+1d10` de dano.
- **Espinhenta (d6)**: Adiciona espinhos cortantes na arma que causam `+1d6` de dano.
- **Perfurante (2)**: Torna a arma mais afiada nas pontas, adicionando `+2 de Ataque Físico`.

Além disso, será uma arma com **Refinamento +2**, que neste caso também adicionará `+2 de Ataque Físico`.

Se quebrarmos o item nos 5 complementos, teremos:

1. **Item Base**: Machado **(Valor - T$ 200)**
2. **Material**: Bronze **(Multiplicador - 2.0x)**
3. **Afixos Físicos**: Largo *(200x2.0)*, Espinhenta *(200x3.0)*, Perfurante *(150x3.0)*
4. **Afixos Mágicos**: Nenhum
5. **Refinamento**: +2 *(150x3.0)*

O preço final ficaria:

<code>Preço = 2.0*(200 + 100) (Material Bronze) + 200*2.0 (Afixo Largo) + 200*3.0 (Afixo Espinhenta) + 200*3.0 (Afixo Perfurante) + 150*3.0 (Refinamentos) = T$ 2.650</code><br/><br/>

Aqui nesta formula, da esquerda para direita:

- `2.0` representa o Multiplicador do Material **(Bronze)**
- `200` representa o valor do Machado **(independente de Grau)**
- `100` representa o **Custo Base do Material** para **Grau 1**.
- `200*2.0` representa o valor do **Custo Base de Afixos Físicos** de **Grau 1** *(200)* vezes o Multiplicador do **Afixo Larga** *(2.0)*
- `200*3.0` representa o valor do **Custo Base de Afixos Físicos** de **Grau 1** *(200)* vezes o Multiplicador do **Afixo Espinhenta** *(3.0)*
- `200*3.0` representa o valor do **Custo Base de Afixos Físicos** de **Grau 1** *(200)* vezes o Multiplicador do **Afixo Perfurante** *(3.0)*
- `150*3.0` representa o valor do **Custo Base de Afixos Refinamentos** de **Grau 1** *(150)* vezes o Multiplicador do **Nível de Refinamento** *(+2)*

E todos esses custos juntos fazem com que nossa arma seja avaliada em **T$ 2.650** !
Abaixo mostramos como ficaria a ficha dessa arma, com os Danos e valores de Ataque somados.

Como você vai ver, apesar de ser uma Arma de **Grau 1**, ela tem tantos afixos que passa a ser "equivalente" a uma Arma de **Grau 2** em termos de Dano e Ataque.

<EquipmentBlock data={{
  tier: 1,
  name: "Machado de Bronze",
  item_shape: {
    name: "Machado",
    base_damage: "2d12 + 4",
    base_price: 200,
    item_type: 'attack_physical',
    attribute: 'Resiliência',
  },
  material: {
    name: "Bronze",
    multiplier: 2,
  },
  buy_price: 2650,
  weight: 1,
  speed: -1,
  durability: {
    current: 7,
    total: 7,
  },
  refinement: {
    attack_physical: 2,
    attack_magical: 0,
    defense_physical: 0,
    defense_magical: 0
  },
  affixes: [
    {
      name: "Larga",
      notation_name: "Larga (F)",
      notation: "(F)",
      description: 'Um item grande. No caso de armas, exige que seja manipulada com as duas mãos, além de causar (1d10) de dano adicional. No caso de armaduras, só pode ser utilizada por personagens grandes e largos e que sejam compatíveis com o Perfil do item.',
      is_physical: true,
      is_magical: false,
      multiplier: 1.0,
      empowers: [
        {
          name: "F",
          value: "1d10",
          damage_up: true,
        }
      ]
    },
    {
      name: "Perfurante",
      notation_name: "Perfurante (X)",
      notation: "(X)",
      description: 'Refina a lâmina para que ela possa penetrar armaduras com maior facilidade. + (2) Ataque Físico',
      is_physical: true,
      is_magical: false,
      multiplier: 1.0,
      empowers: [
        {
          name: "X",
          value: "2",
          attack_physical_up: true,
        }
      ]
    },
    {
      name: "Espinhos",
      notation_name: "Espinhos (F)",
      notation: "(F)",
      description: 'Adiciona espinhos afiados ao item, adicionando a característica Perfurar. Em armas faz com que golpes infligidos causem um adicional de (d6) de dano. Em armaduras faz com que golpes recebidos causem (d6) de dano perfurante.',
      is_physical: true,
      is_magical: false,
      multiplier: 1.0,
      empowers: [
        {
          name: "F",
          value: "d6",
          damage_up: true,
        }
      ]
    },
  ]
}}></EquipmentBlock>
