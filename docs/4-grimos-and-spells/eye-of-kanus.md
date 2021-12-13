---
id: eye-of-kanus
title: Olho de Kanus
slug: /4-grimos-and-spells/eye-of-kanus
---

import { SpellFromJson } from './../../src/components/skill_block/index'

import aim_week_point from './../../data/spells-kanus/tier1/aim_week_point.json'
import arrow_rain from './../../data/spells-kanus/tier1/arrow_rain.json'
import scan_wounds from './../../data/spells-kanus/tier1/scan_wounds.json'
import coat_blade from './../../data/spells-kanus/tier1/coat_blade.json'
import concentrate_attack from './../../data/spells-kanus/tier1/concentrate_attack.json'
import bioma_expert from './../../data/spells-kanus/tier1/bioma_expert.json'
import mark_of_animal_companion from './../../data/spells-kanus/tier1/mark_of_animal_companion.json'
import orekais_feet from './../../data/spells-kanus/tier1/orekais_feet.json'
import trap_enemy from './../../data/spells-kanus/tier1/trap_enemy.json'
import hunters_favor from './../../data/spells-kanus/tier1/hunters_favor.json'
import prepare_attack_insect from './../../data/spells-kanus/tier1/prepare_attack_insect.json'

import animal_comando from './../../data/spells-kanus/tier2/animal_comando.json'
import identify_weak_point from './../../data/spells-kanus/tier2/identify_weak_point.json'
import map_location from './../../data/spells-kanus/tier2/map_location.json'

import letal_shot from './../../data/spells-kanus/ultimates/letal_shot.json'

![kanus.jpg](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5C12a3c9f2-dd51-4991-b051-baece5bd86e1.jpg)

A Guilda de Kanus é conhecida por formar exímios sobreviventes letrados na arte da Caça. Diversos Eremitas e Viajantes distantes procuram a Guilda todos os dias para buscar aprender os conhecimentos necessários para se viver e viajar pelo mundo de forma independente e segura.

Além disso, a ajuda dos **Adeptos de Kanus** são sempre bem vistas em Reinos civilizados, oferecendo prêmios em `Temirs` para os **Adeptos** que completarem contratos de Caça estabelecidos pela Guilda.
Os contratos podem ser obtidos por **Adeptos** viajando por Reinos onde a Guilda é ativa.

Para aqueles que iniciam o treinamento básico na **Guilda de Kanus**, é entregue para cada **Adepto** o artefato imbuído de essência Mágica conhecido como `Olho de Kanus`.<br/>
O Artefato possui conhecimentos de Caça específicos que vão sendo revelados ao Adepto conforme sua afinidade com a arte da Caça se aprimora.

## Criando um Adepto de Kanus

Ao escolher esse caminho, existem algumas coisas que você precisa saber:

### 1. Contratos de Caça

Uma das grandes vantagens de ser um **Adepto de Kanus** é que vocÊ estará naturalmente habilitado a obter **Contratos de Caça** nas diversas filiais da **Guilda de Kanus** espalhadas pelo mundo. **Contratos de Caça** ficam reservados a você, mas expiram após um determinado prazo estabelecido.

Cada **Adepto** pode possuir até 3 contratos de Caça em seu nome, sendo que cada contrato especifica suas condições de tempo e outros detalhes que podem variar de local para local.

### 2. Especialidade e Temor

Ao criar um personagem nesse caminho, você deve também especificar 2 (dois) tipos de criaturas da *tabela de tipos de criatura*.

Um deles será sua **Especialidade de Caça**, lhe fornecendo **+2 de Bônus em ações** contra esse tipo de criatura.<br/>
Talvez você tenha adquirido certa facilidade em caçar esse tipo de criatura, ou talvez você tenha aprendido com algum mentor, seja como for, não importa o tamanho ou o formato, você aprendeu que criaturas desse tipo sempre possuem algumas características em comum, e você sabe como explorá-las em combate à seu favor.

Já outra escolha será seu **Temor de Caça**, lhe fornecendo **-2 de Bônus em ações** contra esse tipo de criatura.
Essas criaturas são o seu pesadelo, uma espécie de trauma que você pode ter adquirido por eventos passados, ou apenas uma má sorte que te parece te acompanhar sempre que você encontra uma criatura dessas em seu caminho.<br/>
Não importa o quanto você tente, sempre parece mais difícil combater esse tipo de criatura, e essas dificuldades se refletem no campo de batalha.

