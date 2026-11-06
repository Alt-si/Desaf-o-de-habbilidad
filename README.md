# Desafío de Habilidad

Colección de juegos de habilidad para jugar desde el navegador del celular.

## Juegos

| Juego | Carpeta | Descripción |
|---|---|---|
| Mesa de Hoyos | [`juegos/mesa-de-hoyos`](juegos/mesa-de-hoyos/) | Mesa a pantalla completa con 4 hoyos (2 blancos, 2 negros) y 4 bolas (2 blancas, 2 negras). Inclinando el celular se mueve la mesa: hay que embocar cada bola en el hoyo de su mismo color. |

## Cómo jugar Mesa de Hoyos

- Al empezar cada nivel, la posición en que tenés el celular se toma como "mesa plana" (**Recalibrar** la vuelve a fijar).
- Inclinná el celular para que rueden las bolas y embocá cada una en el hoyo de su color.

**Puntos**

| Situación | Puntos |
|---|---|
| Bola en el hoyo de su color | +100 |
| Bola en un hoyo de otro color (sale expulsada) | −50 |
| Bola en un hoyo trampa ✕ (sale expulsada) | −100 |
| Bola prohibida (gris con ✕) en cualquier hoyo | −75 |
| Bonus por terminar rápido | +10 por segundo bajo el tiempo par |

**Niveles**

| Nivel | Novedad |
|---|---|
| 1 | Blancas y negras (2 de cada una) |
| 2 | Se suma el rojo |
| 3 | Postes de madera en la mesa |
| 4 | Se suma el azul y aparece un hoyo trampa |
| 5 | Barras de madera que bloquean el paso |
| 6 | Bola prohibida |
| 7 | Se suma el amarillo, más trampas y obstáculos |
| 8+ | Se suma el violeta; cada nivel agrega trampas, bolas prohibidas y obstáculos, y los hoyos se achican |

El progreso (nivel y puntaje) y el récord se guardan en el celular, así se puede continuar después.

En compu se puede probar con las flechas / W A S D, o manteniendo apretado el mouse y arrastrando.

## Publicar con GitHub Pages

Los sensores de movimiento del celular sólo funcionan en páginas servidas por **HTTPS**. La forma más simple:

1. En GitHub: **Settings → Pages**.
2. En *Source* elegir **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. El sitio queda en `https://alt-si.github.io/Desaf-o-de-habbilidad/`.

En iPhone, al tocar **Jugar** el navegador pide permiso para usar el movimiento: hay que aceptarlo.

## Agregar un juego nuevo

Crear una carpeta `juegos/<nombre-del-juego>/` con su `index.html` y sumar una tarjeta en el `index.html` de la raíz.
