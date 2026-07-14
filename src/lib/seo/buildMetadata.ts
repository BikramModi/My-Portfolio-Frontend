import { Metadata } from "next";
import { siteConfig } from "./site-config";

interface Props {
  title?: string;

  description?: string;

  path?: string;

  image?: string;

  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: Props): Metadata {
  const url = `${siteConfig.url}${path}`;

  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const metaDescription =
    description ?? siteConfig.description;

  const ogImage = image ?? siteConfig.ogImage;

  return {
    title: metaTitle,

    description: metaDescription,

    alternates: {
      canonical: url,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
    },

    openGraph: {
      title: metaTitle,

      description: metaDescription,

      url,

      images: [ogImage],
    },

    twitter: {
      card: "summary_large_image",

      title: metaTitle,

      description: metaDescription,

      images: [ogImage],
    },
  };
}