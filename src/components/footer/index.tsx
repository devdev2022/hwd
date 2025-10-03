//resource
import Phone from "@/assets/phone.svg?react";
import Instagram from "@/assets/instagram.svg?react";

const Footer = () => {
  return (
    <footer>
      <section className="contacts">
        <div className="contacts-container">
          <div className="contact-content">
            서울특별시 강남구 논현로 155길 6 신사프라자 라동 104호, 화연당
            <br />
            사업자 번호 : 000-00-00000(등록 xxxx년) <br />
            상호 : 화연당 <br />
            대표 : 배혜민 <br />
            팩스: 0000-000-0000 이메일: hwd@hwd.com
          </div>
          <div className="social-link">
            <div className="social-link-content">
              <Instagram />
              instagram
            </div>
            <div className="social-link-content">
              <Phone />
              0507-1420-8110
            </div>
          </div>
        </div>
        <div className="copyright">Ⓒ All rights reserved</div>
      </section>
    </footer>
  );
};

export default Footer;
