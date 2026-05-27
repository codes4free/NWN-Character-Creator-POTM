# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Continue the online character sheet foundation.

Next tasks:

- Add class level progression to character sheets.
- Add derived class calculations for total hit die summary.
- Add validation warnings for unverified class records used by a character.
- Verify the full starter `src/data/skills.ts` class-skill mappings against POTM-specific rules.
- Add feat prerequisite validation and eventually expand `src/data/feats.ts` beyond the starter records.
- Continue shaping the character detail page around the NWN2DB-style build format.
- Use `src/data/plannerClasses.ts` as the expanded class progression seed, while preserving `needs_verification`.
- Keep the edit page working for existing race, attribute, and starting class updates.
- Preserve the level 20 multiclass rule: each selected class must have at least 5 levels.
- Keep the existing 30-point ability score budget validation intact.
- Preserve the modifier order: point-buy base score, then base race modifier, then subrace modifier.
- Keep calculations server-side and testable.
- Do not hardcode class data in views or templates; use database records.
