document.addEventListener('DOMContentLoaded', function () {
    setContentOnNewsPage();
});

document.getElementById('newArticle').onclick = function () {
    const form = document.getElementById('formNewArticle');
    const body = document.getElementById('body');

    form.classList.remove('hidden');
    form.classList.add('visible');
    body.classList.remove('scroll');
    body.classList.add('no-scroll');
};

document.getElementById('formBackButton').onclick = function () {
    const form = document.getElementById('formNewArticle');
    const body = document.getElementById('body');

    form.classList.remove('visible');
    form.classList.add('hidden');
    body.classList.remove('no-scroll');
    body.classList.add('scroll');
};

document.getElementById('formAddButton').onclick = function () {
    const form = document.getElementById('formNewArticle');
    const body = document.getElementById('body');

    if (addEntryToJSON()) {
        form.classList.remove('visible');
        form.classList.add('hidden');
        body.classList.remove('no-scroll');
        body.classList.add('scroll');
        setContentOnNewsPage();
    } else {
        alert("Alle Felder müssen ausgefüllt werden!");
    }
};

async function addEntryToJSON() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const content = document.getElementById('content').value;

    if (!title || !author || !content) {
        return false;
    }

    const newEntry = {
        "title": title,
        "author": author,
        "content": content
    };

    const jsonData = localStorage.getItem('newsData');
    let data = [];

    if (jsonData) {
        try {
            data = JSON.parse(jsonData);
            if (!Array.isArray(data)) {
                data = [];
            }
        } catch (e) {
            console.error("Fehler beim Parsen von JSON-Daten:", e);
            data = [];
        }
    }

    data.push(newEntry);
    localStorage.setItem('newsData', JSON.stringify(data, null, 4));
    return true;
};

function setContentOnNewsPage() {
    const jsonData = localStorage.getItem('newsData');

    if (!jsonData) {
        return;
    }

    let data;
    try {
        data = JSON.parse(jsonData);
    } catch (e) {
        console.error("Fehler beim Parsen von JSON-Daten:", e);
        return;
    }

    const latestEntries = data.slice(-5).reverse();

    latestEntries.forEach((entry, index) => {
        if (index < 5) {
            const headlineElement = document.getElementById(`headline${index}`);
            const paragraphElement = document.getElementById(`paragraph${index}`);

            if (headlineElement && paragraphElement) {
                headlineElement.textContent = `${entry.title} - ${entry.author}`;
                paragraphElement.textContent = entry.content;
            }
        }
    });
};
