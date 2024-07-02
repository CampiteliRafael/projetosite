document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').innerText = 'Credenciais inválidas!';
    }
});
