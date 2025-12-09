export type RoundsListParams = {
  cursor?: string;
  limit?: number;
  status?: "active" | "cooldown" | "finished";
};
