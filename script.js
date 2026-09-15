const form = document.getElementById('newsForm');
  const status = document.getElementById('newsStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = 'Pronto — você será avisado por e-mail.';
    form.reset();
  });
