import { useMutation, useQueryClient } from "@tanstack/react-query";

import { RoundsService } from "../../generated";
import { queryKeys } from "../queryKeys";

export const useTapMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => RoundsService.postApiV1RoundsTap(id),
    onSuccess: async (_data, id) => {
      await Promise.all([
        qc.invalidateQueries({ queryKey: queryKeys.rounds.byId(id) }),
        qc.invalidateQueries({ queryKey: queryKeys.rounds.root }),
      ]);
    },
  });
};
