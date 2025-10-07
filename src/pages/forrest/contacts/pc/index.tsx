//component
import Footer from "@/components/footer";
import Header from "@components/header";

//resource
import location from "@/assets/forrest/location.png";

const Contacts = () => {
  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-page-container">
          <h2 className="contact-page-header">Contact Us</h2>
          <div className="contact-page-introduction">테스트</div>
          <div className="contact-page-content-container">
            <div className="contact-content-box">
              <div>
                <div className="contact-content-header">address</div>
                <div className="contact-page-content">
                  서울특별시 강남구 논현로 155길 6 신사프라자 라동 104호, 화연당
                </div>
              </div>
              <div>
                <div className="contact-content-header">Email</div>
                <div className="contact-page-content">hwd@hwd.com</div>
              </div>
            </div>
            <div className="contact-content-box">
              <div>
                <div className="contact-content-header">Phone</div>
                <div className="contact-page-content">010-0000-0000</div>
              </div>
              <div>
                <div className="contact-content-header">social</div>
                <div className="contact-page-content">인트로덕션</div>
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
