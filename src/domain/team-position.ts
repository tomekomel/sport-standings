import { Team } from './team';

export interface TeamPositionProperties {
  matchesPlayed: number;
  matchesWon: number;
  matchesDrawn: number;
  matchesLost: number;
}

export class TeamPosition {
  private matchesPlayed: number;
  private matchesWon: number;
  private matchesDrawn: number;
  private matchesLost: number;

  constructor(private readonly team: Team) {
    this.matchesPlayed = 0;
    this.matchesWon = 0;
    this.matchesDrawn = 0;
    this.matchesLost = 0;
  }

  getTeamPositionProperties(): TeamPositionProperties {
    return {
      matchesPlayed: this.matchesPlayed,
      matchesWon: this.matchesWon,
      matchesDrawn: this.matchesDrawn,
      matchesLost: this.matchesLost,
    };
  }
}
