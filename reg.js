document.addEventListener('DOMContentLoaded', (event) => {
    Telegram.WebApp.ready();
    
    // Пример скрытия кнопки "Назад"
    // BackButton.hide();
    Telegram.WebApp.BackButton.show();
    // Установка обработчика нажатия на кнопку "Назад"
    Telegram.WebApp.BackButton.onClick(function() {
        console.log('Back button was clicked');
        window.location.href = 'https://example.com';
    });
    
    // Инициализация Telegram WebApp
    Telegram.WebApp.setHeaderColor('#000000'); // Устанавливаем черный цвет рамки
  });