# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 1 (Specification) - Step 2: Define rules engine responsibilities**.

### Prompt to run

Create a formal responsibilities spec in `docs/RulesEngine.md` that defines:

1. Engine scope boundaries
- What the engine owns (calculation + validation).
- What the engine does not own (UI behavior, persistence adapters).

2. Inputs and outputs
- Expected input shape (character snapshot + reference data).
- Standard validation output contract:
  - `isValid`
  - structured `errors`
  - structured `warnings`
  - stable `code` values for each rule failure.

3. Responsibility modules (initial)
- Attribute calculation responsibilities.
- Skill-point and skill-cost responsibilities.
- Feat prerequisite validation responsibilities.
- Class/prestige qualification responsibilities.
- Spell/domain eligibility responsibilities.

4. Rule source-of-truth contract
- Rule data comes from `data/` (or future `src/data`).
- Engine must not hardcode race/class/feat/domain tables in business logic.
- Uncertain rules must be marked `sourceStatus: "needs-verification"` in data files.

5. Determinism and traceability
- Same inputs must produce same outputs.
- Validation messages should include rule source references.

6. Definition of done for this step
- `docs/RulesEngine.md` includes clear module responsibilities.
- Input/output contracts are documented.
- Non-goals are listed to prevent scope creep.

### Constraints

- Keep this step documentation-only (no application code yet).
- Keep terminology aligned with `docs/CharacterSchema.md`.
