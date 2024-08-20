Telegram.WebApp.setHeaderColor('#1a1a1a');
Telegram.WebApp.setBackgroundColor("#1a1a1a");


document.addEventListener('DOMContentLoaded', (event) => {
    const heit = window.innerHeight;
    console.log(heit);
    document.documentElement.style.setProperty('--viewport-height', `${heit}px`);
});