document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulate backend response (you will replace this with your actual backend communication)
    const isSuccess = Math.random() < 0.5;

    const responseDiv = document.getElementById('response');
    responseDiv.textContent = isSuccess ? 'Form submitted successfully!' : 'Error submitting form. Please try again.';
    responseDiv.classList.remove('success', 'error');

    if (isSuccess) {
        responseDiv.classList.add('success');
    } else {
        responseDiv.classList.add('error');
    }

    responseDiv.style.display = 'block';
    setTimeout(() => {
        responseDiv.style.display = "none"
    }, 2800);
});
