# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 6 (Verification) - Step 3: Verify classes and prestige classes with concrete citations**.

### Prompt to run

Extend `docs/VerificationChecklist.md` with citation-backed evidence for class and prestige class seed records.

#### Requirements

1. Focus scope
- Verify entries under:
  - `src/data/classes.ts`
  - `src/data/prestigeClasses.ts`

2. Evidence requirements
- For each class/prestige record, add:
  - concrete source URL
  - short evidence note
  - verification date

3. Status discipline
- Only move to `confirmed` when evidence is explicit in checklist notes.
- Keep unresolved details at `needs-verification`.

4. Consistency updates
- If citations contradict current seed values, update corresponding `src/data/*` and `data/*.md` entries.

### Constraints

- Keep uncertainty explicit and auditable.
- Prefer primary/official references where available.