### Tabela de Tipos de Criatura

Para sua comodidade, segue a lista de tipos de Criatura:

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
      <td>Dragão</td>
      <td>Criaturas mágicas geralmente voadores, como <b>Drogos</b> e <b>Quarks</b></td>
     </tr>
     <tr>
      <td>Demônio</td>
      <td>Criaturas Demoníacas como <b>Domolor</b>.</td>
     </tr>
     <tr>
      <td>Deus</td>
      <td>Criaturas Primevas e Lendárias.</td>
     </tr>
     <tr>
      <td>Gelatinoso</td>
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
      <td>Terror</td>
      <td>Criaturas das Trevas como <b>Zizagus</b>, <b>Poobum</b> e <b>Orekai</b></td>
     </tr>
     <tr>
      <td>Plasma</td>
      <td>Criaturas Plasmáticas como <b>Fantasmas</b> e <b>Espectros</b></td>
     </tr>
     <tr>
      <td>Planta</td>
      <td>Criaturas feitas de planta como <b>Sitágoras</b> e <b>Talóides</b></td>
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
      <td>Vazio</td>
      <td>Criaturas misteriosas do Vazio como <b>Voloms</b></td>
     </tr>
     <tr>
      <td>Morto-Vivo</td>
      <td>Criaturas biológicas reanimadas através de magia como <b>Zumbis</b>.</td>
     </tr>
  </tbody>
</table>

### 3. Escolher seus Poderes Iniciais

A menos que outra regra diga o contrário, você deverá:

- Escolher 2x (dois) Poderes do Tier 1.
- Escolher 1x (um) Poder Especial.

## Interpretando um Adepto de Kanus

Os Adeptos são vistos como exímios Caçadores, especialistas na arte da Caça e Sobrevivência, rastreando e abatendo suas vítimas com precisão e rapidez.<br/>
Ao utilizar o **Olho de Kanus**, você terá a sua disposição um arsenal de habilidades táticas, que vão lhe permitir influênciar de forma direta e indireta no combate, através do uso de Armadilhas, armas de Longa distância e Lâminas afiadas.

O estilo de Kanus prioriza um combate ágil, preciso e letal, mas também possui grande flexibilidade para se adaptar a condições de terreno, e utilizar o ambiente para maximar a letalidade de seus ataques.

## Origem do Olho de Kanus

A **Guilda de Kanus** nasceu como uma necessidade emergente de lidar com evento do Blecaute.<br/>
Quando a Magia cessou entre os Goblins e outras espécies, as criaturas selvagens perceberam naturalmente uma brecha, uma oportunidade única para recuperar os territórios que foram tomados pelas Civilizações, mas que antes pertenciam a eles.

Então, diversos ataques começaram a ocorrer em reinos considerados populosos e seguros, pois muitos dos Domos de Proteção que antes eram sustentados por magia cairam, e o poderio mágico dos grandes Arcanistas não era mais suficiente para proteger os contornos das cidades contra as diversas e constantes ondas de invasão, que a cada semana se intensificavam.

E foi com o enfraquecimento das defesas cidades, que um grupo de indivíduos treinados e inicialmente liderados pelo Célebre Caçador `Duric Abarde`, começaram a tomar a ofensiva, e caçar as **Criaturas Alfa** antes mesmo que elas pudessem organizar ataques as cidades.
`Duric` teria herdado o primeiro Grimo, **Olho de Kanus** de seu Tataravó `Kanus Abarde`, e teria sido a partir da iniciativa de `Duric` que os `Mestres-Elos` começaram a forjar o Grimo em grande escala, para auxiliar seus aliados na difícil batalha contra as criaturas selvagens.

Foi apenas após diversas incursões bem sucedidas que `Duric` e seus aliados decidiram fundar a `Guilda de Kanus`, uma homenagem ao seu Tataravô, cujas estatuas e bustos estão sempre dispostas nas filiais da Guilda. Com o tempo, os Mestres-Elos replicaram o `Olho de Kanus` para os Adeptos da Guilda, e o conhecimento para utilizar o `Grimo` foi assim transferido para seus aprendizes, criando uma forte comunidade de Caçadores que quase 1 milênio depois ainda é responsável pela proteção de diversos Reinos nas Terras Místicas.

