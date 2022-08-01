import { Subject } from "../constants/Subject";

type Score = {
  id: number;
  yearMonth: string;
  score: number | null;
};

export type ScoreTable = {
  isSelected: boolean;
  subject: {
    id: number;
    name: Subject;
  };
  scores: Score[];
};
