const CACHE_NAME = 'avurudu-2026-v3';
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
self.addEventListener('message', async (event) => {
  if (event.data && event.data.action === 'schedule-nekath-alerts') {
    const { nekathData, settings } = event.data;
    
    // First, clear any previously scheduled notifications if possible
    // (Notification Triggers API doesn't have a direct "clear all" yet, 
    // but we can try to get them and close them if supported)
    if ('getNotifications' in self.registration) {
      const notifications = await self.registration.getNotifications();
      notifications.forEach(n => {
        if (n.tag && n.tag.startsWith('nekath-')) {
          n.close();
        }
      });
    }

    const now = Date.now();
    
    // Schedule new notifications
    nekathData.forEach(eventData => {
      if (!settings.enabledNekaths.includes(eventData.id)) return;
      
      const eventTime = new Date(eventData.time).getTime();
      
      settings.intervals.forEach(minutesBefore => {
        const triggerTime = eventTime - (minutesBefore * 60 * 1000);
        
        // Only schedule if it's in the future
        if (triggerTime > now) {
          let title, body;
          if (minutesBefore === 0) {
            title = `${eventData.msgSiTitle} | ${eventData.msgEnTitle}`;
            body = eventData.msgSiDesc;
          } else {
            title = `${eventData.msgSiCountdown} තව විනාඩි ${minutesBefore}යි! ⏳`;
            body = `${minutesBefore} mins remaining for ${eventData.titleEn}`;
          }

          const tag = `nekath-${eventData.id}-${minutesBefore}`;
          const icon = 'https://picsum.photos/seed/avurudu/192/192';

          if ('showTrigger' in Notification.prototype) {
            self.registration.showNotification(title, {
              body: body,
              icon: icon,
              badge: icon,
              vibrate: [200, 100, 200],
              tag: tag,
              showTrigger: new TimestampTrigger(triggerTime)
            });
          } else {
            // Fallback for browsers without Notification Triggers API
            // Note: This relies on the SW staying alive, which is not guaranteed.
            const delay = triggerTime - now;
            // Only use setTimeout if it's within a reasonable timeframe (e.g., 24 hours)
            if (delay < 24 * 60 * 60 * 1000) {
              setTimeout(() => {
                self.registration.showNotification(title, {
                  body: body,
                  icon: icon,
                  badge: icon,
                  vibrate: [200, 100, 200],
                  tag: tag
                });
              }, delay);
            }
          }
        }
      });
    });
  } else if (event.data && event.data.action === 'schedule-test') {
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
