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




  function updateObjectPositions() {
      var viewport_height = Telegram.WebApp.viewportHeight;
      console.log(viewport_height);
  }
  
  window.addEventListener('resize', updateObjectPositions);


  document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
});

