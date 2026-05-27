import type { SourceMetadata } from '../types/rules.js';

export interface PlannerClassRule {
  id: string;
  name: string;
  hitDie: string;
  skillPointsPerLevel: number;
  baseAttackBonusProgression: string;
  saveProgressions: { fortitude: string; reflex: string; will: string };
  maxLevel: number;
  bonusFeatLevels: number[];
  progression: Array<{ level: number; hitDie: string; baseAttackBonus: number | null; fortitudeSave: number | null; reflexSave: number | null; willSave: number | null; bonusFeatSlots: number }>;
  sourceMetadata: SourceMetadata;
}

export const plannerClasses: PlannerClassRule[] = [
  {
    "id": "arcane_archer",
    "name": "Arcane Archer",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "assassin",
    "name": "Assassin",
    "hitDie": "d6",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 2,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 3,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 3,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "barbarian",
    "name": "Barbarian",
    "hitDie": "d12",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "low"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d12",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d12",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d12",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d12",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d12",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d12",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d12",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d12",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d12",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d12",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d12",
        "baseAttackBonus": 11,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d12",
        "baseAttackBonus": 12,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d12",
        "baseAttackBonus": 13,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d12",
        "baseAttackBonus": 14,
        "fortitudeSave": 9,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d12",
        "baseAttackBonus": 15,
        "fortitudeSave": 9,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d12",
        "baseAttackBonus": 16,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d12",
        "baseAttackBonus": 17,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d12",
        "baseAttackBonus": 18,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d12",
        "baseAttackBonus": 19,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d12",
        "baseAttackBonus": 20,
        "fortitudeSave": 12,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "bard",
    "name": "Bard",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "high",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 2,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 3,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 3,
        "reflexSave": 7,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d6",
        "baseAttackBonus": 8,
        "fortitudeSave": 3,
        "reflexSave": 7,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 4,
        "reflexSave": 8,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 4,
        "reflexSave": 8,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d6",
        "baseAttackBonus": 10,
        "fortitudeSave": 4,
        "reflexSave": 9,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d6",
        "baseAttackBonus": 11,
        "fortitudeSave": 5,
        "reflexSave": 9,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d6",
        "baseAttackBonus": 12,
        "fortitudeSave": 5,
        "reflexSave": 10,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d6",
        "baseAttackBonus": 12,
        "fortitudeSave": 5,
        "reflexSave": 10,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d6",
        "baseAttackBonus": 13,
        "fortitudeSave": 6,
        "reflexSave": 11,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d6",
        "baseAttackBonus": 14,
        "fortitudeSave": 6,
        "reflexSave": 11,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d6",
        "baseAttackBonus": 15,
        "fortitudeSave": 6,
        "reflexSave": 12,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "beguiler",
    "name": "Beguiler",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "baseAttackBonusProgression": "low",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      3,
      5,
      7,
      8,
      11,
      14,
      15,
      17,
      19,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 3
      },
      {
        "level": 12,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 16,
        "hitDie": "d6",
        "baseAttackBonus": 8,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d6",
        "baseAttackBonus": 8,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 2
      },
      {
        "level": 20,
        "hitDie": "d6",
        "baseAttackBonus": 10,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "black_powder_avenger",
    "name": "Black Powder Avenger",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      1,
      2,
      4,
      5,
      6,
      8,
      10
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d10",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 2,
        "hitDie": "d10",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 3
      },
      {
        "level": 3,
        "hitDie": "d10",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d10",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 5,
        "hitDie": "d10",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 7,
        "hitDie": "d10",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d10",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 3
      },
      {
        "level": 9,
        "hitDie": "d10",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d10",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "blackguard",
    "name": "Blackguard",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d10",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d10",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d10",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d10",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d10",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d10",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d10",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d10",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d10",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "cleric",
    "name": "Cleric",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 9,
        "reflexSave": 4,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d8",
        "baseAttackBonus": 11,
        "fortitudeSave": 9,
        "reflexSave": 5,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d8",
        "baseAttackBonus": 13,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d8",
        "baseAttackBonus": 14,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d8",
        "baseAttackBonus": 15,
        "fortitudeSave": 12,
        "reflexSave": 6,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "crypt_raider",
    "name": "Crypt Raider",
    "hitDie": "d6",
    "skillPointsPerLevel": 8,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "dirgist",
    "name": "Dirgist",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "divine_champion",
    "name": "Divine Champion",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d10",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 2,
        "hitDie": "d10",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d10",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 4,
        "hitDie": "d10",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 5,
        "hitDie": "d10",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 7,
        "hitDie": "d10",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 8,
        "hitDie": "d10",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d10",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 10,
        "hitDie": "d10",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "dragon_disciple",
    "name": "Dragon Disciple",
    "hitDie": "d6",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d10",
        "baseAttackBonus": 4,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d10",
        "baseAttackBonus": 5,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d10",
        "baseAttackBonus": 7,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "druid",
    "name": "Druid",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 9,
        "reflexSave": 4,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d8",
        "baseAttackBonus": 11,
        "fortitudeSave": 9,
        "reflexSave": 5,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d8",
        "baseAttackBonus": 13,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d8",
        "baseAttackBonus": 14,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d8",
        "baseAttackBonus": 15,
        "fortitudeSave": 12,
        "reflexSave": 6,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "dwarven_defender",
    "name": "Dwarven Defender",
    "hitDie": "d12",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d12",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d12",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d12",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d12",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d12",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d12",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d12",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d12",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d12",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d12",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "favored_soul",
    "name": "Favored Soul",
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "high",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 8,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 8,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 9,
        "reflexSave": 9,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d8",
        "baseAttackBonus": 11,
        "fortitudeSave": 9,
        "reflexSave": 9,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 10,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 10,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d8",
        "baseAttackBonus": 13,
        "fortitudeSave": 11,
        "reflexSave": 11,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d8",
        "baseAttackBonus": 14,
        "fortitudeSave": 11,
        "reflexSave": 11,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d8",
        "baseAttackBonus": 15,
        "fortitudeSave": 12,
        "reflexSave": 12,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "fighter",
    "name": "Fighter",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "low"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d10",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 2,
        "hitDie": "d10",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d10",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 4,
        "hitDie": "d10",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 5,
        "hitDie": "d10",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 7,
        "hitDie": "d10",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 8,
        "hitDie": "d10",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d10",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 10,
        "hitDie": "d10",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 11,
        "hitDie": "d10",
        "baseAttackBonus": 11,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d10",
        "baseAttackBonus": 12,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 13,
        "hitDie": "d10",
        "baseAttackBonus": 13,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 14,
        "hitDie": "d10",
        "baseAttackBonus": 14,
        "fortitudeSave": 9,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d10",
        "baseAttackBonus": 15,
        "fortitudeSave": 9,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 16,
        "hitDie": "d10",
        "baseAttackBonus": 16,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 17,
        "hitDie": "d10",
        "baseAttackBonus": 17,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d10",
        "baseAttackBonus": 18,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 19,
        "hitDie": "d10",
        "baseAttackBonus": 19,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 20,
        "hitDie": "d10",
        "baseAttackBonus": 20,
        "fortitudeSave": 12,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "grimetrekker",
    "name": "Grimetrekker",
    "hitDie": "d8",
    "skillPointsPerLevel": 6,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "hallowed_witch",
    "name": "Hallowed Witch",
    "hitDie": "d6",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "low",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "hexblade",
    "name": "Hexblade",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "low"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      10,
      11,
      14,
      15,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d10",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d10",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d10",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d10",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d10",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 3
      },
      {
        "level": 6,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d10",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d10",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d10",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d10",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 11,
        "hitDie": "d10",
        "baseAttackBonus": 11,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d10",
        "baseAttackBonus": 12,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d10",
        "baseAttackBonus": 13,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d10",
        "baseAttackBonus": 14,
        "fortitudeSave": 9,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d10",
        "baseAttackBonus": 15,
        "fortitudeSave": 9,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 16,
        "hitDie": "d10",
        "baseAttackBonus": 16,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d10",
        "baseAttackBonus": 17,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d10",
        "baseAttackBonus": 18,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d10",
        "baseAttackBonus": 19,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d10",
        "baseAttackBonus": 20,
        "fortitudeSave": 12,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 3
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "monk",
    "name": "Monk",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "high",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 8,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 8,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 9,
        "reflexSave": 9,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d8",
        "baseAttackBonus": 11,
        "fortitudeSave": 9,
        "reflexSave": 9,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 10,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 10,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d8",
        "baseAttackBonus": 13,
        "fortitudeSave": 11,
        "reflexSave": 11,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d8",
        "baseAttackBonus": 14,
        "fortitudeSave": 11,
        "reflexSave": 11,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d8",
        "baseAttackBonus": 15,
        "fortitudeSave": 12,
        "reflexSave": 12,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "monster_hunter",
    "name": "Monster Hunter",
    "hitDie": "d6",
    "skillPointsPerLevel": 6,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "paladin",
    "name": "Paladin",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "low"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d10",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d10",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d10",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d10",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d10",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d10",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d10",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d10",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d10",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d10",
        "baseAttackBonus": 11,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d10",
        "baseAttackBonus": 12,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d10",
        "baseAttackBonus": 13,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d10",
        "baseAttackBonus": 14,
        "fortitudeSave": 9,
        "reflexSave": 4,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d10",
        "baseAttackBonus": 15,
        "fortitudeSave": 9,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d10",
        "baseAttackBonus": 16,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d10",
        "baseAttackBonus": 17,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d10",
        "baseAttackBonus": 18,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d10",
        "baseAttackBonus": 19,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d10",
        "baseAttackBonus": 20,
        "fortitudeSave": 12,
        "reflexSave": 6,
        "willSave": 6,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "pale_master",
    "name": "Pale Master",
    "hitDie": "d6",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "low",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d9",
        "baseAttackBonus": 2,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d9",
        "baseAttackBonus": 3,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d9",
        "baseAttackBonus": 3,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d9",
        "baseAttackBonus": 4,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d9",
        "baseAttackBonus": 4,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d9",
        "baseAttackBonus": 5,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "people_s_champion",
    "name": "People's Champion",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 5,
    "bonusFeatLevels": [
      2,
      3,
      5
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "ranger",
    "name": "Ranger",
    "hitDie": "d8",
    "skillPointsPerLevel": 6,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d8",
        "baseAttackBonus": 11,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 8,
        "reflexSave": 8,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d8",
        "baseAttackBonus": 13,
        "fortitudeSave": 8,
        "reflexSave": 8,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d8",
        "baseAttackBonus": 14,
        "fortitudeSave": 9,
        "reflexSave": 9,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d8",
        "baseAttackBonus": 15,
        "fortitudeSave": 9,
        "reflexSave": 9,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d8",
        "baseAttackBonus": 16,
        "fortitudeSave": 10,
        "reflexSave": 10,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d8",
        "baseAttackBonus": 17,
        "fortitudeSave": 10,
        "reflexSave": 10,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d8",
        "baseAttackBonus": 18,
        "fortitudeSave": 11,
        "reflexSave": 11,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d8",
        "baseAttackBonus": 19,
        "fortitudeSave": 11,
        "reflexSave": 11,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d8",
        "baseAttackBonus": 20,
        "fortitudeSave": 12,
        "reflexSave": 12,
        "willSave": 6,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "rogue",
    "name": "Rogue",
    "hitDie": "d6",
    "skillPointsPerLevel": 8,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      10,
      11,
      13,
      14,
      16,
      17,
      19,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 2,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 3,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 3,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 11,
        "hitDie": "d6",
        "baseAttackBonus": 8,
        "fortitudeSave": 3,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 4,
        "reflexSave": 8,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 4,
        "reflexSave": 8,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 14,
        "hitDie": "d6",
        "baseAttackBonus": 10,
        "fortitudeSave": 4,
        "reflexSave": 9,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d6",
        "baseAttackBonus": 11,
        "fortitudeSave": 5,
        "reflexSave": 9,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d6",
        "baseAttackBonus": 12,
        "fortitudeSave": 5,
        "reflexSave": 10,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 17,
        "hitDie": "d6",
        "baseAttackBonus": 12,
        "fortitudeSave": 5,
        "reflexSave": 10,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d6",
        "baseAttackBonus": 13,
        "fortitudeSave": 6,
        "reflexSave": 11,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d6",
        "baseAttackBonus": 14,
        "fortitudeSave": 6,
        "reflexSave": 11,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 20,
        "hitDie": "d6",
        "baseAttackBonus": 15,
        "fortitudeSave": 6,
        "reflexSave": 12,
        "willSave": 6,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "shadowdancer",
    "name": "Shadowdancer",
    "hitDie": "d8",
    "skillPointsPerLevel": 6,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 2,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 3,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 3,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "shifter",
    "name": "Shifter",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 7,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "sorcerer",
    "name": "Sorcerer",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "low",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d4",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d4",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d4",
        "baseAttackBonus": 1,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d4",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d4",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d4",
        "baseAttackBonus": 3,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d4",
        "baseAttackBonus": 3,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d4",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d4",
        "baseAttackBonus": 4,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d4",
        "baseAttackBonus": 5,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d4",
        "baseAttackBonus": 5,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d4",
        "baseAttackBonus": 6,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d4",
        "baseAttackBonus": 6,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d4",
        "baseAttackBonus": 7,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d4",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d4",
        "baseAttackBonus": 8,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d4",
        "baseAttackBonus": 8,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d4",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d4",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d4",
        "baseAttackBonus": 10,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "voodan",
    "name": "Voodan",
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "high",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d8",
        "baseAttackBonus": 0,
        "fortitudeSave": 2,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d8",
        "baseAttackBonus": 1,
        "fortitudeSave": 3,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d8",
        "baseAttackBonus": 2,
        "fortitudeSave": 3,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d8",
        "baseAttackBonus": 3,
        "fortitudeSave": 4,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d8",
        "baseAttackBonus": 4,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d8",
        "baseAttackBonus": 5,
        "fortitudeSave": 5,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d8",
        "baseAttackBonus": 6,
        "fortitudeSave": 6,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d8",
        "baseAttackBonus": 7,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d8",
        "baseAttackBonus": 8,
        "fortitudeSave": 7,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d8",
        "baseAttackBonus": 9,
        "fortitudeSave": 8,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d8",
        "baseAttackBonus": 10,
        "fortitudeSave": 9,
        "reflexSave": 4,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d8",
        "baseAttackBonus": 11,
        "fortitudeSave": 9,
        "reflexSave": 5,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d8",
        "baseAttackBonus": 12,
        "fortitudeSave": 10,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d8",
        "baseAttackBonus": 13,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d8",
        "baseAttackBonus": 14,
        "fortitudeSave": 11,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d8",
        "baseAttackBonus": 15,
        "fortitudeSave": 12,
        "reflexSave": 6,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "warlock",
    "name": "Warlock",
    "hitDie": "d6",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "medium",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      11,
      14,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d6",
        "baseAttackBonus": 8,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d6",
        "baseAttackBonus": 10,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d6",
        "baseAttackBonus": 11,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d6",
        "baseAttackBonus": 12,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d6",
        "baseAttackBonus": 12,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d6",
        "baseAttackBonus": 13,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d6",
        "baseAttackBonus": 14,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d6",
        "baseAttackBonus": 15,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "warmage",
    "name": "Warmage",
    "hitDie": "d6",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "low",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      3,
      5,
      6,
      8,
      11,
      14,
      16,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d6",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d6",
        "baseAttackBonus": 1,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 4,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d6",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 2
      },
      {
        "level": 7,
        "hitDie": "d6",
        "baseAttackBonus": 3,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d6",
        "baseAttackBonus": 4,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 0
      },
      {
        "level": 11,
        "hitDie": "d6",
        "baseAttackBonus": 5,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 3
      },
      {
        "level": 12,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d6",
        "baseAttackBonus": 6,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d6",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 9,
        "bonusFeatSlots": 0
      },
      {
        "level": 16,
        "hitDie": "d6",
        "baseAttackBonus": 8,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 17,
        "hitDie": "d6",
        "baseAttackBonus": 8,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d6",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d6",
        "baseAttackBonus": 10,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 12,
        "bonusFeatSlots": 2
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "weapon_master",
    "name": "Weapon Master",
    "hitDie": "d10",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "high",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "high",
      "will": "low"
    },
    "maxLevel": 10,
    "bonusFeatLevels": [
      2,
      5,
      8
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d10",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 2,
        "willSave": 0,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d10",
        "baseAttackBonus": 2,
        "fortitudeSave": 0,
        "reflexSave": 3,
        "willSave": 0,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d10",
        "baseAttackBonus": 3,
        "fortitudeSave": 1,
        "reflexSave": 3,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d10",
        "baseAttackBonus": 4,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d10",
        "baseAttackBonus": 5,
        "fortitudeSave": 1,
        "reflexSave": 4,
        "willSave": 1,
        "bonusFeatSlots": 2
      },
      {
        "level": 6,
        "hitDie": "d10",
        "baseAttackBonus": 6,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d10",
        "baseAttackBonus": 7,
        "fortitudeSave": 2,
        "reflexSave": 5,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d10",
        "baseAttackBonus": 8,
        "fortitudeSave": 2,
        "reflexSave": 6,
        "willSave": 2,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d10",
        "baseAttackBonus": 9,
        "fortitudeSave": 3,
        "reflexSave": 6,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d10",
        "baseAttackBonus": 10,
        "fortitudeSave": 3,
        "reflexSave": 7,
        "willSave": 3,
        "bonusFeatSlots": 0
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  },
  {
    "id": "wizard",
    "name": "Wizard",
    "hitDie": "d4",
    "skillPointsPerLevel": 2,
    "baseAttackBonusProgression": "low",
    "saveProgressions": {
      "fortitude": "low",
      "reflex": "low",
      "will": "high"
    },
    "maxLevel": 20,
    "bonusFeatLevels": [
      2,
      5,
      8,
      10,
      11,
      14,
      15,
      17,
      20
    ],
    "progression": [
      {
        "level": 1,
        "hitDie": "d4",
        "baseAttackBonus": 0,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 2,
        "bonusFeatSlots": 0
      },
      {
        "level": 2,
        "hitDie": "d4",
        "baseAttackBonus": 1,
        "fortitudeSave": 0,
        "reflexSave": 0,
        "willSave": 3,
        "bonusFeatSlots": 2
      },
      {
        "level": 3,
        "hitDie": "d4",
        "baseAttackBonus": 1,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 3,
        "bonusFeatSlots": 0
      },
      {
        "level": 4,
        "hitDie": "d4",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 0
      },
      {
        "level": 5,
        "hitDie": "d4",
        "baseAttackBonus": 2,
        "fortitudeSave": 1,
        "reflexSave": 1,
        "willSave": 4,
        "bonusFeatSlots": 3
      },
      {
        "level": 6,
        "hitDie": "d4",
        "baseAttackBonus": 3,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 7,
        "hitDie": "d4",
        "baseAttackBonus": 3,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 5,
        "bonusFeatSlots": 0
      },
      {
        "level": 8,
        "hitDie": "d4",
        "baseAttackBonus": 4,
        "fortitudeSave": 2,
        "reflexSave": 2,
        "willSave": 6,
        "bonusFeatSlots": 2
      },
      {
        "level": 9,
        "hitDie": "d4",
        "baseAttackBonus": 4,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 6,
        "bonusFeatSlots": 0
      },
      {
        "level": 10,
        "hitDie": "d4",
        "baseAttackBonus": 5,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 11,
        "hitDie": "d4",
        "baseAttackBonus": 5,
        "fortitudeSave": 3,
        "reflexSave": 3,
        "willSave": 7,
        "bonusFeatSlots": 2
      },
      {
        "level": 12,
        "hitDie": "d4",
        "baseAttackBonus": 6,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 13,
        "hitDie": "d4",
        "baseAttackBonus": 6,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 8,
        "bonusFeatSlots": 0
      },
      {
        "level": 14,
        "hitDie": "d4",
        "baseAttackBonus": 7,
        "fortitudeSave": 4,
        "reflexSave": 4,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 15,
        "hitDie": "d4",
        "baseAttackBonus": 7,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 9,
        "bonusFeatSlots": 2
      },
      {
        "level": 16,
        "hitDie": "d4",
        "baseAttackBonus": 8,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 0
      },
      {
        "level": 17,
        "hitDie": "d4",
        "baseAttackBonus": 8,
        "fortitudeSave": 5,
        "reflexSave": 5,
        "willSave": 10,
        "bonusFeatSlots": 2
      },
      {
        "level": 18,
        "hitDie": "d4",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 19,
        "hitDie": "d4",
        "baseAttackBonus": 9,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 11,
        "bonusFeatSlots": 0
      },
      {
        "level": 20,
        "hitDie": "d4",
        "baseAttackBonus": 10,
        "fortitudeSave": 6,
        "reflexSave": 6,
        "willSave": 12,
        "bonusFeatSlots": 3
      }
    ],
    "sourceMetadata": {
      "source": "Ravenloft Character Planner workbook",
      "sourceUrl": "",
      "sourceStatus": "needs-verification",
      "sourceNotes": "Extracted from Class Table in Ravenloft_Character_Planner.xlsx; BAB and save values are derived from the workbook progression rates because cached formula cells are not reliable outside Excel. Verify against live POTM/NWN server rules before marking confirmed.",
      "lastVerified": "2026-05-27"
    }
  }
];
