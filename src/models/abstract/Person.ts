/**
 * Abstract base class representing a Person
 */
export abstract class Person {
  /**
   * Creates a Person instance
   * @param id - The person's unique identifier
   * @param name - The person's name
   * @param email - The person's email address
   */
  constructor(
    protected id: number,
    protected name: string,
    protected email: string
  ) {}

  /**
   * Gets the person's role (to be implemented by subclasses)
   * @returns The person's role
   */
  abstract getRole(): string;

  /**
   * Gets the person's name (to be implemented by subclasses)
   * @returns The person's name
   */
  abstract getName(): string;
}