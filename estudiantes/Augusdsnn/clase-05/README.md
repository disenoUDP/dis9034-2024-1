# clase-05
# Animación de Círculos luminosos
https://editor.p5js.org/augusdsnn/sketches/uxpJHSFar
Este proyecto tiene como objetivo crear una animación que presenta círculos aleatorios con un efecto de resplandor y otro círculo que sigue el mouse creando un camino. Los objetivos principales incluyen:

- **Efecto de Resplandor:** Cada círculo se representa con un efecto de resplandor, utilizando la función de shadowBlur.
- **Variación de Color:** Al hacer clic con el mouse, el color de resplandor de los círculos cambia aleatoriamente dentro de un grupo de colores específico.
- **Círculos Animados:** Los círculos están animados con tamaños y colores variables, exhibiendo también el efecto de resplandor.

### Variables

- `shadowColor`: Almacena el color del efecto de resplandor.
- `positions`: Almacena las posiciones del mouse para crear el efecto de resplandor.
- `colorGroup`: Define un grupo específico de colores para el efecto de resplandor.
- `circles`: Un array para almacenar información sobre los círculos.
- `minInterval` y `maxInterval`: Definen los intervalos mínimo y máximo entre ráfagas de círculos.

### Funciones

- `setup()`: Inicializa el lienzo y configura el estado inicial de la animación.
- `draw()`: La función principal responsable de renderizar la animación. Actualiza y muestra los círculos y el efecto de resplandor.
- `mouseClicked()`: Se activa al hacer clic con el mouse, cambia el color de resplandor de los círculos aleatoriamente dentro de la paleta elegida.
- `createBurst()`: Crea una ráfaga de círculos con tamaños y colores aleatorios.
- Clase `Circle`: Representa un objeto de círculo con propiedades como posición, diámetro y color de relleno. Proporciona métodos para actualizar y mostrar el círculo.

## Créditos

- El efecto de resplandor utilizado en este proyecto está inspirado en el tutorial de Kazuki Umeda [aquí](https://www.youtube.com/watch?v=iIWH3IUYHzM).
- El proyecto fue creado con la asistencia de OpenAI.
