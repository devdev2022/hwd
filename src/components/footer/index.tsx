//resource
import Phone from "@/assets/phone.svg?react";
import Instagram from "@/assets/instagram.svg?react";
import Blog from "@/assets/blog.svg?react";
import { useGetBusinessInfo } from "@/api/pages/common";

const Footer = () => {
  const { data: getBusinessInfo } = useGetBusinessInfo();

  return (
    <footer>
      <section className="contacts">
        {getBusinessInfo && getBusinessInfo.length > 0 ? (
          <div className="contacts-container">
            <div className="contact-content">
              {getBusinessInfo[0].business_address}
              <br />
              사업자 번호 :{getBusinessInfo[0].business_number}(등록 xxxx년)
              <br />
              상호 : {getBusinessInfo[0].business_name} <br />
              대표 : {getBusinessInfo[0].ceo_name} <br />
              팩스: {getBusinessInfo[0].fax_number} <br />
              이메일: {getBusinessInfo[0].email_address} <br />
            </div>
            <div className="social-link">
              <div className="social-link-content">
                <a
                  href={getBusinessInfo[0].instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  instagram
                </a>
              </div>
              <div className="social-link-content">
                <a
                  href={getBusinessInfo[0].blog_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Blog />
                  네이버 블로그
                </a>
              </div>
              <div className="social-link-content">
                <a href={`tel:${getBusinessInfo[0].contact_number}`}>
                  <Phone />
                  0507-1420-8110
                </a>
              </div>
            </div>
          </div>
        ) : (
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
                <a
                  href="https://www.instagram.com/forrest_hwayeondang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  instagram
                </a>
              </div>
              <div className="social-link-content">
                <a
                  href="https://blog.naver.com/forrestbyhyd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Blog />
                  네이버 블로그
                </a>
              </div>
              <div className="social-link-content">
                <a href="tel:0507-1420-8110">
                  <Phone />
                  0507-1420-8110
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="copyright">Ⓒ All rights reserved</div>
      </section>
    </footer>
  );
};

export default Footer;
