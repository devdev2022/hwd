import { useReducer } from "react";

//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import Arrow from "@/assets/arrow_select.svg?react";
import sns1 from "@/assets/forrest/sns_1.png";
import sns2 from "@/assets/forrest/sns_2.png";
import sns3 from "@/assets/forrest/sns_3.png";

const initialState = {
  open1: false,
  open2: false,
  open3: false,
};

type State = typeof initialState;
type Action = { type: "TOGGLE"; key: keyof State } | { type: "CLOSE_ALL" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, [action.key]: !state[action.key] };

    default:
      return state;
  }
}

const Works = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header />
      <main className="works-page">
        <section className="works-page-category">
          <div className="works-page-category-container">
            <h2 style={{ fontSize: "50px", fontFamily: "Italiana" }}>
              Category
            </h2>
            <div>
              <div
                className={`category-item ${state.open1 ? "active" : ""}`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open1" })}
              >
                <h2 className="category-title">Planterior</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              {state.open1 && (
                <ul>
                  <li className="category-item-en">All</li>
                  <li className="category-item-kr">나무1</li>
                  <li className="category-item-kr">나무2</li>
                </ul>
              )}
            </div>
            <div>
              <div
                className={`category-item ${state.open2 ? "active" : ""}`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open2" })}
              >
                <h2 className="category-title">gardening</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              {state.open2 && (
                <ul>
                  <li className="category-item-en">All</li>
                  <li className="category-item-kr">나무1</li>
                  <li className="category-item-kr">나무2</li>
                </ul>
              )}
            </div>
            <div>
              <div
                className={`category-item ${state.open3 ? "active" : ""}`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open3" })}
              >
                <h2 className="category-title">artificial plants</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              {state.open3 && (
                <ul>
                  <li className="category-item-en">All</li>
                  <li className="category-item-kr">나무1</li>
                  <li className="category-item-kr">나무2</li>
                </ul>
              )}
            </div>
          </div>
        </section>
        <section className="works-portfolio">
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
              <div className="works-pagination">
                <ol className="pagination-list">
                  <li className="page-number-clicked">1</li>
                  <li className="page-number">2</li>
                  <li className="page-number">3</li>
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

export default Works;
