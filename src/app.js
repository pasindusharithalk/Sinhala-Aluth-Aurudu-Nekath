

import './index.css';


// Times are in Sri Lanka Standard Time (UTC+5:30)
const NEKATH_DATA = [
  {
    id: 1,
    titleSi: "පුණ්‍ය කාලය ආරම්භය",
    titleEn: "Nonagathaya Begins",
    time: "2026-04-14T03:08:00+05:30",
    notified: { 15: false, 10: false, 5: false, 0: false },
    modalShown: false,
    msgSiTitle: "පුණ්ය කාලය ආරම්භ විය",
    msgSiDesc: "සියලු වැඩ අතහැර ආගමික වතාවන්, අධ්යාත්මික කටයුතු, පුන්ය කටයුතු වල නිරත වනු මැනවි",
    msgEnTitle: "Nonagathaya Has Begun",
    msgSiCountdown: "පුණ්ය කාලය ආරම්භයට"
  },
  {
    id: 2,
    titleSi: "අවුරුදු උදාව",
    titleEn: "New Year Dawn",
    time: "2026-04-14T09:32:00+05:30",
    notified: { 15: false, 10: false, 5: false, 0: false },
    modalShown: false,
    msgSiTitle: "සිංහල අලුත් අවුරුද්ද උදාවෙයි!",
    msgSiDesc: "ඔබ සැමට ලැබුවා වූ සිංහල අලුත් අවුරුද්ද සුබම සුබ සිංහල අලුත් අවුරුද්දක් වේවා!",
    msgEnTitle: "Sinhala New Year Has Dawned!",
    msgSiCountdown: "අවුරුදු උදාවට"
  },
  {
    id: 3,
    titleSi: "ආහාර පිසීම",
    titleEn: "Cooking the First Meal",
    time: "2026-04-14T10:41:00+05:30",
    notified: { 15: false, 10: false, 5: false, 0: false },
    modalShown: false,
    msgSiTitle: "ආහාර පිසීමේ නැකත උදාවෙයි!",
    msgSiDesc: "රක්ත වර්ණ වස්ත්රාභරණයෙන් සැරසී දකුණු දිශාව බලා ලිප් බැඳ ලිප ගිනි මොළවා කිරිබතක්ද, කැවිලි වර්ගයක්ද පිළියල කර මැනවි",
    msgEnTitle: "Auspicious Time for Cooking Has Arrived!",
    msgSiCountdown: "ආහාර පිසීමේ නැකතට"
  },
  {
    id: 4,
    titleSi: "වැඩ ඇල්ලීම සහ ගනුදෙනු කිරීම",
    titleEn: "First Work & Transactions",
    time: "2026-04-14T12:05:00+05:30",
    notified: { 15: false, 10: false, 5: false, 0: false },
    modalShown: false,
    msgSiTitle: "වැඩ ඇල්ලීම සහ ගනුදෙනු කිරීම සහ ආහාර අනුභව කිරීමේ නැකත උදාවෙයි!",
    msgSiDesc: "රක්ත වර්ණ වස්ත්රාභරණයෙන් සැරසී දකුණු දිශාව බලා සියලු වැඩ අල්ලා, ගනුදෙනු කොට ආහාර අනුභව කරනු මැනවි",
    msgEnTitle: "Auspicious Time for Work, Transactions & Eating Has Arrived!",
    msgSiCountdown: "වැඩ ඇල්ලීම, ගනුදෙනු කිරීම සහ ආහාර අනුභව කිරීමට"
  },
  {
    id: 5,
    titleSi: "පුණ්‍ය කාලය අවසානය",
    titleEn: "Nonagathaya Ends",
    time: "2026-04-14T15:56:00+05:30",
    notified: { 15: false, 10: false, 5: false, 0: false },
    modalShown: false,
    msgSiTitle: "පුණ්ය කාලය අවසන්",
    msgSiDesc: "",
    msgEnTitle: "Nonagathaya Has Ended",
    msgSiCountdown: "පුණ්ය කාලය අවසානයට"
  },
  {
    id: 6,
    titleSi: "හිස තෙල් ගෑම",
    titleEn: "Anointing Oil",
    time: "2026-04-15T06:54:00+05:30",
    notified: { 15: false, 10: false, 5: false, 0: false },
    modalShown: false,
    msgSiTitle: "හිස තෙල් ගෑමේ නැකත උදාවෙයි!",
    msgSiDesc: "",
    msgEnTitle: "Auspicious Time for Anointing Oil Has Arrived!",
    msgSiCountdown: "හිස තෙල් ගෑමට"
  },
  {
    id: 7,
    titleSi: "රැකියා සඳහා පිටත්වීම",
    titleEn: "Leaving for Work",
    time: "2026-04-20T06:27:00+05:30",
    notified: { 15: false, 10: false, 5: false, 0: false },
    modalShown: false,
    msgSiTitle: "රැකියා සඳහා පිටත්වීම වීමේ නැකත උදාවෙයි!",
    msgSiDesc: "",
    msgEnTitle: "Auspicious Time for Leaving for Work Has Arrived!",
    msgSiCountdown: "රැකියා සඳහා පිටත්වීමට"
  }
];

