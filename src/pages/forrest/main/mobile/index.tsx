import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//component
import Footer from "@/components/footer";
import Header from "@/components/sidebar";

//utils
import { useGoToPath } from "@/utils/function";

//resource
import Banner from "@/assets/forrest/main/forrestbanner.png";
import sns1 from "@/assets/forrest/sns_1.png";
import sns2 from "@/assets/forrest/sns_2.png";
import sns3 from "@/assets/forrest/sns_3.png";
import sns4 from "@/assets/forrest/sns_4.png";
import sns5 from "@/assets/forrest/sns_5.png";
import sns6 from "@/assets/forrest/sns_6.png";

const Main = () => {
  const goToPath = useGoToPath();

  return (
    <>
      <Header />
      <main className="forrest-main">
        <section className="main-page-billboard">
          <div className="main-page-billboard-container">
            <div className="dim-cover" />
            <img src={Banner} />
          </div>
        </section>
        <section className="introduction">
          <div className="mobile-main-page-container">
            <div className="mobile-introduction-container">
              <div className="mobile-introduction-box">
                <div className="mobile-introduction-content">
                  <div className="mobile-introduction-header-container">
                    <h2 className="mobile-introduction-header">Introduction</h2>
                  </div>
                  <div className="mobile-introduction-content-box">
                    <img src={sns6} />
                    <div className="mobile-introduction-content-text-box">
                      <div>
                        테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트
                        입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.
                        테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트
                        입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.
                        테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트
                        입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.
                        테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트
                        입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.
                        테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트
                        입니다. 테스트 입니다. 테스트 입니다.
                      </div>
                      <div
                        className="mobile-introduction-button"
                        onClick={() => goToPath("/forrest/aboutus")}
                      >
                        LEARN MORE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio">
          <div className="mobile-main-page-container">
            <div className="mobile-product-container">
              <h2 className="mobile-product-header">planterior</h2>
              <div className="mobile-product-introduction">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  loop={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={sns1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sns2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sns3} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="mobile-product-container">
              <h2 className="mobile-product-header">gardening</h2>
              <div className="mobile-product-introduction">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  loop={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={sns1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sns2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sns3} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="mobile-product-container">
              <h2 className="mobile-product-header">artificial plants</h2>
              <div className="mobile-product-introduction">
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  loop={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={sns1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sns2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={sns3} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className="social_link">
          <div className="sb-instagram">
            <h2 className="main-header">Follow us</h2>
            <div className="sbi-images">
              <a href="https://www.instagram.com/forrest_hwayeondang/">
                <img src={sns1} />
              </a>
              <a href="https://www.instagram.com/forrest_hwayeondang/">
                <img src={sns2} />
              </a>

              <a href="https://www.instagram.com/forrest_hwayeondang/">
                <img src={sns3} />
              </a>

              <a href="https://www.instagram.com/forrest_hwayeondang/">
                <img src={sns4} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Main;
