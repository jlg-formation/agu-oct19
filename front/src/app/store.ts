import { Quizz } from './quizz';

export interface Store {
  [name: string]: Quizz;
}
