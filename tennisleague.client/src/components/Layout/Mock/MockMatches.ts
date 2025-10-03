import type { Court } from "../../../model/Court";
import type { Match } from "../../../model/Match";
import { MockCourts } from "./MockCourts";

const findCourtByName = (name: string): Court | null =>
  MockCourts.find((court) => court.name === name) ?? null;

export const MockMatches: Match[] = [
  {
    id: 1,
    date: null,
    location: null,
    playerA: "Jan Kowalski",
    playerB: "Adam Nowak",
    scoreA: null,
    scoreB: null,
    isFinished: false,
  },
  {
    id: 2,
    date: "2025-06-21T14:00:00",
    location: findCourtByName("Kort 2"),
    playerA: "Ewa Wiśniewska",
    playerB: "Anna Zielińska",
    scoreA: 2,
    scoreB: 1,
    isFinished: true,
  },
  {
    id: 3,
    date: "2025-06-25T12:00:00",
    location: findCourtByName("Kort 3"),
    playerA: "Paweł Nowak",
    playerB: "Krzysztof Maj",
    scoreA: null,
    scoreB: null,
    isFinished: false,
  },
];