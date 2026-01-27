import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ieeetxst.org", lastModified: new Date() },
    { url: "https://ieeetxst.org/events", lastModified: new Date() },
    { url: "https://ieeetxst.org/officers", lastModified: new Date() },
    { url: "https://ieeetxst.org/committees", lastModified: new Date() },
    { url: "https://ieeetxst.org/membership", lastModified: new Date() },
  ];
}