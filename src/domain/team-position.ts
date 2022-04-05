import { Team } from './team';

export interface TeamPositionProperties {
  teamName: string;
  matchesPlayed: number;
  matchesWon: number;
  matchesDrawn: number;
  matchesLost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export class TeamPosition {
  private matchesPlayed: number;
  private matchesWon: number;
  private matchesDrawn: number;
  private matchesLost: number;
  private goalsFor: number;
  private goalsAgainst: number;
  private points: number;

  constructor(private readonly team: Team) {
    this.matchesPlayed = 0;
    this.matchesWon = 0;
    this.matchesDrawn = 0;
    this.matchesLost = 0;
    this.goalsFor = 0;
    this.goalsAgainst = 0;
    this.points = 0;
  }

  getTeamPositionProperties(): TeamPositionProperties {
    return {
      teamName: this.team.getName(),
      matchesPlayed: this.matchesPlayed,
      matchesWon: this.matchesWon,
      matchesDrawn: this.matchesDrawn,
      matchesLost: this.matchesLost,
      goalsFor: this.goalsFor,
      goalsAgainst: this.goalsAgainst,
      points: this.points,
    };
  }

  recordMatchWon(goalsFor: number, goalsAgainst: number, points: number) {
    this.matchesPlayed++;
    this.matchesWon++;
    this.goalsFor += goalsFor;
    this.goalsAgainst += goalsAgainst;
    this.points += points;
  }

  recordMatchDrawn(goals: number, points: number) {
    this.matchesPlayed++;
    this.matchesDrawn++;
    this.goalsFor += goals;
    this.goalsAgainst += goals;
    this.points += points;
  }

  recordMatchLost(goalsFor: number, goalsAgainst: number, points: number) {
    this.matchesPlayed++;
    this.matchesLost++;
    this.goalsFor += goalsFor;
    this.goalsAgainst += goalsAgainst;
    this.points += points;
  }
}
