document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Datos simulados del usuario (en un sistema real esto se obtiene del backend)
    const userData = {
        email: 'juan.perez@example.com',
        password: '123456',
        nombre: 'Juan Pérez',
        rut: '12.345.678-9',
        direccion: 'Calle Falsa 123',
        telefono: '+56 9 1234 5678'
    };

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === userData.email && password === userData.password) {
        localStorage.setItem('user', JSON.stringify(userData));
        window.location.href = 'profile.html';
    } else {
        alert('Correo o contraseña incorrectos');
    }
});