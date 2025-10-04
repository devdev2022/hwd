//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import sns1 from "@/assets/forrest/sns_1.png";
import sns2 from "@/assets/forrest/sns_2.png";
import sns3 from "@/assets/forrest/sns_3.png";
import sns4 from "@/assets/forrest/sns_4.png";
import sns5 from "@/assets/forrest/sns_5.png";
import sns6 from "@/assets/forrest/sns_6.png";

const PcVersion = () => {
  return (
    <>
      <Header />
      <main className="forrest-main">
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
      </main>
      <Footer />
    </>
  );
};

export default PcVersion;
