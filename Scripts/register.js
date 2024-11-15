document.getElementById('registerform').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (!username || !password || !email) {
        alert("Por favor, complete todos los campos.");
        return;
    } 
    fetch('register.php', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&email=${encodeURIComponent(email)}`
    })
 
    console.log('Datos registrados:', {username, password, email});

    const confirmationDiv = document.getElementById('confirmation');
    const userDetails = document.getElementById('user-details');

    userDetails.textContent = `Username: ${username}, Email: ${email}`;

    confirmationDiv.style.display = 'block';

    document.getElementById('registerform').reset();

    setTimeout(() => {
         window.location.href = 'login.html';
     }, 3000);  // Espera 3 segundos antes de redirigir
});

