### ¿Qué son los eventos en JavaScript?

Los eventos son acciones o sucesos que ocurren en el navegador y pueden ser capturados y gestionados por JavaScript para desencadenar funciones. Algunos ejemplos de eventos incluyen clics del mouse, presionar una tecla, cargar una página, enviar un formulario, entre otros.

### Formas de manejar eventos en JavaScript

1. **Asignación de eventos en línea (HTML)**:
   Puedes definir eventos directamente en el elemento HTML usando atributos de eventos.
   ```html
   <button onclick="alert('¡Botón clickeado!')">Haz clic aquí</button>
   ```

2. **Asignación de eventos con propiedades de eventos (JavaScript)**:
   Este método sobrescribe cualquier manejador de eventos previamente asignado.
   ```javascript
   const button = document.querySelector('button');
   button.onclick = function() {
     alert('¡Botón clickeado!');
   };
   ```

3. **Uso de `addEventListener` (JavaScript)**:
   Esta es la forma más moderna y flexible de manejar eventos. Permite agregar múltiples eventos al mismo elemento sin sobrescribir otros manejadores.
   ```javascript
   const button = document.querySelector('button');
   button.addEventListener('click', function() {
     console.log('¡Botón clickeado!');
   });
   ```

### Parámetros de las funciones de eventos

Cuando se ejecuta un manejador de eventos, la función recibe un objeto de evento como argumento. Este objeto contiene información sobre el evento, como el tipo de evento, el elemento que lo disparó, y más.

**Propiedades comunes del objeto de evento**:
- `event.type`: El tipo de evento (ej. `click`, `keydown`).
- `event.target`: El elemento que disparó el evento.
- `event.preventDefault()`: Previene el comportamiento predeterminado del evento (por ejemplo, evitar que un formulario se envíe).
- `event.stopPropagation()`: Detiene la propagación del evento en el DOM.

**Ejemplo de uso de `event`**:
```javascript
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace redirija
  console.log('Enlace clickeado, pero sin redirección.');
});
```

### Listado de eventos más comunes

1. **Eventos de mouse**:
   - `click`: Cuando se hace clic en un elemento.
   - `dblclick`: Doble clic.
   - `mousedown`: Cuando se presiona el botón del mouse.
   - `mouseup`: Cuando se suelta el botón del mouse.
   - `mouseenter` / `mouseleave`: Cuando el puntero entra o sale de un elemento.
   - `mousemove`: Cuando el mouse se mueve dentro de un elemento.

   **Ejemplo**:
   ```javascript
   document.querySelector('div').addEventListener('mouseenter', function() {
     console.log('Mouse entró en el div');
   });
   ```

2. **Eventos de teclado**:
   - `keydown`: Cuando se presiona una tecla.
   - `keyup`: Cuando se suelta una tecla.
   - `keypress`: Cuando una tecla se presiona y suelta (obsoleto en favor de `keydown` y `keyup`).

   **Ejemplo**:
   ```javascript
   document.addEventListener('keydown', function(event) {
     console.log(`Tecla presionada: ${event.key}`);
   });
   ```

3. **Eventos de formulario**:
   - `submit`: Cuando se envía un formulario.
   - `change`: Cuando el valor de un input cambia.
   - `focus` / `blur`: Cuando un elemento recibe o pierde el foco.

   **Ejemplo**:
   ```javascript
   document.querySelector('form').addEventListener('submit', function(event) {
     event.preventDefault();
     console.log('Formulario enviado');
   });
   ```

4. **Eventos de carga**:
   - `load`: Cuando un recurso se ha cargado completamente.
   - `DOMContentLoaded`: Cuando el DOM ha sido completamente cargado y analizado.

   **Ejemplo**:
   ```javascript
   window.addEventListener('load', function() {
     console.log('Página completamente cargada');
   });
   ```

5. **Eventos de ventana**:
   - `resize`: Cuando la ventana del navegador se redimensiona.
   - `scroll`: Cuando se hace scroll en la página o un elemento.

   **Ejemplo**:
   ```javascript
   window.addEventListener('resize', function() {
     console.log('Ventana redimensionada');
   });
   ```

### Ejemplos simples de varios eventos

**Evento `click` en un botón**:
```javascript
document.getElementById('myButton').addEventListener('click', function() {
  alert('¡Botón clickeado!');
});
```

**Evento `keydown` para detectar teclas presionadas**:
```javascript
document.addEventListener('keydown', function(event) {
  console.log(`Tecla presionada: ${event.key}`);
});
```

**Evento `change` en un input**:
```javascript
document.getElementById('myInput').addEventListener('change', function() {
  console.log(`Nuevo valor: ${this.value}`);
});
```

**Evento `scroll` en la ventana**:
```javascript
window.addEventListener('scroll', function() {
  console.log('Scroll detectado en la página');
});
```

### Resumen

- **`addEventListener`** es la forma recomendada de manejar eventos porque permite agregar múltiples eventos sin sobrescribir otros.
- El **objeto `event`** proporciona información útil sobre el evento, como el elemento que lo disparó y el tipo de evento.
- Hay múltiples tipos de eventos disponibles en JavaScript, desde eventos de mouse y teclado hasta eventos de carga y ventana.