export class Team {
  constructor(private readonly id: string, private readonly name: string) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}
