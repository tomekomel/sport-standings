import { TeamPosition } from '../team-position';

enum RuleBookResult {
  teamA = -1,
  draw = 0,
  teamB = 1,
}

export interface RuleBooksInterface {
  decide(
    teamAPosition: TeamPosition,
    teamBPosition: TeamPosition,
  ): RuleBookResult;
}
