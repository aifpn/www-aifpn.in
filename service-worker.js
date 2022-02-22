const timestamp = 1645551083342;
const build = [
  "/_app/start-97fe3b0f.js",
  "/_app/pages/__layout.svelte-7aff71e6.js",
  "/_app/error.svelte-4931a945.js",
  "/_app/pages/index.svelte-6bd26805.js",
  "/_app/pages/_locale_/__layout.svelte-0c057fc1.js",
  "/_app/pages/_locale_/__error.svelte-aeaa3d69.js",
  "/_app/pages/_locale_/index.svelte-85009c5c.js",
  "/_app/pages/_locale_/food-processing.svelte-6d4cfdde.js",
  "/_app/pages/_locale_/gallery.svelte-452f28c0.js",
  "/_app/pages/_locale_/about/index.svelte-ef57623b.js",
  "/_app/pages/_locale_/about/key-persons.svelte-f9a385a2.js",
  "/_app/pages/_locale_/about/importance.svelte-18a45773.js",
  "/_app/pages/_locale_/about/objectives.svelte-f6959cd5.js",
  "/_app/pages/_locale_/about/history.svelte-30e204ff.js",
  "/_app/pages/_locale_/_...no_route_.svelte-7b71e724.js",
  "/_app/chunks/vendor-e664f212.js",
  "/_app/chunks/paths-4b3c6e7e.js",
  "/_app/chunks/singletons-a6a7384f.js",
  "/_app/chunks/navigation-bd39ff07.js",
  "/_app/chunks/stores-6a897e73.js",
  "/_app/chunks/i18n-e38fe164.js",
  "/_app/chunks/config-9b6411d1.js",
  "/_app/chunks/Meta-5a44dde1.js"
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
  "/images/img-11.jpeg",
  "/images/img-12.jpeg",
  "/images/img-13.jpeg",
  "/images/img-14.jpeg",
  "/images/img-15.jpeg",
  "/images/img-16.jpeg",
  "/images/img-2.jpeg",
  "/images/img-3.jpeg",
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
