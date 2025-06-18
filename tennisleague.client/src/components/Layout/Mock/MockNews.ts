import type { News } from "../../../model/News";

export const MockNews: News[] = Array.from({ length: 10 }, (_, i) => {
      const types: News["type"][] = ["player_joined", "match_result", "ranking_change"];
      const randomType = types[Math.floor(Math.random() * types.length)];
      const timestamp = new Date(Date.now() - i * 3600000).toISOString(); // co godzinę wstecz

      switch (randomType) {
        case "player_joined":
          return {
            id: `${i}`,
            type: "player_joined",
            message: `Zawodnik #${i + 1} dołączył do ligi!`,
            timestamp,
            context: { playerId: `p${i + 1}` }
          };
        case "match_result":
          return {
            id: `${i}`,
            type: "match_result",
            message: `Zawodnik #${i + 1} pokonał Zawodnika #${i + 2} ${Math.floor(Math.random() * 7)}:${Math.floor(Math.random() * 7)}`,
            timestamp,
            context: {
              matchId: `m${i}`,
              winnerId: `p${i + 1}`,
              loserId: `p${i + 2}`
            }
          };
        case "ranking_change":
          const oldRank = Math.floor(Math.random() * 10) + 1;
          const newRank = Math.max(1, oldRank - Math.floor(Math.random() * 3));
          return {
            id: `${i}`,
            type: "ranking_change",
            message: `Zawodnik #${i + 1} awansował z pozycji ${oldRank} na ${newRank}`,
            timestamp,
            context: {
              playerId: `p${i + 1}`,
              oldRank,
              newRank
            }
          };
        default:
          return {
            id: `${i}`,
            type: "custom",
            message: "Wiadomość niestandardowa",
            timestamp
          };
        }
    });