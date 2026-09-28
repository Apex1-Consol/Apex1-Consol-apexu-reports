// Retired 2026-09-28: this portal is now a thin shell that forwards to ApexOne's
// canonical report-generator.html. Any browser still running the old worker picks
// this up, clears the old caches (which held a stale copy of the generator),
// unregisters itself and reloads its pages from the network.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.registration.unregister(); })
      .then(function () { return self.clients.matchAll({ type: 'window' }); })
      .then(function (clients) { clients.forEach(function (c) { c.navigate(c.url); }); })
  );
});
