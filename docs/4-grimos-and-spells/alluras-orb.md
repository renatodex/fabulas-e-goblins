---
id: alluras-orb
title: Orbe de Allura
slug: /4-grimos-and-spells/alluras-orb
---

import { SpellFromJson } from './../../src/components/skill_block/index'

import alluras_torment from './../../data/spells-allura/ultimates/alluras_torment.json'

import apprentice_blast from './../../data/spells-allura/tier1/apprentice_blast.json'
import arcane_amplification from './../../data/spells-allura/tier1/arcane_amplification.json'
import create_element from './../../data/spells-allura/tier1/create_element.json'
import detect_element from './../../data/spells-allura/tier1/detect_element.json'
import elemental_fortitude from './../../data/spells-allura/tier1/elemental_fortitude.json'
import expose_weakness from './../../data/spells-allura/tier1/expose_weakness.json'
import mage_fist from './../../data/spells-allura/tier1/mage_fist.json'
import magic_wave from './../../data/spells-allura/tier1/magic_wave.json'
import manipulate_element from './../../data/spells-allura/tier1/manipulate_element.json'
import minimize_weakness from './../../data/spells-allura/tier1/minimize_weakness.json'
import prelemental_explosion from './../../data/spells-allura/tier1/prelemental_explosion.json'
import read_element from './../../data/spells-allura/tier1/read_element.json'

import apprentice_blast_2 from './../../data/spells-allura/tier2/apprentice_blast_2.json'
import elemental_barrier from './../../data/spells-allura/tier2/elemental_barrier.json'
import hex from './../../data/spells-allura/tier2/hex.json'
import hide_in_element from './../../data/spells-allura/tier2/hide_in_element.json'
import linear_beam from './../../data/spells-allura/tier2/linear_beam.json'
import mage_fist_2 from './../../data/spells-allura/tier2/mage_fist_2.json'
import magic_surge from './../../data/spells-allura/tier2/magic_surge.json'
import manipulate_element_2 from './../../data/spells-allura/tier2/manipulate_element_2.json'
import prelemental_explosion_2 from './../../data/spells-allura/tier2/prelemental_explosion_2.json'
import read_element_2 from './../../data/spells-allura/tier2/read_element_2.json'

import auto_element from './../../data/spells-allura/tier3/auto_element.json'
import double_blast from './../../data/spells-allura/tier3/double_blast.json'
import elemental_curse from './../../data/spells-allura/tier3/elemental_curse.json'
import elemental_heal from './../../data/spells-allura/tier3/elemental_heal.json'
import elemental_shield from './../../data/spells-allura/tier3/elemental_shield.json'
import friendly_fire from './../../data/spells-allura/tier3/friendly_fire.json'
import mage_fist_3 from './../../data/spells-allura/tier3/mage_fist_3.json'
import planar_meditation from './../../data/spells-allura/tier3/planar_meditation.json'
import spiral from './../../data/spells-allura/tier3/spiral.json'
import upgrade_skill from './../../data/spells-allura/tier3/upgrade_skill.json'

import cataclism from './../../data/spells-allura/tier4/cataclism.json'
import double_fist from './../../data/spells-allura/tier4/double_fist.json'
import elemental_absorv from './../../data/spells-allura/tier4/elemental_absorv.json'
import elemental_fly from './../../data/spells-allura/tier4/elemental_fly.json'
import elemental_shape from './../../data/spells-allura/tier4/elemental_shape.json'
import inferno from './../../data/spells-allura/tier4/inferno.json'
import linear_beam_2 from './../../data/spells-allura/tier4/linear_beam_2.json'
import meteors from './../../data/spells-allura/tier4/meteors.json'
import quadro_blast from './../../data/spells-allura/tier4/quadro_blast.json'
import torment_master from './../../data/spells-allura/tier4/torment_master.json'

![allura2.png](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cd7d742c5-4dd6-4890-9cf0-4ad23bc2a2a1.png)

