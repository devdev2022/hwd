//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import aboutus from "@/assets/forrest/introduction/aboutus_cover.png";
import plantImg from "@/assets/forrest/sns_3.png";
import person1 from "@/assets/forrest/introduction/sample_person1.png";
import person2 from "@/assets/forrest/introduction/sample_person2.png";
import person3 from "@/assets/forrest/introduction/sample_person3.png";

import Planterior from "@/assets/forrest/introduction/planterior.svg?react";
import Gardening from "@/assets/forrest/introduction/gardening.svg?react";
import Tree from "@/assets/forrest/introduction/tree.svg?react";

const AboutUs = () => {
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <Gardening />
                <div style={{ fontWeight: "600" }}>Gardening</div>
                <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                  테스트 입니다.
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <Planterior />
                <div style={{ fontWeight: "600" }}>Planterior</div>
                <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                  테스트 입니다.
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
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
              <div className="staff-information">
                <img src={person1} />
                <div style={{ fontWeight: "600" }}>대표</div>
                <div>홍길동</div>
              </div>
              <div className="staff-information">
                <img src={person2} />
                <div style={{ fontWeight: "600" }}>대표</div>
                <div>홍길동</div>
              </div>
              <div className="staff-information">
                <img src={person3} />
                <div style={{ fontWeight: "600" }}>대표</div>
                <div>홍길동</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
