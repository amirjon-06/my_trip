const CACHE_NAME = 'my-trip-assets-v2';
const APP_SHELL_CACHE = 'my-trip-shell-v1';
const scopeUrl = new URL('./', self.registration.scope);
const shellUrls = [scopeUrl.href, new URL('index.html', scopeUrl).href];

self.addEventListener('install', (event) => {
    event.waitUntil(
        Promise.all([
            caches.open(APP_SHELL_CACHE).then((cache) => cache.addAll(shellUrls)),
            caches.open(CACHE_NAME).then(async (cache) => {
                try {
                    const manifestResponse = await fetch(new URL('asset-manifest.json', scopeUrl));
                    if (!manifestResponse.ok) return;
                    const manifest = await manifestResponse.json();
                    const assets = Object.values(manifest.files || {})
                        .filter((path) => path.includes('/static/') && !path.endsWith('.map'))
                        .map((path) => path.startsWith('/')
                            ? new URL(path, self.location.origin).href
                            : new URL(path, scopeUrl).href);
                    await Promise.allSettled(assets.map((asset) => cache.add(asset)));
                } catch (error) {
                    // Keep the app shell available even when the asset manifest cannot be fetched.
                }
            })
        ])
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys
                .filter((key) => key.startsWith('my-trip-') && key !== CACHE_NAME && key !== APP_SHELL_CACHE)
                .map((key) => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

    if (request.mode === 'navigate') {
        event.respondWith(fetch(request).then((response) => {
            const copy = response.clone();
            caches.open(APP_SHELL_CACHE).then((cache) => cache.put(new URL('index.html', scopeUrl).href, copy));
            return response;
        }).catch(async () => (await caches.match(request)) || caches.match(new URL('index.html', scopeUrl).href)));
        return;
    }

    const url = new URL(request.url);
    if (!url.pathname.includes('/static/')) return;
    event.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) await cache.put(request, response.clone());
        return response;
    }));
});
