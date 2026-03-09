import { FadeLoader } from "react-spinners";
import { useImagePreload } from "@/utils/function";

interface ImageLoaderProps {
  isLoading?: boolean;
  urls?: string[];
  children: React.ReactNode;
}

const ImageLoader = ({ isLoading, urls, children }: ImageLoaderProps) => {
  const ready = useImagePreload(urls);

  if (isLoading || !ready) {
    return (
      <div className="spinner_container">
        <FadeLoader />
      </div>
    );
  }

  return <>{children}</>;
};

export default ImageLoader;
