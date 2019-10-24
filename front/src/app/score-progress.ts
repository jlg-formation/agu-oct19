export interface ScoreProgress {
  /**
   * The current score when the user is doing a quizz.
   */
  score: number;

  /**
   * The current question index when the user is doing the quizz.
   */
  questionIndex: number;
}
