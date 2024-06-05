document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, complete todos los campos.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Aquí puedes añadir la lógica para avanzar a otra sección de la página
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
        // Redirigir a otra página o realizar la acción correspondiente
        window.location.href = 'exito.html';
    }
});