## Poderes do Grimo

### Especial

Esse são seus poderes especiais, cada personagem inicia com 1 Poder Especial, que pode ser usado apenas 1 vez a cada **Descanço Prolongado**.

<SpellFromJson expanded={false} spellData={letal_shot} />

### Habilidades - Tier 1

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

**- Conhecer Terreno**

Você dificilmente se perde, seja no mundo selvagem ou até mesmo em labirintos densos. Você consegue memorizar lugares identicos identificando naturalmente pequenas diferenças que para outros passaria desapercebida.

**- Conhecer Bioma**

Você é um profundo conhecedor de um Bioma escolhido por você. Neste Bioma, você é capaz de detectar a presença de certo tipo de vegetação, animais, e até mesmo dicas que sugiram formações naturais como cavernas, templos subterrâneos e outras estruturas que indiquem a concentração de vida inteligente.

Essa habilidade pode ser aprendida diversas vezes para múltiplos Biomas.

**- Produzir Óleos**

Você sabe preparar seus próprios Óleos de Criatura.

**- Preparar Remédio**

Você possui profundo conhecimento dos arredores, e pode utilizar a vegetação do local para criar remédios que curam pontos de vida e removem condições negativas.

**- Nativo**

Você já esteve em muitos lugares, e pode entender e falar a lingua uma lingua adicional que permite aumentar os testes sociais com aquela cultura em até +4.

**- Chá de Draquenin**

A maioria dos indivíduos desprovidos que tenta passar pela Comunhão com o Draquenin acaba nunca mais retornando à luz, mas você não é uma dessas pessoas.
Você adquiriu os raros conhecimentos para preparar o Chá de Draquenin, e se guiar cautelosamente em sua viagem de conhecimento, enquanto experimenta uma incrível imersão no vasto conhecimento.

De qualquer forma, quando estiver sob o efeito de Draquenin, faça um teste de Resiliência. Falhas críticas causam sequelas permanentes. (Aplique um Trauma baseado em uma experiência recente que o Personagem vivenciou)

**- Olhos da Mente**

O seu Grimo e seu treinamento como Adepto de Kanus lhe permitem amplificar seus sentidos mesmo quando está em descanso, sendo capaz de visualizar claramente os arredores num diâmetro de 8 metros durante um descanso prolongado.

**- Folego Extra**

Você pode gastar 5 P.M para andar um Quadrado extra. Repita essa operação quantas vezes quiser durante o seu turno. Este poder não conta como uma ação.

**- Atirador de Elite**

Você pode realizar ataques à distância Longa sem sofrer qualquer penalidade.

**- Entender a Presa**

Sempre que você enfrentar uma Criatura pela segunda vez, você receberá um Bônus de +1 em todos os ataques contra ela.

**- Instância do Camaleão**

Você pode utilizar metade da sua ação de movimento para se mover de forma praticamente invisível em biomas selvagens, ocultando-se de forma sutil nos elementos.
Caso um inimigo esteja engajado com você, ele perde o engajamento sem poder realizar ataques de oportunidade.

Também é exigido um teste de Sobrevivência para que ele possa lhe localizar novamente. (pelo menos enquanto a Instância Camaleão estiver ativada).

A Instância é dissolvida quando você ataca um inimigo. O Ataque realizado na Instância Camaleão é considerado como um ataque surpresa, e concede +2 de Ataque.

Você pode utilizar a Instância do Camaleão e atacar no mesmo turno, recebendo normalmente os bônus de ataque.

**- Andar do Orekai**

Você possui os pés leves, e pode facilmente se mover para andares superiores sem realizar testes de Acrobacia. Subir numa árvore durante o combate para você é como realizar uma ação de movimento. Para cada elemento elevado que você se mover, deverá gastar 2 quadrados de movimentação.

**- Avaliar Ferimentos**

Permite que você consiga avaliar a Vitalidade da Vítima, dentro ou fora de Batalha.

**- Cegar**

Arremessa uma pequena bolsa com Pólem de Flor que cega todos inimigos numa área de 2x2.

**- Anular o Clima**

Cria uma barreira que anula as condições extremas do Clima em um diametro de 3 quadrados.

**- Estancar Ferimento**

Qualquer ferimento físico ou picada que lhe fizer perder Pontos de Vida por turno é anulado por 3 turnos.

