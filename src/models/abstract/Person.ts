export abstract class Person {
  constructor(
    protected id: number,
    protected name: string,
    protected email: string
  ) {}

  abstract getRole(): string;
  abstract getName(): string;
}