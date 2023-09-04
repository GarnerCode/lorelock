export interface Item {
    id: string,
    name: string,
    type: string,
    rarity: string,
    reqAttunement: boolean,
    description: string,
    damageType?: string,
    damageDice?: string,
    armorClass?: number,
}