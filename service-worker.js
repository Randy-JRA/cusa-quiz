const CACHE_NAME = "cusa-quiz-v1";
const APP_SHELL = [
  "./index.html",
  "./style.css",
  "./app.js",
  "./icons.js",
  "./study-notes.js",
  "./manifest.webmanifest",
  "./app-icon.svg",
  "./questions/s1.js",
  "./questions/s2.js",
  "./questions/s3.js",
  "./questions/s4.js",
  "./questions/s5.js",
  "./questions/s6.js",
  "./questions/p2.js",
  "./questions/p3.js",
  "./questions/p4.js",
  "./questions/p5.js"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith("cusa-quiz-") && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
        return response;
      }).catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});

