import type { MetadataRoute } from "next";
import { caseStudies, insights, jobs, services } from "./data/site";
import { absoluteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/work",
    "/insights",
    "/blog",
    "/partners",
    "/careers",
  ];

  const dynamicRoutes = [
    ...services.map((item) => `/services/${item.slug}`),
    ...caseStudies.map((item) => `/work/${item.slug}`),
    ...insights.map((item) => `/insights/${item.slug}`),
    ...insights.map((item) => `/blog/${item.slug}`),
    ...jobs.map((item) => `/careers/${item.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date(),
    changeFrequency: route.includes("/blog/") || route.includes("/insights/")
      ? "monthly"
      : "weekly",
    priority: route === "" ? 1 : route.includes("/blog/") ? 0.7 : 0.8,
  }));
}
