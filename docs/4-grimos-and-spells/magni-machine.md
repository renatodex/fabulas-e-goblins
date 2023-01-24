---
id: magni-machine
title: Aparato de Magni
slug: /4-grimos-and-spells/magni-machine
---

import { SpellFromJson } from './../../src/components/skill_block/index'

import triad from './../../data/spells/spells-magni/ultimates/triad.json'

import driving_spring from './../../data/spells/spells-magni/tier1/driving_spring.json'
import fabricate from './../../data/spells/spells-magni/tier1/fabricate.json'
import flaming_module from './../../data/spells/spells-magni/tier1/flaming_module.json'
import improvise_art from './../../data/spells/spells-magni/tier1/improvise_art.json'
import laser_module from './../../data/spells/spells-magni/tier1/laser_module.json'
import overcharge from './../../data/spells/spells-magni/tier1/overcharge.json'
import remote_control from './../../data/spells/spells-magni/tier1/remote_control.json'
import repair_magni from './../../data/spells/spells-magni/tier1/repair_magni.json'
import repair_master from './../../data/spells/spells-magni/tier1/repair_master.json'
import short_circuit from './../../data/spells/spells-magni/tier1/short_circuit.json'
import shove_module from './../../data/spells/spells-magni/tier1/shove_module.json'
import solder_module from './../../data/spells/spells-magni/tier1/solder_module.json'

import artillery_module from './../../data/spells/spells-magni/tier2/artillery_module.json'
import auto_destruction from './../../data/spells/spells-magni/tier2/auto_destruction.json'
import automatize from './../../data/spells/spells-magni/tier2/automatize.json'
import barrier_integration from './../../data/spells/spells-magni/tier2/barrier_integration.json'
import fire_cross from './../../data/spells/spells-magni/tier2/fire_cross.json'
import hull_reinforcement from './../../data/spells/spells-magni/tier2/hull_reinforcement.json'
import laser_integration from './../../data/spells/spells-magni/tier2/laser_integration.json'
import magni_float_device from './../../data/spells/spells-magni/tier2/magni_float_device.json'
import saw_module from './../../data/spells/spells-magni/tier2/saw_module.json'
import timely_backup from './../../data/spells/spells-magni/tier2/timely_backup.json'

import amplify_bomb from './../../data/spells/spells-magni/tier3/amplify_bomb.json'
import auto_repair_module from './../../data/spells/spells-magni/tier3/auto_repair_module.json'
import concentration_shot from './../../data/spells/spells-magni/tier3/concentration_shot.json'
import independent_systems from './../../data/spells/spells-magni/tier3/independent_systems.json'
import internal_storage from './../../data/spells/spells-magni/tier3/internal_storage.json'
import magni_beam from './../../data/spells/spells-magni/tier3/magni_beam.json'
import magni_priority from './../../data/spells/spells-magni/tier3/magni_priority.json'
import missile_module from './../../data/spells/spells-magni/tier3/missile_module.json'
import reanimate_constructor from './../../data/spells/spells-magni/tier3/reanimate_constructor.json'
import triad_laser_integration from './../../data/spells/spells-magni/tier3/triad_laser_integration.json'

import coordinated_attack from './../../data/spells/spells-magni/tier4/coordinated_attack.json'
import explosive_death from './../../data/spells/spells-magni/tier4/explosive_death.json'
import fifth_element from './../../data/spells/spells-magni/tier4/fifth_element.json'
import instant_fabrication from './../../data/spells/spells-magni/tier4/instant_fabrication.json'
import magnific_armor from './../../data/spells/spells-magni/tier4/magnific_armor.json'
import magnizord from './../../data/spells/spells-magni/tier4/magnizord.json'
import nuclear_destruction from './../../data/spells/spells-magni/tier4/nuclear_destruction.json'
import super_missile_module from './../../data/spells/spells-magni/tier4/super_missile_module.json'
import syncronized_install from './../../data/spells/spells-magni/tier4/syncronized_install.json'
import syncronized_repair from './../../data/spells/spells-magni/tier4/syncronized_repair.json'
import ultra_resistent_shell from './../../data/spells/spells-magni/tier4/ultra_resistent_shell.json'

![Magni.png](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Ca5225d62-9e7e-41ed-aa22-9bf7da0aa99b.png)

Os **Adeptos de Magni** originais acreditavam que a Magia se corrompe sempre que é manipulada diretamente contra seus inimigos. Ao invés disso, eles desenvolveram os **Magnis**: Construtos inanimados controlados magicamente por seu portador através de **Tecmagi**, um tipo de Tecnologia aliada à Magia.

