import type { ComponentType } from "react";

export interface RouteMetaData {
  id?: string;
  path: string;
  element: ComponentType;
  linkName?: string;
  childElements?: RouteMetaData[];
}
