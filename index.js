var background = document.getElementById("back");
var contin = document.getElementById("btn");
var visible_object1 = document.getElementById("visibility");
var images = document.getElementById("images")
var register = document.getElementById("reg")
var go_btn = document.getElementById("go")
var question = document.getElementById("question")
var hi_free = document.getElementById("free")
var count = 0



contin.addEventListener('click', function() {
    if (count == 0) {
        visible_object1.style.display = 'none';
        images.classList.add('move-up'); // Добавляем класс для перемещения элемента
        register.classList.add("visible"); //делаем объект регитсрации видимым
        count = count + 1;
    }
});


go_btn.addEventListener('click', function() {
    images.classList.add("move-up2");
    register.classList.add("move-up2");
    question.style.display = 'none';
    hi_free.classList.add('visible')
});


document.addEventListener('DOMContentLoaded', (event) => {
    Telegram.WebApp.setHeaderColor('#000000');
    Telegram.WebApp.setBackgroundColor('#000000');
    const heit = window.innerHeight;
    console.log(heit);
    
    document.documentElement.style.setProperty('--viewport-height', `${heit}px`);
});


function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

if (isMobile()) {
    console.log('На мобильном устройстве');
} else {
    console.log('На ПК');
}

const inputElements = document.querySelectorAll('input, textarea');
inputElements.forEach(input => {
    input.addEventListener('focus', () => {
        console.log('Input focused');
        background.classList.add("upper");
    });

    input.addEventListener('blur', () => {
        console.log('Input blurred');
        background.classList.remove("upper");
    });
});
