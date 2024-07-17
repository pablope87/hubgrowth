document.addEventListener('DOMContentLoaded', function () {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    backdrop: 'static',
    keyboard: false
  });
  myModal.show();
});
