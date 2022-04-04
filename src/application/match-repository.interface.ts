import { Match } from '../domain/match';

export interface MatchRepositoryInterface {
  save(match: Match);
  getAllMatches(): Match[];
}
