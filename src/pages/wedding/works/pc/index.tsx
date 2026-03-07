import { useReducer, useState, useMemo, useEffect } from "react";
import { FadeLoader } from "react-spinners";

//query
import { useWeddingWorks } from "@/query/works";

//component
import Footer from "@/components/footer";
import Header from "@/components/weddingHeader";
import Pagination from "@/components/pagination";

//resource
import NoImg from "@/assets/no-image.svg?react";
import Arrow from "@/assets/arrow_select.svg?react";

const initialState = {
  open1: true,
};

type State = typeof initialState;
type Action = { type: "TOGGLE"; key: keyof State };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, [action.key]: !state[action.key] };

    default:
      return state;
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  wedding: "Wedding",
  wedding_bouquet: "Wedding Bouquet",
  flower_arrangement: "Flower Arrangement",
  gift_flower: "Gift Flower",
  flower_class: "Flower Class",
};

const WeddingWorksPc = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [menu, setMenu] = useState({
    page: 1,
    category: "wedding",
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

  const { data, isLoading } = useWeddingWorks(
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [menu.category, menu.subMenu, menu.page]);

  return (
    <>
      <Header />
      <main className="wedding-works-page">
        <section className="wedding-works-category">
          <div className="wedding-works-page-category-container">
            <h2 className="wedding-category-header">Category</h2>
            <div>
              <div
                className={`wedding-category-item ${state.open1 ? "active" : ""}`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open1" })}
              >
                <h2 className="wedding-category-title">Wedding</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`wedding-category-list ${state.open1 ? "active" : ""}`}
              >
                <li
                  className={`works-category-item-en ${
                    menu.category === "wedding" && menu.subMenu === 1
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "wedding", subMenu: 1 })
                  }
                >
                  All
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "wedding" && menu.subMenu === 2
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "wedding", subMenu: 2 })
                  }
                >
                  야외
                </li>
                <li
                  className={`works-category-item-kr ${
                    menu.category === "wedding" && menu.subMenu === 3
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setMenu({ page: 1, category: "wedding", subMenu: 3 })
                  }
                >
                  실내
                </li>
              </ul>
            </div>
            <div
              className="wedding-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "wedding_bouquet", subMenu: 1 })
              }
            >
              <h2 className="wedding-category-title">Wedding Bouquet</h2>
            </div>
            <div
              className="wedding-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "flower_arrangement", subMenu: 1 })
              }
            >
              <h2 className="wedding-category-title">Flower Arrangement</h2>
            </div>
            <div
              className="wedding-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "gift_flower", subMenu: 1 })
              }
            >
              <h2 className="wedding-category-title">Gift Flower</h2>
            </div>
            <div
              className="wedding-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "flower_class", subMenu: 1 })
              }
            >
              <h2 className="wedding-category-title">Flower Class</h2>
            </div>
          </div>
        </section>
        <section className="wedding-works-portfolio">
          <h2 className="wedding-works-product-header">
            {CATEGORY_LABELS[menu.category] ??
              menu.category.replaceAll("_", " ")}
          </h2>
          <div className="wedding-works-product-container">
            {isLoading ? (
              <div className="spinner_container">
                <FadeLoader />
              </div>
            ) : data && data.data.length > 0 ? (
              <ul className="wedding-works-container">
                {data.data.map((item) => (
                  <li key={item.id} className="wedding-work-item">
                    {item.link ? (
                      <img
                        src={item.link}
                        className="wedding-product-image"
                        onClick={() => setSelectedImage(item.link)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <NoImg />
                    )}
                    {item.name ? (
                      <p>{item.name.replaceAll("_", " ")}</p>
                    ) : (
                      <p>null</p>
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
            <Pagination
              totalPage={blck}
              currentPage={active}
              handlePageChange={(p) => handlePageChange(p)}
            />
          </div>
        </section>
      </main>
      <Footer variant="wedding" />
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default WeddingWorksPc;
