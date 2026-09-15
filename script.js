const form = document.getElementById("newsForm");
const status = document.getElementById("newsStatus");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  status.textContent =
    "Pronto — você será avisado quando houver novidades.";

  form.reset();

});
