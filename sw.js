const CACHE = 'bam-employee-hub-v1';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if(e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).then(response => {
    if(response.ok) { const copy = response.clone(); caches.open(CACHE).then(c => c.put(e.request,copy)); }
    return response;
  }).catch(() => caches.match(e.request).then(x => x || caches.match('./index.html'))));
});
