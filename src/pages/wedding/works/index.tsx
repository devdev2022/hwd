import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PcVersion from "./pc";
import MobileVersion from "./mobile";

const WeddingWorks = () => {
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
        <title>HYD 웨딩 포트폴리오 | 화연당</title>
        <meta name="description" content="HYD 웨딩의 웨딩 플라워 포트폴리오를 확인하세요. 부케, 웨딩 홀 장식, 테이블 플라워 등 다양한 작품을 감상하실 수 있습니다." />
        <link rel="canonical" href="https://hwayeondang.com/wedding/works" />
        <meta property="og:title" content="HYD 웨딩 포트폴리오 | 화연당" />
        <meta property="og:description" content="HYD 웨딩의 웨딩 플라워 포트폴리오를 확인하세요. 부케, 웨딩 홀 장식, 테이블 플라워 등 다양한 작품을 감상하실 수 있습니다." />
        <meta property="og:url" content="https://hwayeondang.com/wedding/works" />
      </Helmet>
      {isMobile ? <MobileVersion /> : <PcVersion />}
    </>
  );
};

export default WeddingWorks;
