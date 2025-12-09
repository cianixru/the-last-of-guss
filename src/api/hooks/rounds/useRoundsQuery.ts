import { useQuery } from "@tanstack/react-query";

import { RoundsService } from "../../generated";
import { queryKeys } from "../queryKeys";

import type { RoundsListParams } from "./types";

export const useRoundsQuery = (params: RoundsListParams = {}) => {
  const { cursor, limit = 10, status } = params;

  return useQuery({
    queryKey: queryKeys.rounds.list({ cursor, limit, status }),
    queryFn: () => RoundsService.getApiV1Rounds(cursor, limit, status),
  });
};
