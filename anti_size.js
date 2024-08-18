// Предотвращает масштабирование через жесты pinch (щипок)
document.addEventListener('gesturestart', function(event) {
  event.preventDefault(); // Запрещает изменение масштаба
});

// Предотвращает изменение масштаба через жесты pinch (щипок)
document.addEventListener('touchmove', function(event) {
  if (event.scale !== undefined && event.scale !== 1) {
    event.preventDefault(); // Запрещает масштабирование
  }
}, { passive: false });

function updateObjectPositions() {
    var viewport_height = Telegram.WebApp.viewportHeight;
    console.log(viewport_height);
}

window.addEventListener('resize', updateObjectPositions);
