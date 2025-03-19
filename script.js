document.addEventListener('DOMContentLoaded', function () {
    const button = document.createElement('button');
    button.textContent = 'Change Background';
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        document.body.style.backgroundColor = '#8A0000';
    });
});