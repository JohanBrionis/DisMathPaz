document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Por favor, complete todos los campos.");
        return;
    }  
    fetch('login.php',{
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }, 
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    
    console.log('Datos verificados:', {username, password});
    alert('Logueado exitosamente')

    const confirmationDiv = document.getElementById('confirmation');
    const userDetails = document.getElementById('user-details');

    userDetails.textContent = `Username: ${username}, Contraseña: ${password}`;

    confirmationDiv.style.display = 'block';

    document.getElementById('loginform').reset();

    setTimeout(() => {
         window.location.href = 'inicio.html';
     }, 3000);  // Espera 3 segundos antes de redirigir
  
});

