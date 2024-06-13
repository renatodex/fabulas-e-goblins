---
id: giurads-crest
title: Brasão de Giurad
slug: /4-grimos-and-spells/giurads-crest
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C43c7657b-30a2-40f3-b289-5f39646c7e20.png
---

import GrimoCostMod from '@site/src/components/grimo_cost_modifier/index'

import { SpellFromJson } from './../../src/components/skill_block/index'

import knights_fury from './../../data/spells/spells-giurad/ultimates/knights_fury.json'

import armored from './../../data/spells/spells-giurad/tier1/armored.json'
import bash from './../../data/spells/spells-giurad/tier1/bash.json'
import cavalry from './../../data/spells/spells-giurad/tier1/cavalry.json'
import crucial_impact from './../../data/spells/spells-giurad/tier1/crucial_impact.json'
import disorient from './../../data/spells/spells-giurad/tier1/disorient.json'
import endure from './../../data/spells/spells-giurad/tier1/endure.json'
import quick_heal_wounds from './../../data/spells/spells-giurad/tier1/quick_heal_wounds.json'
import knights_magic from './../../data/spells/spells-giurad/tier1/knights_magic.json'
import knights_presence from './../../data/spells/spells-giurad/tier1/knights_presence.json'
import squire_specialization from './../../data/spells/spells-giurad/tier1/squire_specialization.json'
import judgement from './../../data/spells/spells-giurad/tier1/judgement.json'
import warrior_resistance from './../../data/spells/spells-giurad/tier1/warrior_resistance.json'

import armored2 from './../../data/spells/spells-giurad/tier2/armored-2.json'
import duel from './../../data/spells/spells-giurad/tier2/duel.json'
import focused_double_attack from './../../data/spells/spells-giurad/tier2/focused_double_attack.json'
import improved_strength from './../../data/spells/spells-giurad/tier2/improved_strength.json'
import precise_parry from './../../data/spells/spells-giurad/tier2/precise_parry.json'
import right_hit from './../../data/spells/spells-giurad/tier2/right_hit.json'
import sismic_parry from './../../data/spells/spells-giurad/tier2/sismic_parry.json'
import squire_specialization2 from './../../data/spells/spells-giurad/tier2/squire_specialization-2.json'
import stock from './../../data/spells/spells-giurad/tier2/stock.json'
import wear_resistance from './../../data/spells/spells-giurad/tier2/wear_resistance.json'

import crucial_block from './../../data/spells/spells-giurad/tier3/crucial_block.json'
import elemental_defense_aura from './../../data/spells/spells-giurad/tier3/elemental_defense_aura.json'
import impetuous_impact from './../../data/spells/spells-giurad/tier3/impetuous_impact.json'
import inspiring_bash from './../../data/spells/spells-giurad/tier3/inspiring_bash.json'
import knights_roar from './../../data/spells/spells-giurad/tier3/knights_roar.json'
import overload_weapon from './../../data/spells/spells-giurad/tier3/overload_weapon.json'
import reflect_magic from './../../data/spells/spells-giurad/tier3/reflect_magic.json'
import spiral_attack from './../../data/spells/spells-giurad/tier3/spiral_attack.json'
import stunning_blast from './../../data/spells/spells-giurad/tier3/stunning_blast.json'
import trained_parry from './../../data/spells/spells-giurad/tier3/trained_parry.json'

import aurea_action from './../../data/spells/spells-giurad/tier4/aurea_action.json'
import elemental_instance from './../../data/spells/spells-giurad/tier4/elemental_instance.json'
import epic_blow from './../../data/spells/spells-giurad/tier4/epic_blow.json'
import etereal_cavalry from './../../data/spells/spells-giurad/tier4/etereal_cavalry.json'
import honor_instance from './../../data/spells/spells-giurad/tier4/honor_instance.json'
import knights_shielding from './../../data/spells/spells-giurad/tier4/knights_shielding.json'
import lion_force from './../../data/spells/spells-giurad/tier4/lion_force.json'
import powerful_duel from './../../data/spells/spells-giurad/tier4/powerful_duel.json'
import reflex_master from './../../data/spells/spells-giurad/tier4/reflex_master.json'
import shields_purge from './../../data/spells/spells-giurad/tier4/shields_purge.json'

