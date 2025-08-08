export const siteConfig = {
  name: "Download Vimeo",
  url: "https://downloadvimeo.com",
  description: "Download Vimeo videos, audio, transcripts, mp4s, and more - on chrome, firefox, windows or mac.",
  title: "Download Vimeo - Online Tools for Downloading Vimeo Videos, Audio, Transcripts & More",
  author: {
    name: "Mr Video Downloader",
    email: "contact@downloadvimeo.com",
  },
  social: {
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
  },
  categories: [
    "Vimeo Downloaders",
  ],
  metadata: {
    keywords: ["download vimeo", "vimeo downloader", "vimeo video download", "vimeo mp4", "vimeo audio download", "vimeo transcript", "vimeo to mp4", "download vimeo chrome", "download vimeo firefox", "vimeo download windows", "vimeo download mac", "online vimeo downloader", "free vimeo download"],
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Download Vimeo",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;