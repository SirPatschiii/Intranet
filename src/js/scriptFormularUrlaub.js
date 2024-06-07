const myForm = document.getElementById("urlaubsantrag");
myForm.onsubmit = function(event) {
    // Deine Aktionen hier
    alert("Dein Urlaubsantrag wurde erfolgreich versendet!");
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
};