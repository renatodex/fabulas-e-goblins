---
id: lunns-jewel
title: Jóia de Lunn
slug: /4-grimos-and-spells/lunns-jewel
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cec64c19f-1952-4ee1-a992-750c8c36014c.png
---

import { SpellFromJson } from './../../src/components/skill_block/index'

import lunns_echo from './../../data/spells/spells-lunn/ultimates/lunns_echo.json'

import healer_vitality from './../../data/spells/spells-lunn/tier1/healer_vitality.json'
import healing_touch from './../../data/spells/spells-lunn/tier1/healing_touch.json'
import iluminate from './../../data/spells/spells-lunn/tier1/iluminate.json'
import excomuni from './../../data/spells/spells-lunn/tier1/excomuni.json'
import magical_blessing from './../../data/spells/spells-lunn/tier1/magical_blessing.json'
import pray from './../../data/spells/spells-lunn/tier1/pray.json'
import purge_curse from './../../data/spells/spells-lunn/tier1/purge_curse.json'
import protect_against_evil from './../../data/spells/spells-lunn/tier1/protect_against_evil.json'
import sense_curse from './../../data/spells/spells-lunn/tier1/sense_curse.json'
import resist_curse from './../../data/spells/spells-lunn/tier1/resist_curse.json'
import peace_aura from './../../data/spells/spells-lunn/tier1/peace_aura.json'
import divinism from './../../data/spells/spells-lunn/tier1/divinism.json'

import chosens_miracle from './../../data/spells/spells-lunn/tier2/chosens_miracle.json'
import relieve_trauma from './../../data/spells/spells-lunn/tier2/relieve_trauma.json'
import sanctify_earth from './../../data/spells/spells-lunn/tier2/sanctify_earth.json'
import defensive_blessing from './../../data/spells/spells-lunn/tier2/defensive_blessing.json'
import healing_beam from './../../data/spells/spells-lunn/tier2/healing_beam.json'
import healing_touch2 from './../../data/spells/spells-lunn/tier2/healing_touch2.json'
import lunns_communion from './../../data/spells/spells-lunn/tier2/lunns_communion.json'
import iluminate2 from './../../data/spells/spells-lunn/tier2/iluminate2.json'
import purge_evil from './../../data/spells/spells-lunn/tier2/purge_evil.json'
import snatch_ally from './../../data/spells/spells-lunn/tier2/snatch_ally.json'

import mark_of_penitence from './../../data/spells/spells-lunn/tier3/mark_of_penitence.json'
import chosens_miracle_benevolence from './../../data/spells/spells-lunn/tier3/chosens_miracle_benevolence.json'
import exorcismus from './../../data/spells/spells-lunn/tier3/exorcismus.json'
import faith_sacrifice from './../../data/spells/spells-lunn/tier3/faith_sacrifice.json'
import redemption from './../../data/spells/spells-lunn/tier3/redemption.json'
import truth_aura from './../../data/spells/spells-lunn/tier3/truth_aura.json'
import light_pillar from './../../data/spells/spells-lunn/tier3/light_pillar.json'
import evoke_light from './../../data/spells/spells-lunn/tier3/evoke_light.json'
import powerful_pray from './../../data/spells/spells-lunn/tier3/powerful_pray.json'
import healing_pray from './../../data/spells/spells-lunn/tier3/healing_pray.json'

import angelicus from './../../data/spells/spells-lunn/tier4/angelicus.json'
import aurelium from './../../data/spells/spells-lunn/tier4/aurelium.json'
import columna_lucis from './../../data/spells/spells-lunn/tier4/columna_lucis.json'
import ezomaximum from './../../data/spells/spells-lunn/tier4/ezomaximum.json'
import impositio_dogmas from './../../data/spells/spells-lunn/tier4/impositio_dogmas.json'
import infinitus from './../../data/spells/spells-lunn/tier4/infinitus.json'
import jugamentum from './../../data/spells/spells-lunn/tier4/jugamentum.json'
import magnus_impositio from './../../data/spells/spells-lunn/tier4/magnus_impositio.json'
import healing_master from './../../data/spells/spells-lunn/tier4/healing_master.json'
import abbots_hand from './../../data/spells/spells-lunn/tier4/abbots_hand.json'
import ultimatum from './../../data/spells/spells-lunn/tier4/ultimatum.json'
import lunns_command from './../../data/spells/spells-lunn/tier4/lunns_command.json'

![Poderosos Sacerdotes devotos ao culto de Lunn, são especialistas em canalizar o poder de sua divindade para suportar seus aliados...](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cec64c19f-1952-4ee1-a992-750c8c36014c.png)