// --- DOM Elements ---
const nextSiEl = document.getElementById('next-si');
const nextEnEl = document.getElementById('next-en');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const listContainer = document.getElementById('nekath-list-container');
const timerStatusEl = document.getElementById('timer-status');
const notifyBtn = document.getElementById('notify-btn');
const notifyWarning = document.getElementById('notify-warning');
const installBtn = document.getElementById('install-btn');
const toastContainer = document.getElementById('toast-container');
const countdownDisplay = document.getElementById('countdown-display');
const nextNekathaNames = document.getElementById('next-nekatha-names');
const sweetsContainer = document.getElementById('sweets-container');

// Sidebar Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const intervalSettings = document.getElementById('interval-settings');
const nekathSettings = document.getElementById('nekath-settings');
const testNotificationBtn = document.getElementById('test-notification-btn');
const testBgNotificationBtn = document.getElementById('test-bg-notification-btn');

let swRegistration = null;
let isCelebrated = false;

// --- User Settings Management ---
let userSettings = JSON.parse(localStorage.getItem('avuruduSettings')) || {
  intervals: [15, 10, 5, 0],
  enabledNekaths: NEKATH_DATA.map(n => n.id)
};

function saveSettings() {
  localStorage.setItem('avuruduSettings', JSON.stringify(userSettings));
  showToast("Settings saved successfully", "success");
}

function initSettingsUI() {
  // Populate Interval Checkboxes
  const intervalCbs = document.querySelectorAll('.interval-cb');
  intervalCbs.forEach(cb => {
    cb.checked = userSettings.intervals.includes(parseInt(cb.value));
    cb.addEventListener('change', (e) => {
      const val = parseInt(e.target.value);
      if (e.target.checked) {
        if (!userSettings.intervals.includes(val)) userSettings.intervals.push(val);
      } else {
        userSettings.intervals = userSettings.intervals.filter(i => i !== val);
      }
      saveSettings();
    });
  });

  // Populate Nekath Checkboxes
  nekathSettings.innerHTML = '';
  NEKATH_DATA.forEach(nekath => {
    const label = document.createElement('label');
    label.className = 'setting-item';
    
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.value = nekath.id;
    cb.checked = userSettings.enabledNekaths.includes(nekath.id);
    
    cb.addEventListener('change', (e) => {
      const val = parseInt(e.target.value);
      if (e.target.checked) {
        if (!userSettings.enabledNekaths.includes(val)) userSettings.enabledNekaths.push(val);
      } else {
        userSettings.enabledNekaths = userSettings.enabledNekaths.filter(id => id !== val);
      }
      saveSettings();
    });

    label.appendChild(cb);
    label.appendChild(document.createTextNode(` ${nekath.titleSi} (${nekath.titleEn})`));
    nekathSettings.appendChild(label);
  });

  // Sidebar Toggle Logic
  const toggleSidebar = () => {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('open');
  };

  menuBtn.addEventListener('click', toggleSidebar);
  closeSidebarBtn.addEventListener('click', toggleSidebar);
  sidebarOverlay.addEventListener('click', toggleSidebar);

  // Test Notification Logic
  if (testNotificationBtn) {
    testNotificationBtn.addEventListener('click', async () => {
      if (!('Notification' in window)) {
        showToast("Your browser does not support notifications.", "error");
        return;
      }

      if (Notification.permission === 'granted') {
        showNotification("🔔 Test Successful!", "Your notification system is working perfectly for Avurudu 2026.");
        showToast("Test notification sent!", "success");
      } else if (Notification.permission !== 'denied') {
        try {
          const perm = await Notification.requestPermission();
          if (perm === 'granted') {
            showNotification("🔔 Test Successful!", "Your notification system is working perfectly for Avurudu 2026.");
            showToast("Test notification sent!", "success");
          } else {
            showToast("Please enable notifications to receive alerts.", "error");
          }
        } catch (err) {
          console.error("Permission request failed", err);
        }
      } else {
        if (window.self !== window.top) {
          showToast("Notifications are restricted in embedded view. Open app in a new tab.", "error");
        } else {
          showToast("Notifications are blocked in your browser settings.", "error");
        }
      }
    });
  }

  if (testBgNotificationBtn) {
    testBgNotificationBtn.addEventListener('click', async () => {
      if (!('Notification' in window)) {
        showToast("Your browser does not support notifications.", "error");
        return;
      }

      if (Notification.permission !== 'granted') {
        const perm = await Notification.requestPermission();
        if (perm !== 'granted') {
          showToast("Please enable notifications to test.", "error");
          return;
        }
      }

      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ action: 'schedule-test' });
        showToast("Background test initiated! Close the app now.", "success");
      } else {
        showToast("Service Worker not active. Please reload the page.", "error");
      }
    });
  }
}

