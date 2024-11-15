
// Components/Nav.js
const styleslogo = `
<style>
  .logopng {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  z-index: 1;
}

  @media (max-width: 768px) {
     .logopng {
      display: none;
      visibility: hidden;
      width: 0;
      height: 0;
      margin: 0;
      padding: 0;
    }
    }
</style>
`;

const Logo = `
<img src="img/logopng.png" class="logopng" alt="logo" width="80px" height="80px">
`;

// Insertar estilos y el navbar en el body
document.head.insertAdjacentHTML('beforeend', styleslogo);
document.body.insertAdjacentHTML('afterbegin', Logo);


