"use server";

import * as cheerio from "cheerio";

export async function fetchLinkPreview(url: string) {
  if (!url) return { error: "URL is required" };

  try {
    const parsedUrl = new URL(url);
    const isGitHub = parsedUrl.hostname === "github.com";

    if (isGitHub) {
      const parts = parsedUrl.pathname.split("/").filter(Boolean);
      if (parts.length >= 2) {
        const [owner, repo] = parts;
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
          headers: {
            "Accept": "application/vnd.github.html",
            "User-Agent": "UXHacks-Link-Preview"
          },
          next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (response.ok) {
          const html = await response.text();
          return {
            type: "github" as const,
            owner,
            repo,
            readmeHtml: html,
            url
          };
        }
      }
    }

    // Standard Website Preview
    const response = await fetch(url, {
      headers: {
        "User-Agent": "UXHacks-Link-Preview"
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch website");
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Check if the site blocks iframes
    const xFrameOptions = response.headers.get("x-frame-options") || "";
    const contentSecurityPolicy = response.headers.get("content-security-policy") || "";
    const blocksIframe = 
      xFrameOptions.toUpperCase().includes("DENY") || 
      xFrameOptions.toUpperCase().includes("SAMEORIGIN") ||
      contentSecurityPolicy.includes("frame-ancestors 'none'") ||
      contentSecurityPolicy.includes("frame-ancestors 'self'");

    const getMeta = (property: string) => {
      return (
        $(`meta[property="${property}"]`).attr("content") ||
        $(`meta[name="${property}"]`).attr("content") ||
        null
      );
    };

    const getFavicon = () => {
      let href = $('link[rel="icon"]').attr("href") || 
                 $('link[rel="shortcut icon"]').attr("href") || 
                 $('link[rel="apple-touch-icon"]').attr("href");
      
      if (href) {
        if (!href.startsWith("http")) {
          href = new URL(href, url).href;
        }
        return href;
      }
      return new URL("/favicon.ico", url).href;
    };

    const getImageUrl = () => {
      let image = getMeta("og:image") || getMeta("twitter:image");
      if (image && !image.startsWith("http")) {
        image = new URL(image, url).href;
      }
      return image;
    };

    return {
      type: "website" as const,
      title: getMeta("og:title") || getMeta("twitter:title") || $("title").text() || parsedUrl.hostname,
      description: getMeta("og:description") || getMeta("twitter:description") || getMeta("description") || "No description available.",
      image: getImageUrl() || null,
      favicon: getFavicon(),
      url,
      blocksIframe
    };

  } catch (error: any) {
    console.error("Link Preview Error:", error);
    return { error: error.message || "Invalid URL or failed to fetch" };
  }
}
