### **Guía Completa de `import` y `export` en JavaScript**

## **1. ¿Qué es el sistema de módulos?**

Los módulos permiten organizar el código de manera modular. Cada archivo de JavaScript puede ser considerado un módulo que exporta o importa partes de su funcionalidad.

- **Export:** Marca partes de un archivo como disponibles para otros módulos.
- **Import:** Trae funcionalidades de otros módulos para usarlas.

---

## **2. Tipos de Exportaciones**

### **2.1. Exportación Nombrada**

Usa `export` delante de una variable, función o clase para que pueda ser importada con el mismo nombre.

#### **Ejemplo: Exportación Nombrada**
**Archivo: `matematicas.js`**
```javascript
// Exportando variables y funciones
export const PI = 3.14159;

export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}
```

**Archivo: `app.js`**
```javascript
// Importando con el mismo nombre
import { PI, suma, resta } from './matematicas.js';

console.log(`El valor de PI es: ${PI}`);
console.log(`La suma es: ${suma(5, 3)}`);
console.log(`La resta es: ${resta(5, 3)}`);
```

---

### **2.2. Exportación por Defecto**

Usa `export default` para exportar un único valor por defecto de un módulo. No requiere llaves `{}` al importarlo y puedes asignarle cualquier nombre al importarlo.

#### **Ejemplo: Exportación por Defecto**
**Archivo: `saludo.js`**
```javascript
// Exportación por defecto
export default function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
```

**Archivo: `app.js`**
```javascript
// Importación del valor por defecto
import saludar from './saludo.js';

console.log(saludar('Juan')); // Hola, Juan!
```

---

### **2.3. Combinando Exportaciones**

Puedes combinar exportaciones nombradas y por defecto en el mismo archivo.

#### **Ejemplo: Combinación**
**Archivo: `utilidades.js`**
```javascript
export const mensaje = "¡Hola desde utilidades!";
export default function multiplicar(a, b) {
  return a * b;
}
```

**Archivo: `app.js`**
```javascript
import multiplicar, { mensaje } from './utilidades.js';

console.log(mensaje); // ¡Hola desde utilidades!
console.log(multiplicar(4, 5)); // 20
```

---

## **3. Importar Todo de un Módulo**

Usa `*` para importar todo el contenido de un módulo como un objeto.

#### **Ejemplo: Importar Todo**
**Archivo: `matematicas.js`**
```javascript
export const PI = 3.14159;
export function suma(a, b) {
  return a + b;
}
export function resta(a, b) {
  return a - b;
}
```

**Archivo: `app.js`**
```javascript
import * as Matematicas from './matematicas.js';

console.log(Matematicas.PI); // 3.14159
console.log(Matematicas.suma(5, 3)); // 8
console.log(Matematicas.resta(5, 3)); // 2
```

---

## **4. Alias en Importaciones y Exportaciones**

Usa la palabra clave `as` para renombrar exportaciones o importaciones.

#### **Ejemplo: Alias**
**Archivo: `conversion.js`**
```javascript
export const celsiusAFahrenheit = (c) => c * 9 / 5 + 32;
export const fahrenheitACelsius = (f) => (f - 32) * 5 / 9;
```

**Archivo: `app.js`**
```javascript
import { celsiusAFahrenheit as cToF, fahrenheitACelsius as fToC } from './conversion.js';

console.log(cToF(0)); // 32
console.log(fToC(32)); // 0
```

---

## **5. Re-Exportar Contenidos**

Puedes re-exportar módulos desde un archivo intermedio.

#### **Ejemplo: Re-Exportar**
**Archivo: `matematicas.js`**
```javascript
export const suma = (a, b) => a + b;
export const resta = (a, b) => a - b;
```

**Archivo: `utilidades.js`**
```javascript
export { suma, resta } from './matematicas.js';
```

**Archivo: `app.js`**
```javascript
import { suma, resta } from './utilidades.js';

console.log(suma(5, 3)); // 8
console.log(resta(5, 3)); // 2
```

---

## **6. Importar con Side Effects**

Un módulo puede ejecutarse directamente al importarse si no tiene exportaciones explícitas.

#### **Ejemplo: Side Effects**
**Archivo: `config.js`**
```javascript
console.log('Módulo cargado');
```

**Archivo: `app.js`**
```javascript
import './config.js'; // Solo ejecuta el código del módulo
```

---

## **7. Consideraciones de Módulos en JavaScript**

1. **Extensiones:** Siempre especifica la extensión `.js` si estás trabajando fuera de herramientas como Webpack o Vite.
   ```javascript
   import { suma } from './matematicas.js';
   ```

2. **Carpetas:** Puedes importar un archivo `index.js` desde una carpeta sin especificarlo.
   ```javascript
   import { funcion } from './miCarpeta'; // Importa desde miCarpeta/index.js
   ```

3. **Compatibilidad:** Los módulos ES6 (`import/export`) están soportados nativamente en navegadores modernos. Para navegadores antiguos, usa herramientas como Babel.

---

### **Resumen de Métodos Importantes**

| Sintaxis                 | Descripción                                        | Ejemplo                                     |
|--------------------------|----------------------------------------------------|---------------------------------------------|
| `export`                 | Exporta funciones, variables o clases             | `export const PI = 3.14;`                   |
| `export default`         | Exporta un único valor como predeterminado         | `export default function() { ... }`         |
| `import { ... }`         | Importa exportaciones nombradas                   | `import { suma } from './archivo.js';`      |
| `import defaultName`     | Importa la exportación por defecto                 | `import funcion from './archivo.js';`       |
| `import * as alias`      | Importa todo como un objeto                       | `import * as Matematicas from './math.js';` |
| `export { ... }`         | Re-exporta funciones desde otro módulo            | `export { suma } from './archivo.js';`      |
| `import './file.js'`     | Importa módulos con efectos colaterales (side effects) | `import './config.js';`                     |
