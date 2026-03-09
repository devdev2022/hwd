import { useReducer, useState, useMemo, useEffect } from "react";

//component
import ImageLoader from "@/components/image-loader";

//query
import { useWorks } from "@/query/works";

//component
import Footer from "@/components/footer";
import Header from "@/components/mobileHeader";
import Pagination from "@/components/pagination";

//resource
import Arrow from "@/assets/arrow_select.svg?react";

//resource
import NoImg from "@/assets/no-image.svg?react";
//utils
import { formatName } from "@/utils/function";

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
  const [selectedImage, setSelectedImage] = useState<{ link: string; name: string } | null>(null);
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
      [menu.page, menu.category, menu.subMenu],
    ),
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
    setActive(1);
  }, [menu.category, menu.subMenu]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [menu.category, menu.subMenu, menu.page]);

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
                <h2 className="mobile-works-category-title">PLANTERIOR</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`mobile-category-list ${
                  state.open1 ? "active" : ""
                }`}
              >
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
                  실내
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
                  실외
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "planterior" && menu.subMenu === 4
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "planterior", subMenu: 4 })
                  }
                >
                  아트웍 & 오브제
                </li>
              </ul>
            </div>
            <div>
              <div
                className={`mobile-category-item ${
                  state.open2 ? "active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open2" })}
              >
                <h2 className="mobile-works-category-title">LANDSCAPING</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`mobile-category-list ${
                  state.open2 ? "active" : ""
                }`}
              >
                <li
                  className={`works-category-item-en ${
                    menu.category === "landscaping" && menu.subMenu === 1
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "landscaping", subMenu: 1 })
                  }
                >
                  All
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "landscaping" && menu.subMenu === 5
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "landscaping", subMenu: 5 })
                  }
                >
                  실내·외 조경
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "landscaping" && menu.subMenu === 6
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "landscaping", subMenu: 6 })
                  }
                >
                  실내 조경
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "landscaping" && menu.subMenu === 7
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "landscaping", subMenu: 7 })
                  }
                >
                  실외 조경
                </li>
              </ul>
            </div>
            <div
              className="mobile-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "pop-up_store", subMenu: 1 })
              }
            >
              <h2 className="mobile-works-category-title">POP-UP STORE</h2>
            </div>
            <div
              className="mobile-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "winter_decoration", subMenu: 1 })
              }
            >
              <h2 className="mobile-works-category-title">WINTER DECORATION</h2>
            </div>
          </div>
        </section>
        <section className="mobile-works-portfolio">
          <h2 className="mobile-works-product-header">
            {formatName(menu.category)}
          </h2>
          <div className="mobile-works-product-container">
            <ImageLoader isLoading={isLoading} urls={data?.data?.map((i) => i.link)}>
              {data && data.data.length > 0 ? (
                <ul className="mobile-works-container">
                  {data.data.map((item) => (
                    <li key={item.id} className="mobile-work-item">
                      {item.link ? (
                        <img
                          src={item.link}
                          className="mobile-product-image"
                          onClick={() => setSelectedImage({ link: item.link, name: item.name || "" })}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <NoImg />
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  <div className="work-no-item">
                    <NoImg />
                    <p>데이터가 없습니다</p>
                  </div>
                </ul>
              )}
            </ImageLoader>

            <Pagination
              totalPage={blck}
              currentPage={active}
              handlePageChange={(p) => handlePageChange(p)}
            />
          </div>
        </section>
      </main>
      <Footer />
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            ✕
          </button>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.link} className="lightbox-image" />
            {selectedImage.name && (
              <div className="lightbox-caption">
                <p className="lightbox-caption-name">
                  {formatName(selectedImage.name)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Works;
