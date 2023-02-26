---
id: negative-effects
title: Condições Negativas
slug: /9-combat-rules/negative-effects
image: https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cd1ff6ba0-2a31-4d40-9d34-229cfa009451.jpg
---

import { Effect } from './../../src/components/effect_block/index'

![Efeitos adversos no jogo](https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Cd1ff6ba0-2a31-4d40-9d34-229cfa009451.jpg)

Alguns poderes e ataques especiais podem conferir efeitos negativos que duram vários turnos no jogo. Outros podem restringir sua movimentação, reduzir sua força temporariamente, ou bloquea-lo de conjurar feitiços.

No jogo, temos uma **notação especial** para definir esses **tipos de efeitos**, e vamos falar sobre cada um deles, e sobre sua recuperação.

A maioria desses efeitos é aplicado durante combates, mas muitos deles podem acontecer em situações adversas, onde um combate não está diretamente ocorrendo.

## Notações de Efeitos

Você vai perceber que ao lado do Efeito, podem existir algumas letras entre parentesis. Essas letras representam variáveis dos Efeitos.

Algumas podem significar o Tempo que o efeito dura, outras podem sinalizar o Dano que ele causa, e assim por diante.

Aqui, preparamos uma tabela com as legendas dessas Notações.

| Tipo da Notação | Descrição |
| --------------- | --------- |
| (T)             | Essa notação representa um **Tempo em Turnos** que um Efeito permanece. Isso porquê alguns efeitos são repentinos, e tendem a se enfraquecer e sumir naturalmente. `Silêncio 3` por exemplo representaria uma condição onde o personagem não pode conjurar feitiços durante **3 turnos**. |
| (D)             | Essa notação é utilizada para representar o **Dano que um efeito causará**. Como exemplo, a notação **Envenenar 10 / 3** significa que o Personagem receberá **10 de dano** uma vez a cada turno até um **total de 3 turnos**. |
| (N)            | Representa um **número de cargas** que o efeito utilizará em sua aplicação. Como exemplo: `Corroer 3/10` faz com que o personagem sofre **10 de Dano com a Corrosão**, além de perder aplicar **3 cargas de Desgaste** distribuida entre seus equipamentos. (no caso deste efeito, a ser definido pelo jogador) |
| (C)             | Alguns Efeitos não passam com o tempo, e exigem que o jogador faça uma rolagem bem sucedida contra um **Valor de Desafio**. A letra (C) representa a **Dificuldade deste Desafio**. Em outras palavras, é o ****número mínimo**** que o personagem precisa tirar no Dado para **anular o Efeito**. Como exemplo, `Controle 15` significa que o personagem será Controlado **durante todos os seus turnos**, até que consiga **tirar 15 ou mais** num **teste de Resiliência**.
| (P)            | Representa uma Penalidade negativa, pois alguns efeitos fazem com que o personagem tenha mais dificuldade de realizar certas ações. Como exemplo, `Exaurir 5` significa que o alvo receberá **-5 de Penalidade em todos os testes que realizar.**
| (M)             | Essa notação é utilizada para representar o **número de quadrados** no **Grid de Combate** relacionado ao efeito. Como exemplo, `Empurrar 4` significa que o Personagem será **empurrado 4 quadrados** da sua localização atual. |
| (F)             | Essa notação é utilizada para representar a **fórmula ou dado** relacionado ao efeito. Como exemplo, `Morte d12` significa que o Personagem será instantaneamente morto caso o dado saia o número máximo.  |

## Tipos de Efeitos

