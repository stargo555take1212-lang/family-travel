// アプリとして入れられるようにするための最小のサービスワーカー。
// 何も覚えず（キャッシュせず）、そのままネットに取りに行く。
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* ブラウザにまかせる */ });
