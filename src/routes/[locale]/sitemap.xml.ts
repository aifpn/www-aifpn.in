/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { cfg } from "$lib/config";

export async function get({ params }) {
    let urls = "";

    for (const route of [
        "",
        "/about/history",
        "/about/importance",
        "/about/objectives",
        "/about/key-persons",
        "/about/officers-directory",
        "/about/staff-list",
        "/about/list-of-pas",
        "/about/list-of-drivers",
        "/activities",
        "/activities/food-processing",
        "/activities/beet-sugar-processing",
        "/activities/milk-processing",
        "/activities/ghee-processing",
        "/activities/fish-processing",
        "/activities/meat-processing",
        "/recruitment/ldc",
        "/recruitment/deo",
        "/recruitment/pa",
        "/gallery",
    ]) {
        let data = "";

        for (const locale of ["en", "hi"]) {
            if (params.locale === locale) {
                data += `
                <loc>${cfg.base_url}/${locale}${route}</loc>`;
            } else {
                data += `
                <xhtml:link
                    rel="alternate"
                    hreflang="${locale}"
                    href="${cfg.base_url}/${locale}${route}"/>`;
            }
        }

        urls += `
            <url>
                ${data}
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>`;
    }

    return {
        headers: {
            "Cache-Control": "max-age=0, s-maxage=3600",
            "Content-Type": "application/xml",
        },
        body: `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
            ${urls}
        </urlset>`,
    };
}
