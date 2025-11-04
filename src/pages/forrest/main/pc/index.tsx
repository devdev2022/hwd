import { useEffect, useState, useRef } from "react";
import { FadeLoader } from "react-spinners";
import cx from "classnames";

//query
import { useIntroduction } from "@/api/pages/main";

//component
import Footer from "@/components/footer";

//utils
import { useGoToPath } from "@/utils/function";

//resource
import Banner from "@/assets/forrest/main/forrestbanner.png";
import NoImg from "@/assets/no-image.svg?react";

import sns1 from "@/assets/forrest/sns_1.png";
import sns2 from "@/assets/forrest/sns_2.png";
import sns3 from "@/assets/forrest/sns_3.png";
import sns4 from "@/assets/forrest/sns_4.png";
import sns5 from "@/assets/forrest/sns_5.png";
import sns6 from "@/assets/forrest/sns_6.png";
import { useWorksQueries } from "@/api/pages/works";

const Main = () => {
  const goToPath = useGoToPath();

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const { data: introductionData, isLoading: introductionLoading } =
    useIntroduction();

  const [planterior, gardening, artificial_plants] = useWorksQueries([
    { page: 1, category: "planterior", subMenu: 1, limit: 3 },
    { page: 1, category: "gardening", subMenu: 1, limit: 3 },
    { page: 1, category: "artificial_plants", subMenu: 1, limit: 3 },
  ]);

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
                    <h2 className="main-introduction-header">Introduction</h2>
                  </div>
                  <div className="main-introduction-content-box">
                    <img src={sns6} />
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
              <h2 className="product-header">planterior</h2>
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
                      <img src={item.link} />
                      <div className="product-name">{item.name}</div>
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
              <h2 className="product-header">gardening</h2>
              <ul
                className={`product_introduction ${
                  gardening.data && gardening.data.data?.length < 3
                    ? "less"
                    : ""
                }`}
              >
                {gardening.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : gardening.data && gardening.data.data ? (
                  gardening.data.data.map((item) => (
                    <li>
                      <img src={item.link} />
                      <div className="product-name">{item.name}</div>
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
              <h2 className="product-header">artificial plants</h2>
              <ul
                className={`product_introduction ${
                  artificial_plants.data &&
                  artificial_plants.data.data?.length < 3
                    ? "less"
                    : ""
                }`}
              >
                {artificial_plants.isLoading ? (
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                ) : artificial_plants.data && artificial_plants.data.data ? (
                  artificial_plants.data.data.map((item) => (
                    <li>
                      <img src={item.link} />
                      <div className="product-name">{item.name}</div>
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

              <a href="https://www.instagram.com/forrest_hwayeondang/">
                <img src={sns5} />
              </a>

              <a href="https://www.instagram.com/forrest_hwayeondang/">
                <img src={sns6} />
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