A **Orbe de Allura** é um Grimo elemental, que ao ser vinculado, pode adquirir qualquer um dos 12 Aspectos Elementais do mundo.

Em seu interior, um imenso volume instável de **Magia Prelementar** encontra-se dormente, esperando para ser ativado por um utilizador. Diferente das outras fontes de Magia elemental, como o Fogo, a Agua e o Ar, a **Magia Prelementar** é entendida pelos **Arcanistas** por ser um tipo especial de poder não-elemental em estado de bruto.

Cada vez que um utilizador vincula-se a uma **Orbe de Allura**, sua própria essência como indivíduo passa a influenciar na formação dessa Magia, fazendo com que o elemento da sua **Orbe** seja determinado pela vontade da Magia, e pela sua própria personalidade.

:::note A Magia Prelementar
A Magia, assim como todas as criaturas do mundo, também é considerada como um tipo de ser vivo com seu próprio ciclo de vida.<br/>
Para entender como a **Magia Prelementar** funciona, pense nela como se fosse um **"Ovo" de Magia**, um conglomerado Mágico em estado de incubação, que ao se "chocar", se transforma em um dos 12 Elementos.
:::

## Torres de Allura

As Torres são locais onde os **Adeptos** praticam a Magia Elemental. É lá que os Adeptos iniciam seu treinamento e recebem a **Orbe de Allura** ainda em seu estado **Prelementar**, passando por uma série de rituais para Despertar o Elemento de sua Orbe.

Devido as características misteriosas da **Magia Prelementar**, os Adeptos não escolhem seu elemento. Este é escolhido pela própria **Orbe**, que se vincula ao seu utilizador, aprendendo sobre sua essência e sua personalidade para enfim trilhar um caminho elemental específico.

:::info A Escolha do Elemento
Para efeito mecânico, os Jogadores podem, como uma ação de Meta-Jogo, escolher o elemento inicial da sua Orbe. Na perspectiva do Personagem, no entanto, o Elemento não é uma escolha dele, e sim um ato da própria Orbe.

É claro que o personagem pode alimentar, durante todo seu treinamento, um desejo interno pelo elemento escolhido, mas esse Desejo não necessariamente se transmite no Elemento de sua escolha, pois ele deve, como **Adepto de Allura**, aceitar e abraçar a escolha Elemental de sua *Orbe*.
:::

## Criando um Adepto de Allura

Quando você cria um Adepto de Allura, há algumas coisas que você precisa saber:

### 1. Escolher um Elemento

Como mecânica de jogo, você poderá escolher qual será o Elemento da sua Orbe. A escolha elemental influenciará o Elemento das suas conjurações elementais, que podem variar entre intensidade, duração e formato.
Abaixo listamos os 12 Elementos que existem no mundo das Terras Místicas:

