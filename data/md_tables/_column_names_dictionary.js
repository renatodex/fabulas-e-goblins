// Used to automatically translate pt-BR column names to english in the API
// Not a definitive solution, but works for now.
const Dictionary = {
  "Nome": "name",
  "Redução de Dano Físico": "physical_damage_reduction",
  "Redução de Dano Mágico": "magical_damage_reduction",
  "Preço (T$)": "buy_price",
  "Parte do Corpo": "body_part",
  "Tipo Ataque": "attack_type",
  "Dano Base Físico": "base_physical_damage",
  "Dano Base Mágico": "base_magical_damage",
  "Atributo": "attribute",
  "Tipo Dano": "damage_type",
  "Dano Extra (Armas)": "extra_weapon_damage",
  "Redução de Dano (Armadura)": "extra_damage_reduction",
  "Durabilidade Adicional": "durability",
  "Movimentação": "movement",
  "Multiplicador": "multiplier",
  "Grau Recomendado": "recommended_tier",
  "Grau Exigido": "required_tier",
  "Nível de Refinamento": "refinement_level",
  "Raridade": "rarity",
  "Descrição": "description",
}

module.exports = Dictionary
