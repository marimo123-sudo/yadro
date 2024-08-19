


document.addEventListener('DOMContentLoaded', (event) => {
    const heit = window.innerHeight;
    console.log(heit);
    
    document.documentElement.style.setProperty('--viewport-height', `${heit}px`);
});