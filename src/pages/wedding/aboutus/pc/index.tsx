//query
import { useGetWeddingStaffPictures } from "@/query/aboutUs";
import { useWeddingIntroduction } from "@/query/main";

//component
import Footer from "@/components/footer";
import Header from "@/components/weddingHeader";

//resource
import { FadeLoader } from "react-spinners";
import NoImg from "@/assets/no-image.svg?react";

const WeddingAboutUsPc = () => {
  const { data: introductionData, isLoading: introductionLoading } =
    useWeddingIntroduction();

  const { data: getStaffPictures, isLoading: staffPicLoading } =
    useGetWeddingStaffPictures();

  return (
    <>
      <Header />
      <main className="wedding-introduction-page">
        <section className="wedding-introduction-page-billboard">
          <div className="wedding-introduction-billboard-header">
            <h2>About us</h2>
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
        <section className="wedding-introduction-page-presentation">
          <div className="wedding-introduction-presentation-container">
            {introductionLoading ? (
              <div className="spinner_container">
                <FadeLoader />
              </div>
            ) : introductionData && introductionData.length > 0 ? (
              <img src={introductionData[0].thumbnail} />
            ) : (
              <NoImg />
            )}
            <div style={{ width: "50%" }}>
              <h3
                style={{
                  fontSize: "40px",
                  fontFamily: "Noto Sans KR-Regular",
                }}
              >
                We Create Beautiful Moments for Your Special Day
              </h3>
              <div className="wedding-introduction-text">
                {introductionLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : introductionData && introductionData.length > 0 ? (
                  introductionData[0].content.length > 0 ? (
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
        <section className="wedding-introduction-page-task">
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
            <div className="wedding-introduction-page-task-box">
              <div className="wedding-introduction-page-task-content">
                <div style={{ fontWeight: "600" }}>Ceremony</div>
                <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                  웨딩 세레모니 연출
                </div>
              </div>
              <div className="wedding-introduction-page-task-content">
                <div style={{ fontWeight: "600" }}>Reception</div>
                <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                  피로연 & 리셉션
                </div>
              </div>
              <div className="wedding-introduction-page-task-content">
                <div style={{ fontWeight: "600" }}>Floral</div>
                <div style={{ fontFamily: "Noto Sans KR-Light" }}>
                  웨딩 플라워 장식
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wedding-introduction-page-staff">
          <div className="wedding-introduction-page-staff-container">
            <h2 style={{ fontSize: "56px", fontFamily: "Italiana" }}>Staff</h2>
            <div className="wedding-introduction-page-staff-imgbox">
              {staffPicLoading ? (
                <div className="spinner_container">
                  <FadeLoader />
                </div>
              ) : getStaffPictures && getStaffPictures.length > 0 ? (
                getStaffPictures.map((item) => (
                  <div className="staff-information" key={`staff_${item.id}`}>
                    <img src={item.link} />
                    <div style={{ fontWeight: "600" }}>{item.status}</div>
                    <div>{item.name}</div>
                  </div>
                ))
              ) : (
                <div className="staff-information">데이터가 없습니다.</div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WeddingAboutUsPc;
