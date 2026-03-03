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

export interface multipleParams {
  page: number;
  category: string;
  subMenu: number;
  limit: number;
}

export const HOME_WORKS_PARAMS = [
  { page: 1, category: "planterior", subMenu: 1, limit: 3 },
  { page: 1, category: "landscaping", subMenu: 1, limit: 3 },
  { page: 1, category: "pop-up_store", subMenu: 1, limit: 3 },
  { page: 2, category: "winter_decoration", subMenu: 1, limit: 3 },
];
