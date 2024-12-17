# **Tutorial: Uso de Fetch para GET en JavaScript**

`fetch` es una API nativa de JavaScript que nos permite hacer solicitudes HTTP (como GET, POST, PUT y DELETE) de manera sencilla. A continuación, aprenderemos a usarlo paso a paso con solicitudes **GET**.

---

## **1. Introducción a JSONPlaceholder**

**JSONPlaceholder** es un servicio gratuito que provee datos JSON de ejemplo. Lo usaremos para nuestras pruebas. Las URLs más usadas son:

- **Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Users**: `https://jsonplaceholder.typicode.com/users`
- **Comments**: `https://jsonplaceholder.typicode.com/comments`

---

## **2. Uso de Fetch con Promesas**

`fetch` devuelve una **Promesa** que resuelve la respuesta de la solicitud. Veamos cómo se hace paso a paso.

### **Ejemplo Básico**

Vamos a obtener una lista de **posts** de JSONPlaceholder.

```javascript
// Realizar solicitud GET usando fetch y promesas
fetch('https://jsonplaceholder.typicode.com/posts') // URL de la API
  .then((response) => {
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Error al obtener los datos'); // Manejo de errores
    }
    return response.json(); // Convertir la respuesta a JSON
  })
  .then((data) => {
    console.log('Lista de posts:', data); // Mostrar los datos en consola
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error); // Manejo de errores
  });
```

### **Explicación del Código**

1. **`fetch('URL')`**: Hace una solicitud HTTP a la URL proporcionada.
2. **`response.ok`**: Comprueba si la respuesta es exitosa (código de estado 200-299).
3. **`response.json()`**: Convierte la respuesta a formato JSON.
4. **`.then()`**: Se ejecuta cuando la Promesa se resuelve exitosamente.
5. **`.catch()`**: Captura cualquier error en la solicitud o en el proceso.

---

### **Ejemplo Mostrando los Datos en HTML**

Supongamos que quieres mostrar los títulos de los posts en una página web:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Fetch con Promesas</title>
</head>
<body>
  <h1>Lista de Posts</h1>
  <ul id="posts"></ul>

  <script>
    // Referencia al elemento UL
    const postsList = document.getElementById('posts');

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // Recorrer los datos y agregarlos a la lista
        data.forEach((post) => {
          const li = document.createElement('li');
          li.textContent = `Título: ${post.title}`;
          postsList.appendChild(li);
        });
      })
      .catch((error) => {
        console.error('Error al obtener los posts:', error);
      });
  </script>
</body>
</html>
```

**Resultado esperado**: Una lista con los títulos de los posts se mostrará en el navegador.

---

## **3. Uso de Fetch con Async/Await**

`async/await` nos permite escribir código asíncrono de forma más sencilla y parecida al código síncrono.

### **Ejemplo Básico**

El mismo ejemplo anterior, pero usando `async/await`:

```javascript
// Función asíncrona para obtener posts
async function obtenerPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const data = await response.json(); // Convertir la respuesta a JSON
    console.log('Lista de posts:', data);
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}

obtenerPosts(); // Llamar a la función
```

### **Explicación del Código**

1. **`async`**: Declara que la función será asíncrona.
2. **`await fetch()`**: Pausa la ejecución de la función hasta que la Promesa de `fetch` se resuelve.
3. **`response.ok`**: Comprueba si la solicitud fue exitosa.
4. **`await response.json()`**: Convierte la respuesta a JSON de forma sencilla.
5. **`try...catch`**: Permite manejar errores de forma más clara.

---

### **Ejemplo Mostrando los Datos en HTML**

Usando `async/await` para mostrar los títulos de los posts en una lista:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Fetch con Async/Await</title>
</head>
<body>
  <h1>Lista de Posts</h1>
  <ul id="posts"></ul>

  <script>
    // Función asíncrona para obtener posts
    async function obtenerPosts() {
      const postsList = document.getElementById('posts'); // Referencia al UL

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const data = await response.json();

        // Recorrer y mostrar los posts en la lista
        data.forEach((post) => {
          const li = document.createElement('li');
          li.textContent = `Título: ${post.title}`;
          postsList.appendChild(li);
        });
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    }

    obtenerPosts(); // Llamar a la función
  </script>
</body>
</html>
```

---

## **4. Comparación Promesas vs Async/Await**

| Aspecto               | Promesas                          | Async/Await                        |
|------------------------|-----------------------------------|------------------------------------|
| **Sintaxis**           | Encadenamiento con `.then()`     | Uso de `await` y código más lineal |
| **Legibilidad**        | Más verboso                      | Más limpio y fácil de entender     |
| **Manejo de errores**  | `.catch()`                       | `try...catch`                      |
| **Soporte en navegadores** | Amplio (moderno)                | Amplio (moderno, a partir de ES2017)|

---

## **5. Conclusión**

- **Promesas** y **async/await** son dos formas de trabajar con código asíncrono en JavaScript.
- `fetch` es una herramienta poderosa para interactuar con APIs externas.
- **`async/await`** es preferido en proyectos modernos por su simplicidad y legibilidad.

---