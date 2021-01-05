import { Strength, Agillity, Charisma, Endurance, Perception, Science, Luck } from '../../resources/imgImpors'

/// constants

/// Skills
const STRENGTH = Strength;
const AGILLITY = Agillity;
const CHARISMA = Charisma;
const ENDURANCE = Endurance;
const PERCEPTION = Perception;
const SCIENCE = Science;
const LUCK = Luck;
/// Texts
const STRENGTH_TEXT = `Strength is a measure of your raw physical poweror magical power(If youre a Horny).It affects how much you can carry and the damage if all melee attacks`;

export enum SpecialIndex {
    Strength = 0,
    Perception = 1,
    Endurance = 2,
    Charisma = 3,
    Science = 4,
    Agillity = 5,
    Luck = 6
}

export const SpecialImages = {
    STRENGTH,
    AGILLITY,
    CHARISMA,
    ENDURANCE,
    PERCEPTION,
    SCIENCE,
    LUCK,
}

export const SpecialText = {
    STRENGTH_TEXT,
}