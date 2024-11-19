document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();  // Prevent default form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log('Form Data:', formData);

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        console.log('Server Response Status:', response.status);

        if (response.ok) {
            const result = await response.json();
            document.getElementById('formMessage').innerHTML = `<p style="color: green;">${result.message}</p>`;
            console.log('Server Response Data:', result);
        } else {
            document.getElementById('formMessage').innerHTML = '<p style="color: red;">Failed to submit form. Please try again.</p>';
            console.error('Server Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        document.getElementById('formMessage').innerHTML = '<p style="color: red;">An error occurred. Please try again later.</p>';
    }
});