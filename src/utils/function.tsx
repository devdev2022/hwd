import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useImagePreload(urls: string[] | undefined): boolean {
  const [ready, setReady] = useState(false);
  const urlKey = urls?.join("|");

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setReady(true);
      return;
    }
    setReady(false);
    Promise.all(
      urls.map(
        (url) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = url;
          })
      )
    ).then(() => setReady(true));
  }, [urlKey]); // eslint-disable-line react-hooks/exhaustive-deps

  return ready;
}

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
