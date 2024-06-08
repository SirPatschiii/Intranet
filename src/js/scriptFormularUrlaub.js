const FormUrlaub = document.getElementById("urlaubsantrag");
FormUrlaub.onsubmit = function (event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById("name").value;
  const von = document.getElementById("von").value;
  const bis = document.getElementById("bis").value;
  const vertretung = document.getElementById("vertretung").value;
  const bemerkung = document.getElementById("urlaubbemerkung").value;

  alert(
    "Der Urlaubsantrag wurde erfolgreich abgesendet:" +
      "\n" +
      "Name: " +
      name +
      "\n" +
      "Von: " +
      von +
      "\n" +
      "Bis: " +
      bis +
      "\n" +
      "Vertretung: " +
      vertretung +
      "\n" +
      "Bemerkung: " +
      bemerkung
  );

  window.location.href = "../html/index.html";
};


