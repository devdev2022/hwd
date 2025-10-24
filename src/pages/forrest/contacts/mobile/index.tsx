//component
import Footer from "@/components/footer";
import Header from "@components/detailheader";

//resource
import Instagram from "@/assets/instagram.svg?react";

const Contacts = () => {
  return (
    <>
      <Header />
      <main className="mobile-contact">
        <section className="mobile-contact-container">
          <h2 className="mobile-contact-header">Contact Us</h2>
          <div className="mobile-contact-introduction">테스트</div>
          <div className="mobile-contact-content-container">
            <div>
              <div>address</div>
              <div className="mobile-contact-content">
                서울특별시 강남구 논현로 155길 6 신사프라자 라동 104호, 화연당
              </div>
            </div>
            <div className="mobile-email-content-box">
              <div>Email</div>
              <div className="mobile-contact-content">hwd@hwd.com</div>
            </div>
            <div className="mobile-contact-content-box">
              <div>Phone</div>
              <div className="mobile-contact-content">010-0000-0000</div>
            </div>
            <div>
              <div>social</div>
              <div className="mobile-social-link-content">
                <a
                  href="https://www.instagram.com/forrest_hwayeondang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  instagram
                </a>
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
