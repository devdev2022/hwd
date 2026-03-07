//query
import { useGetWeddingBusinessInfo } from "@/query/common";

//component
import Footer from "@/components/footer";
import Header from "@/components/weddingHeader";

//resource
import Instagram from "@/assets/instagram.svg?react";
import Blog from "@/assets/blog.svg?react";

const WeddingContactsPc = () => {
  const { data: getBusinessInfo } = useGetWeddingBusinessInfo();

  return (
    <>
      <Header />
      <main className="wedding-contact-page">
        <section className="wedding-contact-page-container">
          {/* 왼쪽: 사진 패널 */}
          <div className="wedding-contact-image-panel">
            <div className="wedding-contact-placeholder" />
          </div>

          {/* 오른쪽: 정보 패널 */}
          <div className="wedding-contact-info-panel">
            <h2 className="wedding-contact-page-header">Contact Us</h2>
            <div className="wedding-contact-page-content-container">
              <div className="wedding-contact-content-box">
                <div>
                  <div className="wedding-contact-content-header">Address</div>
                  <div className="wedding-contact-page-content">
                    {getBusinessInfo && getBusinessInfo.length > 0
                      ? getBusinessInfo[0].business_address
                      : "서울특별시 강남구 논현로 155길 6\n신사프라자 라동 104호, 화연당"}
                  </div>
                </div>
                <div>
                  <div className="wedding-contact-content-header">Email</div>
                  <div className="wedding-contact-page-content">
                    {getBusinessInfo && getBusinessInfo.length > 0
                      ? getBusinessInfo[0].email_address
                      : "hwd@hwayeondang.com"}
                  </div>
                </div>
              </div>
              <div className="wedding-contact-content-box">
                <div>
                  <div className="wedding-contact-content-header">Phone</div>
                  <div className="wedding-contact-page-content">
                    {getBusinessInfo && getBusinessInfo.length > 0
                      ? getBusinessInfo[0].phone_number
                      : "010-4458-5821"}
                  </div>
                </div>
                <div>
                  <div className="wedding-contact-content-header">social</div>
                  <div className="wedding-contact-page-content social-links-row">
                    <div className="social-link-content-in-page">
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
                    </div>
                    <div className="social-link-content-in-page blog-link">
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="wedding" />
    </>
  );
};

export default WeddingContactsPc;
