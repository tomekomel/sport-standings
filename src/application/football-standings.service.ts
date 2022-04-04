import { MatchRepositoryInterface } from './match-repository.interface';
import { Match } from '../domain/match';
import { TeamPosition } from '../domain/team-position';

export class FootballStandingsService {
  private matches: Match[];
  private teamPositions: TeamPosition[];

  constructor(private readonly matchRepository: MatchRepositoryInterface) {}
}
