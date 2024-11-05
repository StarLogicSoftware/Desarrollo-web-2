## Introducción al DOM en JavaScript

### ¿Qué es el DOM?
El **DOM (Document Object Model)** es una representación estructurada de un documento HTML como una **estructura de árbol**. En esta estructura:
- Cada elemento HTML es un **nodo** en el árbol.
- JavaScript puede acceder y manipular estos nodos para **cambiar el contenido, estilo, estructura y propiedades** de los elementos en tiempo real.

El DOM permite a JavaScript interactuar y actualizar los elementos de una página web sin tener que recargarla.

### Accediendo a Elementos del DOM

Para trabajar con el DOM, primero tenemos que **seleccionar** o **acceder** a los elementos que queremos manipular. Existen varios métodos en JavaScript para seleccionar elementos del DOM:

1. **`document.getElementById()`**
   Selecciona un elemento usando su `id`.
   ```javascript
   const elemento = document.getElementById("miElemento");
   ```

2. **`document.querySelector()`**
   Selecciona el primer elemento que coincide con el selector CSS proporcionado.
   ```javascript
   const elemento = document.querySelector(".miClase");
   ```

3. **`document.querySelectorAll()`**
   Selecciona todos los elementos que coinciden con el selector CSS y devuelve una `NodeList` (similar a un array).
   ```javascript
   const elementos = document.querySelectorAll("p");
   ```

### Ejemplos Básicos de Modificación del DOM

#### 1. Cambiar el Contenido de un Elemento
Para cambiar el contenido de un elemento, podemos modificar su propiedad `innerHTML` o `textContent`.

- **`innerHTML`**: cambia el HTML interno de un elemento.
- **`textContent`**: cambia solo el texto sin afectar al HTML.

```html
<!-- HTML -->
<p id="parrafo">Este es un párrafo.</p>

<!-- JavaScript -->
<script>
  const parrafo = document.getElementById("parrafo");
  parrafo.innerHTML = "¡El contenido ha cambiado!";
</script>
```

#### 2. Cambiar el Estilo de un Elemento
Podemos modificar los estilos CSS de un elemento usando la propiedad `style`.

```html
<!-- HTML -->
<div id="caja" style="width: 100px; height: 100px; background-color: blue;"></div>

<!-- JavaScript -->
<script>
  const caja = document.getElementById("caja");
  caja.style.backgroundColor = "red";
  caja.style.width = "200px";
</script>
```

En este ejemplo, cambiamos el color de fondo y el ancho de una `div` con `id` “caja”.

#### 3. Agregar y Quitar Clases
Para modificar la clase de un elemento, podemos usar `classList`, que permite añadir, quitar o alternar clases.

```html
<!-- HTML -->
<p id="texto" class="azul">Texto de ejemplo</p>

<!-- CSS -->
<style>
  .azul { color: blue; }
  .rojo { color: red; }
</style>

<!-- JavaScript -->
<script>
  const texto = document.getElementById("texto");
  texto.classList.remove("azul");
  texto.classList.add("rojo");
</script>
```

Aquí, removemos la clase `"azul"` y añadimos la clase `"rojo"` para cambiar el color del texto.

#### 4. Crear y Agregar Nuevos Elementos al DOM
Podemos crear nuevos elementos HTML y añadirlos al DOM usando `createElement` y `appendChild`.

```html
<!-- HTML -->
<div id="contenedor"></div>

<!-- JavaScript -->
<script>
  const contenedor = document.getElementById("contenedor");
  
  // Crear un nuevo elemento `p`
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Este es un nuevo párrafo.";
  
  // Agregar el párrafo al contenedor
  contenedor.appendChild(nuevoParrafo);
</script>
```

Este código crea un nuevo párrafo y lo inserta dentro del `div` con `id` “contenedor”.

#### 5. Eliminar Elementos del DOM
Para eliminar un elemento, podemos usar el método `removeChild`.

```html
<!-- HTML -->
<div id="contenedor">
  <p id="parrafoEliminar">Párrafo que será eliminado.</p>
</div>

<!-- JavaScript -->
<script>
  const contenedor = document.getElementById("contenedor");
  const parrafoEliminar = document.getElementById("parrafoEliminar");
  
  // Eliminar el párrafo del contenedor
  contenedor.removeChild(parrafoEliminar);
</script>
```

Este código selecciona el `p` con `id` "parrafoEliminar" y lo elimina de su contenedor.

#### 6. Responder a Eventos del Usuario
Podemos usar el método `addEventListener` para ejecutar una función cuando un usuario interactúa con un elemento, como al hacer clic.

```html
<!-- HTML -->
<button id="miBoton">Haz clic aquí</button>
<p id="respuesta"></p>

<!-- JavaScript -->
<script>
  const boton = document.getElementById("miBoton");
  const respuesta = document.getElementById("respuesta");

  boton.addEventListener("click", () => {
    respuesta.textContent = "¡Has hecho clic en el botón!";
  });
</script>
```

En este ejemplo, el texto de `respuesta` cambia cuando el usuario hace clic en el botón.

---

### Resumen
El DOM en JavaScript es esencial para interactuar y modificar el contenido de las páginas web. A través de métodos como `getElementById`, `querySelector`, `classList`, y `addEventListener`, podemos realizar modificaciones dinámicas y responder a las interacciones del usuario.