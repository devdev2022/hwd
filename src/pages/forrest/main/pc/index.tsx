import { useEffect, useState, useRef } from "react";
import cx from "classnames";

//query
import { useIntroduction } from "@/api/pages/main";

//component
import Footer from "@/components/footer";

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

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const { data, isLoading } = useIntroduction();

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
                      {data && data.length > 0 ? (
                        data[0].content ? (
                          <div className="main-introduction-content-text">
                            {data[0].content}
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
              <ul className="product_introduction">
                <li>
                  <a>
                    <img src={sns1} />
                  </a>
                  <div className="product-name">꽃1</div>
                </li>
                <li>
                  <a>
                    <img src={sns2} />
                  </a>
                  <div className="product-name">꽃2</div>
                </li>
                <li>
                  <a>
                    <img src={sns3} />
                  </a>
                  <div className="product-name">꽃3</div>
                </li>
              </ul>
            </div>
            <div className="product-container">
              <h2 className="product-header">gardening</h2>
              <ul className="product_introduction">
                <li>
                  <a>
                    <img src={sns1} />
                  </a>
                  <div className="product-name">꽃1</div>
                </li>
                <li>
                  <a>
                    <img src={sns2} />
                  </a>
                  <div className="product-name">꽃2</div>
                </li>
                <li>
                  <a>
                    <img src={sns3} />
                  </a>
                  <div className="product-name">꽃3</div>
                </li>
              </ul>
            </div>
            <div className="product-container">
              <h2 className="product-header">artificial plants</h2>
              <ul className="product_introduction">
                <li>
                  <a>
                    <img src={sns1} />
                  </a>
                  <div className="product-name">꽃1</div>
                </li>
                <li>
                  <a>
                    <img src={sns2} />
                  </a>
                  <div className="product-name">꽃2</div>
                </li>
                <li>
                  <a>
                    <img src={sns3} />
                  </a>
                  <div className="product-name">꽃3</div>
                </li>
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
