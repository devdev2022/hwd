import { useReducer, useState, useMemo, useEffect } from "react";

//query
import { useWeddingWorks } from "@/query/works";

//component
import Footer from "@/components/footer";
import Header from "@/components/weddingMobileHeader";
import Pagination from "@/components/pagination";

//resource
import Arrow from "@/assets/arrow_select.svg?react";
import NoImg from "@/assets/no-image.svg?react";

//utils
import { formatName } from "@/utils/function";
import ImageLoader from "@/components/image-loader";

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
  flower_class: "Flower Class",
};

const WeddingWorksMobile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedImage, setSelectedImage] = useState<{
    link: string;
    name: string;
  } | null>(null);
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
    setActive(1);
  }, [menu.category, menu.subMenu]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [menu.category, menu.subMenu, menu.page]);

  return (
    <>
      <Header />
      <main className="wedding-mobile-works">
        <section className="wedding-mobile-works-category">
          <div className="wedding-mobile-works-category-container">
            <h2 className="wedding-mobile-works-header">Category</h2>
            <div>
              <div
                className={`wedding-mobile-category-item ${
                  state.open1 ? "active" : ""
                }`}
                onClick={() => dispatch({ type: "TOGGLE", key: "open1" })}
              >
                <h2 className="wedding-mobile-works-category-title">Wedding</h2>
                <span className="arrow">
                  <Arrow />
                </span>
              </div>
              <ul
                className={`wedding-mobile-category-list ${
                  state.open1 ? "active" : ""
                }`}
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
                  실내
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
                  야외
                </li>
              </ul>
            </div>
            <div
              className="wedding-mobile-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "wedding_bouquet", subMenu: 1 })
              }
            >
              <h2 className="wedding-mobile-works-category-title">
                Wedding Bouquet
              </h2>
            </div>
            <div
              className="wedding-mobile-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "flower_arrangement", subMenu: 1 })
              }
            >
              <h2 className="wedding-mobile-works-category-title">
                Flower Arrangement
              </h2>
            </div>
            <div
              className="wedding-mobile-category-item"
              onClick={() =>
                setMenu({ page: 1, category: "flower_class", subMenu: 1 })
              }
            >
              <h2 className="wedding-mobile-works-category-title">
                Flower Class
              </h2>
            </div>
          </div>
        </section>
        <section className="wedding-mobile-works-portfolio">
          <h2 className="wedding-mobile-works-product-header">
            {CATEGORY_LABELS[menu.category] ?? formatName(menu.category)}
          </h2>
          <div className="wedding-mobile-works-product-container">
            <ImageLoader isLoading={isLoading} urls={data?.data?.map((i) => i.link)}>
              {data && data.data.length > 0 ? (
                <ul className="wedding-mobile-works-container">
                  {data.data.map((item) => (
                    <li key={item.id} className="wedding-mobile-work-item">
                      {item.link ? (
                        <img
                          src={item.link}
                          className="wedding-mobile-product-image"
                          onClick={() =>
                            setSelectedImage({
                              link: item.link,
                              name: item.name || "",
                            })
                          }
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <div className="work-no-item">
                          <NoImg />
                          <p>데이터가 없습니다</p>
                        </div>
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
      <Footer variant="wedding" />
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
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

export default WeddingWorksMobile;
