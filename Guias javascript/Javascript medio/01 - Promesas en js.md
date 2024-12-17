# 📘 **Tutorial Básico de Promesas en JavaScript**

Las **Promesas** en JavaScript son objetos que nos permiten manejar operaciones **asíncronas** (como peticiones a una API, lectura de archivos, etc.) de forma más clara y estructurada.

---

## 🚀 **¿Qué es una Promesa?**
Una **Promesa** representa un valor que puede estar disponible **ahora, en el futuro, o nunca**. Tiene tres estados principales:

1. **Pending** (pendiente): La operación aún no se ha completado.
2. **Fulfilled** (resuelta): La operación se completó con éxito.
3. **Rejected** (rechazada): La operación falló.

---

## 🛠 **Sintaxis Básica**
```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Simulamos una operación asíncrona
  let exito = true; // Cambia a false para probar el rechazo
  
  setTimeout(() => {
    if (exito) {
      resolve("¡Operación exitosa!");
    } else {
      reject("Algo salió mal...");
    }
  }, 2000);
});
```

### ✅ **Explicación**:
- `resolve`: Se llama cuando la operación tiene éxito.
- `reject`: Se llama cuando ocurre un error o falla.

---

## 🔗 **Uso de `then()` y `catch()`**
Para manejar los resultados de la promesa, usamos:

- **`then()`**: Se ejecuta si la promesa se resuelve (éxito).
- **`catch()`**: Se ejecuta si la promesa se rechaza (error).

```javascript
miPromesa
  .then((resultado) => {
    console.log(resultado); // "¡Operación exitosa!"
  })
  .catch((error) => {
    console.error(error); // "Algo salió mal..."
  });
```

---

## 🕒 **Ejemplo Completo: Simular una Petición Asíncrona**
Supongamos que estamos obteniendo datos de una "API" ficticia:

```javascript
function obtenerDatosUsuario() {
  return new Promise((resolve, reject) => {
    console.log("Obteniendo datos del usuario...");

    setTimeout(() => {
      const exito = true; // Simulamos éxito o error
      if (exito) {
        resolve({ nombre: "Juan", edad: 25 });
      } else {
        reject("Error al obtener datos del usuario.");
      }
    }, 3000);
  });
}

obtenerDatosUsuario()
  .then((usuario) => {
    console.log("Datos del usuario:", usuario);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 🔍 **Resultado**:
- Si `exito` es `true`:
  ```bash
  Obteniendo datos del usuario...
  Datos del usuario: { nombre: "Juan", edad: 25 }
  ```
- Si `exito` es `false`:
  ```bash
  Obteniendo datos del usuario...
  Error al obtener datos del usuario.
  ```

---

## 🌟 **Encadenar Promesas**
Podemos ejecutar múltiples operaciones **en secuencia** usando **encadenamiento de `then()`**.

```javascript
function paso1() {
  return Promise.resolve("Paso 1 completado");
}

function paso2() {
  return Promise.resolve("Paso 2 completado");
}

function paso3() {
  return Promise.resolve("Paso 3 completado");
}

paso1()
  .then((mensaje1) => {
    console.log(mensaje1);
    return paso2();
  })
  .then((mensaje2) => {
    console.log(mensaje2);
    return paso3();
  })
  .then((mensaje3) => {
    console.log(mensaje3);
  })
  .catch((error) => {
    console.error("Error en alguno de los pasos:", error);
  });
```

### 🔍 **Resultado**:
```bash
Paso 1 completado
Paso 2 completado
Paso 3 completado
```

---

## 🔄 **Usar `Promise.all()` para Ejecución en Paralelo**
`Promise.all()` permite ejecutar **varias promesas al mismo tiempo** y esperar a que todas se resuelvan.

```javascript
const promesa1 = Promise.resolve("Promesa 1 resuelta");
const promesa2 = new Promise((resolve) => setTimeout(() => resolve("Promesa 2 resuelta"), 2000));
const promesa3 = Promise.resolve("Promesa 3 resuelta");

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log("Todas las promesas se resolvieron:", resultados);
  })
  .catch((error) => {
    console.error("Una de las promesas falló:", error);
  });
```

### 🔍 **Resultado**:
```bash
Todas las promesas se resolvieron: ["Promesa 1 resuelta", "Promesa 2 resuelta", "Promesa 3 resuelta"]
```

---

## 💡 **Resumen**
- Usa `new Promise` para crear una promesa.
- Maneja los resultados con `then()` y los errores con `catch()`.
- Encadena promesas para realizar operaciones en secuencia.
- Usa `Promise.all()` para manejar promesas en paralelo.