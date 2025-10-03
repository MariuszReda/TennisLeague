import type { Court } from "./Court";

export interface Match {
  id: number;
  date: string | null;
  location: Court | null;
  playerA: string;
  playerB: string;
  scoreA: number | null;
  scoreB: number | null;
  isFinished: boolean;
}