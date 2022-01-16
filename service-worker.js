const timestamp = 1642372266097;
const build = [
  "/_app/start-0b1a3b44.js",
  "/_app/assets/start-464e9d0a.css",
  "/_app/pages/__layout.svelte-b73fff88.js",
  "/_app/pages/__error.svelte-02755dcc.js",
  "/_app/pages/index.svelte-5eaea327.js",
  "/_app/pages/gallery.svelte-a8b03695.js",
  "/_app/pages/about.svelte-d17dcd99.js",
  "/_app/chunks/vendor-64dcd3b2.js",
  "/_app/chunks/locale-4dcc8528.js",
  "/_app/chunks/Meta-6a2cfcbd.js"
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
  "/images/img-2.jpeg",
  "/images/img-3.jpeg",
  "/images/img-4.jpeg",
  "/images/img-5.jpeg",
  "/images/img-6.jpeg",
  "/images/mr-surendra-pal-2.jpeg",
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
