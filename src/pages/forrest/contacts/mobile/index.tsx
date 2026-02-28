//api
import { useGetBusinessInfo } from "@/api/pages/common";

//component
import Footer from "@/components/footer";
import Header from "@components/detailheader";

//resource
import Instagram from "@/assets/instagram.svg?react";
import contactImage from "@/assets/forrest/contact/contact_us.png";

const Contacts = () => {
  const { data: getBusinessInfo } = useGetBusinessInfo();

  return (
    <>
      <Header />
      <main className="mobile-contact">
        <div className="mobile-contact-container">
          {/* 상단: 사진 패널 */}
          <div className="mobile-contact-image-panel">
            <img src={contactImage} alt="Contact Us" />
          </div>

          {/* 하단: 정보 패널 (흰색) */}
          <section className="mobile-contact-info-panel">
            <h2 className="mobile-contact-header">Contact Us</h2>
            <div className="mobile-contact-introduction">테스트</div>
            <div className="mobile-contact-content-container">
              <div>
                <div className="mobile-contact-content-header">address</div>
                <div className="mobile-contact-content">
                  {getBusinessInfo && getBusinessInfo.length > 0
                    ? getBusinessInfo[0].business_address
                    : "서울특별시 강남구 논현로 155길 6\n신사프라자 라동 104호, 화연당"}
                </div>
              </div>
              <div>
                <div className="mobile-contact-content-header">Email</div>
                <div className="mobile-contact-content">
                  {" "}
                  {getBusinessInfo && getBusinessInfo.length > 0
                    ? getBusinessInfo[0].email_address
                    : "hwd@hwayeondang.com"}
                </div>
              </div>
              <div>
                <div className="mobile-contact-content-header">Phone</div>
                <div className="mobile-contact-content">
                  {" "}
                  {getBusinessInfo && getBusinessInfo.length > 0
                    ? getBusinessInfo[0].phone_number
                    : "010-4458-5821"}
                </div>
              </div>
              <div>
                <div className="mobile-contact-content-header">social</div>
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
                      href="https://www.instagram.com/forrest_hwayeondang/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram />
                      instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;
