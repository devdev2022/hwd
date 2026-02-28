import cx from "classnames";
import { useEffect, useState, useRef } from "react";

//utils
import { useGoToPath } from "@/utils/function";
import { useLocation } from "react-router";

const SideBar = () => {
  const goToPath = useGoToPath();
  const location = useLocation();

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const vh = window.innerHeight;
          const currentScrollY = window.scrollY;

          if (currentScrollY >= 0.9 * vh) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
