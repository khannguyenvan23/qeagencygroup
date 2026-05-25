import type { Metadata } from "next";

export const siteConfig = {
  name: "QEAgency",
  legalName: "CÔNG TY TNHH QE AGENCY",
  url: "https://qeagencygroup.com",
  description:
    "QEAgency là đối tác tăng trưởng số kết hợp chiến lược, nội dung, thiết kế, công nghệ và quảng cáo hiệu suất cho doanh nghiệp.",
  email: "info@qeagencygroup.com",
  phone: "+84901890811",
  address:
    "Số 10 Sông Thao, Phường Tân Sơn Hòa, Thành Phố Hồ Chí Minh, Việt Nam",
  taxId: "0318734806",
  ogImage: "/og-image.svg",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  type = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "vi_VN",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Digital Growth Partner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/og-image.svg"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    taxID: siteConfig.taxId,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "VN",
    },
    sameAs: [siteConfig.url],
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(image),
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/og-image.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(path),
  };
}
