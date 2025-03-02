// Función para mostrar u ocultar el menú
function mostrarOcultarMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active'); // Alterna la clase 'active' en el menú
}

// Función para resaltar el enlace seleccionado
function seleccionar() {
  const links = document.querySelectorAll('.menu a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      // Remueve la clase 'selected' de todos los enlaces
      links.forEach(l => l.classList.remove('selected'));
      // Agrega la clase 'selected' al enlace clickeado
      link.classList.add('selected');
    });
  });
}

// Llamar a la función seleccionar() para inicializar los eventos
seleccionar();

// Textos a mostrar