const timestamp = 1649096427453;
const build = [
  "/_app/start-28cb919c.js",
  "/_app/pages/__layout.svelte-623b95ac.js",
  "/_app/error.svelte-060fe7c8.js",
  "/_app/pages/index.svelte-7ac8d98d.js",
  "/_app/pages/_locale_/__layout.svelte-4d2d1582.js",
  "/_app/pages/_locale_/__error.svelte-6a1b10a8.js",
  "/_app/pages/_locale_/index.svelte-1ca6f301.js",
  "/_app/pages/_locale_/recruitment/index.svelte-5c5ac41f.js",
  "/_app/pages/_locale_/recruitment/deo.svelte-1a4fb687.js",
  "/_app/pages/_locale_/recruitment/ldc.svelte-c85de595.js",
  "/_app/pages/_locale_/recruitment/pa.svelte-4055df3a.js",
  "/_app/pages/_locale_/activities/index.svelte-821a809a.js",
  "/_app/pages/_locale_/activities/beet-sugar-processing.svelte-f712171a.js",
  "/_app/pages/_locale_/activities/fish-processing.svelte-36cf54e1.js",
  "/_app/pages/_locale_/activities/food-processing.svelte-aa53306e.js",
  "/_app/pages/_locale_/activities/ghee-processing.svelte-b1df54e5.js",
  "/_app/pages/_locale_/activities/meat-processing.svelte-0ddd9618.js",
  "/_app/pages/_locale_/gallery.svelte-f0c5f44f.js",
  "/_app/pages/_locale_/about/index.svelte-91d44c5d.js",
  "/_app/pages/_locale_/about/officers-directory.svelte-ee52cc83.js",
  "/_app/pages/_locale_/about/list-of-drivers.svelte-4eb53beb.js",
  "/_app/pages/_locale_/about/key-persons.svelte-457a54aa.js",
  "/_app/pages/_locale_/about/list-of-pas.svelte-dfaed211.js",
  "/_app/pages/_locale_/about/importance.svelte-c13c79b8.js",
  "/_app/pages/_locale_/about/objectives.svelte-e8ff9930.js",
  "/_app/pages/_locale_/about/staff-list.svelte-5e0c11f3.js",
  "/_app/pages/_locale_/about/history.svelte-03c15750.js",
  "/_app/pages/_locale_/_...no_route_.svelte-6940e129.js",
  "/_app/chunks/vendor-08efcc10.js",
  "/_app/chunks/paths-4b3c6e7e.js",
  "/_app/chunks/singletons-a6a7384f.js",
  "/_app/chunks/navigation-bd39ff07.js",
  "/_app/chunks/stores-d101fe06.js",
  "/_app/chunks/i18n-c9015cc1.js",
  "/_app/chunks/config-9b6411d1.js",
  "/_app/chunks/Link-7ff5eae3.js",
  "/_app/chunks/Meta-1fb2756b.js"
];
const files = [
  "/.nojekyll",
  "/apple-touch-icon.png",
  "/CNAME",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/global.css",
  "/icon-192x192.png",
  "/icon-512x512.png",
  "/images/img-1.jpeg",
  "/images/img-10.jpeg",
  "/images/img-101.jpeg",
  "/images/img-102.jpeg",
  "/images/img-103.jpeg",
  "/images/img-104.jpeg",
  "/images/img-105.jpeg",
  "/images/img-106.jpeg",
  "/images/img-107.jpeg",
  "/images/img-108.jpeg",
  "/images/img-109.jpeg",
  "/images/img-1091.jpeg",
  "/images/img-11.jpeg",
  "/images/img-110.jpeg",
  "/images/img-12.jpeg",
  "/images/img-13.jpeg",
  "/images/img-14.jpeg",
  "/images/img-15.jpeg",
  "/images/img-16.jpeg",
  "/images/img-17.jpeg",
  "/images/img-18.jpeg",
  "/images/img-2.jpeg",
  "/images/img-301.jpeg",
  "/images/img-302.jpeg",
  "/images/img-4.jpeg",
  "/images/img-401.jpeg",
  "/images/img-402.jpeg",
  "/images/img-5.jpeg",
  "/images/img-6.jpeg",
  "/images/img-7.jpeg",
  "/images/img-8.jpeg",
  "/images/img-9.jpeg",
  "/images/mr-surendra-pal-old.jpeg",
  "/images/mr-surendra-pal.jpeg",
  "/logo-2.png",
  "/logo.png",
  "/robots.txt",
  "/tailwind.css",
  "/web.manifest.json"
];
const CACHED_ASSESTS = `cache-${timestamp}`;
const TO_CACHE = build.concat(files);
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHED_ASSESTS).then((cache) => cache.addAll(TO_CACHE)));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (!key.includes(timestamp))
        caches.delete(key);
    }
    self.clients.claim();
  }));
});
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (!(request.url.indexOf("http") === 0))
    return;
  if (request.method !== "GET" || request.headers.has("range") || request.cache === "only-if-cached" && request.mode !== "same-origin")
    return;
  const url = new URL(request.url);
  const cached = caches.match(request);
  if (url.origin === location.origin && TO_CACHE.includes(url.pathname)) {
    event.respondWith(cached);
  } else if (url.protocol === "https:" || location.hostname === "localhost") {
    const promise = fetch(request);
    promise.then((response) => {
      if (response.ok && response.type === "basic") {
        const clone = response.clone();
        caches.open(CACHED_ASSESTS).then((cache) => {
          cache.put(request, clone);
        });
      }
    });
    event.respondWith(promise.catch(() => cached || promise));
  }
});
