import { Metadata } from "next";
import { siteConfig } from "./site-config";

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),

    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    icons: {
        icon: "/images/profile.jpg",
        shortcut: "/images/profile.jpg",
        apple: "/images/profile.jpg",
    },

    keywords: siteConfig.keywords,

    authors: [
        {
            name: siteConfig.author,
            url: siteConfig.url,
        },
    ],

    creator: siteConfig.author,

    publisher: siteConfig.author,

    alternates: {
        canonical: siteConfig.url,
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        title: siteConfig.title,

        description: siteConfig.description,

        url: siteConfig.url,

        siteName: siteConfig.name,

        locale: siteConfig.locale,

        type: "website",

        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: siteConfig.title,

        description: siteConfig.description,

        creator: "@yourusername",

        images: [siteConfig.twitterImage],
    },
};