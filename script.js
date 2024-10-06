document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').innerHTML = '<p style="color: red;">Please fill in all fields!</p>';
    } else {
        document.getElementById('formMessage').innerHTML = '<p style="color: green;">Form submitted successfully!</p>';
    }
});
