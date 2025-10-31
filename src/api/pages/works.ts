import { QueryAPI } from "../queryAPI";

const baseURL = import.meta.env.VITE_API_URL;
const api = new QueryAPI(baseURL);

export const useWorks = (params: Record<string, any>) =>
  api.createUseQuery<any[]>(["works"], "/forrest/works")(params);
