### Tipos de datos en JavaScript

En JavaScript, existen varios tipos de datos primitivos. A continuación te los describo:

1. **`number`**: Representa números, tanto enteros como de punto flotante.

   - **Ejemplo:**
     ```javascript
     let entero = 42; // Número entero
     let decimal = 3.14; // Número decimal
     ```

2. **`string`**: Representa texto, definido entre comillas simples (`'`) o dobles (`"`), o usando comillas invertidas (`` ` ``) para interpolación.

   - **Ejemplo:**
     ```javascript
     let texto = "Hola, mundo!";
     let textoConComillas = 'Este es un "ejemplo" de texto';
     ```

3. **`boolean`**: Representa un valor verdadero (`true`) o falso (`false`).

   - **Ejemplo:**
     ```javascript
     let esVerdad = true;
     let esFalso = false;
     ```

4. **`undefined`**: Una variable que ha sido declarada pero no tiene un valor asignado.

   - **Ejemplo:**
     ```javascript
     let sinValor;
     console.log(sinValor); // Imprime: undefined
     ```

5. **`null`**: Representa la ausencia intencional de un valor.

   - **Ejemplo:**
     ```javascript
     let vacio = null;
     ```

6. **`Object`**: Representa un conjunto de valores, puede ser un array o un objeto (que veremos más adelante).
   - **Ejemplo:**
     ```javascript
     let array = ["elemento 1, elemento 2"];
     let objeto = { edad: 20, nombre: "nicolas" };
     ```
---

### Variables en JavaScript

En JavaScript, las variables se declaran usando `let` o `const`. Aquí te explico la diferencia:

1. **`let`**: Se usa para declarar variables cuyo valor puede cambiar.

   - **Ejemplo:**
     ```javascript
     let edad = 25;
     edad = 26; // La variable puede cambiar
     ```

2. **`const`**: Se usa para declarar constantes, es decir, variables cuyo valor no puede ser modificado después de su asignación.
   - **Ejemplo:**
     ```javascript
     const nombre = "Juan";
     // nombre = "Pedro";  // Esto arrojaría un error
     ```

---

### Concatenación e Interpolación de cadenas

1. **Concatenación**: Es unir dos o más cadenas utilizando el operador `+`.

   - **Ejemplo:**
     ```javascript
     let nombre = "Ana";
     let saludo = "Hola, " + nombre + "! ¿Cómo estás?";
     console.log(saludo); // Imprime: Hola, Ana! ¿Cómo estás?
     ```

2. **Interpolación**: Es una forma más moderna de combinar variables y texto usando plantillas literales (template literals), que se definen con comillas invertidas (`` ` ``). Dentro de estas, puedes insertar variables usando `${}`.

   - **Ejemplo:**
     ```javascript
     let nombre = "Ana";
     let saludo = `Hola, ${nombre}! ¿Cómo estás?`;
     console.log(saludo); // Imprime: Hola, Ana! ¿Cómo estás?
     ```

   La interpolación es más conveniente que la concatenación cuando se trabaja con cadenas largas o con múltiples variables.

---

### Resumen en Código

```javascript
// Tipos de datos
let numero = 30; // number
let texto = "Hola, mundo"; // string
let esVerdadero = true; // boolean
let sinValor = undefined; // undefined
let vacio = null; // null

// Variables con let (cambiable) y const (constante)
let edad = 25; // let: puede cambiar
const nombre = "Carlos"; // const: no puede cambiar

// Concatenación
let saludoConcat = "Hola, " + nombre + "! Tienes " + edad + " años.";
console.log(saludoConcat); // Imprime: Hola, Carlos! Tienes 25 años.

// Interpolación
let saludoInterpolado = `Hola, ${nombre}! Tienes ${edad} años.`;
console.log(saludoInterpolado); // Imprime: Hola, Carlos! Tienes 25 años.
```

Este ejemplo cubre los tipos de datos comunes, cómo usar `let` y `const`, y las maneras de concatenar e interpolar cadenas en JavaScript. ¡Esencial para entender las bases del lenguaje!
