export interface WorkItem {
  id: number;
  category: string;
  name: string;
  link: string;
  type: number;
  created_at: string;
}

export interface WorksResponse {
  data: WorkItem[];
  totalCount: number;
}
