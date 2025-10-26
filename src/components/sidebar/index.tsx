import cx from "classnames";
import { useEffect, useState, useRef } from "react";

//utils
import { useGoToPath } from "@/utils/function";

const SideBar = () => {
  const goToPath = useGoToPath();
  const lastScrollY = useRef(0);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 0.9 * vh) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setHasScrolledUp(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledUp]);

  const onClickSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <div
          className={cx("forrest-mobile-header", {
            scrolled: isScrolled,
            open: isOpen,
          })}
        >
          <div className="forrest-mobile-flexbox">
            <div className="forrest-mobile-header-logo">
              <a href="/forrest">
                <span>For, rest</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className={cx("forrest-mobile-header-menu", {
            open: isOpen,
            scrolled: isScrolled,
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
                className="mobile-sidebar-item"
                onClick={() => goToPath("/forrest/aboutus")}
              >
                <h2 className="mobile-category-title">ABOUT US</h2>
              </div>
            </div>
            <div>
              <div
                className="mobile-sidebar-item"
                onClick={() => goToPath("/forrest/works")}
              >
                <h2 className="category-title">WORKS</h2>
              </div>
            </div>
            <div>
              <div
                className="mobile-sidebar-item"
                onClick={() => goToPath("/forrest/contacts")}
              >
                <h2 className="mobile-category-title">CONTACT US</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className="mobile-menu-dim-cover"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default SideBar;
