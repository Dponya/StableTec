import { Strength, Agillity, Charisma, Endurance, Perception, Science, Luck } from '../../resources/imgImpors'

export enum Special {
    Strength = 0,
    Perception = 1,
    Endurance = 2,
    Charisma = 3,
    Science = 4,
    Agillity = 5,
    Luck = 6
}

export const SpecialImages: Record<number, string> = {
    [Special.Strength]: Strength,
    [Special.Agillity]: Agillity,
    [Special.Charisma]: Charisma,
    [Special.Endurance]: Endurance,
    [Special.Perception]: Perception,
    [Special.Science]: Science,
    [Special.Luck]: Luck,
}

/* export const SpecialText: Record<number, number> = {
    [Special.Strength]: 1,
    [Special.Agillity]: 2,
    [Special.Charisma]: 3,
    [Special.Endurance]: 4,
    [Special.Perception]: 5,
    [Special.Science]: 6,
    [Special.Luck]: 7,
} */

export const SpecialText = [
    0, 1, 2, 3, 4, 5, 6
]