# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 3 (Data Expansion) - Step 2: Add POTM subraces**.

### Prompt to run

Create initial structured POTM subrace records and align markdown + TypeScript data.

#### Requirements

1. Add canonical subrace dataset
- Create `src/data/subraces.ts` with initial entries for POTM-specific or server-relevant subraces.
- Each entry must include:
  - `id`
  - `name`
  - `parentRaceId`
  - `attributeModifiers`
  - `sourceMetadata`

2. Source metadata and verification
- Include `source`, `sourceUrl`, `sourceStatus`, optional `sourceNotes`, `lastVerified`.
- Mark uncertain records with `sourceStatus: "needs-verification"`.

3. Markdown parity
- Replace placeholder `data/Subraces.md` with aligned structured entries matching the IDs/names from `src/data/subraces.ts`.

4. Tests
- Add tests validating:
  - unique subrace ids
  - each `parentRaceId` exists in `src/data/races.ts`
  - attribute modifier keys are valid ability names

### Constraints

- Keep entries data-driven and deterministic.
- Do not invent final POTM mechanics when sources are uncertain.
