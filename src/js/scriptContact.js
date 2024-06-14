document.getElementById('send').onclick = function () {
    const subject = document.getElementById("subject");
    const content = document.getElementById("content");

    window.location.href = `mailto:max.musterman@example.org?subject=${subject.value}&body=${content.value}`;
};