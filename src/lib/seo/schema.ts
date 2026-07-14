import { siteConfig } from "./site-config";

export const personSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  name: siteConfig.author,

  url: siteConfig.url,

  image: `${siteConfig.url}${siteConfig.image}`,

  jobTitle: "Full Stack MERN Developer",

  email: siteConfig.email,

  sameAs: [
    siteConfig.github,
    siteConfig.linkedin,
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: siteConfig.name,

  url: siteConfig.url,
};

export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfolio Projects",
  description: "Software projects developed by Bikram Modi.",
  url: "https://bikrammodi.com/projects",
};