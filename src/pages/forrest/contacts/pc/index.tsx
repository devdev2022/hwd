//query
import { useGetBusinessInfo } from "@/api/pages/common";

//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import Instagram from "@/assets/instagram.svg?react";

const Contacts = () => {
  const { data: getBusinessInfo } = useGetBusinessInfo();

  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-page-container">
          <h2 className="contact-page-header">Contact Us</h2>
          <div className="contact-page-content-container">
            <div className="contact-content-box">
              <div>
                <div className="contact-content-header">address</div>

                {getBusinessInfo && getBusinessInfo.length > 0 ? (
                  <div className="contact-page-content">
                    {getBusinessInfo[0].business_address}
                  </div>
                ) : (
                  <div className="contact-page-content">
                    서울특별시 강남구 논현로 155길 6 신사프라자 라동 104호,
                    화연당
                  </div>
                )}
              </div>
              <div>
                <div className="contact-content-header">Email</div>
                <div className="contact-page-content">
                  {getBusinessInfo && getBusinessInfo.length > 0
                    ? `${getBusinessInfo[0].email_address}`
                    : "hwd@hwd.com"}
                </div>
              </div>
            </div>
            <div className="contact-content-box">
              <div>
                <div className="contact-content-header">Phone</div>
                <div className="contact-page-content">
                  {getBusinessInfo && getBusinessInfo.length > 0
                    ? `${getBusinessInfo[0].phone_number}`
                    : "010-4458-5821"}
                </div>
              </div>
              <div>
                <div className="contact-content-header">social</div>
                <div className="contact-page-content">
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
