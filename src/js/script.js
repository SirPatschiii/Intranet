document.getElementById('newArticle').onclick = function () {
    var form = document.getElementById('formNewArticle');
    var body = document.getElementById('body');

    form.classList.remove('hidden');
    form.classList.add('visible');
    body.classList.remove('scroll');
    body.classList.add('no-scroll');
};

document.getElementById('formBackButton').onclick = function () {
    var form = document.getElementById('formNewArticle');
    var body = document.getElementById('body');

    form.classList.remove('visible');
    form.classList.add('hidden');
    body.classList.remove('no-scroll');
    body.classList.add('scroll');
};

document.getElementById('formAddButton').onclick = function () {
    var form = document.getElementById('formNewArticle');
    var body = document.getElementById('body');

    form.classList.remove('visible');
    form.classList.add('hidden');
    body.classList.remove('no-scroll');
    body.classList.add('scroll');
};