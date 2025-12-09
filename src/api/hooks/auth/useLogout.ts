import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AuthService } from "../../generated";
import { setAuthToken } from "../../helpers";
import { queryKeys } from "../queryKeys";

export const useLogout = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: () => AuthService.postApiV1AuthLogout(),
    onSuccess: async () => {
      setAuthToken(undefined);
      await Promise.all([
        qc.invalidateQueries({ queryKey: queryKeys.auth.root }),
        qc.invalidateQueries({ queryKey: queryKeys.rounds.root }),
      ]);
    },
  });
};
