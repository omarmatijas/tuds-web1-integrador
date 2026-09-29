# tuds-web1-integrador
Proyecto integrador 2026 - TUDS - WEB1 - Magallanes, Matijas


## Trabajo Final Integrador

### Objetivo

El Trabajo Final Integrador (TFI) consiste en desarrollar un sitio web completo que permita demostrar los conocimientos adquiridos durante la materia, especialmente en el uso de HTML, CSS, Flex box, JavaScript, validación de formularios, manipulación del DOM y control de versiones con Git y GitHub.

La temática del sitio será de libre elección. Se valorarán la creatividad, la coherencia visual, la organización del código y la correcta aplicación de buenas prácticas.

### 1. Estructura del sitio

El sitio deberá contar con, al menos, tres páginas HTML diferentes:

#### Página principal

Deberá incluir:

- Información general y una presentación clara del sitio.
- Un menú de navegación.
- Un carrusel de imágenes desarrollado con JavaScript.

#### Página de artículo, productos o servicios

Según la temática elegida, deberá presentar información sobre productos, servicios, noticias, actividades u otro contenido relevante.

El contenido deberá:

- Estar organizado en dos o tres columnas mediante Flexbox.
- Mantener una estructura clara y legible.
- Adaptarse de manera razonable a diferentes tamaños de pantalla.

#### Página de contacto

Deberá incluir un formulario con, al menos, tres campos.

Entre ellos deberán encontrarse obligatoriamente:

- Correo electrónico.
- Teléfono.
- Al menos un campo adicional, como nombre, asunto o mensaje.

### 2. Navegación

Todas las páginas deberán incluir el mismo menú de navegación.

El menú deberá:

- Estar desarrollado mediante Flexbox.
- Contener enlaces funcionales hacia las demás páginas del sitio.
- Identificar visualmente la página que se encuentra activa.
- Mantener una apariencia coherente en todo el sitio.

No deberán existir enlaces rotos o páginas inaccesibles desde el menú principal.

### 3. Formulario y validaciones

Los datos ingresados deberán validarse mediante JavaScript. Las validaciones propias de HTML5 podrán utilizarse como complemento, pero no serán suficientes por sí solas.

El formulario deberá combinar:

- Campos obligatorios.
- Longitudes mínimas o máximas.
- Validación del correo electrónico mediante una expresión regular.
- Validación del teléfono mediante una expresión regular.
- Eliminación o control de espacios innecesarios.
- Mensajes de error claros y asociados al campo correspondiente.

No se permite utilizar alertas nativas del navegador, como `alert()`, para mostrar errores.

Los mensajes deberán incorporarse a la página mediante manipulación del DOM.

Cuando todos los datos sean válidos:

- Se deberá impedir el envío tradicional del formulario.
- Se deberán crear nuevos elementos HTML mediante `createElement()`.
- Los elementos creados deberán mostrar en la página un resumen de los datos enviados.
- El formulario deberá quedar listo para realizar un nuevo envío, cuando corresponda.

### 4. Carrusel de imágenes

La página principal deberá incluir un carrusel desarrollado íntegramente por el estudiante.

No se permite utilizar librerías, frameworks, plugins ni copiar la solución completa de un tutorial.

El carrusel deberá cumplir con las siguientes condiciones:

- Las rutas o datos de las imágenes deberán almacenarse en un array de JavaScript.
- La imagen visible deberá actualizarse mediante JavaScript.
- Deberá contar con un botón para avanzar.
- Deberá contar con un botón para retroceder.
- Su funcionamiento deberá ser circular:
  - Al avanzar desde la última imagen, deberá mostrarse la primera.
  - Al retroceder desde la primera imagen, deberá mostrarse la última.
- Todas las imágenes deberán contar con texto alternativo adecuado.
- Los controles deberán ser claramente identificables y utilizables.

### 5. Diseño y estilos

Los estilos deberán ser desarrollados por el estudiante sin utilizar frameworks como Bootstrap, Tailwind CSS u otros similares.

El sitio deberá:

- Utilizar una paleta de colores coherente.
- Mantener el mismo lenguaje visual en todas sus páginas.
- Usar una tipografía diferente de la predeterminada del navegador.
- Aplicar correctamente márgenes y rellenos.
- Utilizar Flexbox en los componentes solicitados.
- Presentar una jerarquía visual clara mediante títulos, subtítulos, párrafos y espacios.
- Conservar una buena legibilidad y un contraste adecuado entre texto y fondo.
- Adaptarse a pantallas de escritorio y dispositivos móviles sin producir desplazamientos horizontales innecesarios.

### 6. Organización y calidad del código

El proyecto deberá:

