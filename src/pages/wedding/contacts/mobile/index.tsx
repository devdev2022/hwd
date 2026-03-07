//api
import { useGetWeddingBusinessInfo } from "@/query/common";

//component
import Footer from "@/components/footer";
import Header from "@/components/weddingMobileHeader";

//resource
import Instagram from "@/assets/instagram.svg?react";
import Blog from "@/assets/blog.svg?react";

const WeddingContactsMobile = () => {
  const { data: getBusinessInfo } = useGetWeddingBusinessInfo();

  return (
    <>
      <Header />
      <main className="wedding-mobile-contact">
        <div className="wedding-mobile-contact-container">
          {/* 상단: 사진 패널 */}
          <div className="wedding-mobile-contact-image-panel">
            <div className="wedding-contact-placeholder" />
          </div>

          {/* 하단: 정보 패널 */}
          <section className="wedding-mobile-contact-info-panel">
            <h2 className="wedding-mobile-contact-header">Contact Us</h2>
            <div className="wedding-mobile-contact-content-container">
              <div>
                <div className="wedding-mobile-contact-content-header">address</div>
                <div className="wedding-mobile-contact-content">
                  {getBusinessInfo && getBusinessInfo.length > 0
                    ? getBusinessInfo[0].business_address
                    : "서울특별시 강남구 논현로 155길 6\n신사프라자 라동 104호, 화연당"}
                </div>
              </div>
              <div>
                <div className="wedding-mobile-contact-content-header">Email</div>
                <div className="wedding-mobile-contact-content">
                  {getBusinessInfo && getBusinessInfo.length > 0
                    ? getBusinessInfo[0].email_address
                    : "hwd@hwayeondang.com"}
                </div>
              </div>
              <div>
                <div className="wedding-mobile-contact-content-header">Phone</div>
                <div className="wedding-mobile-contact-content">
                  {getBusinessInfo && getBusinessInfo.length > 0
                    ? getBusinessInfo[0].phone_number
                    : "010-4458-5821"}
                </div>
              </div>
              <div>
                <div className="wedding-mobile-contact-content-header">social</div>
                <div className="mobile-social-link-content">
                  {getBusinessInfo && getBusinessInfo.length > 0 ? (
                    <a
                      href={getBusinessInfo[0].instagram_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                      instagram
                    </a>
                  ) : (
                    <a
                      href="https://www.instagram.com/wedding_hwayeondang/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                      instagram
                    </a>
                  )}
                  {getBusinessInfo && getBusinessInfo.length > 0 ? (
                    <a
                      href={getBusinessInfo[0].blog_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Blog />
                      네이버 블로그
                    </a>
                  ) : (
                    <a
                      href="https://blog.naver.com/weddingbyhyd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Blog />
                      네이버 블로그
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer variant="wedding" />
    </>
  );
};

export default WeddingContactsMobile;
