---
id: eye-of-kanus
title: Olho de Kanus
slug: /4-grimos-and-spells/eye-of-kanus
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C20e7b68e-e4ab-49e2-9cd1-8240cd9be936.png
---

import GrimoCostMod from '@site/src/components/grimo_cost_modifier/index'

import { SpellFromJson } from './../../src/components/skill_block/index'

import aim_week_point from './../../data/spells/spells-kanus/tier1/aim_week_point.json'
import arrow_rain from './../../data/spells/spells-kanus/tier1/arrow_rain.json'
import scan_wounds from './../../data/spells/spells-kanus/tier1/scan_wounds.json'
import coat_blade from './../../data/spells/spells-kanus/tier1/coat_blade.json'
import concentrate_attack from './../../data/spells/spells-kanus/tier1/concentrate_attack.json'
import bioma_expert from './../../data/spells/spells-kanus/tier1/bioma_expert.json'
import mark_of_animal_companion from './../../data/spells/spells-kanus/tier1/mark_of_animal_companion.json'
import orekais_feet from './../../data/spells/spells-kanus/tier1/orekais_feet.json'
import trap_enemy from './../../data/spells/spells-kanus/tier1/trap_enemy.json'
import hunters_favor from './../../data/spells/spells-kanus/tier1/hunters_favor.json'
import prepare_attack_insect from './../../data/spells/spells-kanus/tier1/prepare_attack_insect.json'

import animal_comando from './../../data/spells/spells-kanus/tier2/animal_comando.json'
import identify_weak_point from './../../data/spells/spells-kanus/tier2/identify_weak_point.json'
import map_location from './../../data/spells/spells-kanus/tier2/map_location.json'
import explosive_trap from './../../data/spells/spells-kanus/tier2/explosive_trap.json'
import animal_rush from './../../data/spells/spells-kanus/tier2/animal_rush.json'
import arrow_of_impact from './../../data/spells/spells-kanus/tier2/arrow_of_impact.json'
import staunch_wounds from './../../data/spells/spells-kanus/tier2/staunch_wounds.json'
import weather_barrier from './../../data/spells/spells-kanus/tier2/weather_barrier.json'
import guild_influence from './../../data/spells/spells-kanus/tier2/guild_influence.json'
import sniper from './../../data/spells/spells-kanus/tier2/sniper.json'
import safe_camp from './../../data/spells/spells-kanus/tier2/safe_camp.json'

import animal_evolution from './../../data/spells/spells-kanus/tier3/animal_evolution.json'
import intensify_weakpoint from './../../data/spells/spells-kanus/tier3/intensify_weakpoint.json'
import ogoron_balista from './../../data/spells/spells-kanus/tier3/ogoron_balista.json'
import refuge_arrow from './../../data/spells/spells-kanus/tier3/refuge_arrow.json'
import solar_arrow from './../../data/spells/spells-kanus/tier3/solar_arrow.json'
import deep_wounds from './../../data/spells/spells-kanus/tier3/deep_wounds.json'
import bolt_blow from './../../data/spells/spells-kanus/tier3/bolt_blow.json'
import posthumous_explosion from './../../data/spells/spells-kanus/tier3/posthumous_explosion.json'
import worm_hole from './../../data/spells/spells-kanus/tier3/worm_hole.json'
import tracker_mark from './../../data/spells/spells-kanus/tier3/tracker_mark.json'

import joromur_golden_arrow from './../../data/spells/spells-kanus/tier4/joromur_golden_arrow.json'
import double_attack from './../../data/spells/spells-kanus/tier4/double_attack.json'
import arrow_storm from './../../data/spells/spells-kanus/tier4/arrow_storm.json'
import kaiju from './../../data/spells/spells-kanus/tier4/kaiju.json'
import animal_sync from './../../data/spells/spells-kanus/tier4/animal_sync.json'
import kanus_mark from './../../data/spells/spells-kanus/tier4/kanus_mark.json'
import predators_eco from './../../data/spells/spells-kanus/tier4/predators_eco.json'
import master_hunter from './../../data/spells/spells-kanus/tier4/master_hunter.json'
import arrow_explosion from './../../data/spells/spells-kanus/tier4/arrow_explosion.json'
import judgment_arrow from './../../data/spells/spells-kanus/tier4/judgment_arrow.json'

import letal_shot from './../../data/spells/spells-kanus/ultimates/letal_shot.json'

![Os Adeptos de Kanus são caçadores letrados na arte da sobrevivência e da caça...](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C20e7b68e-e4ab-49e2-9cd1-8240cd9be936.png)

Os Kanurianos são poderosos caçadores especializados em sobrevivência. Seu conhecimento sobre a natureza e sobre criaturas é inestimável, o que os torna aliados formidáveis em qualquer aventura.

