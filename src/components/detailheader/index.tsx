import cx from "classnames";
import { useState } from "react";

//utils
import { useGoToPath } from "@/utils/function";

const Header = () => {
  const goToPath = useGoToPath();

  const [isOpen, setIsOpen] = useState(false);

  const onClickSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <div
          className="mobile-detail-menu-dim-cover"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
      <header>
        <div
          className={cx("mobile-detail-header", {
            open: isOpen,
          })}
        >
          <div className="mobile-detail-flexbox">
            <div className="mobile-detail-header-logo">
              <a href="/forrest">
                <span>For, rest</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className={cx("mobile-detail-header-menu", {
            open: isOpen,
          })}
          onClick={onClickSideBar}
        >
          <span />
        </div>
        <div
          className={cx("mobile-sidebar-category", {
            open: isOpen,
          })}
        >
          <div className="mobile-sidebar-category-container">
            <div>
              <div
                className="mobile-category-item"
                onClick={() => goToPath("/forrest/aboutus")}
              >
                <h2 className="mobile-category-title">ABOUT US</h2>
              </div>
            </div>
            <div>
              <div
                className="mobile-category-item"
                onClick={() => goToPath("/forrest/works")}
              >
                <h2 className="category-title">WORKS</h2>
              </div>
            </div>
            <div>
              <div
                className="mobile-category-item"
                onClick={() => goToPath("/forrest/contacts")}
              >
                <h2 className="mobile-category-title">CONTACT US</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
