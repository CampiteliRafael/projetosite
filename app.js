document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }

    document.getElementById('logout-button').addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        window.location.href = 'login.html';
    });
});