O arco e adaga são seus companheiros fiéis, e não há sequer uma situação em que um Caçador de Kanus não possa improvisar e escapar ileso (ou o mais próximo disso)

Cada Caçador possui um **Olho de Kanus**, um artefato mágico fornecido pela **Guilda dos Caçadores** (ou Guilda de Kanus), que permite que esses guerreiros canalizem a magia para potencializar seus ataques.

A Guilda é uma organização influente e poderosa, conectando Caçadores pelo mundo todo, e oferecendo **Caçadas** para que sejam recompensados com `Temirs` caso derrotem a criatura.

Os **Adeptos de Kanus**, como também são chamados, são sempre bem vistos e muito requisitados em Reinos civilizados, sempre em busca de contratos e conhecimento para melhorarem suas técnicas de combate.

## Criando um Adepto de Kanus

Ao escolher esse caminho, existem algumas coisas que você precisa saber:

### 1. Contratos de Caça

Uma das grandes vantagens de ser um **Caçador de Kanus** é que você poderá obter **Contratos de Caça** nas diversas **Guildas de Caçadores** espalhadas pelo mundo. **Contratos de Caça** ficam reservados a você, mas expiram após um determinado prazo estabelecido.

Cada **Caçador** pode possuir até 3 contratos de Caça em seu nome, sendo que cada contrato especifica suas condições de tempo e outros detalhes que podem variar de local para local.

### 2. Escolher seus Poderes Iniciais

A menos que outra regra diga o contrário, você deverá:

- Escolher 2x (dois) Poderes do Grau 1.
- Escolher 1x (um) Poder Especial.

## Virtudes do Grimo

### 1. Especialidade e Temor

Ao criar um personagem nesse caminho, você deve também especificar 2 (dois) tipos de criaturas da *tabela de tipos de criatura*.

Um deles será sua **Especialidade de Caça**, lhe fornecendo **+2 de Bônus em ações** contra esse tipo de criatura.<br/>
Talvez você tenha adquirido certa facilidade em caçar esse tipo de criatura, ou talvez você tenha aprendido com algum mentor, seja como for, não importa o tamanho ou o formato, você aprendeu que criaturas desse tipo sempre possuem algumas características em comum, e você sabe como explorá-las em combate à seu favor.

Já outra escolha será seu **Temor de Caça**, lhe fornecendo **-2 de Bônus em ações** contra esse tipo de criatura.
Essas criaturas são o seu pesadelo, uma espécie de trauma que você pode ter adquirido por eventos passados, ou apenas uma má sorte que te parece te acompanhar sempre que você encontra uma criatura dessas em seu caminho.<br/>
Não importa o quanto você tente, sempre parece mais difícil combater esse tipo de criatura, e essas dificuldades se refletem no campo de batalha.

#### 1.a Tabela de Tipos de Criatura

Abaixo, segue a lista de todos os tipos de Criatura que você pode escolher:

<table>
  <thead>
    <tr>
      <td>Tipo</td>
      <td>Descriçao</td>
    </tr>
  </thead>
  <tbody>
     <tr>
      <td>Ave</td>
      <td>Criaturas Avinas como <b>Bogs</b> e <b>Cogarans</b></td>
     </tr>
     <tr>
      <td>Alien</td>
      <td>Criaturas Alienígenas como <b>Xal'Gons</b></td>
     </tr>
     <tr>
      <td>Besta</td>
      <td>Criaturas Bestiais como <b>Drulos</b> e <b>Aburus</b></td>
     </tr>
     <tr>
      <td>Construtos</td>
      <td>Criaturas de origem mecânica ou mágica como <b>Kaymons</b> e <b>Fortogons</b></td>
     </tr>
     <tr>
      <td>Cósmico</td>
      <td>Criaturas do espaço constituídas por poeira das estrelas.</td>
     </tr>
     <tr>
      <td>Demônio</td>
      <td>Criaturas Demoníacas como <b>Domolor</b>.</td>
     </tr>
     <tr>
      <td>Dragonóide</td>
      <td>Répteis voadores de natureza mágica, como <b>Drogos</b> e <b>Quarks</b></td>
     </tr>
     <tr>
      <td>Deus</td>
      <td>Criaturas Primevas e Lendárias.</td>
     </tr>
     <tr>
      <td>Gosmento</td>
      <td>Criaturas gelatinosas como <b>Slimes</b></td>
     </tr>
     <tr>
      <td>Inseto</td>
      <td>Criaturas insectóides como <b>Garacnas</b> e <b>Zibelumes</b></td>
     </tr>
     <tr>
      <td>Madeira</td>
      <td>Criaturas feitas de Madeira como <b>Camags</b> e <b>Torugs</b></td>
     </tr>
     <tr>
      <td>Metalídio</td>
      <td>Criaturas constituídas de metal ou ligas metálicas rígidas.</td>
     </tr>
     <tr>
      <td>Planta</td>
      <td>Criaturas feitas de planta como <b>Sitágoras</b> e <b>Talóides</b></td>
     </tr>
     <tr>
      <td>Plasma</td>
      <td>Criaturas Plasmáticas como <b>Fantasmas</b> e <b>Espectros</b></td>
     </tr>
     <tr>
      <td>Peixe</td>
      <td>Criaturas Aquáticas como <b>Gonshus</b> e <b>Gnars</b></td>
     </tr>
     <tr>
      <td>Reptil</td>
      <td>Criaturas Reptilianas como <b>Zoblins</b> e <b>Basgons</b></td>
     </tr>
     <tr>
      <td>Vampírico</td>
      <td>Criaturas hematófagas que se alimentam de sangue.</td>
     </tr>
     <tr>
      <td>Terror</td>
      <td>Criaturas das Trevas como <b>Zizagus</b>, <b>Poobum</b> e <b>Orekai</b></td>
     </tr>
     <tr>
      <td>Vazio</td>
      <td>Criaturas misteriosas do Vazio como <b>Voloms</b></td>
     </tr>
     <tr>
      <td>Morto-Vivo</td>
      <td>Criaturas biológicas reanimadas através de magia como <b>Zumbis</b>.</td>
     </tr>
  </tbody>
