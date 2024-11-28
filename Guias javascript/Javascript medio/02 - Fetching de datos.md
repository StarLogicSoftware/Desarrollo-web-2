# **Tutorial: Uso de Fetch en JavaScript**

### ¿Qué es `fetch`?

`fetch` es una API nativa de JavaScript que permite realizar solicitudes HTTP (GET, POST, PUT, DELETE, etc.) a servidores web de forma sencilla. Es una alternativa moderna a `XMLHttpRequest` y está basada en promesas, lo que facilita el manejo de respuestas asíncronas.

---

### **¿Para qué se usa?**

Se utiliza para interactuar con APIs (Interfaz de Programación de Aplicaciones) para:

1. **Obtener datos** desde un servidor.
2. **Enviar datos** (crear o actualizar recursos).
3. **Eliminar recursos**.
4. Manejar respuestas asíncronas como JSON, texto o archivos.

---

### **Cómo se usa**

La sintaxis básica de `fetch` es:

```javascript
fetch(url, options)
  .then(response => { /* manejar respuesta */ })
  .catch(error => { /* manejar errores */ })
  .finally(() => { /* código final */ });
```

#### Parámetros:
1. **`url`**: URL de la API o recurso al que deseas acceder.
2. **`options`** (opcional): Configuración de la solicitud (método HTTP, cabeceras, cuerpo, etc.).

#### Respuesta:
- **`then`**: Se ejecuta cuando la solicitud tiene éxito.
- **`catch`**: Se ejecuta si hay errores.
- **`finally`**: Código que siempre se ejecuta (éxito o error).

---

### Ejemplo Práctico con JSONPlaceholder

Usaremos [JSONPlaceholder](https://jsonplaceholder.typicode.com), un API gratuita que simula datos para practicar solicitudes HTTP.

---

### **1. GET: Obtener datos**

```javascript
// URL del recurso
const url = 'https://jsonplaceholder.typicode.com/posts';

// Realizamos una solicitud GET
fetch(url)
  .then(response => {
    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(data => {
    console.log('Datos obtenidos:', data); // Mostramos los datos
  })
  .catch(error => {
    console.error('Error al obtener datos:', error); // Mostramos errores
  })
  .finally(() => {
    console.log('Solicitud GET finalizada.');
  });
```

#### **Salida esperada:**
Una lista de publicaciones en JSON.

---

### **2. POST: Crear un nuevo recurso**

```javascript
// URL del recurso
const url = 'https://jsonplaceholder.typicode.com/posts';

// Datos a enviar
const newPost = {
  title: 'Mi nuevo post',
  body: 'Este es el contenido del post',
  userId: 1
};

// Configuración de la solicitud
fetch(url, {
  method: 'POST', // Método HTTP
  headers: {
    'Content-Type': 'application/json' // Indicamos que enviamos JSON
  },
  body: JSON.stringify(newPost) // Convertimos los datos a JSON
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Recurso creado:', data); // Mostramos el recurso creado
  })
  .catch(error => {
    console.error('Error al crear recurso:', error);
  })
  .finally(() => {
    console.log('Solicitud POST finalizada.');
  });
```

#### **Salida esperada:**
El recurso creado con un nuevo ID.

---

### **3. PUT: Actualizar un recurso existente**

```javascript
// URL del recurso (actualizamos el post con ID 1)
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Datos a actualizar
const updatedPost = {
  title: 'Post actualizado',
  body: 'Este es el contenido actualizado',
  userId: 1
};

// Configuración de la solicitud
fetch(url, {
  method: 'PUT', // Método HTTP
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedPost)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Recurso actualizado:', data); // Mostramos el recurso actualizado
  })
  .catch(error => {
    console.error('Error al actualizar recurso:', error);
  })
  .finally(() => {
    console.log('Solicitud PUT finalizada.');
  });
```

#### **Salida esperada:**
El recurso actualizado con los nuevos datos.

---

### **4. DELETE: Eliminar un recurso**

```javascript
// URL del recurso (eliminamos el post con ID 1)
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Configuración de la solicitud
fetch(url, {
  method: 'DELETE' // Método HTTP
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    console.log('Recurso eliminado. Código de estado:', response.status);
  })
  .catch(error => {
    console.error('Error al eliminar recurso:', error);
  })
  .finally(() => {
    console.log('Solicitud DELETE finalizada.');
  });
```

#### **Salida esperada:**
Confirmación de que el recurso fue eliminado (código de estado 200 o 204).

---

### **Consideraciones y Posibilidades**

1. **Control de errores:**
   Siempre verifica el estado de la respuesta (`response.ok` o `response.status`) para manejar errores como 404 o 500.

2. **Encadenamiento de promesas:**
   Puedes encadenar múltiples `then` para manejar datos en etapas.

3. **Manejo de JSON:**
   Asegúrate de convertir correctamente los datos a JSON usando `JSON.stringify` al enviar y `response.json()` al recibir.

4. **Cabeceras personalizadas:**
   Puedes incluir cabeceras para autenticar solicitudes o enviar tipos de contenido específicos.