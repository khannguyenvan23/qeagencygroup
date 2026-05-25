import Image from "next/image";
import Link from "next/link";
import logo from "../logo-01-main-transparent.png";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="QEAgency home">
          <Image
            src={logo}
            alt="QEAgency"
            className="brand-logo"
            priority
            style={{ width: 92, height: 92 }}
          />
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/about">Về QEAgency</Link>
          <Link className="has-menu" href="/#solutions">Giải pháp</Link>
          <Link className="has-menu" href="/#services">Kiến thức</Link>
          <Link href="/#work">Dự án</Link>
          <Link className="has-menu" href="/#process">Academy</Link>
          <Link href="/#services">Nghề nghiệp</Link>
          <Link href="/contact">Liên hệ</Link>
        </nav>
        <div className="header-actions" aria-label="Header actions">
          <Link className="search-link" href="/contact" aria-label="Tìm kiếm" />
          <Link className="language-link" href="/" aria-label="English">
            EN
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Mở menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile menu">
            <Link href="/about">Về QEAgency</Link>
            <Link href="/#solutions">Giải pháp</Link>
            <Link href="/#services">Kiến thức</Link>
            <Link href="/#work">Dự án</Link>
            <Link href="/#process">Academy</Link>
            <Link href="/#services">Nghề nghiệp</Link>
            <Link href="/contact">Liên hệ</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
