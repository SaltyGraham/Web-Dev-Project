document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();  // Prevent default form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('formMessage').innerHTML = `<p style="color: green;">${result.message}</p>`;
        } else {
            document.getElementById('formMessage').innerHTML = '<p style="color: red;">Failed to submit form. Please try again.</p>';
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        document.getElementById('formMessage').innerHTML = '<p style="color: red;">An error occurred. Please try again later.</p>';
    }
});
