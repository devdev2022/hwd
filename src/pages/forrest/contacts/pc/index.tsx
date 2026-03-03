//query
import { useGetBusinessInfo } from "@/api/pages/common";

//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import Instagram from "@/assets/instagram.svg?react";
import Blog from "@/assets/blog.svg?react";
import contactImage from "@/assets/forrest/contact/contact_us.png";

const Contacts = () => {
  const { data: getBusinessInfo } = useGetBusinessInfo();

  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-page-container">
          {/* 왼쪽: 사진 패널 */}
          <div className="contact-image-panel">
            <img src={contactImage} alt="Contact Us" />
          </div>

          {/* 오른쪽: 정보 패널 (흰색) */}
          <div className="contact-info-panel">
            <h2 className="contact-page-header">Contact Us</h2>
            <div className="contact-page-content-container">
              <div className="contact-content-box">
                <div>
                  <div className="contact-content-header">Address</div>
                  <div className="contact-page-content">
                    {getBusinessInfo && getBusinessInfo.length > 0
                      ? getBusinessInfo[0].business_address
                      : "서울특별시 강남구 논현로 155길 6\n신사프라자 라동 104호, 화연당"}
                  </div>
                </div>
                <div>
                  <div className="contact-content-header">Email</div>
                  <div className="contact-page-content">
                    {getBusinessInfo && getBusinessInfo.length > 0
                      ? getBusinessInfo[0].email_address
                      : "hwd@hwayeondang.com"}
                  </div>
                </div>
              </div>
              <div className="contact-content-box">
                <div>
                  <div className="contact-content-header">Phone</div>
                  <div className="contact-page-content">
                    {getBusinessInfo && getBusinessInfo.length > 0
                      ? getBusinessInfo[0].phone_number
                      : "010-4458-5821"}
                  </div>
                </div>
                <div>
                  <div className="contact-content-header">social</div>
                  <div className="contact-page-content social-links-row">
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
                          href="https://www.instagram.com/forrest_hwayeondang/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram />
                          instagram
                        </a>
                      )}
                    </div>
                    <div className="social-link-content-in-page">
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
                          href="https://blog.naver.com/forrestbyhyd"
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
      <Footer />
    </>
  );
};

export default Contacts;
