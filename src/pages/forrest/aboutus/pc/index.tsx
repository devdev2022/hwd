//query
import { useGetStaffPictures } from "@/api/pages/aboutUs";

//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import aboutus from "@/assets/forrest/introduction/aboutus_cover.png";
import plantImg from "@/assets/forrest/sns_3.png";

import Planterior from "@/assets/forrest/introduction/planterior.svg?react";
import Gardening from "@/assets/forrest/introduction/gardening.svg?react";
import Tree from "@/assets/forrest/introduction/tree.svg?react";

const AboutUs = () => {
  const { data: getPictures, isLoading: getPicturesLoading } =
    useGetStaffPictures();

  return (
    <>
      <Header />
      <main className="introduction-page">
        <section className="introduction-page-billboard">
          <div className="introduction-billboard-header">
            <h2 style={{ color: "#243E29" }}>About us</h2>
          </div>
          <img src={aboutus} />
        </section>
        <section className="introduction-page-presentation">
          <div className="introduction-presentation-container">
            <img src={plantImg} />
            <div>
              <h3
                style={{
                  fontSize: "40px",
                  fontFamily: "Noto Sans KR-Regular",
                  marginTop: "8%",
                }}
              >
                We Build to Order With Only the Freshest Flowers
              </h3>
              <div
                style={{
                  width: "100%",
                  marginTop: "25px",
                  fontFamily: "Noto Sans KR-Light",
                }}
              >
                테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트
                테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트
                테스트 테스트 테스트 테스트 테스트
              </div>
            </div>
          </div>
        </section>
        <section className="introduction-page-task">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "56px", fontFamily: "Italiana" }}>Task</h2>
            <div className="introduction-page-task-box">
              <div className="introduction-page-task-content">
                <Gardening />
                <div style={{ fontWeight: "600" }}>Gardening</div>
                <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                  테스트 입니다.
                </div>
              </div>
              <div className="introduction-page-task-content">
                <Planterior />
                <div style={{ fontWeight: "600" }}>Planterior</div>
                <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                  테스트 입니다.
                </div>
              </div>
              <div className="introduction-page-task-content">
                <Tree />
                <div style={{ fontWeight: "600" }}>Tree</div>
                <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                  테스트 입니다.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="introduction-page-staff">
          <div className="introduction-page-staff-container">
            <h2 style={{ fontSize: "56px", fontFamily: "Italiana" }}>Staff</h2>
            <div className="introduction-page-staff-imgbox">
              {getPictures && getPictures.length > 0 ? (
                getPictures.map((item) => (
                  <div className="staff-information" key={`staff_${item.id}`}>
                    <img src={item.link} />
                    <div style={{ fontWeight: "600" }}>{item.status}</div>
                    <div>{item.name}</div>
                  </div>
                ))
              ) : (
                <div className="staff-information">데이터가 없습니다</div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
