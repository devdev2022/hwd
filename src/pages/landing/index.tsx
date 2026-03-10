import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import forrest from "@/assets/landing/forrest.png";
import wedding from "@/assets/landing/wedding.png";

const Main = () => {
  const navigate = useNavigate();

  const goForrest = () => {
    navigate("/forrest");
  };

  const goWedding = () => {
    navigate("/wedding");
  };

  return (
    <>
      <Helmet>
        <title>HYD | For,rest 플랜테리어 & 웨딩</title>
        <meta
          name="description"
          content="HYD Studio는 플랜테리어 For,rest와 웨딩 브랜드 HYD를 운영합니다. 가드닝, 플랜테리어, 웨딩 플라워 서비스를 제공합니다."
        />
        <link rel="canonical" href="https://hwayeondang.com/" />
        <meta
          property="og:title"
          content="HYD Studio | For,rest 플랜테리어 & 웨딩"
        />
        <meta
          property="og:description"
          content="HYD Studio는 플랜테리어 For,rest와 웨딩 브랜드 HYD를 운영합니다. 가드닝, 플랜테리어, 웨딩 플라워 서비스를 제공합니다."
        />
        <meta property="og:url" content="https://hwayeondang.com/" />
      </Helmet>
      <div className="landing_container">
        <div
          className="landing_content_box"
          onClick={goForrest}
          style={{ cursor: "pointer" }}
        >
          <div className="blur" />
          <picture>
            <img src={forrest} />
          </picture>
          <div className="overlay">
            <h2>For, rest</h2>
            <button className="btn">이동하기</button>
          </div>
        </div>
        <div
          className="landing_content_box"
          onClick={goWedding}
          style={{ cursor: "pointer" }}
        >
          <div className="blur" />
          <picture>
            <img src={wedding} />
          </picture>
          <div className="overlay">
            <h2>HYD</h2>
            <button className="btn">이동하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
