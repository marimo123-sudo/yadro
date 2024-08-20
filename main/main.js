document.addEventListener('DOMContentLoaded', (event) => {
    const heit = window.innerHeight;
    console.log(heit);
    Telegram.WebApp.setHeaderColor('#1a1a1a');
    Telegram.WebApp.setBackgroundColor("#1a1a1a");
    document.documentElement.style.setProperty('--viewport-height', `${heit}px`);
});