</table>


:::info Aelíticos
Um bom observador perceberá que a lista acima exclui o tipo **Aelítico**.

Para efeitos mecânicos, todas as espécies jogáveis do **Fábulas & Goblins** são criaturas **Aelíticas** *(criaturas senscientes que perderam parte de seu **Elo mágico** ao serem afetadas pelo Blecaute)*.

E as espécies jogáveis não podem ser caracterizadas como **criaturas selvagens** que costumam ser caçadas pelos **Adeptos de Kanus**.

Portanto, como o tipo **Aelítico** apenas se restringe às espécies jogáveis (salvas raríssimas excessões), este tipo foi excluído da lista desta Virtude.
:::

### 2. Sinergia Ambiental

Quando criar seu personagem, escolha um Bioma, você é especialista neste Bioma, e receberá **bônus de +2** em **todas as ações** que realizar enquanto estiver nele.

Você pode escolher entre os seguintes Biomas:

- Floresta
- Caverna
- Montanha
- Pântano
- Deserto
- Planície
- Cerrado
- Mar (alto-mar)
- Céu
- Área Vulcânica
- Detóxia (planícies ácidas)
- Polênio (florestas de esporos)

## Interpretando um Adepto de Kanus

Os Adeptos são vistos como exímios Caçadores, especialistas na arte da Caça e Sobrevivência, rastreando e abatendo suas vítimas com precisão e rapidez.<br/>
Ao utilizar o **Olho de Kanus**, você terá a sua disposição um arsenal de habilidades táticas, que vão lhe permitir influênciar de forma direta e indireta no combate, através do uso de Armadilhas, armas de Longa distância e Lâminas afiadas.

O estilo de Kanus prioriza um combate ágil, preciso e letal, mas também possui grande flexibilidade para se adaptar a condições de terreno, e utilizar o ambiente para maximar a letalidade de seus ataques.

## Origem do Grimo

Dizem que o **Olho de Kanus** teria sido forjado à partir dos conhecimentos de combate do lendário **Avérnico Joromur**.

Essa lenda Avernicista conta que **Joromur** e seu **Baguar**, ao final de sua vida, teriam viajado para o **Templo dos Mestres-Elo do Norte**, para criar um artefato que concentraria todo seu conhecimento de vida, para que um dia pudesse ser entregue ao mundo como um presente.

Nem mesmo os Caçadores ancestrais sabem confirmar, mas alguns acreditam que o artefato de Joromur poderia ter dado origem ao **Olho de Kanus**.

Foi apenas séculos depois do Blecaute que **Kanus Abarde**, o fundador da **Guilda de Kanus**, teria utilizado uma misteriosa pedra mágica para potencializar técnicas de arquearia com magia. Anos depois, **Kanus** teria se juntado ao **Mestre-Elo Duric** para criar replicas do artefato, o que teria popularizado a Guilda dos Caçadores pelo mundo.

## Armas Iniciais

Você pode escolher entre duas armas iniciais:

