import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PcVersion from "./pc";
import MobileVersion from "./mobile";

const Forrest = () => {
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
        <title>For,rest 소개 | 플랜테리어 - 화연당</title>
        <meta
          name="description"
          content="For,rest 플랜테리어를 소개합니다. 가드닝, 플랜테리어, 트리 전문 스태프가 최상의 서비스를 제공합니다."
        />
        <link rel="canonical" href="https://hwayeondang.com/forrest/aboutus" />
        <meta
          property="og:title"
          content="For,rest 소개 | 플랜테리어 - 화연당"
        />
        <meta
          property="og:description"
          content="For,rest 플랜테리어를 소개합니다. 가드닝, 플랜테리어, 트리 전문 스태프가 최상의 서비스를 제공합니다."
        />
        <meta
          property="og:url"
          content="https://hwayeondang.com/forrest/aboutus"
        />
      </Helmet>
      {isMobile ? <MobileVersion /> : <PcVersion />}
    </>
  );
};

export default Forrest;