![Os Guerreiros de Giurad são cavaleiros da justiça, juramentados por seus tutores com a missão de trazer o equilíbrio e o balanço ao mundo...](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C43c7657b-30a2-40f3-b289-5f39646c7e20.png)

Com suas armaduras reluzentes, os **Cavaleiros de Giurad** são guerreiros da Justiça, que se erguem como uma muralha impenetrável contra a escuridão que ameaça a paz e a prosperidade do mundo.

Cada Cavaleiro é Juramentado por seu Tutor, uma figura a qual ele deve proteger com a própria vida, enquanto empunham sua espada para trazer o equilíbrio da Lei e da Ordem.

Letrados na arte do combate corpo-a-corpo e proteção, são especialistas em armas rápidas e afiadas, como Espadas, Machados e Escudos.

Seu juramento é sua força, e sua vontade é a espada que empunham. Esses Cavaleiros são respeitados no mundo todo por serem a personificação da Honra e da Lei, em um mundo turbulento onde apenas pode haver progresso quando o mal for purificado.

## Criando um Adepto de Giurad

Quando você opta pelo **Brasão de Giurad** como seu Grimo inicial, você deve:<br/>
### 1. **Nomear um Tutor**
O Tutor é uma pessoa da sua história de vida que o indicou para que você se tornasse um **Cavaleiro de Giurad**.

Aqueles que portam o **Brasão de Giurad** não o fazem sem ter a confiança de um Tutor. Um Tutor geralmente alguém importante e influente a qual você deve gratidão e respeito, possuindo o dever legal de defendê-lo com toda sua vida.

A nomeação no primeiro momento pode ser tão simples como: Meu Tutor chama-se *"Fulano da Silva"*. O nome do Tutor deve estar anotado na sua Ficha de Personagem para referência futura do Narrador.
*Não é necessário que a história do Tutor seja explicada nesse primeiro momento, mas com certeza se você tiver uma explicação, será melhor!*<br/>

### 2. Escolher seus Poderes Iniciais

A menos que outra regra diga o contrário, você deverá:

- Escolher 2x (dois) Poderes do Grau 1.
- Escolher 1x (um) Poder Especial.

## Virtudes do Grimo

### 1. Folego de Herói

Sua vontade em vencer seus obstáculos seria indescritível para qualquer um sem sua garra e motivação.

Além disso, **Adeptos de Giurad** são treinados a ferro e fogo para circunstâncias letais onde pode não haver esperança. Por isso, esses guerreiros aprendem desde o início que o mundo é cruel, e só depende deles se tornarem a própria faísca da esperança.

O Folego de Herói garante que, uma vez por dia, sempre que você chegar a **0 P.V e for abatido**, faça um **Teste de Resiliência**. Se for bem sucedido, você se levanta **após 1 turno** com apenas **1 P.V** para viver e lutar mais uma vez.

**Você pode escolher se levantar em qualquer ordem da iniciativa.**

Antes de se levantar, como uma **ação livre de interpretação**, você pode narrar os pensamentos ou visões que te levaram a se levantar epicamente contra a escuridão e lutar mais uma vez.

Essa ação, se bem sucedida, **não gerará um Trauma** para o Personagem.

### 2. Proteger

A qualquer momento, se estiver adjacente a qualquer **alvo fragilizado** você pode usar a ação Proteger.

Essa ação é uma **ação de reação**, e que pode ser usada apenas no momento em que um ataque está sendo feito contra o alvo fragilizado. Você pode declarar o uso de Proteger inclusive **fora do seu turno** de combate. (mas também pode ser usada fora de combate)

**Alvos Fragilizado** são alvos que não podem se defender por sí só, ou que estejam feridos (menos da metade dos P.V)

Ao utilizar **Proteger**, você se impôe a frente do alvo, e o ataque que seria realizado contra a **Defesa Física** ou **Mágica** do alvo agora é realizado contra sua **Defesa Física** ou **Mágica**.

Caso o alvo acerte, ele passa a acertá-lo, ao invés de acertar o alvo.

# Interpretando um Adepto de Giurad

Os Aventureiros treinados pela **Ordem do Cavaleiro** aprendem a ter disciplina para servir e proteger seus tutores.<br/>
Eles são vistos pelos outros como **Cavaleiro da Justiça**, cujos objetivos são ditados por seu **Tutor**.