Treinados no combate utilitário, esses Tecmagos frequentemente utilizam Bombas e Garruchas como armas principais.

## A Tecmagi

Antigas civilizações do Oriente como os Guximaxi e os Ualarins acreditavam que a **Tecmagi** era uma das formas mais respeitosas de se utilizar a dominação Mágica, uma vez que a magia dessa maneira jamais seria usada com o propósito direto de ferir um ser vivo por intervenção física.

De acordo com a cultura desses antigos povos Orientais, a Magia é uma energia Viva e constante, que estaria o tempo todo em um ciclo de passagem pelo mundo, sendo renovada a cada uso, e carregando em suas jornadas futuras os conhecimentos e sentimentos acumulados em seus ciclos passados.

Por isso, de acordo com eles, sempre que a Magia era utilizada na Guerra com o propósito de ferir fisicamente um ser vivo, ela absorveria nesse processo um turbilhão de energias negativas de seus dominadores e inimigos, influenciando sua presença futura no mundo.
Eles acreditavam que em seu próximo ciclo, essa mesma Magia voltaria carregada com o Odio e a Vingança do passado, construindo um ciclo de negatividade que se repetiria de forma cada vez mais intensa, até que a magia se tornasse corrompida.

Para eles, a única forma de evitar esse processo de degeneração mágica seria através da manipulação de Objetos inanimados, pois assim apenas a Lâmina dos Metais ou as Pontas das Lanças absorveriam tais energias, blindando a Essência Mágica das energias corruptíveis. E mesmo que a própria Magia impulsionasse a Lâmina até o inimigo, a energia daquela ação ficaria acumulada na Máquina, e não mais na Essência Mágica.

Os **Tecmagos** originais acreditavam que mesmo que esses Metais e Armas das civilizações guerreiras fossem manipuladas pela Magia na Guerra, as energias negativas de seu uso perverso e enviesado não poderiam ser absorvidas pelo fluxo mágico, mantendo a pureza original da Magia como ser Vivo.

## Criando um Adepto de Magni

Ao seguir esse caminho, existem algumas coisas que você deve saber:

### 1. Escolher seus Poderes Iniciais

A menos que outra regra diga o contrário, você deverá:

- Escolher 2x (dois) Poderes do Tier 1.
- Escolher 1x (um) Poder Especial.

## Virtudes

### 1. Animar Objetos (Custo: 0 P.M)

Como **Adepto de Magni**, você possui o poder controlar objetos inanimados que sejam da mesma categoria de tamanho que você. Com a expansão do seu personagem, essa capacidade pode ser expandida.

Os objetos inanimados podem ser objetos construídos por você através da utilização de materia prima, ou até mesmo itens decorativos ou funcionais, como Mesas, Cadeiras e objetos menores como Tábuas, Caixas e Armas.

Os objetos podem assumir um tipo leve de levitação, apenas para facilitar sua movimentação, que é controlada plenamente pelo **Adepto de Magni**.

Apenas um objeto pode ser controlado dessa forma ao mesmo tempo (ao menos que outra habilidade diga o contrário), e o controle Exige sucesso numa **Ação de Perícia**, utilizando **Elo Mágico**.

Cada objeto inanimado assume `PV = TIER*10`, e adquire o mesmo **Ataque Físico** do Dominador, assim como sua **Defesa Física e Mágica**. Ao serem utilizados em batalha, os Objetos causam `TIER*1D10` de Dano.

Pode ser dissolvido a qualquer momento pelo Dominador.

:::note
Se os objetos a serem inanimados forem itens mágicos, eles perdem suas propriedades mágicas durante o período que forem animados (a menos que alguma outra habilidade diga o contrário).
:::

:::info Concentração
Utilizar os **Magnis** em qualquer situação exige uma concentração mínima dos Adeptos, que precisam o tempo todo estar sincronizados com sua criação através de seu **Elo Mágico**.

Sempre que um efeito negativo deixar o seu personagem inconsciente, todos os **Magnis** ou **Objetos Reanimados** serão automaticamente desabilitados, exigindo uma ação extra para reativação.
:::

### 2. Sinergia Mecânica (Passiva/Custo: TIER*4 P.M)

O Conjurador passa a possuir **Defesa +2** contra ataques de criaturas **Mecânicas** ou **Constructos**, assim como **Ataque +2** ao combater essas mesmas criaturas.

Além disso, criaturas Mecânicas que forem abatidas no **Campo de Batalha** podem ser reanimadas temporariamente sob o controle do **Magnista** a um custo de `TIER*4 P.M`.

