# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 1 (Specification) - Step 5: Define skill schema**.

### Prompt to run

Create `docs/SkillSchema.md` as a formal schema specification for skills and skill-rule metadata.

#### Required sections

1. Purpose and scope
- Relationship to `character.skills` from `docs/CharacterSchema.md`.
- Relationship to skill-point and skill-cost responsibilities in `docs/RulesEngine.md`.

2. Canonical skill object shape
- Required fields (`id`, `name`, `keyAbility`, `trainedOnly`, `armorCheckPenaltyApplies`).
- Class-skill relationship modeling.
- Optional rule flags (e.g., unusable untrained, requires toolkit).

3. Rank/cost rule metadata
- Class vs cross-class cost representation.
- Rank cap representation by character level.
- Multiclass interactions.

4. Validation rules
- Required keys/types and enum constraints.
- Unique ids/names.
- `sourceMetadata.sourceStatus` handling.

5. Source metadata
- `source`, `sourceUrl`, optional `sourceNotes`, `sourceStatus`, `lastVerified`.

6. Example records
- One complete skill example.
- One example showing class-skill vs cross-class behavior metadata.

7. Definition of done
- `docs/SkillSchema.md` is implementation-ready for data entry and engine integration.

### References

Use `docs/ResearchLinks.md` for source material.

### Constraints

- Documentation-only for this step (no engine code).
- Flag uncertain values with `sourceStatus: "needs-verification"`.
