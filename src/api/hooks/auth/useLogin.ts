import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AuthService } from "../../generated";
import { setAuthToken } from "../../helpers";
import { queryKeys } from "../queryKeys";

export type LoginDto = {
  username: string;
  password: string;
};

export const useLogin = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (body: LoginDto) => AuthService.postApiV1AuthLogin(body),
    onSuccess: async (data) => {
      setAuthToken(data.token);
      await Promise.all([
        qc.invalidateQueries({ queryKey: queryKeys.auth.root }),
        qc.invalidateQueries({ queryKey: queryKeys.rounds.root }),
      ]);
    },
  });
};
