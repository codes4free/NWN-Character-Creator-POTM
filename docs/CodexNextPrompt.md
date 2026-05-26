# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 1 (Specification) - Step 4: Define class schema**.

### Prompt to run

Create `docs/ClassSchema.md` as a formal schema specification for base classes and prestige classes.

#### Required sections

1. Purpose and scope
- Relationship to `character.classes` from `docs/CharacterSchema.md`.
- Relationship to class/prestige validation responsibilities in `docs/RulesEngine.md`.

2. Canonical base class object shape
- Required fields (`id`, `name`, `hitDie`, `skillPointsPerLevel`, `baseAttackBonusProgression`, save progressions).
- Class skills, feat grants, and progression tables.
- Class-specific restrictions and metadata.

3. Canonical prestige class object shape
- Prerequisite blocks (level, BAB, skills, feats, alignment, spellcasting, class requirements).
- Progression fields and granted features.

4. Validation rules
- Required keys/types.
- Enum/value constraints.
- Uniqueness rules (`id`, `name`).
- `sourceMetadata.sourceStatus` handling for uncertain rules.

5. Source metadata
- `source`, `sourceUrl`, optional `sourceNotes`, `sourceStatus`, `lastVerified`.

6. Example records
- One complete base class example.
- One complete prestige class example.

7. Definition of done
- `docs/ClassSchema.md` is implementation-ready for data entry and engine integration.

### References

Use `docs/ResearchLinks.md` for source material.

### Constraints

- Documentation-only for this step (no engine code).
- Flag uncertain values with `sourceStatus: "needs-verification"`.
Implement the initial rules engine module structure and add tests for:
- attribute modifier calculation
- final attribute calculation
- basic validation output

Reference the roadmap in `docs/DevelopmentRoadmap.md` and keep rule data in `data/`.
