// Al cargar la página, agrega la clase 'hidden' brevemente
document.body.classList.add('hidden');
setTimeout(() => {
    document.body.classList.remove('hidden');
}, 100); // Elimina la clase después de 100 ms


// Components/Nav.js
const styles = `
<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: rgb(255, 255, 255);
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }

  .hidden {
    opacity: 0;
  }

  body.dark-mode {
    background-color: rgb(54, 54, 54);
    color: white;
  }

  nav {
    z-index: 1;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    min-width: 250px;
    min-height: 100vh;
    position: fixed;
    justify-content: space-around;
    border-right: #ddd solid 2px;
    padding: 20px;
    padding-bottom: 60px;
  }

  nav a {
    text-decoration: none;
  }

  .card-nav {
    border-radius: 10px;
    display: flex;
    padding: 5px;
    align-items: center;
  }

  #active {
    background-color: #1a9def2d;
    outline: #1a9def88 solid 2px;
  }

  .card-nav:hover {
    background-color: #3333330d;
  }

  .card-nav img {
    color: #333;
  }

  .card-nav h2 {
    margin-left: 30px;
    color: #333;
    text-decoration: none;
    text-align: center;
    font-size: 16px;
  }

  nav #logo-font {
    color: #4bb300;
    font-family: "Afacad Flux", sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    text-decoration: none;
    transition: 0.5s;
  }

  .dark-mode h2 {
  color: #ffffff;
}

  nav #logo-font:hover {
    scale: 1.1;
  }

  @media (max-width: 768px) {
    nav #logo-font {
      display: none;
    }

    nav {
      display: flex;
      align-items: center;
      flex-direction: row;
      min-width: 100%;
      min-height: 50px;
      position: fixed;
      top: 89%;
      justify-content: space-around;
      border-top: #ddd solid 2px;
      border-right: 0;
      padding: 5px;
    }

    .card-nav {
      border-radius: 10px;
      display: inline-flex;
      margin: 5px;
      padding: 10px;
      justify-content: center;
      align-items: center;
    }

    .card-nav img {
      height: 30px;
      width: 30px;
    }

    .card-nav:hover {
      background-color: #33333300;
    }

    .card-nav h2 {
      display: none;
    }
  }
</style>
`;

const navbarHTML = `
<nav>
    <a href="index.html" id="logo-font">CodePaz</a>
    <div class="container-nav"></div>
    <a href="inicio.html">
        <div class="card-nav" id="${window.location.pathname.includes('inicio.html') ? 'active' : ''}">
            <img src="img/hogar.svg" alt="" width="30px">
            <h2>INICIO</h2>
        </div>
    </a>
    <a href="aprender.html">
        <div class="card-nav" id="${window.location.pathname.includes('aprender.html') ? 'active' : ''}">
            <img src="img/gorro-de-graduacion.svg" alt="" width="30px">
            <h2>APRENDER</h2>
        </div>
    </a>
    <a href="perfil.html">
        <div class="card-nav" id="${window.location.pathname.includes('perfil.html') ? 'active' : ''}">
            <img src="img/usuario.svg" alt="" width="30px">
            <h2>PERFIL</h2>
        </div>
    </a>
    <a href="configuracion.html">
        <div class="card-nav" id="${window.location.pathname.includes('configuracion.html') ? 'active' : ''}">
            <img src="img/ajustes.svg" alt="" width="30px">
            <h2>CONFIGURAR</h2>
        </div>
    </a>
    <a href="contacto.html">
        <div class="card-nav" id="${window.location.pathname.includes('contacto.html') ? 'active' : ''}">
            <img src="img/llamada-telefonica.svg" alt="" width="30px">
            <h2>CONTACTO</h2>
        </div>
    </a>
</nav>
`;

// Insertar estilos y el navbar en el body
document.head.insertAdjacentHTML('beforeend', styles);
document.body.insertAdjacentHTML('afterbegin', navbarHTML);


