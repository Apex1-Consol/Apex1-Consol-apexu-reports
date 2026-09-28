// Retired 2026-09-28: this portal is now a thin shell that forwards to ApexOne's
// canonical report-generator.html. A browser still running the old worker picks
// this up, removes ONLY this portal's cached pages (the cache name is shared with
// ApexOne's own worker on the same origin, so the cache itself is kept), then
// unregisters itself and reloads its pages from the network.
var SCOPE_PATH = '/Apex1-Consol-apexu-reports/';
function dropPortalEntries() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) {
      return caches.open(k).then(function (c) {
        return c.keys().then(function (reqs) {
          return Promise.all(reqs.filter(function (r) { return new URL(r.url).pathname.indexOf(SCOPE_PATH) === 0; })
            .map(function (r) { return c.delete(r); }));
        });
      });
    }));
  });
}
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    dropPortalEntries()
      .then(function () { return self.registration.unregister(); })
      .then(function () { return self.clients.matchAll({ type: 'window' }); })
      .then(function (clients) { clients.forEach(function (c) { c.navigate(c.url); }); })
  );
});
