### Introducción a la manipulación de estilos con JavaScript

JavaScript permite modificar los estilos de los elementos de una página de varias maneras. Puedes cambiar directamente los estilos en línea de un elemento o manipular las clases de CSS que se aplican a un elemento para cambiar su apariencia.

### 1. **Modificar estilos en línea con JavaScript**

Puedes cambiar el estilo de un elemento accediendo a la propiedad `style` del elemento. Esto te permite aplicar o modificar propiedades CSS específicas.

**Ejemplo**:
```javascript
const element = document.getElementById('myDiv');
element.style.backgroundColor = 'blue'; // Cambia el fondo a azul
element.style.color = 'white'; // Cambia el color del texto a blanco
element.style.padding = '20px'; // Añade un relleno de 20px
```

**Notas**:
- Las propiedades CSS se escriben en *camelCase* en JavaScript. Por ejemplo, `background-color` se convierte en `backgroundColor` y `font-size` en `fontSize`.
- Este método solo modifica los estilos en línea, es decir, se aplican directamente al elemento como si hubieran sido añadidos con el atributo `style` en HTML.

### 2. **Añadir y remover clases de CSS con `classList`**

Usar `classList` es una manera más flexible y mantenible de aplicar estilos. Permite añadir, quitar, o alternar clases de CSS en un elemento.

**Propiedades y métodos de `classList`**:
- `element.classList.add('className')`: Añade una clase.
- `element.classList.remove('className')`: Quita una clase.
- `element.classList.toggle('className')`: Alterna una clase (la añade si no está presente, la quita si ya está).
- `element.classList.contains('className')`: Verifica si el elemento tiene una clase específica.

**Ejemplo**:
```javascript
const button = document.getElementById('myButton');

// Añadir una clase
button.classList.add('active');

// Quitar una clase
button.classList.remove('active');

// Alternar una clase
button.classList.toggle('highlight');

// Verificar si una clase está presente
if (button.classList.contains('highlight')) {
  console.log('El botón tiene la clase highlight');
}
```

### 3. **Cambiar múltiples estilos dinámicamente**

Puedes usar JavaScript para aplicar estilos más complejos o dinámicos basados en interacciones del usuario o condiciones específicas.

**Ejemplo**:
```javascript
const box = document.querySelector('.box');
document.querySelector('#changeColorBtn').addEventListener('click', function() {
  box.style.backgroundColor = box.style.backgroundColor === 'red' ? 'green' : 'red';
});
```

### 4. **Agregar clases condicionalmente**

Un enfoque común es cambiar las clases en función de una condición. Esto permite mantener los estilos separados en el archivo CSS y cambiar entre ellos mediante JavaScript.

**Ejemplo**:
```javascript
const element = document.querySelector('.status');
const isActive = true;

if (isActive) {
  element.classList.add('active');
} else {
  element.classList.remove('active');
}
```

### 5. **Manejo de múltiples clases**

Puedes aplicar o remover múltiples clases a la vez usando `classList.add()` y `classList.remove()`.

**Ejemplo**:
```javascript
const paragraph = document.querySelector('p');

// Añadir varias clases
paragraph.classList.add('highlight', 'bold');

// Remover varias clases
paragraph.classList.remove('highlight', 'bold');
```

### 6. **Ejemplos prácticos de manipulación de estilos**

**Ejemplo 1: Cambiar el color de fondo al hacer clic en un botón**:
```html
<button id="colorButton">Cambiar color de fondo</button>
<div id="container" style="width: 200px; height: 200px; border: 1px solid black;"></div>

<script>
  document.getElementById('colorButton').addEventListener('click', function() {
    const container = document.getElementById('container');
    container.style.backgroundColor = 'lightblue';
  });
</script>
```

**Ejemplo 2: Alternar clases para un menú desplegable**:
```html
<button id="menuButton">Mostrar/Ocultar Menú</button>
<ul id="menu" class="hidden">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>

<style>
  .hidden {
    display: none;
  }
  .visible {
    display: block;
  }
</style>

<script>
  document.getElementById('menuButton').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('visible');
  });
</script>
```

### 7. **Resumen de eventos comunes para manipular estilos**

- **`click`**: Usado para cambiar estilos o clases cuando un elemento es clickeado.
- **`mouseover` / `mouseout`**: Usados para aplicar efectos al pasar el ratón sobre un elemento.
- **`focus` / `blur`**: Usados para cambiar estilos cuando un input recibe o pierde el foco.

**Ejemplo**:
```javascript
const input = document.querySelector('input');
input.addEventListener('focus', function() {
  input.style.borderColor = 'blue';
});
input.addEventListener('blur', function() {
  input.style.borderColor = 'gray';
});
```