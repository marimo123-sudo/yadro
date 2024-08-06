document.addEventListener('DOMContentLoaded', (event) => {
    Telegram.WebApp.ready();
    Telegram.WebApp.setHeaderColor('#000000');
    Telegram.WebApp.disableClosingConfirmation();
    Telegram.WebApp.enableVerticalSwipes();
});


// Предотвращает масштабирование через жесты на устройствах с сенсорным экраном
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

// Запрещает изменение масштаба через жесты pinch (щипок)
document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) {
    event.preventDefault();
  }
}, { passive: false });
