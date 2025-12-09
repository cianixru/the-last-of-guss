import { useInfiniteQuery } from "@tanstack/react-query";

import { RoundsService } from "../../generated";
import { queryKeys } from "../queryKeys";

import type { RoundsListParams } from "./types";

export const useInfiniteRoundsQuery = (
  params: Omit<RoundsListParams, "cursor"> = {}
) => {
  const { limit = 10, status } = params;

  return useInfiniteQuery({
    queryKey: queryKeys.rounds.infinite({ limit, status }),
    queryFn: ({ pageParam }) =>
      RoundsService.getApiV1Rounds(
        typeof pageParam === "string" ? pageParam : undefined,
        limit,
        status
      ),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.pagination.hasMore
        ? lastPage.pagination.nextCursor ?? undefined
        : undefined,
  });
};
