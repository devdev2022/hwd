import { useState, useEffect } from "react";
import PcVersion from "./pc";

const Forrest = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <div>포트폴리오 모바일</div> : <PcVersion />}</>;
};

export default Forrest;
