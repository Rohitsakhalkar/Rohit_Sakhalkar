import type { MetadataRoute } from "next";

const routes = [
  "/",
  "/projects",
  "/projects/get-it-done",
  "/projects/forge",
  "/projects/data-structures",
  "/projects/learnable",
  "/contributions",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    return [];
  }

  const baseUrl = siteUrl.replace(/\/$/, "");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
