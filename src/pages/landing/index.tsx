import { useNavigate } from "react-router-dom";
import forrest from "@/assets/landing/forrest.png";
import wedding from "@/assets/landing/wedding.png";
import forrestMobile from "@/assets/landing/forrest_mobile.png";
import weddingMobile from "@/assets/landing/wedding_mobile.png";

const Main = () => {
  const navigate = useNavigate();

  const goForrest = () => {
    navigate("/forrest");
  };

  const goWedding = () => {
    navigate("/wedding");
  };

  return (
    <div className="landing_container">
      <div
        className="landing_content_box"
        onClick={goForrest}
        style={{ cursor: "pointer" }}
      >
        <div className="blur" />
        <picture>
          <source media="(max-width: 1023px)" srcSet={forrestMobile} />
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
          <source media="(max-width: 1023px)" srcSet={weddingMobile} />
          <img src={wedding} />
        </picture>
        <div className="overlay">
          <h2>WEDDING</h2>
          <button className="btn">이동하기</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
