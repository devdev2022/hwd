//resource
import Phone from "../../../assets/phone.svg?react";
import Instagram from "../../../assets/instagram.svg?react";
import Banner from "../../../assets/forrest/forrestbanner.png";
import sns1 from "../../../assets/forrest/sns_1.png";
import sns2 from "../../../assets/forrest/sns_2.png";
import sns3 from "../../../assets/forrest/sns_3.png";
import sns4 from "../../../assets/forrest/sns_4.png";
import sns5 from "../../../assets/forrest/sns_5.png";
import sns6 from "../../../assets/forrest/sns_6.png";

const PcVersion = () => {
  return (
    <>
      <header className="forrest-header">
        <div className="forrest-flexbox">
          <div className="forrest-header-logo">
            <a href="/forrest">
              <span>For, rest</span>
            </a>
          </div>

          <div className="forrest-header-gnb">
            <div className="forrest-header-container">
              <nav className="gnb">
                <ul className="gnb-list">
                  <li className="gnb-item">
                    <div className="block">
                      <span className="underline">ABOUT US</span>
                    </div>
                  </li>
                  <li className="gnb-item">
                    <div className="block">
                      <span className="underline">WORKS</span>
                    </div>
                  </li>
                  <li className="gnb-item">
                    <div className="block">
                      <span className="underline">CONTACT US</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="gnb-bg" />
          </div>
        </div>
      </header>
      <main className="forrest-main">
        <section className="billboard">
          <div className="billboard-container">
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
                    <div className="introduction_button">LEARN MORE</div>
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
              <img src={sns1} />
              <img src={sns2} />
              <img src={sns3} />
              <img src={sns4} />
              <img src={sns5} />
              <img src={sns6} />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className="contacts">
          <div className="contacts-container">
            <div className="contact-content">
              서울특별시 강남구 논현로 155길 6 신사프라자 라동 104호, 화연당
              <br />
              사업자 번호 : 000-00-00000(등록 xxxx년) <br />
              상호 : 화연당 <br />
              대표 : 배혜민 <br />
              팩스: 0000-000-0000 이메일: hwd@hwd.com
            </div>
            <div className="social-link">
              <div className="social-link-content">
                <Instagram />
                instagram
              </div>
              <div className="social-link-content">
                <Phone />
                0507-1420-8110
              </div>
            </div>
          </div>
          <div className="copyright">Ⓒ All rights reserved</div>
        </section>
      </footer>
    </>
  );
};

export default PcVersion;
