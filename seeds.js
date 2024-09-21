// This file can be used to handle user interactions, form submissions, or any dynamic changes.
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Your crop booking has been successful!');
        });
    });
});