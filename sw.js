/* HomeDex service worker: the page works offline and installs as an app.
   Page: network first (always the latest version when online), cached copy when offline.
   Sprites (Poképédia): kept after the first view, so they show offline too. */
const SHELL = "homedex-shell-2.1", IMG = "homedex-img";
const ASSETS = ["/", "/manifest.webmanifest", "/icon-192.png", "/icon-512.png", "/icon-maskable-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(SHELL).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== IMG).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(SHELL).then(c => c.put("/", cp)); } return res; })
      .catch(() => caches.match("/")));
    return;
  }
  if (u.origin === location.origin) {
    if (u.pathname.startsWith("/_vercel/")) return;
    e.respondWith(caches.match(r).then(m => m || fetch(r)));
    return;
  }
  if (u.hostname === "www.pokepedia.fr" && r.destination === "image") {
    e.respondWith(caches.open(IMG).then(async c => {
      const m = await c.match(r); if (m) return m;
      const res = await fetch(r);
      c.keys().then(k => { if (k.length < 1500) c.put(r, res.clone()).catch(() => {}); });
      return res;
    }));
  }
});
