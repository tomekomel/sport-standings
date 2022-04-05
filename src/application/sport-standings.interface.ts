import { Match } from '../domain/match';
import { TeamPositionProperties } from '../domain/team-position';

export interface SportStandingsInterface {
  saveMatch(match: Match);
  getSortedStandings(): TeamPositionProperties[];
}
