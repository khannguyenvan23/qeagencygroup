import Image from "next/image";
import logo from "../logo-01-main-transparent.png";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Image src={logo} alt="QEAgency" className="footer-logo" />
        <div>
          <strong>QEAgency</strong>
          <span>Digital Growth Partner</span>
        </div>
      </div>
      <div className="footer-info">
        <p className="footer-label">Thông tin công ty</p>
        <h2>CÔNG TY TNHH QE AGENCY</h2>
        <p>Mã số thuế: 0318734806</p>
        <p>Số 10 Sông Thao, Phường Tân Sơn Hòa, Thành Phố Hồ Chí Minh, Việt Nam</p>
      </div>
      <div className="footer-contact">
        <p className="footer-label">Liên hệ</p>
        <a href="tel:0901890811">Hotline: 0901 890 811</a>
        <a href="mailto:info@qeagencygroup.com">Email: info@qeagencygroup.com</a>
      </div>
    </footer>
  );
}
