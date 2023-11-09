// Mostrar formulario de inicio de sesión
const loginLink = document.querySelector('nav a[href="index.html"]');
loginLink.addEventListener('click', function() {
    const loginForm = document.getElementById('login-form');
    loginForm.classList.toggle('visible');
});

// Mostrar formulario de registro
const registerLink = document.querySelector('nav a[href="index.html"]');
registerLink.addEventListener('click', function() {
    const registerForm = document.getElementById('register-form');
    registerForm.classList.toggle('visible');
});

javascript
function agregarAlCarrito() {
  // Obtener el producto seleccionado
  var producto = obtenerProducto();

  // Agregar el producto al carrito
  agregarProductoAlCarrito(producto);

  // Mostrar mensaje de éxito
  mostrarMensaje("El producto se ha agregado al carrito.");
}

function obtenerProducto() {
  // Aquí puedes obtener el producto seleccionado de alguna manera.
  // Por ejemplo, podrías obtenerlo de un formulario o de una lista de productos.

  // En este ejemplo, se asume que hay un select con opciones de productos y se retorna la opción seleccionada.
  var selectProductos = document.getElementById("select-productos");
  var productoSeleccionado = selectProductos.value;

  return productoSeleccionado;
}

function agregarProductoAlCarrito(producto) {
  // Aquí puedes agregar el producto al carrito.
  // Por ejemplo, podrías almacenar el producto en un arreglo o en una variable global.

  // En este ejemplo, se asume que hay un arreglo llamado "rito" donde se almacenan los productos.
  carrito.push(producto);
}

function mostrarMensaje(mensaje) {
  // Aquí puedes mostrar un mensaje en el DOM, por ejemplo, en un div con un id "mensaje".
  var divMensaje = document.getElementById("mensaje");
  divMensaje.textContent = mensaje;
}