export interface Match {
  id: number;
  date: string | null;
  location: string | null;
  playerA: string;
  playerB: string;
  scoreA: number | null;
  scoreB: number | null;
  isFinished: boolean;
}