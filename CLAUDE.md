# Desafío de Habilidad — reglas para crear juegos

- Cada juego vive en `juegos/<nombre>/index.html`, en un solo archivo (HTML + CSS + JS), y se publica con GitHub Pages.
- Agregar una tarjeta del juego en el `index.html` de la raíz y una sección en el `README.md`.
- Todo en español rioplatense (vos), pensado para jugar en el celular a pantalla completa.

## Niveles (obligatorio en todos los juegos)

Todo juego tiene que tener niveles para ir avanzando:

- Usar el mapa de niveles compartido `comun/niveles.js` (`<script src="../../comun/niveles.js"></script>`):
  grilla de niveles con candados, estrellas (1 a 3) y elección de cualquier nivel ya desbloqueado.
- Al superar un nivel: llamar a `niveles.completar(nivel, estrellas)` y mostrar las estrellas con `Niveles.estrellasHTML(estrellas)`.
- Cada nivel agrega algo nuevo o más difícil, y antes de empezarlo se muestra una pantalla con las novedades.
- Pantalla de nivel superado con el detalle de puntos, botón "Siguiente nivel" y botón "Ver niveles".
- Botón "☰ Niveles" visible durante el juego para volver al mapa.
- Puntaje con premios y descuentos, récord y progreso guardados en el celular (`localStorage`), con opción de continuar.
