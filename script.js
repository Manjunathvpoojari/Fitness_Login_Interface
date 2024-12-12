$(document).ready(function () {
  $('#fitnessForm').on('submit', function (event) {
    const name = $('#name').val();
    const age = $('#age').val();
    if (name.trim() === '' || age.trim() === '') {
      alert('Name and Age are required!');
      event.preventDefault();
    }
  });
});
