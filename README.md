# Desafío de Habilidad

Colección de juegos de habilidad para jugar desde el navegador del celular.

## Juegos

| Juego | Carpeta | Descripción |
|---|---|---|
| Tejo | [`juegos/tejo`](juegos/tejo/) | Tejo de playa: tirar los tejos para que queden lo más cerca posible del tejín. Contra la máquina (por niveles), 2 jugadores en el mismo celular o desafío en vivo, cada uno en su celular. |
| Latas | [`juegos/latas`](juegos/latas/) | Mesa tipo ping-pong con 6 latas en 2 filas de colores. Se lanza la pelotita deslizando el dedo: tiene que picar una sola vez y caer en una lata de su mismo color. |
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

## Cómo jugar Latas

- Apoyá el dedo, deslizalo hacia arriba y soltá: cuanto más largo el arrastre, más fuerte el tiro; desviarlo a un costado apunta.
- La pelotita tiene que **picar una sola vez** en la mesa y caer dentro de una lata de **su color**. Cada pelotita sale de un color al azar entre las latas que quedan.

| Situación | Puntos |
|---|---|
| Un pique y lata correcta | +100 |
| Lata de otro color | −50 |
| Entra sin picar, o con más de un pique | −25 |
| Pelotitas que sobran al terminar | +50 c/u |

| Nivel | Novedad |
|---|---|
| 1 | Fila roja adelante, fila azul atrás; línea guía del recorrido; 12 pelotitas |
| 2 | 10 pelotitas |
| 3 | Colores intercalados; sin línea guía |
| 4 | Colores mezclados al azar; 9 pelotitas |
| 5 | Viento lateral |
| 6 | Las latas se mueven de lado a lado |
| 7+ | 8 pelotitas, viento que cambia en cada tiro, latas más rápidas; desde el 8 cada fila se mueve para un lado distinto |

Si te quedás sin pelotitas, reintentás el nivel con el puntaje que tenías al empezarlo.

## Publicar con GitHub Pages

Los sensores de movimiento del celular sólo funcionan en páginas servidas por **HTTPS**. La forma más simple:

1. En GitHub: **Settings → Pages**.
2. En *Source* elegir **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. El sitio queda en `https://alt-si.github.io/Desaf-o-de-habbilidad/`.

En iPhone, al tocar **Jugar** el navegador pide permiso para usar el movimiento: hay que aceptarlo.

## Cómo jugar Tejo

- Deslizá el dedo hacia arriba y soltá: más largo = más lejos; inclinado = apunta. Cada uno tira 3 tejos por ronda, intercalados.
- Al final de la ronda, el que tiene el tejo más cerca del tejín suma **1 punto por cada tejo** suyo más cerca que el mejor del rival. Un tejo que cae **arriba del tejín** (¡Tejo!) vale **3**.
- Los tejos chocan: se puede sacar un tejo del rival o mover el tejín.
- Gana el primero que llega a los puntos del partido (7, 9, 12 o 15).

**Modos**

- **Contra la máquina**: por niveles. Cada nivel trae un rival más preciso y suma distancia, viento, viento cambiante y piedras; desde el nivel 5 la máquina también intenta sacarte los tejos. Estrellas: ganar · dejar al rival en la mitad de los puntos o menos · meter al menos un ¡Tejo!
- **2 jugadores en este celu**: se pasan el teléfono.
- **Desafío en vivo**: uno toca **Crear sala** y le pasa el código de 5 letras (o el link con **Compartir invitación**); el otro lo pone en **Unirme**. Cada uno juega desde su celular y ve los tiros del otro en el momento. Usa una conexión directa entre los dos teléfonos (WebRTC, con el servicio público gratuito de PeerJS para encontrarse), así que no hace falta un servidor propio. En algunas redes muy cerradas (ciertas redes de empresa o de datos móviles) la conexión directa puede no lograrse.

## Niveles

Todos los juegos tienen niveles para ir avanzando. La pantalla de inicio de cada juego muestra el **mapa de niveles**: los niveles se desbloquean al superar el anterior, cada uno guarda hasta 3 estrellas según cómo lo jugaste, y se puede volver a jugar cualquier nivel ya desbloqueado. Durante el juego, el botón **☰ Niveles** vuelve al mapa.

## Agregar un juego nuevo

Crear una carpeta `juegos/<nombre-del-juego>/` con su `index.html`, sumar una tarjeta en el `index.html` de la raíz y usar el mapa de niveles compartido (`comun/niveles.js`). Las reglas completas están en [`CLAUDE.md`](CLAUDE.md).