A Igreja de Lunn é essencialmente uma religião que dedica sua veneração ao Deus Lunn, um suposto Goblin que teria chegado nas Terras Místicas eras atrás, e que teria sido responsável pelo advento dos Goblins no mundo.<br/>
O alcance da devoção a Lunn se extende a diversos continentes, sendo seu símbolo adorado por inúmeras Civilizações e Espécies distintas.<br/>
Mas enquanto alguns apenas adoram seus feitos e ensinamentos, outros procuram o caminho da palavra, se tornando assim **Adeptos de Lunn**.<br/>

Esses indivíduos passam por um treinamento intensivo com Oradores e Arche-Sacerdotes poderosos para ao final receber em mãos um artefato e um Símbolo de Fé muito valioso conhecido como a `Jóia de Lunn`.

A **Jóia de Lunn** é um tipo de artefato especial conhecido como **Grimo**, que contém, de forma compacta, não só os ensinamentos e a Fé de seu Deus, mas também técnicas práticas que permitem aos seus **Adeptos** exercer o poder e a **Fé de Lunn** contra seus inimigos, purificando o mundo através de seu toque divino.

O artefato conta com técnicas especializadas na arte do suporte, como Cura, Defesa e Proteção.

## Criando um Adepto de Lunn

Ao seguir esse caminho, você precisará:

### 1. Escolher um Mentor

Ao criar um personagem neste caminho, você pode nomear um ou mais **Mentores**. O mentor é de certa forma o seu mestre, a pessoa que teria sido responsável pela sua formação e treinamento.<br/>
Você não necessariamente deve obrigações a esse **Mentor**, mas de alguma forma você deve a ele seu acolhimento como **Adepto de Lunn**, que pode ter ocorrido em um momento oportuno de sua vida, além é claro, de todo treinamento recebido por ele.

O **Mentor** adiciona novos personagens na história que o `Narrador de Jogo` pode usar para entrelaçar e aprofundar sua história como personagem.

### 2. Escolher seus Poderes Iniciais

A menos que outra regra diga o contrário, você deverá:

- Escolher 2x (dois) Poderes do Tier 1.
- Escolher 1x (um) Poder Especial.

## Virtudes do Grimo

### 1. Ações Iluminadas e Profanas

Como **Sacerdote de Lunn**, você vive sob a Doutrina dele, que espera que você trabalhe para realizar ações de benfeitoria no mundo.

Quando, por algum motivo, você realiza ações no mundo que podem ser julgadas por Lunn como ações de cunho <b>Profano</b>, você receberá do Narrador um **Token de Ação Profana**.

Cada Token só pode ser anulado por uma **Ação de Benfeitoria** comprovada e aprovada pelo Narrador.

Os Tokens afetam a vida do Sacerdote de várias maneiras:

- Sacerdotes podem perceber se você realizou muitas **Ações Profanas**, e tratar você de acordo.
- **Ações Profanas** podem gerar **Efeitos Profanos** em Habilidades.
- Sua presença será barrada em Templos de Lunn e outros locais sagrados caso você tenha mais de **1 Carga de Ação Profana**.

### 2. Proteção contra o Mal

A Luz do **Grimo de Lunn** protege o Sacerdote contra os caprichos das Trevas.

Reduz em `(TIER*d10)` o dano recebido por **Ataques do Elemento Trevas**.

Sacerdotes Profanos (que possuem mais **Ações Profanas** do que **Ações Iluminadas**) passam a possuuir Proteção contra a **Luz** ao invés das **Trevas**.

## Interpretando um Sacerdote

Tradicionalmente, **Adeptos de Lunn** são indivíduos benevolentes, pois a eles foi confiado pelos **Arche-Sacerdotes** um Artefato divino conhecido como **Jóia de Lunn**.

A **Doutrina** dos **Adeptos de Lunn** especifica que o poder do **Grimo** deve ser apenas usado para o bem, sendo o Sacerdote um **Farol de Luz** cuja missão é iluminar os cantos mais obscuros do mundo com o ensinamento de seu Deus Benevolente, e o poder Mágico do seu Grimo aliado ao poder da sua Fé.

Sua missão é utilizar o poder e seu conhecimento para curar a ferida da escuridão que assombra o mundo, e através de sua longa peregrinação, levar a palavra de seu Deus para aqueles que perderam a esperança. (ou pelo menos era isso que esperavam de você)

Após o Blecaute, muitos Terrores deixaram o manto da Escuridão para encobrir as Terras Místicas com o silêncio do Vazio, e por isso, sobram lugares no mundo onde a Fé e a Esperança devem ser restauradas a qualquer custo.

## Armas Iniciais

Você pode escolher entre duas armas iniciais:

