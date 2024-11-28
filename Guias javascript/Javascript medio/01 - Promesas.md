# **Promesas en JavaScript**

### **¿Qué es una promesa?**

Una **promesa** en JavaScript es un objeto que representa el resultado eventual de una operación asíncrona. Puede estar en uno de los siguientes estados:

1. **Pendiente (Pending):** La operación aún no ha terminado.
2. **Cumplida (Fulfilled):** La operación se completó exitosamente.
3. **Rechazada (Rejected):** Hubo un error o fallo en la operación.

Las promesas facilitan el manejo de código asíncrono y reemplazan el uso excesivo de **callbacks**, lo que mejora la legibilidad del código.

---

### **¿Por qué usar promesas?**

1. **Evitan el "callback hell":** Permiten estructurar código asíncrono de forma más limpia y manejable.
2. **Encadenamiento:** Puedes realizar operaciones consecutivas con `.then()`.
3. **Error Handling Centralizado:** Usando `.catch()` para manejar errores en toda la cadena.

---

### **Cómo funcionan las promesas**

Las promesas tienen dos funciones principales:
- **`resolve`**: Se llama cuando la operación es exitosa.
- **`reject`**: Se llama cuando hay un error.

La sintaxis básica es:

```javascript
const promesa = new Promise((resolve, reject) => {
  // Operación asíncrona
  if (/* éxito */) {
    resolve("Operación exitosa");
  } else {
    reject("Hubo un error");
  }
});

// Consumir la promesa
promesa
  .then(resultado => {
    console.log(resultado); // Éxito
  })
  .catch(error => {
    console.error(error); // Error
  })
  .finally(() => {
    console.log("Operación completada"); // Siempre se ejecuta
  });
```

---

### **Ejemplo 1: Promesa básica**

Supongamos que queremos simular una operación que tarda 2 segundos en completarse, como buscar datos en una base de datos.

```javascript
const promesa = new Promise((resolve, reject) => {
  console.log("Iniciando operación...");
  
  setTimeout(() => {
    const exito = true; // Cambia a false para simular un error

    if (exito) {
      resolve("Datos encontrados");
    } else {
      reject("Error al buscar los datos");
    }
  }, 2000); // 2 segundos
});

// Consumir la promesa
promesa
  .then(resultado => {
    console.log("Éxito:", resultado);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operación finalizada");
  });
```

#### **Salida esperada (si `exito = true`):**
```
Iniciando operación...
Éxito: Datos encontrados
Operación finalizada
```

---

### **Encadenamiento de Promesas**

Podemos realizar operaciones consecutivas usando el retorno de `.then()`. Cada `.then()` recibe el valor resuelto de la promesa anterior.

```javascript
const obtenerUsuario = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id: 1, nombre: "Juan" }), 1000);
  });
};

const obtenerPedidos = (usuarioId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(["Pedido1", "Pedido2"]), 1000);
  });
};

// Encadenar promesas
obtenerUsuario()
  .then(usuario => {
    console.log("Usuario obtenido:", usuario);
    return obtenerPedidos(usuario.id); // Retornamos otra promesa
  })
  .then(pedidos => {
    console.log("Pedidos obtenidos:", pedidos);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operación finalizada");
  });
```

#### **Salida esperada:**
```
Usuario obtenido: { id: 1, nombre: "Juan" }
Pedidos obtenidos: [ 'Pedido1', 'Pedido2' ]
Operación finalizada
```

---

### **Creando promesas con `fetch`**

Vamos a realizar una solicitud `GET` usando `fetch`, que ya devuelve una promesa por defecto:

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(data => {
    console.log("Datos obtenidos:", data);
  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  })
  .finally(() => {
    console.log("Solicitud finalizada");
  });
```

---

### **Manejo de errores**

Los errores pueden ocurrir en cualquier parte de la cadena de promesas. `catch` capturará todos los errores en la cadena.

```javascript
const promesaConError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Algo salió mal"), 1000);
  });
};

promesaConError()
  .then(data => {
    console.log("Éxito:", data);
  })
  .catch(error => {
    console.error("Error capturado:", error);
  })
  .finally(() => {
    console.log("Operación finalizada con error");
  });
```

#### **Salida esperada:**
```
Error capturado: Algo salió mal
Operación finalizada con error
```

---

### **Ejemplo avanzado: `Promise.all`**

`Promise.all` ejecuta varias promesas en paralelo y espera a que todas se resuelvan. Si alguna falla, rechaza todo el conjunto.

```javascript
const promesa1 = new Promise(resolve => setTimeout(() => resolve("Resultado 1"), 1000));
const promesa2 = new Promise(resolve => setTimeout(() => resolve("Resultado 2"), 2000));
const promesa3 = new Promise(resolve => setTimeout(() => resolve("Resultado 3"), 3000));

Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => {
    console.log("Todos los resultados:", resultados);
  })
  .catch(error => {
    console.error("Error en una de las promesas:", error);
  });
```

#### **Salida esperada:**
```
Todos los resultados: [ 'Resultado 1', 'Resultado 2', 'Resultado 3' ]
```

---

### **Consideraciones importantes**

1. **Siempre maneja errores con `.catch`:**
   Nunca asumas que todo saldrá bien. Manejar errores hace tu código más robusto.
   
2. **Usa `finally` para tareas finales:**
   Ideal para cerrar conexiones, ocultar loaders, etc., sin importar si hubo éxito o error.

3. **Encadenamiento vs. `async/await`:**
   Aunque las promesas son poderosas, usar `async/await` puede simplificar su manejo (lo veremos en otro tutorial 😉).
