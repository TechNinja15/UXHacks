import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new NextResponse('URL is required', { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      return new NextResponse(`Failed to fetch: ${response.statusText}`, { status: response.status });
    }

    let html = await response.text();

    // Inject <base> tag to fix relative links (images, css, js)
    const baseTag = `<base href="${new URL(url).origin}${new URL(url).pathname}">`;
    if (html.includes('<head>')) {
      html = html.replace('<head>', `<head>${baseTag}`);
    } else {
      html = `<head>${baseTag}</head>${html}`;
    }

    // Strip out restrictive meta tags and scripts that might break the iframe
    html = html.replace(/<meta[^>]*http-equiv=["']X-Frame-Options["'][^>]*>/gi, '');
    html = html.replace(/<meta[^>]*http-equiv=["']Content-Security-Policy["'][^>]*>/gi, '');

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'X-Frame-Options': 'ALLOWALL',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error: any) {
    return new NextResponse(`Proxy Error: ${error.message}`, { status: 500 });
  }
}
