// Предотвращает масштабирование через жесты pinch (щипок)
document.addEventListener('touchmove', function(event) {
  if (event.scale !== 1) {
    event.preventDefault(); // Запрещает изменение масштаба
  }
}, { passive: false });

// Предотвращает масштабирование через жесты pinch (щипок) на устройствах с сенсорным экраном
document.addEventListener('gesturestart', function(event) {
  event.preventDefault(); // Запрещает масштабирование
});
