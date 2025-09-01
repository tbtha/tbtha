document.addEventListener("DOMContentLoaded", function () {
  const productosSummer = [
  {
    imagen: "img/summer/summer1_1.jpeg",
    titulo: "Top Lino",
    descripcion: "Fresco y tejido a mano con hilo natural.",
    enlace: "#"
  },
  {
    imagen: "img/summer/summer2.jpeg",
    titulo: "Bolero Sol",
    descripcion: "Ideal para tardes cálidas y looks bohemios.",
    enlace: "#"
  },
  {
    imagen: "img/summer/summer3_3.jpeg",
    titulo: "Crop Mandala",
    descripcion: "Diseño circular inspirado en patrones ancestrales.",
    enlace: "#"
  },
  {
    imagen: "img/summer/summer4.jpeg",
    titulo: "Vestido Arena",
    descripcion: "Ligero, con caída suave y textura artesanal.",
    enlace: "#"
  },
  {
    imagen: "img/summer/summer5.jpeg",
    titulo: "Top Coral",
    descripcion: "Color vibrante y tejido en punto calado.",
    enlace: "#"
  },
  {
    imagen: "img/summer/summer.jpeg",
    titulo: "Kimono Brisa",
    descripcion: "Perfecto para capas ligeras y estilo relajado.",
    enlace: "#"
  }
];

const contenedor = document.getElementById("cardsSummer");
if (!contenedor) {
    console.error("No se encontró el contenedor con id 'cardsWinter'");
    return;
  }

productosSummer.forEach(producto => {
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