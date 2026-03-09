import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PcVersion from "./pc";
import MobileVersion from "./mobile";

const WeddingContacts = () => {
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
        <title>HYD 웨딩 문의 | 화연당</title>
        <meta name="description" content="HYD 웨딩에 문의하세요. 웨딩 부케, 웨딩 홀 장식 등 특별한 날을 위한 플라워 서비스를 안내해 드립니다." />
        <link rel="canonical" href="https://hwayeondang.com/wedding/contacts" />
        <meta property="og:title" content="HYD 웨딩 문의 | 화연당" />
        <meta property="og:description" content="HYD 웨딩에 문의하세요. 웨딩 부케, 웨딩 홀 장식 등 특별한 날을 위한 플라워 서비스를 안내해 드립니다." />
        <meta property="og:url" content="https://hwayeondang.com/wedding/contacts" />
      </Helmet>
      {isMobile ? <MobileVersion /> : <PcVersion />}
    </>
  );
};

export default WeddingContacts;
