# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 3 (Data Expansion) - Step 6: Add skills**.

### Prompt to run

Create initial canonical skill records and validation tests.

#### Requirements

1. Data file
- Create `src/data/skills.ts` with initial entries (at minimum):
  - Hide
  - Spot
  - Spellcraft
- Include stable ids, key ability, trained-only/ACP flags, and source metadata.

2. Markdown parity
- Update `data/Skills.md` with structured entries matching TypeScript IDs/names.

3. Verification policy
- Mark uncertain or server-specific details as `sourceStatus: "needs-verification"`.

4. Tests
- Add tests validating:
  - unique skill ids
  - legal key ability enum values
  - boolean rule flags present

### Constraints

- Keep records engine-readable and deterministic.
- Do not invent final POTM skill mechanics when uncertain.
