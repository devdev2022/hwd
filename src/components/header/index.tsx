import cx from "classnames";
import { useEffect, useRef, useState } from "react";

//utils
import { useGoToPath } from "@/utils/function";

const Header = () => {
  const goToPath = useGoToPath();

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const currentScrollY = window.scrollY;

      if (currentScrollY >= vh * 0.13) {
        setIsScrolled(true);

        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        }

        if (currentScrollY < lastScrollY.current) {
          setHasScrolledUp(true);
          if (hasScrolledUp) {
            setIsVisible(true);
          }
        }
      } else {
        setIsScrolled(false);
        setHasScrolledUp(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledUp]);

  return (
    <header
      className={cx("detail-page-header", {
        scrolled: isScrolled && hasScrolledUp,
        visible: isVisible,
        hidden: !isVisible,
      })}
    >
      <div className="detail-page-flexbox">
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
