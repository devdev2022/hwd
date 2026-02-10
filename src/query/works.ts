import {
  useQuery,
  useQueries,
  type UseQueryResult,
} from "@tanstack/react-query";
import { fetchWorks } from "@/api/works";

//type
import type { multipleParams, WorksResponse } from "@/types/works";

// 단일 요청
export const useWorks = (params: multipleParams) =>
  useQuery({
    queryKey: ["works", params],
    queryFn: () => fetchWorks(params),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });

// 다중 요청
export const useMultipleWorks = (
  paramList: Record<string, any>,
): UseQueryResult<WorksResponse>[] =>
  useQueries({
    queries: paramList.map((params: multipleParams) => ({
      queryKey: ["works", params],
      queryFn: () => fetchWorks(params),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: 2,
    })),
  });