A honra desse privilégio é muito bem vista em civilizações do mundo todo, pois os **Adeptos de Giurad** fazem um juramento onde sacrificam suas pretenções de vida em troca do dever de lutar pelo equilíbrio do mundo.

Politicamente, a **Academia de Giurad**, onde os Cavaleiros são treinados, é aliada de grandes Reinos, sendo cada academia individual geralmente associada a um único reino ou império.

**Cavaleiros de Giurad** geralmente possuem objetivos claros e são muitas vezes avistados como **Guarda-Costas de Elite** de **entidades importantes** no mundo, como **Nobres**, **Governantes**, **Imperadores** e até **Augúrios**.

## As Academias de Giurad

É nas **Academias de Giurad** onde esses Cavaleiros são treinados para se tornarem guerreiros exímios da arte do combate tático e corpo-a-corpo.<br/>
Diferente de muitas Academias, Os jovens Cavaleiros apenas podem ingressar na Academia através de um processo rígido de indicação, onde os **Mestres de Giurad** avaliarão a procedência e legitimidade do Tutor responsável pela indicação.

Assim que é admitido, o **Adepto de Giurad** passa por um juramento, onde promete proteger seu Tutor até seu último sopro de vida.
Aqueles que se recusarem a proteger seus Tutores, serão condenados a perder o **Brasão de Giurad**, sendo não só Banidos permanentemente da **Academia de Giurad**, como também caçados para responder a um duro processo legal, com garantia de encarceramento perpétuo, onde o Cavaleiro expatriado será condenado a prestar serviços indefinidamente para a **Ordem dos Cavaleiros**, em alguns casos até sendo forçado a trabalhar nas minas de Ferro subterrâneas, ou exilado para reinos distantes, longe de suas famílias.

Aqueles que são bem sucedidos em seu treinamento recebem como recompensa o título de Cavaleiro e o privilégio de dominar os ensinamentos do **Brasão de Giurad**, um artefato mágico criado a partir da consolidação do conhecimento de um antigo herói de Guerra conhecido como **Giurad**.

O estilo de luta se benefícia de tecnicas ofensivas e defensivas, visando o controle do combate e retenção do foco de seus inimigos.

## Origem do Brasão de Giurad

**Giurad** é o nome do Cavaleiro por trás da criação do Grimo do Cavaleiro.

Mundialmente conhecido por derrotar em Eras passadas a encarnação da Maléfica entidade conhecida como **Musgom**, **Giurad** recebeu a visita do **Mestre-Elo Dormund**, conhecido por sua especialidade em manipulação de conhecimento mágico.

A visita de **Dormund** teria sido um presente da Família Real do longinquo reino de **Valaron**, com o objetivo de recompensar os esforços dignitários de Giurad.

O Rei *Vistarus Galor II* teria enviado o **Dormund** para eternizar os conhecimentos de **Giurad**, o qual acreditava que poderiam ser útil nas próximas gerações.

O ritual, que teria acontecido anos antes do Blecaute, durou 48 dias, e transferiu grande parte do conhecimento de Batalha e Estratégia ofensiva do Cavaleiro.

**Giurad** era conhecido um Goblin alto, de cabelo acinzentado e longo, olhos escuros e frequentemente mencionado como uma figura honrada e leal por seus mestres, colegas e família.

Uma das grandes virtudes que se destacam na criação do Grimo é sua criatividade e perseverança, possuindo o incrível talento de improvisar de forma inteligente, mesmo quando as circunstâncias parecem não ser favoráveis.

## Armas Iniciais

Você pode escolher entre duas armas iniciais:

| Imagem                                                                                                                                  | Nome da Arma       | Tipo de Dano | Dano       | Descrição                                                             | Durabilidade | Atributo    | Tipo de Arma |
|-----------------------------------------------------------------------------------------------------------------------------------------|--------------------|--------------|------------|-----------------------------------------------------------------------|--------------|-------------|--------------|
| <img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cd2270d31-e7bf-4168-a90d-bcf772514e1d.png" width="80" /> | Machado de Madeira | Físico       | `2d12 + 2` | Machado inicial do Aventureiro, bem simples, e suporta poucos cortes. | 2 Cargas     | Resiliência | Cortante     |
| <img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cc728c292-e23a-4e87-a070-a3ee81e17dde.png" width="80" /> | Espada de Madeira  | Físico       | `2d10 + 2` | Espada inicial do Aventureiro, bem simples, e suporta poucos cortes.  | 2 Cargas     | Força       | Cortante     |

