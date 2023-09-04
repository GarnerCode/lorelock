import { Spell } from "./Spell.interface";
import { Item } from "./Item.interface";

export interface Character {
    id: string,
    dateCreated: Date,
    npc: boolean,
    name: string,
    race: string,
    class: string,
    subClass: string,
    level: number,
    experiencePoints: number,
    alignment: string,
    playerName: string,
    abilities: Abilities,
    proficiencyBonus: number,
    savingThrows: Array<Skill>,
    skills: Array<Skill>,
    armorClass: number,
    Initiative: number,
    Speed: number,
    maxHitPoints: number,
    hitDice: string,
    passivePerception: number,
    spellcastAbility: string,
    spellSaveDc: number,
    spellAttackBonus: number,
    spells: Array<Spell>,
    featsTraits: Array<FeatTrait>,
    proficiencies: Array<string>,
    languages: Array<string>,
    inventory: Array<Item>,
    copperCount: number,
    silverCount: number,
    goldCount: number,
    platinumCount: number,
    personalityTraits: Array<string>,
    ideals: Array<string>,
    bonds: Array<string>,
    flaws: Array<string>,
    backstory: string,
}

export interface Abilities {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
}

export interface Skill {
    name: string,
    modifier: number,
    proficient: boolean,
}

export interface FeatTrait {
    name: string,
    description: string,
}