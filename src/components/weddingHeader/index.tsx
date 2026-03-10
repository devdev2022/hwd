import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

//utils
import { useGoToPath } from "@/utils/function";

//resource
import HydLogo from "@/assets/hyd_logo_stamp.png";

const WeddingHeader = () => {
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
      className={cx("wedding-header", "wedding-header--detail", {
        scrolled: hasScrolledUp,
        visible: isVisible,
        hidden: !isVisible,
      })}
    >
      <div className="wedding-flexbox">
        <a href="/" className="detail-page-header-hyd-logo">
          <img src={HydLogo} alt="HYD" />
        </a>
        <div className="wedding-header-logo">
          <a href="/wedding">
            <span>Wedding</span>
          </a>
        </div>
        <div className="wedding-gnb-wrap">
          <div className="wedding-header-container">
            <nav className="wedding-gnb">
              <ul className="wedding-gnb-list">
                <li className="wedding-gnb-item">
                  <div className="block">
                    <span
                      className="underline"
                      onClick={() => goToPath("/wedding/aboutus")}
                    >
                      ABOUT US
                    </span>
                  </div>
                </li>
                <li className="wedding-gnb-item">
                  <div className="block">
                    <span
                      className="underline"
                      onClick={() => goToPath("/wedding/works")}
                    >
                      WORKS
                    </span>
                  </div>
                </li>
                <li className="wedding-gnb-item">
                  <div className="block">
                    <span
                      className="underline"
                      onClick={() => goToPath("/wedding/contacts")}
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

export default WeddingHeader;