**- Estomago de Ferro**

Sobreviver tem suas vantagens. Você não sofre penalidades por consumir comida estragada.

**- Aparar Projétil**

Sua agilidade lhe permite aparar projéteis em sua direção 1 vez por encontro.

**- Amigo Animal**

Pode fazer domesticar um animal de sua escolha. Não estaca com outros poderes que domesticam animais, mas as vantagens são somadas.

**- Ler a Natureza**

Você estuda os sinais da natureza a sua volta para descobrir dicas que te levam a entender acontecimentos na área atual.

**- Dívida do Caçador**

Pode cobrar o favor de um Caçador da sua Guilda.

**- Influência da Guilda**

Nos Vilarejos e Cidades, você pode utilizar o representante local da sua Guilda para obter informações sobre o local, bem como personalidades importantes, eventos recentes e oportunidades de riqueza.

**- Ferida Profunda**

Seu próximo ataque causa uma ferida profunda no Alvo. As Feridas estacam até 5x e aumentam seus próximos danos em 1d6. Ferida é um Efeito Negativo incurável durante o combate, mas inimigos especialistas podem realizar ações para estacá-la.

**- Tenda Rústica**

Ao realizar um descanso prolongado, você pode armar uma Tenda Rústica que comporta até 3 indivíduos. Todos eles fazem podem descansar nas áreas selvagens e de masmorra sem receber penalidades.

**- Especialista em Venenos**

Pode reconhecer venenos e estancá-los por 1 dia em um alvo. Precisa ser feito fora de combate, e exige 1 hora de preparação.

**- Identificar Ponto Fraco**

Pode realizar essa ação para entender o ponto fraco de um único inimigo. Se bem sucedida, essa ação confere bônus de 1d6 em ataques futuros.

**- Conhecimento de Ferraria**

Você recebe o conhecimento e a habilidade de consertar itens não complexos.

**- Trejeitos do Nativo**

Quando estiver visitando um novo vilarejo, você analiza a população local com a malandragem necessariamente para soar como um cidadão local, ou que talvez viveu ali na região por muito tempo.

**- Favor do Caçador**

Em uma área populoza, você pode encontrar um Caçador para te ajudar com uma Tarefa. Pedir a ajuda de um Caçador o deixará na Dívida.

**- Enviar Sinal**

Você usa o seu Grimo para gerar um sinal mágico no céu que apenas pode ser visto por Caçadores.

**- Mapear Local**

Você emite um pequeno som em uma região silenciosa que se propaga de forma mágica se espalhando pelas áreas internas que você ainda não pode ver. Ao prestar atenção na direção do seu som, você consegue ter uma idéia rústica da estrutura do local. (O Narrador pode desenhar uma versão simplificada do mapa para você).
Se você for Goblin, essa habilidade também revelará `Pontos de Curiosidade`.

**- Nagu-Correio**

Com a ajuda do seu Grimo, você pode enfeitiçar um Nagu selvagem para entregar uma carta ou mensagem escrita por você a algum lugar da sua mente. O feitiço é feito de forma muito trivial gravando magicamente num punhado de Pólem de Flor a sua localização desejada.
O Pólem comanda o Nagu para que considere a entrega de sua mensagem como sua prioridade de vida.

### Habilidades - Tier 2

Essas Habilidades só podem ser aprendidas a partir do Nível 5 do Grimo.

<SpellFromJson expanded={false} spellData={animal_comando} />
<SpellFromJson expanded={false} spellData={identify_weak_point} />
<SpellFromJson expanded={false} spellData={map_location} />
<SpellFromJson expanded={false} spellData={trap_enemy} />
<SpellFromJson expanded={false} spellData={scan_wounds} />
<SpellFromJson expanded={false} spellData={coat_blade} />
<SpellFromJson expanded={false} spellData={bioma_expert} />
<SpellFromJson expanded={false} spellData={orekais_feet} />
<SpellFromJson expanded={false} spellData={mark_of_animal_companion} />
<SpellFromJson expanded={false} spellData={hunters_favor} />
<SpellFromJson expanded={false} spellData={prepare_attack_insect} />

### Habilidades - Tier 3

Essas Habilidades só podem ser aprendidas a partir do Nível 10 do Grimo.

### Habilidades - Tier 4

Essas Habilidades só podem ser aprendidas a partir do Nível 15 do Grimo.
