import type { RouteMetaData } from "../types/Routes";

import LandingPage from "../pages/landing";
import ForrestMain from "../pages/forrest/index";

export const PageRouters: RouteMetaData[] = [
  {
    path: "/",
    element: LandingPage,
    id: "00",
    linkName: "Main",
  },
  {
    path: "/forrest",
    element: ForrestMain,
    id: "00",
    linkName: "포레스트 메인",
  },
];
