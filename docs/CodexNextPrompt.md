# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 1 (Specification) - Step 3: Define race schema**.

### Prompt to run

Create `docs/RaceSchema.md` as a formal schema specification for base races and subraces.

#### Required sections

1. Purpose and scope
- What race schema must represent for NWN + POTM.
- Relationship to `docs/CharacterSchema.md` (`character.race`).

2. Canonical race object shape
- Required fields (name, type, size, speed, vision, etc.).
- Modifier and bonus containers (attributes, skills, saves, feats, weapon familiarity).
- Restriction fields (alignment, class, deity, or setting-specific constraints where applicable).

3. Subrace object shape
- Parent race linkage.
- Override/extension rules vs base race.
- Conflict-resolution strategy when base and subrace both modify same stat.

4. Validation rules
- Required keys and data types.
- Value constraints (integer ranges, enum-like fields, unique ids/names).
- `sourceStatus` requirement for unverified rules.

5. Source metadata
- Include `source`, `sourceUrl`, and optional `sourceNotes` fields.
- Include `lastVerified` date field (ISO format).

6. Example records
- One fully worked base race example.
- One fully worked subrace example.

7. Definition of done
- `docs/RaceSchema.md` is complete and implementation-ready for data entry.
- Terminology stays aligned with `docs/CharacterSchema.md` and `docs/RulesEngine.md`.

### References

Use `docs/ResearchLinks.md` for source material:
- POTM server rules
- classes/subclasses reference thread
- NWN general wiki

### Constraints

- Documentation-only for this step (no engine code).
- Do not hardcode uncertain values as final; flag with `sourceStatus: "needs-verification"`.
