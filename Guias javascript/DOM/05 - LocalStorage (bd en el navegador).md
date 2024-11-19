# LocalStorage en el navegador

**`localStorage`** es una API del navegador que permite almacenar datos de manera persistente en el navegador del cliente. Los datos permanecen disponibles incluso después de cerrar y volver a abrir el navegador (siempre que no se borren manualmente o a través de configuración del navegador).

### Listado de métodos principales de `localStorage`
`localStorage` es un objeto global y sus métodos comunes son:

1. **`setItem(key, value)`**  
   Almacena un valor asociado a una clave específica.  
   - `key`: el nombre de la clave (cadena de texto).
   - `value`: el valor a guardar, que debe ser una cadena de texto. Si necesitas guardar un objeto o array, puedes usar `JSON.stringify()`.

2. **`getItem(key)`**  
   Obtiene el valor almacenado en una clave específica.  
   - Si la clave no existe, devuelve `null`.

3. **`removeItem(key)`**  
   Elimina un elemento específico del almacenamiento basado en la clave proporcionada.

4. **`clear()`**  
   Elimina **todos** los datos del almacenamiento local para el dominio actual.

5. **`key(index)`**  
   Devuelve el nombre de la clave almacenada en una posición específica dentro del almacenamiento.

6. **Propiedad `length`**  
   Retorna el número de elementos almacenados.

---
## Descripcion de metodos

### **`localStorage.setItem(key, value)`**
El método `setItem` permite guardar datos en el almacenamiento local. La clave (**key**) es el identificador que usarás para acceder a los datos, y el valor (**value**) debe ser una cadena de texto.

Si necesitas guardar objetos o arrays, puedes convertirlos a JSON con `JSON.stringify`.

#### Ejemplo: Guardar datos básicos
```javascript
// Guardar datos simples
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('edad', '25');

// Guardar un objeto como JSON
const usuario = {
  nombre: 'Ana',
  email: 'ana@example.com'
};
localStorage.setItem('usuario', JSON.stringify(usuario));
```

#### Resultado en el almacenamiento local:
- `nombre`: `"Juan"`
- `edad`: `"25"`
- `usuario`: `"{\"nombre\":\"Ana\",\"email\":\"ana@example.com\"}"`

---

### **`localStorage.getItem(key)`**
El método `getItem` recupera el valor asociado con una clave específica. Si la clave no existe, devuelve `null`.

#### Ejemplo: Recuperar datos guardados
```javascript
// Recuperar valores simples
const nombre = localStorage.getItem('nombre');
console.log(nombre); // "Juan"

// Recuperar un objeto y convertirlo de JSON a objeto JavaScript
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioGuardado.nombre); // "Ana"
```

### Nota:
Si el valor almacenado es un número, `getItem` lo devolverá como una cadena. Si necesitas usarlo como número, conviértelo con `parseInt` o `parseFloat`.

---

### **`localStorage.removeItem(key)`**
El método `removeItem` elimina un elemento específico del almacenamiento local basado en la clave.

#### Ejemplo: Eliminar un dato
```javascript
// Antes de eliminar
console.log(localStorage.getItem('nombre')); // "Juan"

// Eliminar la clave 'nombre'
localStorage.removeItem('nombre');

// Intentar acceder después de eliminar
console.log(localStorage.getItem('nombre')); // null
```

---

### **`localStorage.clear()`**
Este método elimina **todos** los datos almacenados en `localStorage` para el dominio actual.

#### Ejemplo: Eliminar todo
```javascript
// Guardar varios datos
localStorage.setItem('nombre', 'Carlos');
localStorage.setItem('pais', 'Argentina');

// Limpiar el almacenamiento local
localStorage.clear();

// Verificar si quedan datos
console.log(localStorage.getItem('nombre')); // null
console.log(localStorage.getItem('pais'));   // null
```

---

### **`localStorage.key(index)`**
El método `key` devuelve el nombre (clave) almacenado en una posición específica (índice) dentro del almacenamiento local.  
Si el índice está fuera de rango, devuelve `null`.

#### Ejemplo: Obtener claves por índice
```javascript
// Guardar datos
localStorage.setItem('clave1', 'valor1');
localStorage.setItem('clave2', 'valor2');

// Obtener claves
console.log(localStorage.key(0)); // "clave1" (o "clave2", dependiendo del navegador)
console.log(localStorage.key(1)); // "clave2"
console.log(localStorage.key(2)); // null (fuera de rango)
```

### Nota:
El orden de las claves puede variar entre navegadores, así que no confíes en un orden específico.

---

### **Propiedad `localStorage.length`**
Esta propiedad devuelve el número total de elementos almacenados en `localStorage`.

#### Ejemplo: Contar elementos
```javascript
// Guardar algunos datos
localStorage.setItem('ciudad', 'Avellaneda');
localStorage.setItem('clima', 'Soleado');

// Ver cuántos elementos hay en localStorage
console.log(localStorage.length); // 2

// Después de eliminar un dato
localStorage.removeItem('clima');
console.log(localStorage.length); // 1
```

---

### **Resumen del flujo**
Si quieres trabajar con `localStorage`, el flujo típico es:
1. **Guardar datos con `setItem`.**
2. **Leerlos con `getItem`.**
3. **Actualizar o eliminar datos con `setItem` o `removeItem`.**
4. **Limpiar todo si es necesario con `clear`.**
