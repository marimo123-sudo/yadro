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
    else if (count == 1) {
        window.location.href = "main/main.html";
    }
});


go_btn.addEventListener('click', function() {
    images.classList.add("move-up2");
    register.classList.add("move-up2");
    question.style.display = 'none';
    hi_free.classList.add('visible')
});


document.addEventListener('DOMContentLoaded', (event) => {
    Telegram.WebApp.setHeaderColor('#1a1a1a');
    Telegram.WebApp.setBackgroundColor("#1a1a1a");
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

function focusNextInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Предотвращаем стандартное действие Enter
        let inputs = Array.from(document.querySelectorAll('input, textarea'));
        let currentIndex = inputs.indexOf(event.target);
        if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    }
}

// Добавляем обработчик события для каждого input и textarea
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('keydown', focusNextInput);
});

// Добавляем обработчик события для каждого input и textarea
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('keydown', focusNextInput);
});

// Функция для скрытия клавиатуры при касании за пределами полей ввода
function hideKeyboard(event) {
    if (!event.target.closest('input') && !event.target.closest('textarea')) {
        document.activeElement.blur();
    }
}

// Добавляем обработчик события touchstart на элемент body
document.body.addEventListener('touchstart', hideKeyboard);