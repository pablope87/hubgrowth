document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('cookieModalShown')) {
      var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
          backdrop: 'static',
          keyboard: false
      });
      myModal.show();
      localStorage.setItem('cookieModalShown', 'true');
  }

  document.getElementById('chooseLink').addEventListener('click', function () {
      localStorage.removeItem('cookieModalShown');
  });
});