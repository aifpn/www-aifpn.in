const timestamp = 1645884534892;
const build = [
  "/_app/start-726ddd93.js",
  "/_app/pages/__layout.svelte-034c9413.js",
  "/_app/error.svelte-68b95c9f.js",
  "/_app/pages/index.svelte-ca9b67d5.js",
  "/_app/pages/_locale_/__layout.svelte-c53236c4.js",
  "/_app/pages/_locale_/__error.svelte-a3c953cd.js",
  "/_app/pages/_locale_/index.svelte-fdb59cf8.js",
  "/_app/pages/_locale_/activities/index.svelte-112b2fdd.js",
  "/_app/pages/_locale_/activities/fish-processing.svelte-07aa1f3c.js",
  "/_app/pages/_locale_/activities/food-processing.svelte-878b5b77.js",
  "/_app/pages/_locale_/gallery.svelte-bf42aacc.js",
  "/_app/pages/_locale_/about/index.svelte-9e239287.js",
  "/_app/pages/_locale_/about/key-persons.svelte-f6c351f7.js",
  "/_app/pages/_locale_/about/importance.svelte-20164ba3.js",
  "/_app/pages/_locale_/about/objectives.svelte-91209712.js",
  "/_app/pages/_locale_/about/history.svelte-96ec50c2.js",
  "/_app/pages/_locale_/_...no_route_.svelte-03fce59b.js",
  "/_app/chunks/vendor-3bd315f7.js",
  "/_app/chunks/paths-4b3c6e7e.js",
  "/_app/chunks/singletons-a6a7384f.js",
  "/_app/chunks/navigation-bd39ff07.js",
  "/_app/chunks/stores-7bee7670.js",
  "/_app/chunks/i18n-239c4c54.js",
  "/_app/chunks/config-9b6411d1.js",
  "/_app/chunks/Link-c75c1eed.js",
  "/_app/chunks/Meta-2f0a0659.js"
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
  "/images/img-4.jpeg",
  "/images/img-5.jpeg",
  "/images/img-6.jpeg",
  "/images/img-7.jpeg",
  "/images/img-8.jpeg",
  "/images/img-9.jpeg",
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