| Nome e Notação         | Descrição                                                                                           |
|------------------------|-----------------------------------------------------------------------------------------------------|
| Sangramento  (D)      | Aflige o alvo com um ferimento aberto, que causa <b>Dano fixo</b> por turno (D) até que seja estancado pelo alvo com uma <b>Ação de Perícia</b> de <b>Resiliência</b> (se o alvo não especificar um valor de <b>Resiliência</b>, o Narrador deverá rolar uma <b>Ação de Perícia</b> sem modificadores). A tentativa de estancar deve ser feita no início do turno do alvo afetado. |
| Envenenar  (D)/(T)      | Aflige o alvo com uma substância venenosa, que causa Dano fixo por turno (D) durante (T) turnos.    |
| Queimar    (D)/(T)        | Causa (D) de dano elemental de fogo continuo por turno, cuja duração é de (T) turnos. Enquanto estiver queimando, **personagens não podem atacar alvos** ou **realizar ações que exigem concentração** a menos que sejam bem sucedidos em um teste de **Resiliência** com **Desvantagem**. |
| Corroer    (N)/(D)        | Enquanto o Veneno aflige o alvo por dentro, a Corrosão aflige fisicamente, danificando (N) cargas de Armas ou Armaduras, a ser definido pelo próprio jogador, além de causar (D) de dano fixo. Este efeito não é continuo, e se resolve imediatamente.  |
| Controlar  (C)          | O personagem passa a ser controlado magicamente, não podendo realizar ações de acordo com a sua vontade em seu turno. A condição dura indefinidamente, e exige que o personagem realize um teste de **Resiliência com desvantagem** contra a **Dificuldade (C)** para quebrar o controle. Ao ser bem sucedido, o turno do personagem **finaliza imediatamente**. |
| Constrição (C)/(T)     | A constrição é um estado físico ou mágico que prende um alvo, impedindo que ele possa atacar, se defender ou se mover. **Testes de ataque e defesa** **falham automaticamente**. O efeito dura por (T) turnos, mas so personagem pode realizar um teste de **Força ou Resiliência** contra a **Dificuldade (C)** para quebrar a condição. Ao ser bem sucedido, seu turno **se encerra imediatamente**. |
| Exaurir    (P)           | A exaustão é um efeito que aplica (-P) de penalidade em qualquer ação. |
| Terror     (M)/(P)        | O Terror é uma aura psicológica. Personagens afetados por Terror recebem (-P) de Penalidade se estiverem a até (M) quadrados do alvo que causou o terror. O efeito só acaba quando o combate acabar ou quando a fonte do Terror desaparecer. |
| Congelar   (M)/(T)      | Aflige o alvo com um congelamento súbito, que reduz seu movimento em (M) quadrados durante (T) turnos.    |
| Empurrar   (M)           | Empurrar causa um movimento forçado de (M) quadrados em uma determinada direção (geralmente oposta). Sempre que um personagem for empurrado contra um obstáculo físico, ele receberá `TIER*d4` de dano para cada quadrado realizado contra o obstáculo. No meio aquático, empurrar tem sua eficiência reduzida pela metade. (Ou seja, **Empurrar 2** se torna **Empurrar 1**, enquanto **Empurrar 5** se torna **Empurrar 3** (arredonda-se para cima)) |
| Imprecisão (T)         | Ataques a distância recebem **desvantagem** para serem executados durante (T) turnos. Isso inclui conjuração mágica a distância não-teleguiada. |
| Silenciar  (T)          | Infringe um bloqueio mágico que impede que o usuário fale, além de bloquear a conjuração de feitiços e pergaminhos por (T) turnos. |
| Lentidão   (T)           | Personagens só podem realizar uma única ação e um ataque por turno, mesmo que algo especifique que você pode realizar 2 ataques. Além disso, só podem se mover com metade do seu movimento arredondado para baixo e recebem **desvantagem** em testes de Ataque. Poderes que exigem canalização levam o **dobro do tempo** para serem executados. A Lentidão dura (T) turnos. |
| Atordoar (T) / Paralizar   (T)           | Personagens atordoados/paralizados não podem realizar nenhuma ação durante (T) turnos. (inclusive falar) |
| Sobrecarregar (T) |	Mesmo efeito de Atordoar/Paralizar, porém só funciona em Constructos e Máquinas. |
| Desorientar (T) | Uma versão mais leve de Atordoar, onde o personagem não pode realizar **ações de ataque**, de **movimento** ou de **reação**, mas pode realizar ações livres. |
| Cegueira   (T)           | Alvos cegos **falham automaticamente** em testes que exigem visão, como ataques à distância e ações de precisão. Ações de Ataque e Defesa também são realizadas **com desvantagem**. A Cegueira dura (T) turnos. |
| Petrificar (T)         | Personagens petrificados **não podem realizar nenhum tipo de ação** por (T) turnos e não possuem qualquer noção sensorial sobre os seus arredores. Atacar um personagem petrificado **causa dano diretamente em seus P.V**. Qualquer condição que esteja afetando o personagem **antes da petrificação** é **temporariamente suspensa**, **até que ele retorne** ao estado normal. |
| Adormecer  (T)          | O personagem cai no chão e fica subitamente inconsciente por (T) turnos, até que seja atacado ou acordado. Enquanto estiver inconsciente, ele falha automaticamente em testes de Defesa. |
| Morte (F)               | O alvo é instantaneamente abatido caso (F) resulte no número máximo. |
| Expurgar               | O Expurgo elimina instantaneamente criaturas Decrépitas como Mortos-Vivos, Fantasmas, Aparições, Maldições e Demônios. Não funciona contra inimigos líderes ou superior. |
| Derrubar               | O alvo cai no chão, e precisa se levantar se quiser se mover. Alvos no chão recebem **desvantagem** em testes de Defesa. No meio aquático, Derrubar é sempre equivalente a `Desorientar 1`, e continua fornecendo penalidade em testes de defesa.  |
