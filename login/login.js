
function handleLogin () {
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;

    if (emailValue === 'admin@example.com' && passwordValue === '12345678') {
        login(emailValue).finally((device) => {
            window.location.href = '../account/index.html';
        })
    } else {
        const conditionalContent = document.getElementById('conditional-content');
        conditionalContent.innerHTML = '<p>¡Error! Credenciales incorrectas.</p>';
    }
}


document.querySelector('form')?.addEventListener('submit', function (event) {
    event.preventDefault();
});

