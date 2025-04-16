// Datos de los quesos
const quesos = [
  {
      id: 1,
      nombre: "Queso Blanco Cubano",
      origen: "Tradicional de Cuba",
      descripcion: "Un queso fresco, suave y ligeramente salado. Perfecto para acompañar platos tradicionales cubanos."
  },
  {
      id: 2,
      nombre: "Queso Criollo",
      origen: "Regiones rurales de Cuba",
      descripcion: "Queso artesanal con textura firme y sabor intenso. Ideal para sándwiches y platos calientes."
  },
  {
      id: 3,
      nombre: "Queso Guajiro",
      origen: "Provincias orientales",
      descripcion: "Queso de leche de vaca con un toque de acidez. Muy utilizado en la cocina tradicional cubana."
  }
];

// Función para cargar los quesos en el DOM
function cargarQuesos() {
  const contenedor = document.getElementById('quesos-container');
  
  quesos.forEach(queso => {
      const quesoCard = document.createElement('div');
      quesoCard.className = 'queso-card';
      
      quesoCard.innerHTML = `
          <div class="queso-card-header">
              <h3>${queso.nombre}</h3>
              <p>${queso.origen}</p>
          </div>
          <div class="queso-card-body">
              <p>${queso.descripcion}</p>
          </div>
          <div class="queso-card-footer">
              <button class="btn" onclick="mostrarDetalles(${queso.id})">Ver detalles</button>
          </div>
      `;
      
      contenedor.appendChild(quesoCard);
  });
}

// Función para mostrar detalles (versión básica)
function mostrarDetalles(id) {
  const queso = quesos.find(q => q.id === id);
  alert(`${queso.nombre}\nOrigen: ${queso.origen}\n\n${queso.descripcion}`);
}

// Cargar los quesos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarQuesos);