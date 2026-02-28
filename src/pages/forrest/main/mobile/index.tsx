import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FadeLoader } from "react-spinners";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//api
import { useGetSnsImg } from "@/api/pages/main";
import { useMultipleWorks } from "@/query/works";

//component
import Footer from "@/components/footer";
import Header from "@/components/mobileMainHeader";

//utils
import { useGoToPath } from "@/utils/function";
import { HOME_WORKS_PARAMS } from "@/types/works";

//resource
import Banner from "@/assets/forrest/main/forrestbanner.png";
import NoImg from "@/assets/no-image.svg?react";

import sns6 from "@/assets/forrest/sns_6.png";

const Main = () => {
  const goToPath = useGoToPath();

  const { data: snsImgData, isLoading: snsImgLoading } = useGetSnsImg();
  const [planterior, gardening, artificial_plants] =
    useMultipleWorks(HOME_WORKS_PARAMS);

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
                    <h2 className="mobile-introduction-header">About us</h2>
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
              <h2 className="mobile-product-header">Planterior</h2>
              <div className="mobile-product-introduction">
                {planterior.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : planterior.data?.data?.length ? (
                  <Swiper
                    pagination={
                      planterior.data.data.length > 0
                        ? { dynamicBullets: true }
                        : false
                    }
                    loop={planterior.data.data.length > 1}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {planterior.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <img src={item.link} alt={item.name ?? ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="empty">
                    <NoImg />
                    <p>데이터가 없습니다</p>
                  </div>
                )}
              </div>
            </div>
            <div className="mobile-product-container">
              <h2 className="mobile-product-header">Gardening</h2>

              <div className="mobile-product-introduction">
                {gardening.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : gardening.data?.data?.length ? (
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    loop
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {gardening.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <img src={item.link} alt={item.name ?? ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="empty">
                    <NoImg />
                    <p>데이터가 없습니다</p>
                  </div>
                )}
              </div>
            </div>
            <div className="mobile-product-container">
              <h2 className="mobile-product-header">Artificial plants</h2>

              <div className="mobile-product-introduction">
                {artificial_plants.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : artificial_plants.data?.data?.length ? (
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    loop
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {artificial_plants.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <img src={item.link} alt={item.name ?? ""} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="empty">
                    <NoImg />
                    <p>데이터가 없습니다</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="social_link">
          <div className="sb-instagram">
            <h2 className="main-header">Follow us</h2>
            <div className="sbi-images">
              {snsImgLoading ? (
                <div className="spinner_container">
                  <FadeLoader />
                </div>
              ) : snsImgData && snsImgData.length > 0 ? (
                snsImgData.map((item) => (
                  <a
                    href="https://www.instagram.com/forrest_hwayeondang/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.link} />
                  </a>
                ))
              ) : (
                <li>
                  <NoImg />
                </li>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Main;
