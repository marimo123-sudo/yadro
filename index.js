document.addEventListener('DOMContentLoaded', (event) => {
    Telegram.WebApp.ready();
    Telegram.WebApp.webAppVersion = 7.8;
    Telegram.WebApp.setHeaderColor('#000000');
    Telegram.WebApp.disableClosingConfirmation();
    Telegram.WebApp.enableVerticalSwipes();
});