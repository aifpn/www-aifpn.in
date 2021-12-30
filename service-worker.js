const timestamp = 1640850977102;
const build = [
  "/_app/start-8cc54c3b.js",
  "/_app/assets/start-464e9d0a.css",
  "/_app/pages/__layout.svelte-f19e793e.js",
  "/_app/pages/__error.svelte-987e5815.js",
  "/_app/pages/index.svelte-4a042b68.js",
  "/_app/pages/gallery.svelte-c59adf24.js",
  "/_app/pages/about.svelte-9b01ab01.js",
  "/_app/chunks/vendor-9e861a44.js",
  "/_app/chunks/config-9f733ca2.js",
  "/_app/chunks/Meta-0e751676.js"
];
const files = [
  "/apple-touch-icon.png",
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
