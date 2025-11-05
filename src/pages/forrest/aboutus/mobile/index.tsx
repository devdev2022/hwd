//component
import Footer from "@/components/footer";
import Header from "@/components/detailheader";

//resource
import aboutus from "@/assets/forrest/introduction/aboutus_cover.png";
import plantImg from "@/assets/forrest/sns_3.png";

import Planterior from "@/assets/forrest/introduction/planterior.svg?react";
import Gardening from "@/assets/forrest/introduction/gardening.svg?react";
import Tree from "@/assets/forrest/introduction/tree.svg?react";
import { useGetStaffPictures } from "@/api/pages/aboutUs";

const AboutUs = () => {
  const { data: getPictures, isLoading: getPicturesLoading } =
    useGetStaffPictures();

  return (
    <>
      <Header />
      <main className="mobile-introduction-page">
        <section className="introduction-page-billboard">
          <div className="mobile-introduction-billboard-header">
            <h2 style={{ color: "#243E29" }}>About us</h2>
          </div>
          <img src={aboutus} />
        </section>
        <section className="mobile-introduction-page-presentation">
          <div className="mobile-introduction-presentation-container">
            <img src={plantImg} />
            <div>
              <h3
                style={{
                  fontSize: "40px",
                  fontFamily: "Noto Sans KR-Regular",
                  marginTop: "10%",
                }}
              >
                테스트
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
        <section className="mobile-introduction-page-task">
          <h2 style={{ fontSize: "56px", fontFamily: "Italiana" }}>Task</h2>
          <div className="mobile-introduction-page-task-box">
            <div className="mobile-introduction-page-task-content">
              <Gardening />
              <div style={{ fontWeight: "600" }}>Gardening</div>
              <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                테스트 입니다.
              </div>
            </div>
            <div className="mobile-introduction-page-task-content">
              <Planterior />
              <div style={{ fontWeight: "600" }}>Planterior</div>
              <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                테스트 입니다.
              </div>
            </div>
            <div className="mobile-introduction-page-task-content">
              <Tree />
              <div style={{ fontWeight: "600" }}>Tree</div>
              <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                테스트 입니다.
              </div>
            </div>
          </div>
        </section>
        <section className="mobile-introduction-page-staff">
          <div className="introduction-page-staff-container">
            <h2 style={{ fontSize: "56px", fontFamily: "Italiana" }}>Staff</h2>
            <div className="mobile-introduction-page-staff-imgbox">
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
