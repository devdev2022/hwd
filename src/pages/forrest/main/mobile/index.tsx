//component
import Footer from "@/components/footer";
import SideBar from "@/components/sidebar";

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
      <SideBar />
      <main className="forrest-main">
        <section className="main-page-billboard">
          <div className="main-page-billboard-container">
            <div className="dim-cover" />
            <img src={Banner} />
          </div>
        </section>
        <section className="introduction">
          <div className="main-page-container">
            <div className="introduction-container">
              <div className="introduction-box">
                <div className="introduction-content">
                  <div className="introduction-header-container">
                    <h2 className="introduction-header">Introduction</h2>
                  </div>
                  <div className="introduction-content-box">
                    <div className="introduction-text-box">
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
                      className="introduction_button"
                      onClick={() => goToPath("/forrest/aboutus")}
                    >
                      LEARN MORE
                    </div>
                  </div>
                </div>
                <img src={sns6} style={{ width: "35%", height: "35%" }} />
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
                    <img
                      src={sns1}
                      style={{ width: "390px", height: "390px" }}
                    />
                  </a>
                  <div className="product-name">꽃1</div>
                </li>
                <li>
                  <a>
                    <img
                      src={sns2}
                      style={{ width: "390px", height: "390px" }}
                    />
                  </a>
                  <div className="product-name">꽃2</div>
                </li>
                <li>
                  <a>
                    <img
                      src={sns3}
                      style={{ width: "390px", height: "390px" }}
                    />
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
                    <img
                      src={sns1}
                      style={{ width: "390px", height: "390px" }}
                    />
                  </a>
                  <div className="product-name">꽃1</div>
                </li>
                <li>
                  <a>
                    <img
                      src={sns2}
                      style={{ width: "390px", height: "390px" }}
                    />
                  </a>
                  <div className="product-name">꽃2</div>
                </li>
                <li>
                  <a>
                    <img
                      src={sns3}
                      style={{ width: "390px", height: "390px" }}
                    />
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
                    <img
                      src={sns1}
                      style={{ width: "390px", height: "390px" }}
                    />
                  </a>
                  <div className="product-name">꽃1</div>
                </li>
                <li>
                  <a>
                    <img
                      src={sns2}
                      style={{ width: "390px", height: "390px" }}
                    />
                  </a>
                  <div className="product-name">꽃2</div>
                </li>
                <li>
                  <a>
                    <img
                      src={sns3}
                      style={{ width: "390px", height: "390px" }}
                    />
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