<table>
  <thead>
    <tr>
      <th>Elemento</th>
      <th>Descrição</th>
      <th>Fraqueza</th>
      <th>Efeito</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Água</td>
      <td>Controla o Líquido essêncial à vida, bem como Oceanos e Rios.</td>
      <td>Eletricidade</td>
      <td>Imprecisão</td>
    </tr>
    <tr>
      <td>Ácido</td>
      <td>Controla os elementos Tóxicos e Ácido com alto poder de corrosão.</td>
      <td>Vento</td>
      <td>Corrosão</td>
    </tr>
    <tr>
      <td>Arcano</td>
      <td>Controla a Mágia das Estrelas e a essência do Magiverso.</td>
      <td>Caos</td>
      <td>Silêncio</td>
    </tr>
    <tr>
      <td>Caos</td>
      <td>Controla a instabilidade da Magia Caótica, com efeitos intensos e inesperados.</td>
      <td>Arcano</td>
      <td>Controle</td>
    </tr>
    <tr>
      <td>Eletricidade</td>
      <td>Controla a estática e a eletricidade inerente na matéria do mundo.</td>
      <td>Matéria</td>
      <td>Paralizia</td>
    </tr>
    <tr>
      <td>Fogo</td>
      <td>Controla o calor primordial e destruidor do Fogo e da Lava.</td>
      <td>Água</td>
      <td>Queima</td>
    </tr>
    <tr>
      <td>Gelo</td>
      <td>Controla o frio implacável, o Gelo puro e matéria congelada.</td>
      <td>Fogo</td>
      <td>Lentidão</td>
    </tr>
    <tr>
      <td>Luz</td>
      <td>Controla a Magia da Luz e a essência do Divino.</td>
      <td>Trevas</td>
      <td>Expurgo</td>
    </tr>
    <tr>
      <td>Matéria</td>
      <td>Controla a própria Terra e seus Materiais.</td>
      <td>Gelo</td>
      <td>Contusão</td>
    </tr>
    <tr>
      <td>Natureza</td>
      <td>Controla a vida verde, a flora e suas raízes.</td>
      <td>Ácido</td>
      <td>Constrição</td>
    </tr>
    <tr>
      <td>Trevas</td>
      <td>Controla a Magia proibida das Trevas.</td>
      <td>Luz</td>
      <td>Medo</td>
    </tr>
    <tr>
      <td>Vento</td>
      <td>Controla o Ar, a força da densidade e as correntes.</td>
      <td>Natureza</td>
      <td>Empuxo</td>
    </tr>
  </tbody>
</table>

### 2. Fraqueza Elemental

Como você deve ter reparado, cada escolha elemental vêm também com uma **Fraqueza Elemental**.<br/>
Normalmente, a Magia não é afetada por essas fraquezas, mas os **Mestres Arcanistas** acreditam que a **Orbe de Allura** emite uma pequena aura invisível que afeta apenas seu utilizador, tornando o dominador um pouco mais sensível aos danos elementais causados pelo elemento com carga imediatamente oposta.

Conforme a dominação elemental se intensifica, a Aura de Fraqueza parece também se intensificar, tornando o utilizador cada vez mais frágil ao Elemento opposto.<br/>
Toda vez que você receber dano de uma Fonte de Dano elemental listada como **Fraqueza**, você receberá um adicional de **TIER*1d12** de Dano, onde Tier é o seu Tier como **Adepto de Allura**.

Para fins de reforço, essa caracteristica também está listada na seção poderes.

### 3. Efeito Elemental

Cada um dos elementos possui um Efeito a qual está atrelado. Esse efeito geralmente é uma condição negativa que é aplicada nos inimigos em certos poderes.
Cada poder descreve a forma como aplicará o efeito, e sua Intensidade.

Como os poderes do Grimo são descritos de forma genérica para qualquer elemento, ao invés de dizer:<br/>

> "ao atingir o alvo, aplique **Medo 10**"

O poder dirá:<br/>

> "ao atingir o alvo, aplique **Efeito 10**"

E ai, dependendo do seu elemento escolhido, o Efeito poderá ser diferente.

### 4. Escolher um Mestre [Opcional]

É praticamente impossível desvendar sozinho os segredos da **Orbe de Allura**, e a maioria dos **Adeptos** iniciou seus ensinos através da ajuda de um **Mestre Elemental**. A história, personalidade e contexto para escolher esse Mestre depende do histórico do Jogador, e pode variar imensamente.

De qualquer forma, quando você criar um **Adepto de Allura**, deverá indicar na sua história quem foi o seu Mentor.

No primeiro momento essa definição pode ser tão simples como: Meu Mestre chama-se "Fulano da Silva". O nome do Mestre pode ficar anotado na sua Ficha de Personagem para referência futura do Narrador.<br/>

:::note
*É importante lembrar que a nomeação de um Mestre não é obrigatória, mas defini-lo na criação do seu personagem faz com que o Narrador possa interligar seu passado, seu presente e seu futuro, criando uma história profunda e interessante que pode beneficiar a todos os jogadores.*<br/>
:::

