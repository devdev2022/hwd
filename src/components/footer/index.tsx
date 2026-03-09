//query
import { useGetBusinessInfo, useGetWeddingBusinessInfo } from "@/query/common";

//resource
import Phone from "@/assets/phone.svg?react";
import Instagram from "@/assets/instagram.svg?react";
import Blog from "@/assets/blog.svg?react";

const Footer = ({ variant }: { variant?: "wedding" }) => {
  const { data: businessInfo } = useGetBusinessInfo();
  const { data: weddingBusinessInfo } = useGetWeddingBusinessInfo();

  const info = variant === "wedding" ? weddingBusinessInfo?.[0] : businessInfo?.[0];

  return (
    <footer>
      <section className={`contacts${variant === "wedding" ? " contacts-wedding" : ""}`}>
        {info ? (
          <div className="contacts-container">
            <div className="contact-content">
              {info.business_address}
              <br />
              사업자 번호 :{info.business_number}
              <br />
              상호 : {info.business_name} <br />
              대표 : {info.ceo_name} <br />
              이메일: {info.email_address} <br />
            </div>
            <div className="social-link">
              <div className="social-link-content">
                <a
                  href={info.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                  instagram
                </a>
              </div>
              <div className="social-link-content">
                <a
                  href={info.blog_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Blog />
                  네이버 블로그
                </a>
              </div>
              <div className="social-link-content">
                <a href={`tel:${info.contact_number}`}>
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
              사업자 번호 : 134-53-00842 <br />
              상호 : 화연당 <br />
              대표 : 배혜민 <br />
              이메일: hwd@hwayeondang.com
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
