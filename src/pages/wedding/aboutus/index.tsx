import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PcVersion from "./pc";
import MobileVersion from "./mobile";

const WeddingAboutUs = () => {
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
        <title>HYD 웨딩 소개 | 화연당</title>
        <meta name="description" content="HYD 웨딩 브랜드를 소개합니다. 특별한 날을 위한 웨딩 플라워 전문 스태프를 만나보세요." />
        <link rel="canonical" href="https://hwayeondang.com/wedding/aboutus" />
        <meta property="og:title" content="HYD 웨딩 소개 | 화연당" />
        <meta property="og:description" content="HYD 웨딩 브랜드를 소개합니다. 특별한 날을 위한 웨딩 플라워 전문 스태프를 만나보세요." />
        <meta property="og:url" content="https://hwayeondang.com/wedding/aboutus" />
      </Helmet>
      {isMobile ? <MobileVersion /> : <PcVersion />}
    </>
  );
};

export default WeddingAboutUs;
