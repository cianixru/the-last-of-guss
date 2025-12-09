import { useQuery } from "@tanstack/react-query";

import { AuthService } from "../../generated";
import { queryKeys } from "../queryKeys";

export const useAuthMe = () =>
  useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: () => AuthService.getApiV1AuthMe(),
  });
