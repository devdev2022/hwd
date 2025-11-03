import { useReducer, useState, useMemo, useEffect } from "react";
import { FadeLoader } from "react-spinners";

//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import NoImg from "@/assets/no-image.svg?react";
import Arrow from "@/assets/arrow_select.svg?react";
import { useWorks } from "@/api/pages/works";
import Pagination from "@/components/pagination";

const initialState = {
  open1: true,
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
  const [menu, setMenu] = useState({
    page: 1,
    category: "planterior",
    subMenu: 1,
  });

  //pagination
  const [active, setActive] = useState(1);
  const [blck, setBlck] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);

  const handlePageChange = (data: number) => {
    setMenu((prev) => ({ ...prev, page: Number(data) }));
    setActive(Number(data));
  };

  const { data, isLoading } = useWorks(
    useMemo(
      () => ({
        page: menu.page,
        category: menu.category,
        subMenu: menu.subMenu,
        limit: 9,
      }),
      [menu.page, menu.category, menu.subMenu]
    )
  );

  useEffect(() => {
    if (data && data.totalCount !== 0) {
      setTotalCnt(data.totalCount);
    } else {
      setTotalCnt(0);
    }
  }, [data]);

  useEffect(() => {
    if (totalCnt > 0) {
      setBlck(Math.ceil(totalCnt / 9));
    } else {
      setBlck(1);
    }
  }, [totalCnt, active]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [menu.category, menu.subMenu, menu.page]);

  return (
    <>
      <Header />
      <main className="works-page">
        <section className="works-category">
          <div className="works-page-category-container">
            <h2 className="category-header">Category</h2>
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
              <ul className={`category-list ${state.open1 ? "active" : ""}`}>
                <li
                  className={`works-category-item-en ${
                    menu.category === "planterior" && menu.subMenu === 1
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "planterior", subMenu: 1 })
                  }
                >
                  All
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "planterior" && menu.subMenu === 2
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "planterior", subMenu: 2 })
                  }
                >
                  나무1
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "planterior" && menu.subMenu === 3
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "planterior", subMenu: 3 })
                  }
                >
                  나무2
                </li>
              </ul>
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
              <ul className={`category-list ${state.open2 ? "active" : ""}`}>
                <li
                  className={`works-category-item-en ${
                    menu.category === "gardening" && menu.subMenu === 1
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "gardening", subMenu: 1 })
                  }
                >
                  All
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "gardening" && menu.subMenu === 4
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "gardening", subMenu: 4 })
                  }
                >
                  나무1
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "gardening" && menu.subMenu === 5
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "gardening", subMenu: 5 })
                  }
                >
                  나무2
                </li>
              </ul>
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
              <ul className={`category-list ${state.open3 ? "active" : ""}`}>
                <li
                  className={`works-category-item-en ${
                    menu.category === "artificial_plants" && menu.subMenu === 1
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({
                      page: 1,
                      category: "artificial_plants",
                      subMenu: 1,
                    })
                  }
                >
                  All
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "artificial_plants" && menu.subMenu === 6
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({
                      page: 1,
                      category: "artificial_plants",
                      subMenu: 6,
                    })
                  }
                >
                  나무1
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "artificial_plants" && menu.subMenu === 3
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({
                      page: 1,
                      category: "artificial_plants",
                      subMenu: 7,
                    })
                  }
                >
                  나무2
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="works-portfolio">
          <h2 className="works-product-header">{menu.category}</h2>
          <div className="works-product-container">
            <ul className="works-container">
              {isLoading ? (
                <li className="work-item">
                  <div className="spinner_container">
                    <FadeLoader />
                  </div>
                </li>
              ) : data && data.data ? (
                data.data.map((item) => (
                  <li key={item.id} className="work-item">
                    {item.link ? (
                      <img src={item.link} className="product-image" />
                    ) : (
                      <NoImg />
                    )}
                    {item.name ? <p>{item.name}</p> : <p>null</p>}
                  </li>
                ))
              ) : (
                <div className="work-no-item">
                  <NoImg />
                  <p>데이터가 없습니다</p>
                </div>
              )}
            </ul>
            <Pagination
              totalPage={blck}
              currentPage={active}
              handlePageChange={(p) => handlePageChange(p)}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Works;
