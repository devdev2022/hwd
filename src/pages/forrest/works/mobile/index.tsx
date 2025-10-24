import { useReducer } from "react";

//component
import Footer from "@/components/footer";
import Header from "@components/detailheader";

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
      <main className="mobile-works">
        <section className="mobile-works-category">
          <div className="mobile-works-category-container">
            <h2 className="mobile-works-header">Category</h2>
            <div>
              <div
                className={`mobile-category-item ${
                  state.open1 ? "active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open1" })}
              >
                <h2 className="mobile-category-title">Planterior</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`mobile-category-list ${
                  state.open1 ? "active" : ""
                }`}
              >
                <li className="mobile-category-item-en">All</li>
                <li className="mobile-category-item-kr">나무1</li>
                <li className="mobile-category-item-kr">나무2</li>
              </ul>
            </div>
            <div>
              <div
                className={`mobile-category-item ${
                  state.open2 ? "active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open2" })}
              >
                <h2 className="mobile-category-title">gardening</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`mobile-category-list ${
                  state.open2 ? "active" : ""
                }`}
              >
                <li className="mobile-category-item-en">All</li>
                <li className="mobile-category-item-kr">나무1</li>
                <li className="mobile-category-item-kr">나무2</li>
              </ul>
            </div>
            <div>
              <div
                className={`mobile-category-item ${
                  state.open3 ? "active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open3" })}
              >
                <h2 className="mobile-category-title">artificial plants</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`mobile-category-list ${
                  state.open3 ? "active" : ""
                }`}
              >
                <li className="mobile-category-item-en">All</li>
                <li className="mobile-category-item-kr">나무1</li>
                <li className="mobile-category-item-kr">나무2</li>
              </ul>
            </div>
          </div>
          <div className="mobile-works-category-container">
            <h2 className="mobile-works-header">Category</h2>
            <div>
              <div
                className={`mobile-category-item ${
                  state.open1 ? "active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open1" })}
              >
                <h2 className="mobile-category-title">Planterior</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`mobile-category-list ${
                  state.open1 ? "active" : ""
                }`}
              >
                <li className="mobile-category-item-en">All</li>
                <li className="mobile-category-item-kr">나무1</li>
                <li className="mobile-category-item-kr">나무2</li>
              </ul>
            </div>
            <div>
              <div
                className={`mobile-category-item ${
                  state.open2 ? "active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open2" })}
              >
                <h2 className="mobile-category-title">gardening</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`mobile-category-list ${
                  state.open2 ? "active" : ""
                }`}
              >
                <li className="mobile-category-item-en">All</li>
                <li className="mobile-category-item-kr">나무1</li>
                <li className="mobile-category-item-kr">나무2</li>
              </ul>
            </div>
            <div>
              <div
                className={`mobile-category-item ${
                  state.open3 ? "active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open3" })}
              >
                <h2 className="mobile-category-title">artificial plants</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`mobile-category-list ${
                  state.open3 ? "active" : ""
                }`}
              >
                <li className="mobile-category-item-en">All</li>
                <li className="mobile-category-item-kr">나무1</li>
                <li className="mobile-category-item-kr">나무2</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mobile-works-portfolio">
          <h2 className="mobile-works-product-header">gardening</h2>
          <div className="mobile-works-product-container">
            <ul className="mobile-works-container">
              <li className="mobile-work-item">
                <a>
                  <img src={sns1} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
              <li className="mobile-work-item">
                <a>
                  <img src={sns2} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
              <li className="mobile-work-item">
                <a>
                  <img src={sns3} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
              <li className="mobile-work-item">
                <a>
                  <img src={sns1} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
              <li className="mobile-work-item">
                <a>
                  <img src={sns2} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
              <li className="mobile-work-item">
                <a>
                  <img src={sns3} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
              <li className="mobile-work-item">
                <a>
                  <img src={sns1} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
              <li className="mobile-work-item">
                <a>
                  <img src={sns2} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
              <li className="mobile-work-item">
                <a>
                  <img src={sns3} className="mobile-product-image" />
                </a>
                <p>꽃 1</p>
              </li>
            </ul>
            <div className="mobile-works-pagination">
              <ol className="mobile-pagination-list">
                <li className="mobile-page-number-clicked">1</li>
                <li className="mobile-page-number">2</li>
                <li className="mobile-page-number">3</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Works;
