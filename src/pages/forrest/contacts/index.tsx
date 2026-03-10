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
        <title>For,rest 문의 | 플랜테리어 - 화연당</title>
        <meta
          name="description"
          content="For,rest 플랜테리어에 문의하세요. 가드닝, 플랜테리어, 팝업스토어 등 다양한 서비스를 안내해 드립니다."
        />
        <link rel="canonical" href="https://hwayeondang.com/forrest/contacts" />
        <meta
          property="og:title"
          content="For,rest 문의 | 플랜테리어 - 화연당"
        />
        <meta
          property="og:description"
          content="For,rest 플랜테리어에 문의하세요. 가드닝, 플랜테리어, 팝업스토어 등 다양한 서비스를 안내해 드립니다."
        />
        <meta
          property="og:url"
          content="https://hwayeondang.com/forrest/contacts"
        />
      </Helmet>
      {isMobile ? <MobileVersion /> : <PcVersion />}
    </>
  );
};

export default Forrest;