Os atributos de **Ataque e Defesa** da criatura animada seguem a mesma regra de **Animar Objetos**, mas os valores de **Pontos de Vida** e **Dano** nesse caso ficam condicionados aos ataques na ficha da Criatura.

:::info Criaturas Lendárias
Sinergia Mecânica não pode ser usado para reanimar criaturas Lendárias ou Nêmesis.
:::

## Interpretando um Adepto de Magni

**Adeptos de Magni** costumam ser vistos como indivíduos inteligentes e criativos, mas isso não é necessariamente uma regra. Esses indivíduos são muito cobiçados quando o assunto é trabalho, pois sua habilidade com a **Tecmagi** tem sido cada vez mais útil e exigida nos diversos Reinos das **Terras Místicas**.

Num mundo cada vez mais difícil, muitos Adeptos acabam deixando a **Tecmagi** de lado para se tornarem Mecânicos ou Inventores para outros senhores, reinos ou organizações.

Como Adepto de Magni, você também enfrentará certa resistência de alguns povos por utilizar a Magia em Objetos inanimados. Algo similar à resistencia cultural que o **Povo de Eregor** enfrenta com a **Grimotek**. Mas diferente da **Grimotek**, que pode **escravizar os Grimos** sem a necessidade de um Dominador, a **Tecmagi** é apenas uma técnica de manipulação do **Grimo**, sempre exigindo a presença de um manipulador para controlá-la.

## Origem do Grimo

O Grimo é um aparato criado por `Magni Malator`. Ele contém os conhecimentos Mágicos do ficcionado inventor, que estudava profundamente as Doutrinas das antigas civilizações **Guximaxi** e **Ualarin**.

Esses povos antigos foram os criadores originais da técnica conhecida como **Tecmagi**, e eles acreditavam fielmente que essa arte era o único caminho para garantir a Pureza da Magia e evitar sua Corrupção.

Diversos artefatos selvagens criados por essas civilizações eram similares aos Grimos modernos em seu funcionamento, e guardavam dentro de si uma grande quantidade de ensinamentos e técnicas antigas para utilização da **Tecmagi**.

`Magni` era um descendente distante do povo **Ualarin**, e foi o primeiro a decifrar e traduzir a lingua ancestral desses povos e documentar as diversas Técnicas da poderosa **Tecmagi**. Sendo um Linguista benévolo, toda a pesquisa e conhecimento da Arte de Batalha **Ualarin** e **Guaximagi** fora cuidadosamente registrada no seu Grimo original, o `Aparato de Magni`.

Com o passar dos anos, especialmente após o `Blecaute`, a **Tecmagi** se tornou uma Doutrina popular, e muitos Adeptos agora estudam e difundem os conhecimentos valiosos dessas antigas civilizações.

Com o passar do tempo, enormes **templos de metal** conhecidos como  **Cubos de Magni** surgiram especificamente para formar **Adeptos** através da prática da antiga **Tecmagi**, e hoje esses templos estão espalhados em diversas localidades do mundo. Dizem que muitos mestres supremos da arte **Magni** são herdeiros distantes dos **Guximaxi** e **Ualarin** originais.

## Requisito de entrada

As regras abaixo apenas se aplicam se este Grimo não for o seu Grimo inicial:

- Possuir pelo menos 1 Ponto em Elo Mágico.
- Deve pagar uma Taxa de entrada de 2000 Temirs.
- Ter usado seus talentos por pelo menos 5 vezes de forma útil para decifrar Máquinas, Constructos ou outros tipos de aparatos mecânicos. (a Guilda irá saber)
- Passar no teste de entrada rolando um d100 e somando sua **Inteligência * 5**. (Dificuldade = 75). Caso falhe no teste, você não poderá tentar novamente no mesmo mês, a menos que pague uma taxa adicional de 1000 Temirs.

## Poderes do Grimo

### Especial

Esse são seus poderes especiais, cada personagem inicia com 1 Poder Especial, que pode ser usado apenas 1 vez a cada **Descanço Prolongado**.

<SpellFromJson expanded={false} spellData={triad} />

### Habilidades - Tier 1

<SpellFromJson expanded={false} spellData={driving_spring} />
<SpellFromJson expanded={false} spellData={fabricate} />
<SpellFromJson expanded={false} spellData={flaming_module} />
<SpellFromJson expanded={false} spellData={improvise_art} />
<SpellFromJson expanded={false} spellData={laser_module} />
<SpellFromJson expanded={false} spellData={overcharge} />
<SpellFromJson expanded={false} spellData={remote_control} />
<SpellFromJson expanded={false} spellData={repair_magni} />
<SpellFromJson expanded={false} spellData={repair_master} />
<SpellFromJson expanded={false} spellData={short_circuit} />
<SpellFromJson expanded={false} spellData={shove_module} />
<SpellFromJson expanded={false} spellData={solder_module} />

