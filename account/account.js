function handleLogout() {
    logout().finally(() => {
        window.location.href = '../index.html';
    })
}
