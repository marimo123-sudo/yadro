document.addEventListener('DOMContentLoaded', (event) => {
    Telegram.WebApp.ready();
    Telegram.WebApp.setHeaderColor('#000000');
    Telegram.WebApp.disableClosingConfirmation();
    Telegram.WebApp.enableVerticalSwipes();
});

// Предотвращаем зум на iOS при двойном тапе
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  let now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);
