# Desafío de Habilidad

Colección de juegos de habilidad para jugar desde el navegador del celular.

## Juegos

| Juego | Carpeta | Descripción |
|---|---|---|
| Mesa de Hoyos | [`juegos/mesa-de-hoyos`](juegos/mesa-de-hoyos/) | Mesa a pantalla completa con 4 hoyos (2 blancos, 2 negros) y 4 bolas (2 blancas, 2 negras). Inclinando el celular se mueve la mesa: hay que embocar cada bola en el hoyo de su mismo color. |

## Cómo jugar Mesa de Hoyos

- Tocá **Jugar** sosteniendo el celular en la posición cómoda: esa posición se toma como "mesa plana". El botón **Recalibrar** vuelve a fijarla.
- Inclinná el celular para que rueden las bolas.
- Bola en el hoyo de su color: queda embocada. Bola en el hoyo equivocado: vuelve al centro y suma un fallo.
- Puntaje = tiempo + 5 s por cada fallo. El mejor puntaje se guarda en el celular.
- En compu se puede probar con las flechas / W A S D, o manteniendo apretado el mouse y arrastrando.

## Publicar con GitHub Pages

Los sensores de movimiento del celular sólo funcionan en páginas servidas por **HTTPS**. La forma más simple:

1. En GitHub: **Settings → Pages**.
2. En *Source* elegir **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. El sitio queda en `https://alt-si.github.io/Desaf-o-de-habbilidad/`.

En iPhone, al tocar **Jugar** el navegador pide permiso para usar el movimiento: hay que aceptarlo.

## Agregar un juego nuevo

Crear una carpeta `juegos/<nombre-del-juego>/` con su `index.html` y sumar una tarjeta en el `index.html` de la raíz.
