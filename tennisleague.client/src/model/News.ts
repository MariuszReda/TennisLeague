export interface News {
  id: string;
  type: "player_joined" | "match_result" | "ranking_change" | "custom";
  message: string;         // gotowa treść do wyświetlenia
  timestamp: string;       // ISO string
  context?: Record<string, any>; // dodatkowe dane, jeśli trzeba
}