| Imagem                                                                                                                                  | Nome da Arma     | Tipo de Dano | Dano       | Descrição                                                                                             | Durabilidade | Atributo      | Tipo de Arma |
|-----------------------------------------------------------------------------------------------------------------------------------------|------------------|--------------|------------|-------------------------------------------------------------------------------------------------------|--------------|---------------|--------------|
| <img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C67068ed3-ae88-4391-b3dc-a3b8529399d0.PNG" width="80" /> | Arco de Madeira  | Físico       | `2d10 + 2` | Arco inicial do Aventureiro*, bem simples e medianamente construído. Flechas normais são "infinitas". | 2 Cargas     | Sobrevivência | Perfurante   |
| <img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C06a7be0e-8191-4a21-92f7-8a2512083d9e.png" width="80" /> | Adaga de Madeira | Físico       | `2d8 + 2`  | Adaga inicial do Aventureiro, bem simples e suporta poucos cortes.                                    | 2 Cargas     | Agilidade     | Perfurante   |

**A distância padrão para Armas de Alcance é de 7 espaços.*

## Requisito de entrada

As regras abaixo apenas se aplicam se este Grimo não for o seu Grimo inicial:

- Possuir pelo menos 1 Ponto de Sobrevivência ou Agilidade.
- Para receber o Grimo, você deverá se comprometer a realizar pelo menos 1 contrato da Guilda.

## Poderes do Grimo

### Especial

Esse são seus poderes especiais, cada personagem inicia com 1 Poder Especial, que pode ser usado apenas 1 vez a cada **Descanço Prolongado**.

<SpellFromJson expanded={false} spellData={letal_shot} />

### Habilidades - Grau 1 <GrimoCostMod downCost={2} />

Essas são as habilidades iniciais do Grimo. Normalmente, um personagem inicial seleciona duas dessas habilidades para compor sua build.

<SpellFromJson expanded={false} spellData={concentrate_attack} />
<SpellFromJson expanded={false} spellData={arrow_rain} />
<SpellFromJson expanded={false} spellData={aim_week_point} />
<SpellFromJson expanded={false} spellData={trap_enemy} />
<SpellFromJson expanded={false} spellData={scan_wounds} />
<SpellFromJson expanded={false} spellData={coat_blade} />
<SpellFromJson expanded={false} spellData={bioma_expert} />
<SpellFromJson expanded={false} spellData={orekais_feet} />
<SpellFromJson expanded={false} spellData={mark_of_animal_companion} />
<SpellFromJson expanded={false} spellData={hunters_favor} />
<SpellFromJson expanded={false} spellData={prepare_attack_insect} />

### Habilidades - Grau 2 <GrimoCostMod upCost={2} downCost={2} />

Essas Habilidades só podem ser aprendidas a partir do Nível 5 do Grimo.

<SpellFromJson expanded={false} spellData={animal_comando} />
<SpellFromJson expanded={false} spellData={identify_weak_point} />
<SpellFromJson expanded={false} spellData={map_location} />
<SpellFromJson expanded={false} spellData={explosive_trap} />
<SpellFromJson expanded={false} spellData={animal_rush} />
<SpellFromJson expanded={false} spellData={arrow_of_impact} />
<SpellFromJson expanded={false} spellData={staunch_wounds} />
<SpellFromJson expanded={false} spellData={weather_barrier} />
<SpellFromJson expanded={false} spellData={guild_influence} />
<SpellFromJson expanded={false} spellData={sniper} />
<SpellFromJson expanded={false} spellData={safe_camp} />

### Habilidades - Grau 3 <GrimoCostMod upCost={2} downCost={2} />

Essas Habilidades só podem ser aprendidas a partir do Nível 10 do Grimo.

<SpellFromJson expanded={false} spellData={animal_evolution} />
<SpellFromJson expanded={false} spellData={intensify_weakpoint} />
<SpellFromJson expanded={false} spellData={tracker_mark} />
<SpellFromJson expanded={false} spellData={bolt_blow} />
<SpellFromJson expanded={false} spellData={deep_wounds} />
<SpellFromJson expanded={false} spellData={posthumous_explosion} />
<SpellFromJson expanded={false} spellData={refuge_arrow} />
<SpellFromJson expanded={false} spellData={worm_hole} />
<SpellFromJson expanded={false} spellData={solar_arrow} />
<SpellFromJson expanded={false} spellData={ogoron_balista} />

### Habilidades - Grau 4 <GrimoCostMod upCost={3} />

Essas Habilidades só podem ser aprendidas a partir do Nível 15 do Grimo.

<SpellFromJson expanded={false} spellData={kaiju} />
<SpellFromJson expanded={false} spellData={arrow_storm} />
<SpellFromJson expanded={false} spellData={master_hunter} />
<SpellFromJson expanded={false} spellData={judgment_arrow} />
<SpellFromJson expanded={false} spellData={joromur_golden_arrow} />
<SpellFromJson expanded={false} spellData={kanus_mark} />
<SpellFromJson expanded={false} spellData={double_attack} />
<SpellFromJson expanded={false} spellData={animal_sync} />
<SpellFromJson expanded={false} spellData={predators_eco} />
<SpellFromJson expanded={false} spellData={arrow_explosion} />