### 5. Escolher seus Poderes Iniciais

A menos que outra regra diga o contrário, você deverá:

- Escolher 2x (dois) Poderes do Tier 1.
- Escolher 1x (um) Poder Especial.

## Interpretando um Adepto de Allura

Os portadores das **Orbes de Allura** são vistos como exímios Dominadores Elementais, cuja estratégia de combate é primariamente agressiva com alguns traços de controle, possuindo o Dominador um extenso Leque de Habilidades de Ataque e Contenção de inimigos, que pode ser usado para causar grandes quantidades de dano à curta ou longa distância.

As habilidades da Orbe se adaptam ao Elemento escolhido, e em alguns casos podem especificar condições especiais dependendo do Elemento. (vide seção sobre **Efeito Elemental**)

A **Doutrina de Allura** treina os **Adeptos** para agirem como Pilares do Equilíbrio Elemental do mundo, uma espécie de Monges elementais cuja missão é de Paz.
Como **Adepto**, você será visto com Temor e com Respeito, e o seu treinamento lhe instruirá a nunca utilizar os conhecimentos do Grimo para benefício próprio, ou para a destruição.

A Doutrina também ensina que os **Adeptos** jamais devem utilizar sua escola mágica para se distanciarem um dos outros. A Magia, de acordo com os ensinamentos de Allura, é uma entidade que depende da união e do equilíbrio para sobreviver, e essa união jamais poderá ser atingida se os Adeptos usarem seus elementos para disputar a Força e o Poder.

## Origem da Orbe de Allura

Criado por uma misteriosa Augúria que teria vivido Eras passadas em isolamento, **Allura Mantis** foi uma Profeta e Especialista em energias Arcanas, que decidiu, após ter tido uma suposta visão sobre um futuro Apocalyptico, armazenar seus conhecimentos sobre a Magia Arcana num Grimo que ficou então conhecido, como a **Orbe de Allura**.

Apesar de os **Mestres Arcanistas** terem arquivado dezenas de relatos sobre a história de **Allura** e a criação do Grimo, A Existência de Allura jamais foi comprovada.
Isso porquê, diferente de muitos Grimos, que foram passados de Geração a geração, a **Orbe de Allura** foi na verdade encontrada por acaso pelo primeiro **Arcanista** da Ordem, o Metalóide **Drako Balanar**.

A **Orbe Original** teria sido esquecida por Séculos na Antiga **Biblioteca de Seros**, que havia desmoronado após um evento sisimico de grande escala.
**Drako** e seu time foram os primeiros a desbravar os Destroços da Biblioteca, encontrando a **Orbe de Allura**, guardada com cuidado em um antigo Baú ornamentado.

No Baú também haviam diversos jornais e um diário, que contavam a história e as descobertas de **Allura**.<br/>
Os Arcanistas também suspeitam que o Baú não pertencia a **Allura**, e que a história da **Orbe** poderia ser ainda mais antiga do que se imagina.

Os poderes e as funcionalidades impressionantes do **Grimo** foram estudadas e reveladas por **Drako** durante anos, e trazidas ao mundo após o **Blecaute**.

As descobertas de **Drako** no primeiro Século após o Blecaute teriam salvo seu Reino natal de uma grande invasão de Monstros na região de Eregor, e foi através do conceito da replicação dos Grimos, que **Drako** decidiu criar a **Ordem de Allura**, uma organização sem fins lucrativos cujo objetivo seria espalhar o conhecimento de Allura pelo mundo, através da replicação da **Orbe original**.

## Armas Iniciais

Você pode escolher entre duas armas iniciais:

