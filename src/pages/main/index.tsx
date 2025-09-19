import { useLocation, useNavigate } from "react-router-dom";
import forrest from "../../assets/landing/forrest.png";
import wedding from "../../assets/landing/wedding.png";

const Main = () => {
  return (
    <div className="landing_container">
      <div className="landing_content_box">
        <div className="blur" />
        <img src={forrest} />
        <div className="overlay">
          <h2>For, rest</h2>
          <button className="btn">이동하기</button>
        </div>
      </div>
      <div className="landing_content_box">
        <div className="blur" />
        <img src={wedding} />
        <div className="overlay">
          <h2>WEDDING</h2>
          <button className="btn">이동하기</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
