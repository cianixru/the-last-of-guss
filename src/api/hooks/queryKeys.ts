export const queryKeys = {
  auth: {
    root: ["auth"],
    me: () => ["auth", "me"],
  },
  rounds: {
    root: ["rounds"],
    list: (params?: {
      cursor?: string;
      limit?: number;
      status?: "active" | "cooldown" | "finished";
    }) => ["rounds", "list", params ?? {}],
    infinite: (params?: {
      limit?: number;
      status?: "active" | "cooldown" | "finished";
    }) => ["rounds", "infinite", params ?? {}],
    byId: (id: string) => ["rounds", "detail", id],
  },
} as const;
