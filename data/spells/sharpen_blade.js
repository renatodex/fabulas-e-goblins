import hunter from '../classes/hunter'
import peaceAction from '../action_types/peace_action'
import huntersGrimo from '../grimos/hunters_grimo'

const Skill = {
  handle: "sharpen-blade",
  names: {
    pt: "Afiar Lamina",
    en: "Sharpen Blade",
  },
  class: hunter,
  action_type: peaceAction,
  grimo: huntersGrimo,
  min_level: 3,
  magic_cost: 0,
  range_amount: 0,
  max_cast_distance: 0,
  cast_time: 1,
  duration_time: 0,
  selection: true,
  spell_icon: "",
  mechanic: {
    pt: "Essa habilidade lhe concede gratuitamente um item físico, chamado \"Pedra de Afiar Comum\". Ele ocupa 1 espaço no inventário, e pode ser usado indefinidamente para afiar sua arma.\n\nAfiar a arma é um processo que precisa ser feito fora de combate, com calma, e requer 1 hora inteira para ser concluído. Afiar a arma também é um processo barulhento, e pode atrair visitantes indesejados se feita em masmorras ou lugares perigosos.\n\nO processo de afiar a lâmina da arma concede +2 de Dano adicional em quaisquer ataques com a sua arma, dura 24 horas e só pode ser realizado uma vez por dia.\n\nAfiar a arma também remove qualquer encantamento mágico previamente adicionado.\n\nLembre-se, para afiar a arma, é necessário que ela possua uma lâmina. Armas como Arcos, Cajados e Esferas não podem ser afiadas.",
    en: "Essa habilidade lhe concede gratuitamente um item físico, chamado \"Pedra de Afiar Comum\". Ele ocupa 1 espaço no inventário, e pode ser usado indefinidamente para afiar sua arma.\n\nAfiar a arma é um processo que precisa ser feito fora de combate, com calma, e requer 1 hora inteira para ser concluído. Afiar a arma também é um processo barulhento, e pode atrair visitantes indesejados se feita em masmorras ou lugares perigosos.\n\nO processo de afiar a lâmina da arma concede +2 de Dano adicional em quaisquer ataques com a sua arma, dura 24 horas e só pode ser realizado uma vez por dia.\n\nAfiar a arma também remove qualquer encantamento mágico previamente adicionado.\n\nLembre-se, para afiar a arma, é necessário que ela possua uma lâmina. Armas como Arcos, Cajados e Esferas não podem ser afiadas.",
  },
  epic_description: {
    pt: "Bons Aventureiros precisam saber afiar suas próprias armas, e nada como ter as ferramentas certas para isso.",
    en: "Bons Aventureiros precisam saber afiar suas próprias armas, e nada como ter as ferramentas certas para isso."
  },
}

export default Skill
