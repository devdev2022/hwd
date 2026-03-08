import { useNavigate } from "react-router-dom";

export function useGoToPath() {
  const navigate = useNavigate();
  return (path: string, state?: unknown) => {
    navigate(path, { state });
  };
}

export function formatName(name: string): string {
  return name
    .replaceAll(".png", "")
    .replaceAll("_", " ")
    .replace(/\d+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
