import type { Metadata } from "next";

export const SITE_URL = "https://messe.ae";
const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg";
const DEFAULT_TWITTER_IMAGE_PATH = "/twitter-image.jpg";

export const DEFAULT_KEYWORDS = [
  "exhibition stand contractor Dubai",
  "exhibition stand contractor in uae",
  "exhibition stand builder Dubai",
  "exhibition stand builder UAE",
  "exhibition company Dubai",
  "exhibition stand",
  "exhibition display stand",
  "display stand exhibition",
  "stand in exhibition",
  "expo stand design",
  "exhibition stand design in dubai",
  "exhibition stand design",
  "design of exhibition stand",
  "exhibition design stand",
  "exhibition company UAE",
  "exhibition stand design UAE",
  "exhibition stand builder",
  "dubai exhibition stand contractor",
  "exhibition contractors in dubai",
  "expo stand builders",
  "exhibition builder dubai",
];

export const toAbsoluteUrl = (path: string): string => {
  if (!path) {
    return SITE_URL;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
};

const DEFAULT_OG_IMAGE = toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH);
const DEFAULT_TWITTER_IMAGE = toAbsoluteUrl(DEFAULT_TWITTER_IMAGE_PATH);

interface CreateMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
}

export const createMetadata = ({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
}: CreateMetadataOptions): Metadata => {
  const url = toAbsoluteUrl(path);
  const resolvedImage = image ? toAbsoluteUrl(image) : DEFAULT_OG_IMAGE;
  const uniqueKeywords = Array.from(
    new Set(
      [...DEFAULT_KEYWORDS, ...keywords]
        .map((keyword) => keyword.trim())
        .filter((keyword) => keyword.length > 0)
    )
  );

  return {
    title,
    description,
    keywords: uniqueKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: "Messe.ae",
      locale: "en_US",
      images: [{ url: resolvedImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage || DEFAULT_TWITTER_IMAGE],
    },
  };
};
