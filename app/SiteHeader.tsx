import Image from "next/image";
import Link from "next/link";
import logo from "../logo-01-main-transparent.png";

const navItems = [
  { href: "/about", label: "Về QEAgency" },
  { href: "/services", label: "Dịch vụ", hasMenu: true },
  { href: "/insights", label: "Kiến thức", hasMenu: true },
  { href: "/blog", label: "Bài viết" },
  { href: "/work", label: "Dự án" },
  { href: "/partners", label: "Đối tác", hasMenu: true },
  { href: "/careers", label: "Nghề nghiệp" },
  { href: "/contact", label: "Liên hệ" },
];

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
          {navItems.map((item) => (
            <Link
              className={item.hasMenu ? "has-menu" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions" aria-label="Header actions">
          <Link className="search-link" href="/blog" aria-label="Tìm bài viết" />
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
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
