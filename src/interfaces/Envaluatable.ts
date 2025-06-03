/**
 * Interface for objects that can be evaluated
 */
export interface Envaluatable {
    /**
     * Evaluates the object and returns a numeric score
     * @returns The evaluation score
     */
    evaluate(): number;
}