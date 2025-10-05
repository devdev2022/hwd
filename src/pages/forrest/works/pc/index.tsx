//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import sns1 from "@/assets/forrest/sns_1.png";
import sns2 from "@/assets/forrest/sns_2.png";
import sns3 from "@/assets/forrest/sns_3.png";

const PcVersion = () => {
  return (
    <>
      <Header />
      <main className="works-page-main">
        <section className="works-page-category">
          <div className="works-page-category-container">
            <h2 style={{ fontSize: "50px", fontFamily: "Italiana" }}>
              Category
            </h2>
            <div>
              <h2
                style={{
                  marginTop: "40px",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                Planterior
              </h2>
              <ul>
                <li>All</li>
                <li>나무1</li>
                <li>나무2</li>
              </ul>
            </div>
            <div>
              <h2
                style={{
                  marginTop: "40px",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                gardening
              </h2>
              <ul>
                <li>All</li>
                <li>나무1</li>
                <li>나무2</li>
              </ul>
            </div>

            <div>
              <h2
                style={{
                  marginTop: "40px",
                  fontSize: "20px",
                  fontFamily: "Montserrat-Regular",
                }}
              >
                artificial plants
              </h2>
              <ul>
                <li>All</li>
                <li>나무1</li>
                <li>나무2</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="portfolio">
          <div className="works-page-container">
            <div className="works-product-container">
              <div className="works-product-box">
                <h2 className="works-product-header">gardening</h2>
                <ul className="works-product-introduction">
                  <li>
                    <a>
                      <img
                        src={sns1}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃1</div>
                  </li>
                  <li>
                    <a>
                      <img
                        src={sns2}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃2</div>
                  </li>
                  <li>
                    <a>
                      <img
                        src={sns3}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃3</div>
                  </li>
                </ul>
              </div>
              <div className="works-product-box">
                <ul className="works-product-introduction">
                  <li>
                    <a>
                      <img
                        src={sns1}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃1</div>
                  </li>
                  <li>
                    <a>
                      <img
                        src={sns2}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃2</div>
                  </li>
                  <li>
                    <a>
                      <img
                        src={sns3}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃3</div>
                  </li>
                </ul>
              </div>
              <div className="works-product-box">
                <ul className="works-product-introduction">
                  <li>
                    <a>
                      <img
                        src={sns1}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃1</div>
                  </li>
                  <li>
                    <a>
                      <img
                        src={sns2}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃2</div>
                  </li>
                  <li>
                    <a>
                      <img
                        src={sns3}
                        style={{ width: "320px", height: "320px" }}
                      />
                    </a>
                    <div className="product-name">꽃3</div>
                  </li>
                </ul>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ol style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                  <li
                    style={{
                      fontWeight: "500",
                      color: "#bec7aa",
                      fontFamily: "Montserrat-Regular",
                    }}
                  >
                    1
                  </li>
                  <li
                    style={{
                      fontFamily: "Montserrat-Regular",
                    }}
                  >
                    2
                  </li>
                  <li
                    style={{
                      fontFamily: "Montserrat-Regular",
                    }}
                  >
                    3
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PcVersion;
