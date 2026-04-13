const CACHE_NAME = 'avurudu-2026-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/src/index.css',
  '/src/app.js',
  '/manifest.json'
];

// Install Event - Caching Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching core assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event - Cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Cache-First Strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Notification Click Event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // If a window is already open, focus it
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise, open a new window
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'schedule-test') {
    const titleImmediate = "🔔 Immediate Background Test";
    const bodyImmediate = "This is your immediate test. The 5-minute test is scheduled. You can close the app now!";
    
    const titleDelayed = "⏳ 5-Minute Test Successful!";
    const bodyDelayed = "This notification was scheduled 5 minutes ago! The background system works.";

    const icon = '/icon-192.png';

    // Show immediate notification
    self.registration.showNotification(titleImmediate, {
      body: bodyImmediate,
      icon: icon,
      vibrate: [200, 100, 200],
      tag: 'test-immediate'
    });

    // Schedule 5-minute notification
    // Check if Notification Triggers API is supported
    if ('showTrigger' in Notification.prototype) {
      self.registration.showNotification(titleDelayed, {
        body: bodyDelayed,
        icon: icon,
        vibrate: [200, 100, 200],
        tag: 'test-delayed',
        showTrigger: new TimestampTrigger(Date.now() + 5 * 60 * 1000)
      });
    } else {
      // Fallback: use setTimeout (might be killed by aggressive OS battery management, but best effort)
      setTimeout(() => {
        self.registration.showNotification(titleDelayed, {
          body: bodyDelayed + " (Fallback mode)",
          icon: icon,
          vibrate: [200, 100, 200],
          tag: 'test-delayed'
        });
      }, 5 * 60 * 1000);
    }
  }
});
