import { useMutation, useQueryClient } from "@tanstack/react-query";

import { RoundsService } from "../../generated";
import { queryKeys } from "../queryKeys";

export const useCreateRound = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: () => RoundsService.postApiV1Rounds(),
    onSuccess: async () => {
      await Promise.all([
        qc.invalidateQueries({ queryKey: queryKeys.rounds.root }),
      ]);
    },
  });
};