/**
 * Initializes the falling sweets animation
 */
function initSweets() {
  const numSweets = 12; // Reduced amount so it's not too much
  const sweetTypes = ['sweet-kokis', 'sweet-kavum', 'sweet-kiribath', 'sweet-mungkavum'];
  
  for (let i = 0; i < numSweets; i++) {
    const sweet = document.createElement('div');
    const randomType = sweetTypes[Math.floor(Math.random() * sweetTypes.length)];
    sweet.className = `sweet ${randomType}`;
    
    // Randomize properties
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 8 + 7; // 7s to 15s
    const scale = Math.random() * 0.4 + 0.4; // Smaller size limit
    const rotation = Math.random() * 360;
    const opacity = Math.random() * 0.4 + 0.6;

    sweet.style.left = `${left}vw`;
    sweet.style.width = `${24 * scale}px`;
    sweet.style.height = `${24 * scale}px`;
    sweet.style.animationDelay = `${delay}s`;
    sweet.style.animationDuration = `${duration}s`;
    
    // Use CSS variables for keyframes
    sweet.style.setProperty('--scale', scale);
    sweet.style.setProperty('--rotation', `${rotation}deg`);
    sweet.style.setProperty('--opacity', opacity);

    sweetsContainer.appendChild(sweet);
  }
}

/**
 * Custom Toast Notification System
 * @param {string} message 
 * @param {string} type - 'success' or 'error'
 */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  toastContainer.appendChild(toast);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

/**
 * Registers the Service Worker with Error Boundary
 */
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      swRegistration = await navigator.serviceWorker.register('/sw.js');
      console.log('[App] Service Worker registered');
    } catch (error) {
      // Quietly log, but don't break the app
      console.warn('[App] Service Worker registration failed:', error);
    }
  }
}

/**
 * Handles Notification Permissions and UI states
 */
function initNotifications() {
  if (!('Notification' in window)) {
    notifyBtn.style.display = 'none';
    notifyWarning.textContent = "Your browser does not support push reminders.";
    notifyWarning.style.display = 'block';
    return;
  }

  const updateUI = () => {
    if (Notification.permission === 'granted') {
      notifyBtn.style.display = 'none';
      notifyWarning.style.display = 'none';
    } else if (Notification.permission === 'denied') {
      notifyBtn.style.display = 'none';
      notifyWarning.style.display = 'block';
      
      // Check if running inside an iframe
      if (window.self !== window.top) {
        notifyWarning.textContent = "Notifications are restricted in this embedded window. Please open the app in a new tab to enable them.";
      } else {
        notifyWarning.textContent = "Notifications are blocked in your device settings. Please enable them to receive Nekath reminders.";
      }
    } else {
      notifyBtn.style.display = 'block';
      notifyWarning.style.display = 'none';
    }
  };

  updateUI();

  notifyBtn.addEventListener('click', async () => {
    try {
      const permission = await Notification.requestPermission();
      updateUI();
      if (permission === 'granted') {
        showToast("✅ දැනුම්දීම් සක්රියයි! Notifications enabled!", "success");
        showNotification("සක්‍රියයි! Notifications Enabled", "You will receive alerts for auspicious times.");
      } else if (permission === 'denied') {
        showToast("❌ කරුණාකර දැනුම්දීම් සක්රිය කරන්න. (Please enable notifications in settings).", "error");
      }
    } catch (err) {
      console.error("Permission request failed", err);
    }
  });
}

/**
 * iOS "Add to Home Screen" Detection and UI
 */
