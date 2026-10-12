import type { Locale } from "@/i18n/routing";

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: Locale;
}

export const siteConfig: SiteConfig = {
  name: "Home Alone Anomalies Wiki",
  shortName: "Home Alone Anomalies",
  logoText: "HA",
  tagline: "Visitor Guides, Anomaly Checklists & Survival Walkthroughs",
  description: "Your ultimate guide to Home Alone Anomalies on Roblox! Identify suspicious visitors, spot anomalies with camera and audio clues, and survive every night.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://home-alone-anomalies.wiki",
  supportEmail: "support@home-alone-anomalies.wiki",
  gameUrl: "https://www.roblox.com/games/87468080405188/Home-Alone-Anomalies",
  heroVideoId: "F3I-qzX8hfg", // Roblox Home Alone Anomalies visitors & anomalies tutorial
  social: {
    discord: "https://www.roblox.com/groups/715675394",
    youtube: "https://www.youtube.com/results?search_query=Home+Alone+Anomalies+Roblox",
  },
  locales: ["en", "es", "pt", "de"],
  defaultLocale: "en",
};
