import { useNavigate } from "react-router-dom";

export function useGoToPath() {
  const navigate = useNavigate();
  return (path: string, state?: unknown) => {
    navigate(path, { state });
  };
}
