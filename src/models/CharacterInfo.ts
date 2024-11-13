import type Defense from "./Defense"
import type Condition from "./Condition"

export default interface CharacterInfo {
  name: string,
  image?: string,
  ac: number,
  initiative: number,
  proficiency: number,
  speed: number,
  darkvision: number,
  inspirations: number,
  currentHp: number,
  maxHp: number,
  tempHp: number,
  defenses: Defense[],
  conditions: Condition[]
}
