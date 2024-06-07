const FormFeedback = document.getElementById("feedback");
FormFeedback.onsubmit = function (event) {
  // Deine Aktionen hier
  const name = document.getElementById("name").value;
  const von = document.getElementById("von").value;
  const bis = document.getElementById("bis").value;
  const bemerkung = document.getElementById("feedbackbemerkung").value;

  let checkedBoxesValues = new Array();
  let inputBoxesElements = document.getElementsByClassName("checkBoxes");
  for (var i = 0; i < inputBoxesElements.length; ++i) {
    if (inputBoxesElements[i].checked) {
        checkedBoxesValues.push(inputBoxesElements[i].name);
    }
  };

  let checkedRadioValues = new Array();
  let inputRadioElements = document.getElementsByClassName("radioChoice");
  for (var i = 0; i < inputRadioElements.length; ++i) {
    if (inputRadioElements[i].checked) {
        checkedRadioValues.push(inputRadioElements[i].value);
    }
  };


  alert(
    "Es wurde folgendes Feedbackgespräch angefordert:" +
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
      "Gespräch mit: " +
      checkedBoxesValues +
      "\n" +
      "Feedbackgrund: " +
      checkedRadioValues +
      "\n" +
      "Bemerkung: " +
      bemerkung
  );
  event.preventDefault(); // Verhindert das Standardverhalten des Formulars
  window.location.href = "../html/index.html";
};
