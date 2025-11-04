import {
  useQueries,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query";
import axios, { type AxiosInstance } from "axios";

export class QueryAPI {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    const res = await this.instance.get<T>(url, { params });
    return res.data;
  }

  // Hook 생성용 함수
  createUseQuery<T>(
    key: string | any[],
    url: string,
    staleTime = 1000 * 60 * 5
  ) {
    return (params?: Record<string, any>): UseQueryResult<T> => {
      const queryKey = Array.isArray(key) ? key : [key];

      return useQuery({
        queryKey: [...queryKey, params],
        queryFn: () => this.get<T>(url, params),
        retry: 2,
        staleTime,
        refetchOnWindowFocus: false,
      });
    };
  }

  // 다중 요청 처리용 Hook
  createUseQueries<T>(key: string, url: string, staleTime = 1000 * 60 * 5) {
    return (queries: Record<string, any>[]): UseQueryResult<T>[] => {
      return useQueries({
        queries: queries.map((params) => ({
          queryKey: [key, params],
          queryFn: () => this.get<T>(url, params),
          retry: 2,
          staleTime,
          refetchOnWindowFocus: false,
        })),
      });
    };
  }
}
