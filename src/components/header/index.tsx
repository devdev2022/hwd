import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

//utils
import { useGoToPath } from "@/utils/function";

//resource
import HydLogo from "@/assets/hyd_logo_stamp.png";

const Header = () => {
  const goToPath = useGoToPath();
  const location = useLocation();

  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const vh = window.innerHeight;
    const currentScrollY = window.scrollY;

    if (currentScrollY >= vh * 0.13) {
      setHasScrolledUp(true);
      setIsVisible(true);
    } else {
      setHasScrolledUp(false);
      setIsVisible(true);
    }
    lastScrollY.current = currentScrollY;
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const vh = window.innerHeight;
          const currentScrollY = window.scrollY;

          if (currentScrollY >= vh * 0.13) {
            if (currentScrollY > lastScrollY.current) {
              setIsVisible(false);
            }

            if (currentScrollY < lastScrollY.current) {
              setHasScrolledUp(true);
              setIsVisible(true);
            }
          } else {
            setHasScrolledUp(false);
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cx("detail-page-header", {
        scrolled: hasScrolledUp,
        visible: isVisible,
        hidden: !isVisible,
      })}
    >
      <div className="detail-page-flexbox">
        <a href="/" className="detail-page-header-hyd-logo">
          <img src={HydLogo} alt="HYD" />
        </a>
        <div className="detail-page-header-logo">
          <a href="/forrest">
            <span>For, rest</span>
          </a>
        </div>
        <div className="detail-page-header-gnb">
          <div className="detail-page-header-container">
            <nav className="detail-page-gnb">
              <ul className="detail-page-gnb-list">
                <li className="detail-page-gnb-item">
                  <div className="block">
                    <span
                      className="underline"
                      onClick={() => goToPath("/forrest/aboutus")}
                    >
                      ABOUT US
                    </span>
                  </div>
                </li>
                <li className="detail-page-gnb-item">
                  <div className="block">
                    <span
                      className="underline"
                      onClick={() => goToPath("/forrest/works")}
                    >
                      WORKS
                    </span>
                  </div>
                </li>
                <li className="detail-page-gnb-item">
                  <div className="block">
                    <span
                      className="underline"
                      onClick={() => goToPath("/forrest/contacts")}
                    >
                      CONTACT US
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
