"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../logo-01-main-transparent.png";

const viNavItems = [
  { href: "/about", label: "Về QEAgency" },
  { href: "/services", label: "Dịch vụ", hasMenu: true },
  { href: "/insights", label: "Kiến thức", hasMenu: true },
  { href: "/blog", label: "Bài viết" },
  { href: "/work", label: "Dự án" },
  { href: "/partners", label: "Đối tác", hasMenu: true },
  { href: "/careers", label: "Nghề nghiệp" },
  { href: "/contact", label: "Liên hệ" },
];

const enNavItems = [
  { href: "/about", label: "About QEAgency" },
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/insights", label: "Insights", hasMenu: true },
  { href: "/blog", label: "Blog" },
  { href: "/work", label: "Work" },
  { href: "/partners", label: "Partners", hasMenu: true },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const toEnglishPath = (pathname: string) => {
  if (pathname === "/en" || pathname.startsWith("/en/")) return pathname;
  return pathname === "/" ? "/en" : `/en${pathname}`;
};

const toVietnamesePath = (pathname: string) => {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.replace(/^\/en/, "") || "/";
  return pathname || "/";
};

const localizeHref = (href: string, isEnglish: boolean) =>
  isEnglish ? (href === "/" ? "/en" : `/en${href}`) : href;

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const navItems = isEnglish ? enNavItems : viNavItems;
  const languageHref = isEnglish ? toVietnamesePath(pathname) : toEnglishPath(pathname);
  const languageLabel = isEnglish ? "VI" : "EN";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="brand"
          href={isEnglish ? "/en" : "/"}
          aria-label="QEAgency home"
        >
          <Image
            src={logo}
            alt="QEAgency"
            className="brand-logo"
            priority
            style={{ width: 118, height: 118 }}
          />
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              className={item.hasMenu ? "has-menu" : undefined}
              href={localizeHref(item.href, isEnglish)}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions" aria-label="Header actions">
          <Link
            className="search-link"
            href={localizeHref("/blog", isEnglish)}
            aria-label={isEnglish ? "Search articles" : "Tìm bài viết"}
          />
          <Link
            className="language-link"
            href={languageHref}
            aria-label={isEnglish ? "Chuyển sang tiếng Việt" : "Switch to English"}
          >
            {languageLabel}
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label={isEnglish ? "Open menu" : "Mở menu"}>
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile menu">
            {navItems.map((item) => (
              <Link href={localizeHref(item.href, isEnglish)} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href={languageHref}>{languageLabel}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
