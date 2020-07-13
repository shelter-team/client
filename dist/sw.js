importScripts("/client/precache-manifest.b5919398d6f800cae5fa0f5ece4c07f0.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
  '/offline.html',
]

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install')
  evt.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('[ServiceWorker] Pre-caching offline page')
			return cache.addAll(FILES_TO_CACHE)
		})
	)

  self.skipWaiting()
})

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  evt.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(keyList.map((key) => {
				if (key !== CACHE_NAME) {
					console.log('[ServiceWorker] Removing old cache', key)
					return caches.delete(key)
				}
			}))
		})
	)

  self.clients.claim()
})

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  if (evt.request.mode !== 'navigate') {
		// Not a page navigation, bail.
		return
	}
	
	evt.respondWith(
		fetch(evt.request)
			.catch(() => {
				return caches.open(CACHE_NAME)
					.then((cache) => {
						return cache.match('offline.html')
					})
			})
	)
})


