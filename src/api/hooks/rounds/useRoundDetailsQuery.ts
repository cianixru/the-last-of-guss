import { useQuery } from "@tanstack/react-query";

import { RoundsService } from "../../generated";
import { queryKeys } from "../queryKeys";

export const useRoundDetailsQuery = (id?: string) =>
  useQuery({
    queryKey: id ? queryKeys.rounds.byId(id) : [],
    queryFn: () => RoundsService.getApiV1Rounds1(id!),
    enabled: !!id,
  });
