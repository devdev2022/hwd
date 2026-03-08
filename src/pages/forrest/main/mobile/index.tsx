import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FadeLoader } from "react-spinners";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//api
import { useIntroduction, useGetSnsImg } from "@/query/main";
import { useMultipleWorks } from "@/query/works";

//component
import Footer from "@/components/footer";
import Header from "@/components/mobileMainHeader";

//utils
import { useGoToPath, formatName } from "@/utils/function";
import { HOME_WORKS_PARAMS } from "@/types/works";

//resource
import Banner from "@/assets/forrest/main/forrestbanner.png";
import NoImg from "@/assets/no-image.svg?react";

const Main = () => {
  const goToPath = useGoToPath();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { data: introductionData, isLoading: introductionLoading } =
    useIntroduction();
  const { data: snsImgData, isLoading: snsImgLoading } = useGetSnsImg();
  const [planterior, gardening, popupStore, winterdec] =
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
                    {introductionLoading ? (
                      <div className="spinner_container">
                        <FadeLoader />
                      </div>
                    ) : introductionData && introductionData.length > 0 ? (
                      <img src={introductionData[0].thumbnail} />
                    ) : (
                      <NoImg />
                    )}
                    <div className="mobile-introduction-content-text-box">
                      {introductionLoading ? (
                        <div className="spinner_container">
                          <FadeLoader />
                        </div>
                      ) : introductionData && introductionData.length > 0 ? (
                        introductionData[0].content ? (
                          <div className="mobile-introduction-content-text">
                            {introductionData[0].content}
                          </div>
                        ) : (
                          <div>데이터가 없습니다.</div>
                        )
                      ) : (
                        <div>데이터가 없습니다.</div>
                      )}
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
                        <div className="product-slide">
                          <img
                            src={item.link}
                            alt={item.name ?? ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedImage(item.link)}
                          />
                          <div className="product-name">
                            {formatName(item.name ?? "")}
                          </div>
                        </div>
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
              <h2 className="mobile-product-header">LandScaping</h2>
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
                        <div className="product-slide">
                          <img
                            src={item.link}
                            alt={item.name ?? ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedImage(item.link)}
                          />
                          <div className="product-name">
                            {formatName(item.name ?? "")}
                          </div>
                        </div>
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
              <h2 className="mobile-product-header">Pop-up store</h2>
              <div className="mobile-product-introduction">
                {popupStore.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : popupStore.data?.data?.length ? (
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    loop
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {popupStore.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="product-slide">
                          <img
                            src={item.link}
                            alt={item.name ?? ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedImage(item.link)}
                          />
                          <div className="product-name">
                            {formatName(item.name ?? "")}
                          </div>
                        </div>
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
              <h2
                className="mobile-product-header"
                style={{ fontSize: "40px" }}
              >
                Winter decoration
              </h2>
              <div className="mobile-product-introduction">
                {winterdec.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : winterdec.data?.data?.length ? (
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    loop
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {winterdec.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="product-slide">
                          <img
                            src={item.link}
                            alt={item.name ?? ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedImage(item.link)}
                          />
                          <div className="product-name">
                            {formatName(item.name ?? "")}
                          </div>
                        </div>
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
                  <p>데이터가 없습니다</p>
                </li>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Main;
