import type { RouteMetaData } from "../types/Routes";

import Main from "../pages/main";

export const PageRouters: RouteMetaData[] = [
  {
    path: "/",
    element: Main,
    id: "00",
    linkName: "Main",
  },
];
