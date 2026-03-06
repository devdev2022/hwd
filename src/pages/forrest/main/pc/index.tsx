import { useEffect, useState, useRef } from "react";
import { FadeLoader } from "react-spinners";
import cx from "classnames";

//query
import { useIntroduction, useGetSnsImg } from "@/query/main";
import { useMultipleWorks } from "@/query/works";

//component
import Footer from "@/components/footer";

//utils
import { useGoToPath } from "@/utils/function";
import { HOME_WORKS_PARAMS } from "@/types/works";

//resource
import Banner from "@/assets/forrest/main/forrestbanner.png";
import NoImg from "@/assets/no-image.svg?react";

const Main = () => {
  const goToPath = useGoToPath();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const { data: introductionData, isLoading: introductionLoading } =
    useIntroduction();

  const { data: snsImgData, isLoading: snsImgLoading } = useGetSnsImg();

  const [planterior, landscaping, popupStore, winterdec] =
    useMultipleWorks(HOME_WORKS_PARAMS);

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
        className={cx("forrest-header", {
          scrolled: isScrolled && hasScrolledUp,
          visible: isVisible,
          hidden: !isVisible,
        })}
      >
        <div className="forrest-flexbox">
          <div className="forrest-header-logo">
            <a href="/forrest">
              <span>For, rest</span>
            </a>
          </div>
          <div className={cx("forrest-header-gnb", { scrolled: isScrolled })}>
            <div className="forrest-header-container">
              <nav className={cx("gnb", { scrolled: isScrolled })}>
                <ul className="gnb-list">
                  <li className="gnb-item">
                    <div className={cx("block", { scrolled: isScrolled })}>
                      <span
                        className="underline"
                        onClick={() => goToPath("/forrest/aboutus")}
                      >
                        ABOUT US
                      </span>
                    </div>
                  </li>
                  <li className="gnb-item">
                    <div className={cx("block", { scrolled: isScrolled })}>
                      <span
                        className="underline"
                        onClick={() => goToPath("/forrest/works")}
                      >
                        WORKS
                      </span>
                    </div>
                  </li>
                  <li className="gnb-item">
                    <div className={cx("block", { scrolled: isScrolled })}>
                      <span
                        className="underline"
                        onClick={() => goToPath("/forrest/contacts")}
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
      <main className="forrest-main">
        <section className="main-page-billboard">
          <div className="main-page-billboard-container">
            <div className="dim-cover" />
            <img src={Banner} />
          </div>
        </section>
        <section className="introduction">
          <div className="main-page-container">
            <div className="main-introduction-container">
              <div className="main-introduction-box">
                <div className="main-introduction-content">
                  <div className="main-introduction-header-container">
                    <h2 className="main-introduction-header">About us</h2>
                  </div>
                  <div className="main-introduction-content-box">
                    {introductionData && introductionData.length > 0 ? (
                      <img src={introductionData[0].thumbnail} />
                    ) : (
                      <NoImg />
                    )}
                    <div className="main-introduction-content-text-box">
                      {introductionLoading ? (
                        <div className="spinner_container">
                          <FadeLoader />
                        </div>
                      ) : introductionData && introductionData.length > 0 ? (
                        introductionData[0].content ? (
                          <div className="main-introduction-content-text">
                            {introductionData[0].content}
                          </div>
                        ) : (
                          <div>데이터가 없습니다.</div>
                        )
                      ) : (
                        <div>데이터가 없습니다.</div>
                      )}
                      <div
                        className="introduction-button"
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
          <div className="main-page-container">
            <div className="product-container">
              <h2 className="product-header">Planterior</h2>
              <ul
                className={`product_introduction ${
                  planterior.data && planterior.data.data?.length < 3
                    ? "less"
                    : ""
                }`}
              >
                {planterior.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : planterior.data && planterior.data.data ? (
                  planterior.data.data.map((item) => (
                    <li>
                      <img src={item.link} style={{ cursor: "pointer" }} onClick={() => setSelectedImage(item.link)} />
                      <div className="product-name" key={item.id}>
                        {item.name.replaceAll("_", " ")}
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
            <div className="product-container">
              <h2 className="product-header">LandScaping</h2>
              <ul
                className={`product_introduction ${
                  landscaping.data && landscaping.data.data?.length < 3
                    ? "less"
                    : ""
                }`}
              >
                {landscaping.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : landscaping.data && landscaping.data.data ? (
                  landscaping.data.data.map((item) => (
                    <li>
                      <img src={item.link} style={{ cursor: "pointer" }} onClick={() => setSelectedImage(item.link)} />
                      <div className="product-name" key={item.id}>
                        {item.name.replaceAll("_", " ")}
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
            <div className="product-container">
              <h2 className="product-header">Pop-up store</h2>
              <ul
                className={`product_introduction ${
                  popupStore.data && popupStore.data.data?.length < 3
                    ? "less"
                    : ""
                }`}
              >
                {popupStore.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : popupStore.data && popupStore.data.data ? (
                  popupStore.data.data.slice(0, 3).map((item) => (
                    <li>
                      <img src={item.link} style={{ cursor: "pointer" }} onClick={() => setSelectedImage(item.link)} />
                      <div className="product-name" key={item.id}>
                        {item.name.replaceAll("_", " ")}
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
            <div className="product-container">
              <h2 className="product-header">Winter decoration</h2>
              <ul
                className={`product_introduction ${
                  winterdec.data && winterdec.data.data?.length < 3
                    ? "less"
                    : ""
                }`}
              >
                {winterdec.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : winterdec.data && winterdec.data.data ? (
                  winterdec.data.data.slice(0, 3).map((item) => (
                    <li>
                      <img src={item.link} style={{ cursor: "pointer" }} onClick={() => setSelectedImage(item.link)} />
                      <div className="product-name" key={item.id}>
                        {item.name.replaceAll("_", " ")}
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
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Main;