function initIOSPrompt() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

  if (isIOS && !isStandalone) {
    installBtn.textContent = "How to Install on iOS";
    installBtn.style.background = "rgba(255, 255, 255, 0.1)";
    
    installBtn.addEventListener('click', () => {
      const banner = document.createElement('div');
      banner.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: var(--color-gold);
        color: var(--color-bg);
        padding: 1.5rem;
        border-radius: 20px;
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        font-weight: 600;
        text-align: center;
        animation: slideUp 0.4s ease-out;
      `;
      banner.innerHTML = `
        <p style="margin-bottom: 1rem;">To receive Avurudu notifications, tap 'Share' and select 'Add to Home Screen'.</p>
        <button id="close-banner" style="background: var(--color-bg); color: white; border: none; padding: 0.5rem 1.5rem; border-radius: 10px; font-weight: 600;">Got it</button>
      `;
      document.body.appendChild(banner);
      
      document.getElementById('close-banner').onclick = () => banner.remove();
    });
  }
}

/**
 * Lightweight Confetti Effect
 */
function triggerConfetti() {
  if (isCelebrated) return;
  isCelebrated = true;

  const colors = ['#b30000', '#d4af37', '#2e8b57', '#ffffff'];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(confetti);

    const animation = confetti.animate([
      { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
      { transform: `translate3d(${(Math.random() - 0.5) * 200}px, 100vh, 0) rotate(${Math.random() * 1000}deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: Math.random() * 2000
    });

    animation.onfinish = () => confetti.remove();
  }
}

/**
 * Page Visibility API - Resync timer on wake
 */
function initVisibilityResync() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      updateCountdown();
      renderNekathList();
    }
  });
}

/**
 * Shows a bilingual notification
 * @param {string} title 
 * @param {string} body 
 */
function showNotification(title, body) {
  if (Notification.permission !== 'granted') return;

  const options = {
    body: body,
    icon: 'https://picsum.photos/seed/avurudu/192/192',
    badge: 'https://picsum.photos/seed/avurudu/192/192',
    vibrate: [200, 100, 200],
    tag: 'avurudu-alert',
    renotify: true
  };

  if (swRegistration) {
    swRegistration.showNotification(title, options);
  } else {
    new Notification(title, options);
  }
}

/**
 * Formats a number to always have two digits
 * @param {number} num 
 * @returns {string}
 */
const pad = (num) => {
  const n = Math.max(0, Math.floor(num));
  return String(n).padStart(2, '0');
};

/**
 * Calculates the time difference and updates the countdown display
 */
function updateCountdown() {
  const now = new Date();
  
  // Find the next upcoming event
  const nextEvent = NEKATH_DATA.find(event => new Date(event.time) > now);

  if (!nextEvent) {
    // Completion State
    timerStatusEl.textContent = "Auspicious Times Concluded";
    nextNekathaNames.innerHTML = `
      <div class="completion-message">
        <h2>සුබ අලුත් අවුරුද්දක් වේවා!</h2>
        <p>සියලු නැකැත් සම්පූර්ණයි.</p>
        <p style="margin-top: 0.5rem; font-size: 0.9rem; opacity: 0.6;">Happy New Year! All auspicious times have successfully concluded.</p>
      </div>
    `;
    countdownDisplay.style.display = 'none';
    triggerConfetti();
    return;
  }

  // Update names
  nextSiEl.textContent = nextEvent.titleSi;
  nextEnEl.textContent = nextEvent.titleEn;
  timerStatusEl.textContent = "Next Auspicious Time";
  countdownDisplay.style.display = 'flex';

  const targetTime = new Date(nextEvent.time);
  const diff = targetTime - now;

  // Handle NaN or negative diff gracefully (system time jumps)
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // --- State-Based Trigger Logic ---
  // Punya Kalaya (Nonagathaya) is ID 1 (Begins) to ID 5 (Ends)
  const punyaKalayaStart = new Date(NEKATH_DATA[0].time);
  const punyaKalayaEnd = new Date(NEKATH_DATA[4].time);
  
  if (now >= punyaKalayaStart && now < punyaKalayaEnd) {
    document.body.classList.add('punya-kalaya-active');
  } else {
    document.body.classList.remove('punya-kalaya-active');
  }

  // Dawn Approaching (5 mins before New Year Dawn - ID 2)
  const dawnTime = new Date(NEKATH_DATA[1].time);
  const timeToDawn = dawnTime - now;
  
  if (timeToDawn > 0 && timeToDawn <= 5 * 60 * 1000) {
    document.body.classList.add('dawn-approaching');
  } else {
    document.body.classList.remove('dawn-approaching');
  }

  // Update DOM
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);

  // --- Precision Notification Triggers ---
  if (seconds === 0 && totalSeconds > 0) {
    const minutesLeft = Math.floor(totalSeconds / 60);
    
    // 1. Show Modal if exactly 0 minutes (regardless of notification settings)
    if (minutesLeft === 0 && !nextEvent.modalShown) {
      showNekathModal(nextEvent);
      nextEvent.modalShown = true;
    }

    // 2. Send Push Notification if enabled
    const triggers = userSettings.intervals;
    if (
      triggers.includes(minutesLeft) && 
      !nextEvent.notified[minutesLeft] && 
      userSettings.enabledNekaths.includes(nextEvent.id)
    ) {
      let title, body;

      if (minutesLeft === 0) {
        title = `${nextEvent.msgSiTitle} | ${nextEvent.msgEnTitle}`;
        body = nextEvent.msgSiDesc;
      } else {
        title = `${nextEvent.msgSiCountdown} තව විනාඩි ${minutesLeft}යි! ⏳`;
        body = `${minutesLeft} mins remaining for ${nextEvent.titleEn}`;
      }

      showNotification(title, body);
      nextEvent.notified[minutesLeft] = true;
    }
  }
}

