# **¿Qué es JSON?**

JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos. Es fácil de leer y escribir para los humanos, y fácil de analizar y generar para las máquinas.

- **Ventajas:**
  - Es independiente del lenguaje.
  - Es ampliamente utilizado en APIs y bases de datos.
  - Permite representar estructuras complejas como objetos y arrays.

### **Estructura de JSON**
JSON tiene una estructura similar a los objetos y arrays de JavaScript:

#### **Objetos JSON**
Se representan como pares clave-valor rodeados por `{}`:
```json
{
  "nombre": "Juan",
  "edad": 25,
  "ciudad": "Madrid"
}
```

#### **Arrays JSON**
Son listas de valores separados por comas dentro de `[]`:
```json
[
  "Manzana",
  "Plátano",
  "Naranja"
]
```

#### **Combinar Objetos y Arrays**
Se pueden combinar:
```json
{
  "nombre": "Ana",
  "edad": 30,
  "hobbies": ["leer", "viajar", "correr"],
  "direccion": {
    "ciudad": "Reconquista",
    "pais": "Argentina"
  }
}
```

---

# **Métodos comunes para manejar JSON en JavaScript**

### **1. `JSON.stringify()`**
Convierte un objeto o array de JavaScript en una cadena JSON. Esto es útil para guardar datos en `localStorage`, enviarlos a un servidor o depuración.

#### Ejemplo:
```javascript
const usuario = {
  nombre: "Juan",
  edad: 28,
  hobbies: ["leer", "correr"]
};

// Convertir objeto a JSON
const jsonUsuario = JSON.stringify(usuario);
console.log(jsonUsuario);
// Resultado: '{"nombre":"Juan","edad":28,"hobbies":["leer","correr"]}'
```

#### Casos de uso:
- Guardar datos en `localStorage`:
  ```javascript
  localStorage.setItem('usuario', JSON.stringify(usuario));
  ```

---

### **2. `JSON.parse()`**
Convierte una cadena JSON en un objeto o array de JavaScript. Esto es útil para leer datos JSON de un servidor o de `localStorage`.

#### Ejemplo:
```javascript
const jsonUsuario = '{"nombre":"Juan","edad":28,"hobbies":["leer","correr"]}';

// Convertir JSON a objeto
const usuario = JSON.parse(jsonUsuario);
console.log(usuario.nombre); // "Juan"
console.log(usuario.hobbies[1]); // "correr"
```

#### Casos de uso:
- Recuperar datos de `localStorage`:
  ```javascript
  const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
  console.log(usuarioGuardado.nombre);
  ```

---

### **3. Validar JSON con `try...catch`**
A veces, un JSON puede estar mal formado. Usar `try...catch` ayuda a evitar errores en la ejecución.

#### Ejemplo:
```javascript
const jsonString = '{"nombre":"Luis","edad":30'; // JSON mal formado

try {
  const data = JSON.parse(jsonString);
  console.log(data);
} catch (error) {
  console.error("Error al analizar JSON:", error.message);
}
```

---

### **4. Formatear JSON con `JSON.stringify()`**
Puedes aplicar formato y sangría para hacerlo más legible usando parámetros opcionales.

#### Ejemplo:
```javascript
const data = {
  nombre: "Maria",
  edad: 32,
  direccion: { ciudad: "Valencia", pais: "España" }
};

// Convertir con sangría de 2 espacios
const jsonString = JSON.stringify(data, null, 2);
console.log(jsonString);
```

#### Resultado:
```json
{
  "nombre": "Maria",
  "edad": 32,
  "direccion": {
    "ciudad": "Valencia",
    "pais": "España"
  }
}
```

---

### **5. Reemplazo de propiedades con `JSON.stringify()`**
Puedes filtrar o modificar las propiedades que se incluyen en el JSON utilizando una función reemplazo.

#### Ejemplo:
```javascript
const data = {
  nombre: "Carlos",
  edad: 35,
  contrasena: "123456"
};

// Eliminar 'contrasena' al convertir
const jsonString = JSON.stringify(data, (key, value) => {
  return key === "contrasena" ? undefined : value;
});
console.log(jsonString);
// Resultado: '{"nombre":"Carlos","edad":35}'
```

---

### **6. Clonar objetos con JSON**
JSON puede usarse para hacer copias profundas (deep clone) de objetos. Esto es útil cuando no quieres que los cambios en el original afecten a la copia.

#### Ejemplo:
```javascript
const original = {
  nombre: "Laura",
  habilidades: ["diseño", "programación"]
};

// Clonar usando JSON
const copia = JSON.parse(JSON.stringify(original));

// Modificar la copia no afecta el original
copia.habilidades.push("correr");
console.log(original.habilidades); // ["diseño", "programación"]
console.log(copia.habilidades);    // ["diseño", "programación", "correr"]
```

---

# **Limitaciones de JSON**
1. **Solo admite datos primitivos:**
   - Números, cadenas, booleanos, `null`, objetos y arrays.
   - No admite funciones, `undefined` o variables con referencias circulares.

   Ejemplo de error:
   ```javascript
   const data = {
     nombre: "Pedro",
     saludo: () => "Hola"
   };

   const json = JSON.stringify(data);
   // Error: `saludo` será ignorado porque es una función.
   console.log(json); // '{"nombre":"Pedro"}'
   ```

2. **No puede guardar referencias circulares:**
    > **Esto no lo vemos en el curso y es ya un concepto bastante avanzado de js**
   ```javascript
   const obj = {};
   obj.circular = obj;

   // Error al convertir
   JSON.stringify(obj); // TypeError: Converting circular structure to JSON
   ```

---