| Imagem | Nome da Arma | Tipo do Dano | Dano | Descrição | Durabilidade | Atributo | Tipo de Arma |
| ------ | ------------ | ---- | --------- | ------------ | -------- | ---- | --- |
| <img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C28df9fc9-21e5-4a87-a8fb-afa90f6640e7.PNG" width="80" /> | Cajado do Iniciante + 0 | Mágico | D6 + 3 | Cajado inicial do Aventureiro, ataca a longa distância* com um feixe não elemental | 3 Cargas | Elo Mágico | Mágico |
| <img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C203894a8-17e4-49b8-b22b-1de705ebb086.PNG" width="80" /> | Cruz do Iniciante + 0 | Físico | D8 + 4 | Cruz inicial do Aventureiro, ataque corpo-a-corpo, já vem benzida. | 3 Cargas | Espírito | Contusivo |

**A distância padrão para Armas de Alcance é de 6 quadrados.*

## Requisito de entrada

As regras abaixo apenas se aplicam se este Grimo não for o seu Grimo inicial:

- Possuir pelo menos 1 Pontos em Elo Mágico ou Espírito.
- Não pode possuir nenhuma mancha de Malfeitoria na alma. (A Guilda irá saber)
- Deve possuir pelo menos uma marca de Benfeitoria na alma. (A Guilda irá saber)
- Deverá se vestir como um Sacerdote. (Roupas de luxo)

## Poderes do Grimo

### Especial

Esse são seus poderes especiais, cada personagem inicia com 1 Poder Especial, que pode ser usado apenas 1 vez a cada **Descanço Prolongado**.

<SpellFromJson expanded={false} spellData={lunns_echo} />

### Habilidades - Tier 1

Essas são as habilidades iniciais do Grimo de Lunn. Normalmente, um Sacerdote inicial seleciona duas dessas habilidades para compor sua build inicial.

<SpellFromJson expanded={false} spellData={healing_touch} />
<SpellFromJson expanded={false} spellData={iluminate} />
<SpellFromJson expanded={false} spellData={excomuni} />
<SpellFromJson expanded={false} spellData={divinism} />
<SpellFromJson expanded={false} spellData={pray} />
<SpellFromJson expanded={false} spellData={purge_curse} />
<SpellFromJson expanded={false} spellData={sense_curse} />
<SpellFromJson expanded={false} spellData={protect_against_evil} />
<SpellFromJson expanded={false} spellData={resist_curse} />
<SpellFromJson expanded={false} spellData={peace_aura} />
<SpellFromJson expanded={false} spellData={healer_vitality} />
<SpellFromJson expanded={false} spellData={magical_blessing} />

### Habilidades - Tier 2

Essas Habilidades só podem ser aprendidas a partir do Nível 5 do Grimo.

<SpellFromJson expanded={false} spellData={relieve_trauma} />
<SpellFromJson expanded={false} spellData={sanctify_earth} />
<SpellFromJson expanded={false} spellData={defensive_blessing} />
<SpellFromJson expanded={false} spellData={healing_beam} />
<SpellFromJson expanded={false} spellData={healing_touch2} />
<SpellFromJson expanded={false} spellData={iluminate2} />
<SpellFromJson expanded={false} spellData={snatch_ally} />
<SpellFromJson expanded={false} spellData={purge_evil} />
<SpellFromJson expanded={false} spellData={lunns_communion} />
<SpellFromJson expanded={false} spellData={chosens_miracle} />

### Habilidades - Tier 3

Essas Habilidades só podem ser aprendidas a partir do Nível 10 do Grimo.

<SpellFromJson expanded={false} spellData={mark_of_penitence} />
<SpellFromJson expanded={false} spellData={truth_aura} />
<SpellFromJson expanded={false} spellData={light_pillar} />
<SpellFromJson expanded={false} spellData={evoke_light} />
<SpellFromJson expanded={false} spellData={exorcismus} />
<SpellFromJson expanded={false} spellData={healing_pray} />
<SpellFromJson expanded={false} spellData={faith_sacrifice} />
<SpellFromJson expanded={false} spellData={redemption} />
<SpellFromJson expanded={false} spellData={chosens_miracle_benevolence} />
<SpellFromJson expanded={false} spellData={powerful_pray} />

### Habilidades - Tier 4

Essas Habilidades só podem ser aprendidas a partir do Nível 15 do Grimo.

<SpellFromJson expanded={false} spellData={angelicus} />
<SpellFromJson expanded={false} spellData={aurelium} />
<SpellFromJson expanded={false} spellData={columna_lucis} />
<SpellFromJson expanded={false} spellData={ezomaximum} />
<SpellFromJson expanded={false} spellData={impositio_dogmas} />
<SpellFromJson expanded={false} spellData={infinitus} />
<SpellFromJson expanded={false} spellData={jugamentum} />
<SpellFromJson expanded={false} spellData={magnus_impositio} />
<SpellFromJson expanded={false} spellData={ultimatum} />
<SpellFromJson expanded={false} spellData={healing_master} />