/**
 * Shows the on-screen modal when a Nekath arrives
 */
function showNekathModal(event) {
  const nekathModal = document.getElementById('nekath-modal');
  const modalTitleSi = document.getElementById('modal-title-si');
  const modalTitleEn = document.getElementById('modal-title-en');
  const modalDesc = document.getElementById('modal-desc');
  const closeModalBtn = document.getElementById('close-modal-btn');

  modalTitleSi.textContent = event.msgSiTitle;
  modalTitleEn.textContent = event.msgEnTitle;
  modalDesc.textContent = event.msgSiDesc || "";
  
  if (!event.msgSiDesc) {
    modalDesc.style.display = 'none';
  } else {
    modalDesc.style.display = 'block';
  }

  nekathModal.classList.add('open');
  triggerConfetti(); // Celebrate when it opens!

  closeModalBtn.onclick = () => {
    nekathModal.classList.remove('open');
  };
}

/**
 * Renders or updates the full list of Nekath into the DOM
 */
function renderNekathList() {
  const now = new Date();
  
  // Find the next upcoming event to apply pulse
  const nextEvent = NEKATH_DATA.find(event => new Date(event.time) > now);

  // If container is empty, build the DOM
  if (listContainer.children.length === 0) {
    NEKATH_DATA.forEach(event => {
      const item = document.createElement('div');
      item.id = `nekath-item-${event.id}`;
      
      const eventTime = new Date(event.time);
      const formattedTime = eventTime.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Colombo'
      });

      item.innerHTML = `
        <div class="nekath-info">
          <span class="nekath-name">${event.titleSi}</span>
          <span class="nekath-time">${event.titleEn} • ${formattedTime}</span>
        </div>
        <span class="status-badge" id="nekath-badge-${event.id}"></span>
      `;
      listContainer.appendChild(item);
    });
  }

  // Update DOM state for each item
  NEKATH_DATA.forEach(event => {
    const eventTime = new Date(event.time);
    const isPassed = eventTime < now;
    const isNext = nextEvent && event.id === nextEvent.id;
    
    const item = document.getElementById(`nekath-item-${event.id}`);
    const badge = document.getElementById(`nekath-badge-${event.id}`);
    
    if (!item || !badge) return;

    item.className = `nekath-item ${isPassed ? 'passed' : ''} ${isNext ? 'next-up' : ''}`;
    badge.className = `status-badge ${isPassed ? '' : (isNext ? 'status-active' : 'status-upcoming')}`;

    if (isPassed) {
      badge.textContent = 'Passed';
    } else {
      const diff = eventTime - now;
      const totalSeconds = Math.max(0, Math.floor(diff / 1000));
      const d = Math.floor(totalSeconds / (3600 * 24));
      const h = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      
      if (d > 0) {
        badge.textContent = `In ${d}d ${h}h`;
      } else if (h > 0) {
        badge.textContent = `In ${h}h ${m}m`;
      } else {
        badge.textContent = `In ${m}m ${s}s`;
      }
    }
  });
}

// --- Initialization ---

// Register SW and Init Features
initSettingsUI();
initSweets();
registerServiceWorker();
initNotifications();
initIOSPrompt();
initVisibilityResync();

// Update countdown every second
setInterval(() => {
  updateCountdown();
  renderNekathList(); // Refresh list every second to update remaining times
}, 1000);

// Initial calls
updateCountdown();
renderNekathList();

console.log("Avurudu 2026 Engine Finalized with Premium Polish");
