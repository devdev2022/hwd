import { Route } from "react-router-dom";
import type { RouteMetaData } from "../types/Routes";

const createChildRoutes = (paramObj: RouteMetaData) => {
  const { childElements } = paramObj;
  if (childElements?.length === 0) {
    return null;
  }

  return (
    <>
      {childElements?.map(
        (paramChildObj: RouteMetaData, paramChildIndex: number) => {
          const { element: ChildElement } = paramChildObj;
          if (!ChildElement) return null;
          return (
            <Route
              key={`childRoute${paramChildIndex}`}
              path={paramChildObj.path}
              element={<ChildElement />}
            >
              {createChildRoutes(paramChildObj)}
            </Route>
          );
        }
      )}
    </>
  );
};

export default createChildRoutes;