Essas são as habilidades iniciais do Grimo. Normalmente, no início você deve selecionar duas dessas habilidades para compor sua build inicial.

•  Sobrecarga: Funciona apenas em droides, conjura um feixe elétrico que causa dano gigantesco em droids.
•  Mestre dos Reparos: Você é capaz de realizar reparos simples de forma magica em um mecanismo,  apetrecho ou aparato defeituoso sem precisar de peças de reposição.
•  Arte do Improviso: Você pode re-rolar um teste falhado de reparo ou mecânica de qualquer tipo, mas não funciona se a falha tiver sido um Desastre.
•  Controle-Remoto: Tome controle de um mecanismo simples remotamente.
•  Módulo Flamejante: Instala um módulo no seu ajudante que permite que ele cause dano de fogo adicional. Poderes de módulo só podem ser instalados um de cada vez.
•  Módulo de Solda: Você utiliza seu Magni para soldar uma porta. A soldagem leva 2 turnos para portas normais, mas pode demorar proporcionalmente mais tempo para portas maiores. Pode ser usado em outras ocasiões.
•  Mola Propulsora: Você pode arremessar um item ou bomba no seu ajudante para que ele o impulsione a um espaço equivalente aos seus pontos de movimento. (Permitindo que você dobre o alcance do seu ataque ou arremesse itens mais distante).
•  Curto-Circuito: Desabilita um Grimo temporariamente durante 3 turnos.
•  Fabricar: Permite que seus Magnis imprimam um objeto utilizando seus próprios materiais ou material externo.
•  Reparar Magni: Cura o seu Magni instantaneamente fazendo um reparo telecinético.
•  Modulo Lazer: Permite ao Magni fazer um ataque Lazer que causa dano e cega um inimigo.
•  Modulo Encontrão: Permite ao seu Magni obter impulso e se atirar contra um alvo, recebendo e causando dano ao mesmo tempo.

### Habilidades - Tier 2

Essas Habilidades só podem ser aprendidas a partir do Nível 5 do Grimo.

<SpellFromJson expanded={false} spellData={artillery_module} />
<SpellFromJson expanded={false} spellData={auto_destruction} />
<SpellFromJson expanded={false} spellData={automatize} />
<SpellFromJson expanded={false} spellData={barrier_integration} />
<SpellFromJson expanded={false} spellData={fire_cross} />
<SpellFromJson expanded={false} spellData={hull_reinforcement} />
<SpellFromJson expanded={false} spellData={laser_integration} />
<SpellFromJson expanded={false} spellData={magni_float_device} />
<SpellFromJson expanded={false} spellData={saw_module} />
<SpellFromJson expanded={false} spellData={timely_backup} />

•  Cruz de Fogo: Essa armadilha consiste em uma engenhoca de 4 canos que se conectam em uma fonte de fogo, soprando uma linha de 1x3 de fogo em 4 direções. Pode ser conjurada em um unico ponto e é ativada apenas uma vez pelo conjurador, quebrando logo em seguida.
•  Modulo Artilharia: Atira um projetil explosivo que causa dano para cada espaço de distancia que o Magni está do alvo.
•  Backup Oportuno: Como uma ação de reação a um ataque inimigo, o Magni se desmonta em pleno ar e adere a um aliado formando uma armadura para absorver um ataque iminente. O Magni é destruído após o processo.
•  Automatizar: Transforma um dispositivo manual em um dispositivo automático controlado pelo Grimo. Pode ser usado em portas, alavancas, botões e outras engenhocas. O conjurador pode controlar apenas um dispositivo dessa forma ao mesmo tempo.
•  Modulo Serra: Instala um modulo no Magni que expõe 4 laminas afiadas que rotacionam causando dano a todos inimigos próximos.
•  Prancha Magni: Sacrifica um Magni para transformá-lo em uma prancha flutuante que pode erguer o conjurador a até 1 metro do chão.
•  Reforço de Casco: Aumenta os PV dos seus Magni em TIER*3
•  Auto-destruição: Ordena ao seu ajudante que entre no modo auto-destruição, explodindo após 3 turnos e causando dano a todos inimigos.
•  Integração Laser: Dois Magnis se conectam por um Lazer, rotacionando 360 graus e causando dano a todos inimigos na area.
•  Integração Barreira: Dois Magnis se conectam para formar uma barreira de 2m de altura não elemental intranspassável. A barreira possui 50 PV por Tier.