| Imagem | Nome da Arma | Dano | Descrição | Durabilidade |
| ------ | ------------ | ---- | --------- | ------------ |
| <img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C176956f9-2502-452c-963e-181799550369.png" width="80" /> | Orbe do Iniciante + 0 | D4 + 4 | Orbe inicial do Aventureiro, ataca a longa distância* com um feixe não elemental | 3 Cargas |
| <img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cc8623aa6-2402-42d2-8633-faa7bd679ddd.png" width="80" /> | Cetro do Iniciante + 0 | D6 + 4 | Cetro inicial do Aventureiro, ataque corpo-a-corpo. | 3 Cargas |

**A distância padrão para Armas de Alcance é de 6 quadrados.*

## Poderes do Grimo

### Especial

Esse são seus poderes especiais, cada personagem inicia com 1 Poder Especial, que pode ser usado apenas 1 vez a cada **Descanço Prolongado**.

<SpellFromJson expanded={false} spellData={alluras_torment} />

### Habilidades - Tier 1

<SpellFromJson expanded={false} spellData={apprentice_blast} />
<SpellFromJson expanded={false} spellData={arcane_amplification} />
<SpellFromJson expanded={false} spellData={create_element} />
<SpellFromJson expanded={false} spellData={detect_element} />
<SpellFromJson expanded={false} spellData={elemental_fortitude} />
<SpellFromJson expanded={false} spellData={expose_weakness} />
<SpellFromJson expanded={false} spellData={mage_fist} />
<SpellFromJson expanded={false} spellData={magic_wave} />
<SpellFromJson expanded={false} spellData={manipulate_element} />
<SpellFromJson expanded={false} spellData={minimize_weakness} />
<SpellFromJson expanded={false} spellData={prelemental_explosion} />
<SpellFromJson expanded={false} spellData={read_element} />

### Habilidades - Tier 2

Essas Habilidades só podem ser aprendidas a partir do Nível 5 do Grimo.

<SpellFromJson expanded={false} spellData={apprentice_blast_2} />
<SpellFromJson expanded={false} spellData={elemental_barrier} />
<SpellFromJson expanded={false} spellData={hex} />
<SpellFromJson expanded={false} spellData={hide_in_element} />
<SpellFromJson expanded={false} spellData={linear_beam} />
<SpellFromJson expanded={false} spellData={mage_fist_2} />
<SpellFromJson expanded={false} spellData={magic_surge} />
<SpellFromJson expanded={false} spellData={manipulate_element_2} />
<SpellFromJson expanded={false} spellData={prelemental_explosion_2} />
<SpellFromJson expanded={false} spellData={read_element_2} />

### Habilidades - Tier 3

Essas Habilidades só podem ser aprendidas a partir do Nível 10 do Grimo.

<SpellFromJson expanded={false} spellData={auto_element} />
<SpellFromJson expanded={false} spellData={double_blast} />
<SpellFromJson expanded={false} spellData={elemental_curse} />
<SpellFromJson expanded={false} spellData={elemental_heal} />
<SpellFromJson expanded={false} spellData={elemental_shield} />
<SpellFromJson expanded={false} spellData={friendly_fire} />
<SpellFromJson expanded={false} spellData={mage_fist_3} />
<SpellFromJson expanded={false} spellData={planar_meditation} />
<SpellFromJson expanded={false} spellData={spiral} />
<SpellFromJson expanded={false} spellData={upgrade_skill} />

### Habilidades - Tier 4

Essas Habilidades só podem ser aprendidas a partir do Nível 15 do Grimo.

<SpellFromJson expanded={false} spellData={cataclism} />
<SpellFromJson expanded={false} spellData={double_fist} />
<SpellFromJson expanded={false} spellData={elemental_absorv} />
<SpellFromJson expanded={false} spellData={elemental_fly} />
<SpellFromJson expanded={false} spellData={elemental_shape} />
<SpellFromJson expanded={false} spellData={inferno} />
<SpellFromJson expanded={false} spellData={linear_beam_2} />
<SpellFromJson expanded={false} spellData={meteors} />
<SpellFromJson expanded={false} spellData={quadro_blast} />
<SpellFromJson expanded={false} spellData={torment_master} />