- Utilizar etiquetas HTML semánticas cuando corresponda, por ejemplo: `header`, `nav`, `main`, `section`, `article` y `footer`.
- Asociar correctamente cada campo del formulario con su respectivo `label`.
- Incluir el atributo `alt` en las imágenes.
- Mantener separados, siempre que sea posible, los archivos HTML, CSS y JavaScript.
- Utilizar nombres descriptivos para archivos, variables, funciones, clases e identificadores.
- Evitar código duplicado o sin utilizar.
- No presentar errores en la consola del navegador durante su funcionamiento normal.
- Mantener una estructura ordenada de carpetas y archivos.
- Incluir comentarios únicamente cuando ayuden a comprender una parte relevante del código.

### 7. Repositorio y publicación

El código fuente deberá entregarse mediante un repositorio de GitHub.

El repositorio deberá:

- Reflejar el proceso real de desarrollo.
- Conservar el historial de las diferentes sesiones de trabajo.
- Incluir commits frecuentes, progresivos y con mensajes descriptivos.
- Evitar concentrar todo el proyecto en uno o dos commits.
- Evitar commits excesivamente grandes o sin cambios significativos.
- Incluir un archivo `README.md` con:
  - Nombre del proyecto.
  - Descripción breve.
  - Nombre del estudiante.
  - Instrucciones básicas de uso.
  - Enlace al sitio publicado.
- Contener únicamente archivos necesarios para ejecutar o documentar el proyecto.

El sitio deberá publicarse mediante GitHub Pages y estar accesible al momento de la evaluación.

El estudiante deberá entregar:

1. La URL del repositorio.
2. La URL del sitio publicado en GitHub Pages.

### 8. Autoría y uso de recursos externos

Todo el código principal deberá ser desarrollado y comprendido por el estudiante.

Se podrán consultar apuntes, documentación y ejemplos parciales, pero no se aceptará:

- La copia completa de proyectos o tutoriales.
- El uso de plantillas que resuelvan la mayor parte del trabajo.
- El uso de librerías o frameworks que reemplacen los contenidos solicitados.
- La presentación de código que el estudiante no pueda explicar.

Las imágenes, fuentes u otros recursos externos deberán tener autorización de uso o provenir de fuentes gratuitas. Cuando corresponda, su procedencia deberá mencionarse en el `README.md`.

El equipo docente podrá solicitar una breve explicación o demostración del código para verificar su funcionamiento y autoría.

### 9. Criterios de evaluación

| Criterio | Evidencias esperadas | Puntaje máximo |
| --- | --- | --- |
| Estructura y navegación | Tres páginas funcionales, menú común, enlaces correctos y uso de Flexbox | 15 puntos |
| Página de contenido | Información pertinente, organización en dos o tres columnas y buena legibilidad | 10 puntos |
| Formulario y validaciones | Campos solicitados, expresiones regulares, validación con JavaScript y mensajes en el DOM | 20 puntos |
| Carrusel | Array de imágenes, controles, navegación circular y desarrollo propio | 20 puntos |
| Diseño y adaptación | Paleta coherente, tipografía, espaciado, contraste y adaptación a diferentes pantallas | 15 puntos |
| Calidad del código | HTML semántico, organización, nombres descriptivos, accesibilidad básica y ausencia de errores | 10 puntos |
| GitHub y publicación | Historial de commits adecuado, README, repositorio ordenado y GitHub Pages funcionando | 10 puntos |
| **Total** | | **100 puntos** |

### 10. Condiciones de aprobación

Para aprobar el TFI, el estudiante deberá:

- Obtener un mínimo de 60 puntos sobre 100.
- Presentar al menos las tres páginas solicitadas.
- Implementar la validación del formulario mediante JavaScript.
- Implementar un carrusel propio, funcional y circular.
- Entregar un repositorio que refleje el proceso de desarrollo.
- Publicar el sitio correctamente mediante GitHub Pages.
- Poder explicar las principales decisiones y partes del código.

Aunque se alcance el puntaje mínimo, no podrá aprobarse un trabajo que presente alguna de las siguientes situaciones:

- El sitio no puede ejecutarse o navegarse.
- No se entregó el repositorio o el enlace de GitHub Pages.
- El formulario utiliza únicamente validaciones HTML5.
- El carrusel fue reemplazado por una librería o una solución copiada.
- El repositorio no contiene un historial de trabajo razonable.
- Existen indicios comprobables de copia o falta de autoría.
- El estudiante no puede explicar el funcionamiento básico del código presentado.

### 11. Recomendaciones finales

Antes de entregar, se recomienda comprobar:

- Todos los enlaces del menú.
- El funcionamiento del formulario con datos válidos e inválidos.
- La navegación circular del carrusel.
- La visualización del sitio en escritorio y dispositivos móviles.
- La consola del navegador.
- La publicación de la versión más reciente en GitHub Pages.
- Las URLs del repositorio y del sitio desplegado.

La creatividad, la atención al detalle y la incorporación de mejoras que no interfieran con los requisitos obligatorios serán valoradas especialmente.