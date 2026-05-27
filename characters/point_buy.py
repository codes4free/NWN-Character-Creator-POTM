ABILITY_SCORE_MINIMUM = 8
ABILITY_SCORE_MAXIMUM = 18
POINT_BUY_BUDGET = 30


def ability_point_cost(score: int) -> int:
    if score < ABILITY_SCORE_MINIMUM:
        raise ValueError("Ability score cannot be below 8.")

    if score > ABILITY_SCORE_MAXIMUM:
        raise ValueError("Ability score cannot be above 18 during character creation.")

    cost = 0

    for value in range(ABILITY_SCORE_MINIMUM + 1, score + 1):
        if value <= 14:
            cost += 1
        elif value <= 16:
            cost += 2
        else:
            cost += 3

    return cost


def total_point_buy_cost(scores: dict[str, int]) -> int:
    return sum(ability_point_cost(score) for score in scores.values())


def remaining_points(scores: dict[str, int]) -> int:
    return POINT_BUY_BUDGET - total_point_buy_cost(scores)


def next_point_cost(score: int) -> int | None:
    if score >= ABILITY_SCORE_MAXIMUM:
        return None

    return ability_point_cost(score + 1) - ability_point_cost(score)
