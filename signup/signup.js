

function step0Submit () {
    const nameValue = document.getElementById('name').value;
    const birthdateValue = document.getElementById('birthdate').value;

    if (!nameValue || !birthdateValue) {
        const conditionalContent = document.getElementById('conditional-content');
        conditionalContent.innerHTML = '<p>Los campos son obligatorios</p>';
        return;
    }

    // unsuscribe from the incomplete_step1 topic and send step1 event
    Promise.all([unsuscribeTopic(['incomplete_step1']), sendCustomEvent('step1', { name: nameValue, birthdate: birthdateValue})])
    .finally(() => {
        window.location.href = 'step1.html';
    });
}

function step1Submit () {
    const emailValue = document.getElementById('email').value;
    const email2Value = document.getElementById('email2').value;
    
    if (emailValue !== email2Value) {
        const conditionalContent = document.getElementById('conditional-content');
        conditionalContent.innerHTML = '<p>El email no coincide</p>';
        return;
    }
    localStorage.setItem('email', emailValue);
    // unsuscribe from the incomplete_step2 topic and send step2 event
    Promise.all([unsuscribeTopic(['incomplete_step2']), sendCustomEvent('step2', { email: emailValue })])
    .finally(() => {
        window.location.href = 'step2.html';
    });
    
}

function createUser () {
    const passwordValue = document.getElementById('password').value;
    const password2Value = document.getElementById('password2').value;

    if (passwordValue !== password2Value) {
        const conditionalContent = document.getElementById('conditional-content');
        conditionalContent.innerHTML = '<p>Las contraseñas no coinciden</p>';
        return;
    }
    const email = localStorage.getItem('email');
    // unsuscribe from the incomplete_step3 topic and send newUser event
    Promise.all([unsuscribeTopic(['incomplete_step3']), sendCustomEvent('newUser', { password: passwordValue })])
    .finally(() => {
        login(email).finally((device) => {
            window.location.href = '../account/index.html';
        })
    });
}