### Habilidades - Tier 3

Essas Habilidades só podem ser aprendidas a partir do Nível 10 do Grimo.

<SpellFromJson expanded={false} spellData={amplify_bomb} />
<SpellFromJson expanded={false} spellData={auto_repair_module} />
<SpellFromJson expanded={false} spellData={concentration_shot} />
<SpellFromJson expanded={false} spellData={independent_systems} />
<SpellFromJson expanded={false} spellData={internal_storage} />
<SpellFromJson expanded={false} spellData={magni_beam} />
<SpellFromJson expanded={false} spellData={magni_priority} />
<SpellFromJson expanded={false} spellData={missile_module} />
<SpellFromJson expanded={false} spellData={reanimate_constructor} />
<SpellFromJson expanded={false} spellData={triad_laser_integration} />

•  Prioridade Magni: Pode trocar seu próprio turno pelo turno de um Magni.
•  Integração Triade Laser: Conecta 3 Magnis para formar um triangulo laser e causa dano a todos inimigos na area interna.
•  Tiro concentrado: Sacrifica N Magnis extraindo sua Magia pra efetuar um poderoso Tiro concentrado.
•  Amplificar Bomba: Você arremessa sua bomba em um Magni, que a consome , amplificando seu dano e causando Tier*20 de dano adicional, em uma area 2x2 em volta do Magni. O Magni é sacrificado no processo.
•  Sistemas Independentes: Os Magnis não se desfazem mais quando o conjurador fica inconsciente, ou dorme.
•  Armazenamento Interno: Cada Magni pode carregar 1 item adicional. Ao ser desmontado, o item pode ser recuperado do Magni, mas será considerado perdido caso o jogador esqueça.
•  Reanimar Constructo: Criaturas Mecânicas que forem abatidas no Campo de Batalha podem ser reanimadas temporariamente sob o controle do Magnista a um custo de TIER*4 P.M.
•  Feixo Magni: Dispara um feixo canalizado que atinge um Magni. No seu próximo turno, fora do turno do Magni alvo, você pode disparar um tiro poderoso em um alvo inimigo. Cada Magni adicional que for conectado com esse tiro causa 150 de dano.
•  Modulo Auto Reparo: O Magni pode usar seu turno para se reparar recuperando 20 PV.
•  Modulo Missel: Aprimora a arma de um magni, aumentando seu dano. (Dobro?)

### Habilidades - Tier 4

Essas Habilidades só podem ser aprendidas a partir do Nível 15 do Grimo.

<SpellFromJson expanded={false} spellData={coordinated_attack} />
<SpellFromJson expanded={false} spellData={explosive_death} />
<SpellFromJson expanded={false} spellData={fifth_element} />
<SpellFromJson expanded={false} spellData={instant_fabrication} />
<SpellFromJson expanded={false} spellData={magnific_armor} />
<SpellFromJson expanded={false} spellData={magnizord} />
<SpellFromJson expanded={false} spellData={nuclear_destruction} />
<SpellFromJson expanded={false} spellData={super_missile_module} />
<SpellFromJson expanded={false} spellData={syncronized_install} />
<SpellFromJson expanded={false} spellData={syncronized_repair} />
<SpellFromJson expanded={false} spellData={ultra_resistent_shell} />

•  Modulo Super Missil: Aprimora mais ainda a arma de um Magni (triplo?)
•  Instalação Sincronizada: Modulos instalam simultaneamente em todos Magni.
•  Fabricação Instantânea: Gera todos Magnis simultaneamente.
•  Destruição Nuclear: Todos Magni se juntam al conjurador, gerando uma explosão em massa.
•  Reparo Sincronizado: cura todos os magni de uma vez só.
•  Ataque Coordenado: Um unico Magni age em nome dos 4 Magnis, realizando uma única ação de ataque contra um alvo. (Os 4 atacam, mas considera como 1 ataque só)
•  Magnizord: Une todos os Magnis num único Magni que possui PV extra e pode atacar com um Laser.
•  Armadura Magnifica: Exige 4 Magnis. Todos os Magnis se juntam ao seu corpo, formando uma poderosa armadura que lhe fornece capacidades físicas incríveis, o transformando em uma verdadeira maquina de combate.
•  Quinto Elemento: Permite a você conjurar um Quinto Magni.
•  Casco Ultra Resistente: Aumenta os PV dos Magni em 50 P.V.
•  Destruição Explosiva: Quando um Magni morre, causa dano em área (1x1 adjacente) equivalente ao seus P.V.
