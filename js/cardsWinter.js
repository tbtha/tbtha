document.addEventListener("DOMContentLoaded", function () { /* Asegura que el DOM esté cargado antes de ejecutar el script */
  const productosWinter = [
    {
      imagen: "img/winter/chaleco4.jpeg",
      titulo: "Chaleco Niebla",
      descripcion: "Tejido grueso, ideal para días fríos.",
      enlace: "#"
    },
    {
      imagen: "img/winter/chaleco1.jpeg",
      titulo: "Chaleco Bosque",
      descripcion: "Inspirado en texturas naturales y tonos tierra.",
      enlace: "#"
    },
    {
      imagen: "img/winter/chaleco2.jpeg",
      titulo: "Chaleco Cobre",
      descripcion: "Diseño clásico con detalles artesanales.",
      enlace: "#"
    },
    {
      imagen: "img/winter/chaleco3.jpeg",
      titulo: "Chaleco Invierno",
      descripcion: "Abrigo ligero con punto cerrado.",
      enlace: "#"
    },
    {
      imagen: "img/winter/chaleco5.jpeg",
      titulo: "Chaleco Montaña",
      descripcion: "Textura rústica y calidez envolvente.",
      enlace: "#"
    },
    {
      imagen: "img/winter/chaleco6.jpeg",
      titulo: "Chaleco Humo",
      descripcion: "Gris profundo con detalles en relieve.",
      enlace: "#"
    },
    {
      imagen: "img/winter/chaleco7.jpeg",
      titulo: "Chaleco Cálido",
      descripcion: "Diseño envolvente para tardes de invierno.",
      enlace: "#"
    }
  ];

  const contenedor = document.getElementById("cardsWinter");

  if (!contenedor) {
    console.error("No se encontró el contenedor con id 'cardsWinter'");
    return;
  }

  productosWinter.forEach(producto => {
    const card = document.createElement("div");
    card.className = "col-md-3 mb-5";
    card.innerHTML = `
      <div class="card h-100">
        <img class="card-img-top" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="card-body text-center">
          <h4 class="card-title">${producto.titulo}</h4>
          <p class="card-text">${producto.descripcion}</p>
          <a href="${producto.enlace}" class="btn btn-outline-success">Ver más</a>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
});