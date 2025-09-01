document.addEventListener("DOMContentLoaded", function () {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.getElementById("carritoContainer");

  if (carrito.length === 0) {
    contenedor.innerHTML = `<p class="text-center">Tu carrito está vacío 🧵</p>`;
    return;
  }

  carrito.forEach(producto => {
    const card = document.createElement("div");
    card.className = "col-md-3 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagenes ? producto.imagenes[0] : producto.imagen}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body text-center">
          <h5 class="card-title">${producto.titulo}</h5>
          <p>${producto.descripcion}</p>
          <p class="fw-bold">${producto.precio}</p>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
});

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  location.reload();
};