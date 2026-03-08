//query
import { useGetWeddingStaffPictures } from "@/query/aboutUs";
import { useWeddingIntroduction } from "@/query/main";

//component
import Footer from "@/components/footer";
import Header from "@/components/weddingMobileHeader";

//resource
import { FadeLoader } from "react-spinners";
import NoImg from "@/assets/no-image.svg?react";

const WeddingAboutUsMobile = () => {
  const { data: introductionData, isLoading: introductionLoading } =
    useWeddingIntroduction();

  const { data: getPictures, isLoading: getPicturesLoading } =
    useGetWeddingStaffPictures();

  return (
    <>
      <Header />
      <main className="wedding-mobile-introduction-page">
        <section className="wedding-introduction-page-billboard">
          <div className="wedding-mobile-introduction-billboard-header">
            <h2 style={{ color: "#f5f3ea" }}>About us</h2>
          </div>
          {introductionLoading ? (
            <div className="spinner_container">
              <FadeLoader />
            </div>
          ) : introductionData && introductionData.length > 0 ? (
            <img src={introductionData[0].cover_img} />
          ) : (
            <div className="wedding-cover-placeholder" />
          )}
        </section>
        <section className="wedding-mobile-introduction-page-presentation">
          <div className="wedding-mobile-introduction-presentation-container">
            {introductionLoading ? (
              <div className="spinner_container">
                <FadeLoader />
              </div>
            ) : introductionData && introductionData.length > 0 ? (
              <img src={introductionData[0].thumbnail} />
            ) : (
              <NoImg />
            )}
            <div>
              <h3
                style={{
                  fontSize: "35px",
                  fontFamily: "Noto Sans KR-Regular",
                }}
              >
                We Create Beautiful Moments for Your Special Day
              </h3>
              <div
                style={{
                  width: "100%",
                  marginTop: "25px",
                  fontFamily: "Noto Sans KR-Light",
                  whiteSpace: "pre-line",
                }}
              >
                {introductionLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : introductionData && introductionData.length > 0 ? (
                  introductionData[0].content && introductionData[0].content.length > 0 ? (
                    introductionData[0].content
                  ) : (
                    "데이터가 없습니다."
                  )
                ) : (
                  "데이터가 없습니다."
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="wedding-mobile-introduction-page-task">
          <h2 style={{ fontSize: "56px", fontFamily: "Italiana" }}>Task</h2>
          <div className="wedding-mobile-introduction-page-task-box">
            <div className="wedding-mobile-introduction-page-task-content">
              <div style={{ fontWeight: "600" }}>Ceremony</div>
              <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                웨딩 세레모니 연출
              </div>
            </div>
            <div className="wedding-mobile-introduction-page-task-content">
              <div style={{ fontWeight: "600" }}>Reception</div>
              <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                피로연 & 리셉션
              </div>
            </div>
            <div className="wedding-mobile-introduction-page-task-content">
              <div style={{ fontWeight: "600" }}>Floral</div>
              <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                웨딩 플라워 장식
              </div>
            </div>
          </div>
        </section>
        <section className="wedding-mobile-introduction-page-staff">
          <div className="wedding-introduction-page-staff-container">
            <h2 style={{ fontSize: "50px", fontFamily: "Italiana" }}>Staff</h2>
            <div className="wedding-mobile-introduction-page-staff-imgbox">
              {getPicturesLoading ? (
                <div className="spinner_container">
                  <FadeLoader />
                </div>
              ) : getPictures && getPictures.length > 0 ? (
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
      <Footer variant="wedding" />
    </>
  );
};

export default WeddingAboutUsMobile;
