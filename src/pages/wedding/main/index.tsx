import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PcVersion from "./pc";
import MobileVersion from "./mobile";

const WeddingMain = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>HYD 웨딩 | 화연당</title>
        <meta name="description" content="HYD는 특별한 날을 더욱 아름답게 만드는 웨딩 플라워 전문 브랜드입니다. 웨딩 부케, 웨딩 장식, 웨딩 플라워 서비스를 제공합니다." />
        <link rel="canonical" href="https://hwayeondang.com/wedding" />
        <meta property="og:title" content="HYD 웨딩 | 화연당" />
        <meta property="og:description" content="HYD는 특별한 날을 더욱 아름답게 만드는 웨딩 플라워 전문 브랜드입니다. 웨딩 부케, 웨딩 장식, 웨딩 플라워 서비스를 제공합니다." />
        <meta property="og:url" content="https://hwayeondang.com/wedding" />
      </Helmet>
      {isMobile ? <MobileVersion /> : <PcVersion />}
    </>
  );
};

export default WeddingMain;
