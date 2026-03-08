import { useEffect, useState, useRef } from "react";
import { FadeLoader } from "react-spinners";
import cx from "classnames";

//query
import { useWeddingIntroduction, useGetWeddingSnsImg } from "@/query/main";
import { useMultipleWeddingWorks } from "@/query/works";

//component
import Footer from "@/components/footer";

//utils
import { useGoToPath, formatName } from "@/utils/function";
import { WEDDING_HOME_WORKS_PARAMS } from "@/types/wedding";

//resource
import NoImg from "@/assets/no-image.svg?react";
import HydLogo from "@/assets/hyd_logo_stamp.png";

const WeddingMainPc = () => {
  const goToPath = useGoToPath();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const { data: introductionData, isLoading: introductionLoading } =
    useWeddingIntroduction();

  const { data: snsImgData, isLoading: snsImgLoading } = useGetWeddingSnsImg();

  const [ceremony, reception, floral, styling] = useMultipleWeddingWorks(
    WEDDING_HOME_WORKS_PARAMS,
  );

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 0.9 * vh) {
        setIsScrolled(true);

        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        }

        if (currentScrollY < lastScrollY.current) {
          setHasScrolledUp(true);
          if (hasScrolledUp) {
            setIsVisible(true);
          }
        }
      } else {
        setIsScrolled(false);
        setHasScrolledUp(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledUp]);

  return (
    <>
      <header
        className={cx("wedding-header", {
          scrolled: isScrolled && hasScrolledUp,
          visible: isVisible,
          hidden: !isVisible,
        })}
      >
        <div className="wedding-flexbox">
          <a href="/" className="wedding-header-hyd-logo">
            <img src={HydLogo} alt="HYD" />
          </a>
          <div className="wedding-header-logo">
            <a href="/wedding">
              <span>Wedding</span>
            </a>
          </div>
          <div className={cx("wedding-header-gnb", { scrolled: isScrolled })}>
            <div className="wedding-header-container">
              <nav className={cx("wedding-gnb", { scrolled: isScrolled })}>
                <ul className="wedding-gnb-list">
                  <li className="wedding-gnb-item">
                    <div className={cx("block", { scrolled: isScrolled })}>
                      <span
                        className="underline"
                        onClick={() => goToPath("/wedding/aboutus")}
                      >
                        ABOUT US
                      </span>
                    </div>
                  </li>
                  <li className="wedding-gnb-item">
                    <div className={cx("block", { scrolled: isScrolled })}>
                      <span
                        className="underline"
                        onClick={() => goToPath("/wedding/works")}
                      >
                        WORKS
                      </span>
                    </div>
                  </li>
                  <li className="wedding-gnb-item">
                    <div className={cx("block", { scrolled: isScrolled })}>
                      <span
                        className="underline"
                        onClick={() => goToPath("/wedding/contacts")}
                      >
                        CONTACT US
                      </span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main className="wedding-main">
        <section className="wedding-main-page-billboard">
          <div className="wedding-main-page-billboard-container">
            <div className="dim-cover" />
            {introductionLoading ? (
              <div className="wedding-banner-placeholder" />
            ) : introductionData && introductionData.length > 0 ? (
              <img src={introductionData[0].cover_img} />
            ) : (
              <div className="wedding-banner-placeholder" />
            )}
          </div>
        </section>
        <section className="wedding-introduction">
          <div className="wedding-main-page-container">
            <div className="wedding-main-introduction-container">
              <div className="wedding-main-introduction-box">
                <div className="wedding-main-introduction-content">
                  <div className="wedding-main-introduction-header-container">
                    <h2 className="wedding-main-introduction-header">
                      About us
                    </h2>
                  </div>
                  <div className="wedding-main-introduction-content-box">
                    {introductionLoading ? (
                      <div className="spinner_container">
                        <FadeLoader />
                      </div>
                    ) : introductionData && introductionData.length > 0 ? (
                      <img src={introductionData[0].thumbnail} />
                    ) : (
                      <NoImg />
                    )}
                    <div className="wedding-main-introduction-content-text-box">
                      {introductionLoading ? (
                        <div className="spinner_container">
                          <FadeLoader />
                        </div>
                      ) : introductionData && introductionData.length > 0 ? (
                        introductionData[0].content ? (
                          <div className="wedding-main-introduction-content-text">
                            {introductionData[0].content}
                          </div>
                        ) : (
                          <div>데이터가 없습니다.</div>
                        )
                      ) : (
                        <div>데이터가 없습니다.</div>
                      )}
                      <div
                        className="wedding-introduction-button"
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
          <div className="wedding-main-page-container">
            <div className="wedding-product-container">
              <h2 className="wedding-product-header">Wedding</h2>
              <ul
                className={`wedding-product_introduction ${
                  ceremony.data && ceremony.data.data?.length < 3 ? "less" : ""
                }`}
              >
                {ceremony.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : ceremony.data && ceremony.data.data ? (
                  ceremony.data.data.map((item) => (
                    <li key={item.id}>
                      <img
                        src={item.link}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedImage(item.link)}
                      />
                      <div className="wedding-product-name">
                        {formatName(item.name)}
                      </div>
                    </li>
                  ))
                ) : (
                  <li>
                    <NoImg />
                    <p>데이터가 없습니다</p>
                  </li>
                )}
              </ul>
            </div>
            <div className="wedding-product-container">
              <h2 className="wedding-product-header">Reception</h2>
              <ul
                className={`wedding-product_introduction ${
                  reception.data && reception.data.data?.length < 3
                    ? "less"
                    : ""
                }`}
              >
                {reception.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : reception.data && reception.data.data ? (
                  reception.data.data.map((item) => (
                    <li key={item.id}>
                      <img
                        src={item.link}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedImage(item.link)}
                      />
                      <div className="wedding-product-name">
                        {formatName(item.name)}
                      </div>
                    </li>
                  ))
                ) : (
                  <li>
                    <NoImg />
                    <p>데이터가 없습니다</p>
                  </li>
                )}
              </ul>
            </div>
            <div className="wedding-product-container">
              <h2 className="wedding-product-header">Floral</h2>
              <ul
                className={`wedding-product_introduction ${
                  floral.data && floral.data.data?.length < 3 ? "less" : ""
                }`}
              >
                {floral.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : floral.data && floral.data.data ? (
                  floral.data.data.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <img
                        src={item.link}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedImage(item.link)}
                      />
                      <div className="wedding-product-name">
                        {formatName(item.name)}
                      </div>
                    </li>
                  ))
                ) : (
                  <li>
                    <NoImg />
                    <p>데이터가 없습니다</p>
                  </li>
                )}
              </ul>
            </div>
            <div className="wedding-product-container">
              <h2 className="wedding-product-header">Styling</h2>
              <ul
                className={`wedding-product_introduction ${
                  styling.data && styling.data.data?.length < 3 ? "less" : ""
                }`}
              >
                {styling.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : styling.data && styling.data.data ? (
                  styling.data.data.slice(0, 3).map((item) => (
                    <li key={item.id}>
                      <img
                        src={item.link}
                        style={{ cursor: "pointer" }}
                        onClick={() => setSelectedImage(item.link)}
                      />
                      <div className="wedding-product-name">
                        {formatName(item.name)}
                      </div>
                    </li>
                  ))
                ) : (
                  <li>
                    <NoImg />
                    <p>데이터가 없습니다</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>
        <section className="wedding-social_link">
          <div className="wedding-sb-instagram">
            <h2 className="wedding-main-header">Follow us</h2>
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
                  <p>데이터가 없습니다</p>
                </li>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="wedding" />
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

export default WeddingMainPc;
