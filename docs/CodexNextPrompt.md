# Codex Next Prompt

Use this file to track the next high-priority coding prompt for the project.

## Suggested Next Prompt

Build **Phase 2 (Core Engine) - Step 1: Attribute modifier calculation**.

### Prompt to run

Implement the first production engine module for attribute calculations.

#### Requirements

1. Add shared character typing
- Create `src/types/character.ts` with:
  - `AbilityName` (`str` | `dex` | `con` | `int` | `wis` | `cha`)
  - `AbilityScores` (`Record<AbilityName, number>`)

2. Add attributes engine module
- Create `src/engine/attributes.ts` with:
  - `getAbilityModifier(score: number): number`
  - `validateAbilityScore(score: number): void`
  - `applyRacialModifiers(base: AbilityScores, racial: Partial<AbilityScores>): AbilityScores`
  - `getFinalAbilityScores(base: AbilityScores, racial: Partial<AbilityScores>): AbilityScores`

3. Validation behavior
- `validateAbilityScore` throws on invalid input:
  - non-integer values
  - values < 1
  - values > 50

4. Test coverage
- Create `tests/engine/attributes.test.ts` covering:
  - breakpoint modifiers (8/9/10/11/12/18)
  - negative and positive modifiers
  - immutability of inputs
  - validation failures

5. Package wiring
- Ensure `npm test` runs the test suite successfully.

### Constraints

- Keep logic in `src/engine` only (no UI coupling).
- Do not hardcode race tables in engine functions.
- Keep implementation deterministic and side-effect free.
