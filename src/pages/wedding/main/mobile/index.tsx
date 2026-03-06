import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FadeLoader } from "react-spinners";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//api
import { useWeddingIntroduction, useGetWeddingSnsImg } from "@/query/main";
import { useMultipleWeddingWorks } from "@/query/works";

//component
import Footer from "@/components/footer";
import Header from "@/components/weddingMobileMainHeader";

//utils
import { useGoToPath } from "@/utils/function";
import { WEDDING_HOME_WORKS_PARAMS } from "@/types/wedding";

//resource
import NoImg from "@/assets/no-image.svg?react";

const WeddingMainMobile = () => {
  const goToPath = useGoToPath();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const { data: introductionData, isLoading: introductionLoading } =
    useWeddingIntroduction();
  const { data: snsImgData, isLoading: snsImgLoading } = useGetWeddingSnsImg();
  const [ceremony, reception, floral, styling] = useMultipleWeddingWorks(
    WEDDING_HOME_WORKS_PARAMS,
  );

  return (
    <>
      <Header />
      <main className="wedding-main">
        <section className="wedding-main-page-billboard">
          <div className="wedding-main-page-billboard-container">
            <div className="dim-cover" />
            {introductionData && introductionData.length > 0 ? (
              <img src={introductionData[0].cover_img} />
            ) : (
              <div className="wedding-banner-placeholder" />
            )}
          </div>
        </section>
        <section className="wedding-introduction">
          <div className="wedding-mobile-main-page-container">
            <div className="wedding-mobile-introduction-container">
              <div className="wedding-mobile-introduction-box">
                <div className="wedding-mobile-introduction-content">
                  <div className="wedding-mobile-introduction-header-container">
                    <h2 className="wedding-mobile-introduction-header">
                      About us
                    </h2>
                  </div>
                  <div className="wedding-mobile-introduction-content-box">
                    {introductionData && introductionData.length > 0 ? (
                      <img src={introductionData[0].thumbnail} />
                    ) : (
                      <NoImg />
                    )}
                    <div className="wedding-mobile-introduction-content-text-box">
                      {introductionLoading ? (
                        <div className="spinner_container">
                          <FadeLoader />
                        </div>
                      ) : introductionData && introductionData.length > 0 ? (
                        introductionData[0].content ? (
                          <div className="wedding-mobile-introduction-content-text">
                            {introductionData[0].content}
                          </div>
                        ) : (
                          <div>데이터가 없습니다.</div>
                        )
                      ) : (
                        <div>데이터가 없습니다.</div>
                      )}
                      <div
                        className="wedding-mobile-introduction-button"
                        onClick={() => goToPath("/wedding/aboutus")}
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
        <section className="wedding-portfolio">
          <div className="wedding-mobile-main-page-container">
            <div className="wedding-mobile-product-container">
              <h2 className="wedding-mobile-product-header">Ceremony</h2>
              <div className="wedding-mobile-product-introduction">
                {ceremony.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : ceremony.data?.data?.length ? (
                  <Swiper
                    pagination={
                      ceremony.data.data.length > 0
                        ? { dynamicBullets: true }
                        : false
                    }
                    loop={ceremony.data.data.length > 1}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {ceremony.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="product-slide">
                          <img
                            src={item.link}
                            alt={item.name ?? ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedImage(item.link)}
                          />
                          <div className="product-name">
                            {item.name?.replaceAll("_", " ")}
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
            <div className="wedding-mobile-product-container">
              <h2 className="wedding-mobile-product-header">Reception</h2>
              <div className="wedding-mobile-product-introduction">
                {reception.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : reception.data?.data?.length ? (
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    loop
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {reception.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="product-slide">
                          <img
                            src={item.link}
                            alt={item.name ?? ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedImage(item.link)}
                          />
                          <div className="product-name">
                            {item.name?.replaceAll("_", " ")}
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
            <div className="wedding-mobile-product-container">
              <h2 className="wedding-mobile-product-header">Floral</h2>
              <div className="wedding-mobile-product-introduction">
                {floral.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : floral.data?.data?.length ? (
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    loop
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {floral.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="product-slide">
                          <img
                            src={item.link}
                            alt={item.name ?? ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedImage(item.link)}
                          />
                          <div className="product-name">
                            {item.name?.replaceAll("_", " ")}
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
            <div className="wedding-mobile-product-container">
              <h2 className="wedding-mobile-product-header">Styling</h2>
              <div className="wedding-mobile-product-introduction">
                {styling.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : styling.data?.data?.length ? (
                  <Swiper
                    pagination={{ dynamicBullets: true }}
                    loop
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {styling.data.data.slice(0, 3).map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="product-slide">
                          <img
                            src={item.link}
                            alt={item.name ?? ""}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedImage(item.link)}
                          />
                          <div className="product-name">
                            {item.name?.replaceAll("_", " ")}
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
        <section className="wedding-social_link">
          <div className="wedding-sb-instagram">
            <h2 className="main-header">Follow us</h2>
            <div className="wedding-sbi-images">
              {snsImgLoading ? (
                <div className="spinner_container">
                  <FadeLoader />
                </div>
              ) : snsImgData && snsImgData.length > 0 ? (
                snsImgData.map((item) => (
                  <a
                    key={item.link}
                    href="https://www.instagram.com/wedding_hwayeondang/"
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

export default WeddingMainMobile;
