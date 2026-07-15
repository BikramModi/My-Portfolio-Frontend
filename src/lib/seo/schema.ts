import { siteConfig } from "./site-config";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,

  name: "Bikram Modi",

  url: siteConfig.url,

  image: `${siteConfig.url}${siteConfig.image}`,

  jobTitle: "Full Stack MERN Developer",

  email: siteConfig.email,

  sameAs: [
    siteConfig.github,
    siteConfig.linkedin,
  ],

  worksFor: {
    "@id": `${siteConfig.url}/#website`,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: "Bikram Modi",
  alternateName: "Bikram Modi Portfolio",
};

export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfolio Projects",
  description: "Software projects developed by Bikram Modi.",
  url: "https://bikrammodi.com/projects",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: "Bikram Modi",
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.image}`,
};