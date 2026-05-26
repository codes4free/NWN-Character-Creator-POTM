# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 3 (Data Expansion) - Step 4: Add prestige classes**.

### Prompt to run

Create initial canonical prestige-class records and validation tests.

#### Requirements

1. Data file
- Create `src/data/prestigeClasses.ts` with initial entries (at minimum):
  - Arcane Archer
  - Assassin
- Include stable ids, progression essentials, prerequisite blocks, and source metadata.

2. Markdown parity
- Update `data/PrestigeClasses.md` with structured entries matching TypeScript IDs/names.

3. Verification policy
- Mark uncertain or server-specific details as `sourceStatus: "needs-verification"`.

4. Tests
- Add tests validating:
  - unique prestige class ids
  - required prerequisite block presence
  - legal save/BAB progression enum values

### Constraints

- Keep records engine-readable and deterministic.
- Do not invent final POTM prestige mechanics when uncertain.
