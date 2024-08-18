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
    