## Requisito de entrada

As regras abaixo apenas se aplicam se este Grimo não for o seu Grimo inicial:

- Possuir pelo menos 1 Pontos em Força.
- Ser recomendado por um Tutor oficial através de uma **Carta de Recomendação**

## Poderes do Grimo

### Especial

Esse são seus poderes especiais, cada personagem inicia com 1 Poder Especial, que pode ser usado apenas 1 vez a cada **Descanço Prolongado**.

<SpellFromJson expanded={false} spellData={knights_fury} />

### Habilidades - Grau 1 <GrimoCostMod downCost={2} />

Essas são as habilidades iniciais do Grimo do Cavaleiro. Normalmente, um Cavaleiro inicial seleciona duas dessas habilidades para compor sua build inicial.

<SpellFromJson expanded={false} spellData={bash} />
<SpellFromJson expanded={false} spellData={crucial_impact} />
<SpellFromJson expanded={false} spellData={disorient} />
<SpellFromJson expanded={false} spellData={endure} />
<SpellFromJson expanded={false} spellData={judgement} />
<SpellFromJson expanded={false} spellData={cavalry} />
<SpellFromJson expanded={false} spellData={armored} />
<SpellFromJson expanded={false} spellData={knights_presence} />
<SpellFromJson expanded={false} spellData={quick_heal_wounds} />
<SpellFromJson expanded={false} spellData={knights_magic} />
<SpellFromJson expanded={false} spellData={squire_specialization} />
<SpellFromJson expanded={false} spellData={warrior_resistance} />

### Habilidades - Grau 2 <GrimoCostMod upCost={3} downCost={2} />

Essas Habilidades só podem ser aprendidas a partir do Nível 5 do Grimo.

<SpellFromJson expanded={false} spellData={armored2} />
<SpellFromJson expanded={false} spellData={duel} />
<SpellFromJson expanded={false} spellData={focused_double_attack} />
<SpellFromJson expanded={false} spellData={improved_strength} />
<SpellFromJson expanded={false} spellData={precise_parry} />
<SpellFromJson expanded={false} spellData={right_hit} />
<SpellFromJson expanded={false} spellData={sismic_parry} />
<SpellFromJson expanded={false} spellData={squire_specialization2} />
<SpellFromJson expanded={false} spellData={stock} />
<SpellFromJson expanded={false} spellData={wear_resistance} />

### Habilidades - Grau 3 <GrimoCostMod upCost={2} downCost={2} />

Essas Habilidades só podem ser aprendidas a partir do Nível 10 do Grimo.

<SpellFromJson expanded={false} spellData={crucial_block} />
<SpellFromJson expanded={false} spellData={elemental_defense_aura} />
<SpellFromJson expanded={false} spellData={impetuous_impact} />
<SpellFromJson expanded={false} spellData={inspiring_bash} />
<SpellFromJson expanded={false} spellData={knights_roar} />
<SpellFromJson expanded={false} spellData={overload_weapon} />
<SpellFromJson expanded={false} spellData={reflect_magic} />
<SpellFromJson expanded={false} spellData={spiral_attack} />
<SpellFromJson expanded={false} spellData={stunning_blast} />
<SpellFromJson expanded={false} spellData={trained_parry} />

### Habilidades - Grau 4 <GrimoCostMod upCost={5} />

Essas Habilidades só podem ser aprendidas a partir do Nível 15 do Grimo.

<SpellFromJson expanded={false} spellData={aurea_action} />
<SpellFromJson expanded={false} spellData={elemental_instance} />
<SpellFromJson expanded={false} spellData={epic_blow} />
<SpellFromJson expanded={false} spellData={etereal_cavalry} />
<SpellFromJson expanded={false} spellData={honor_instance} />
<SpellFromJson expanded={false} spellData={knights_shielding} />
<SpellFromJson expanded={false} spellData={lion_force} />
<SpellFromJson expanded={false} spellData={powerful_duel} />
<SpellFromJson expanded={false} spellData={reflex_master} />
<SpellFromJson expanded={false} spellData={shields_purge} />
