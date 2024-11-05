# Tutorial de JavaScript: Mutabilidad e Inmutabilidad

## ¿Qué significa que un objeto sea mutable o inmutable?

En programación, **mutabilidad** e **inmutabilidad** se refieren a si es posible cambiar (mutar) el valor de un objeto o estructura de datos una vez que ha sido creado.

- **Mutable**: Un objeto es **mutable** si puedes **modificar** sus valores después de haber sido creado.
- **Inmutable**: Un objeto es **inmutable** si **no puedes modificar** sus valores una vez que ha sido creado. Para cambiar el valor, necesitas crear un nuevo objeto.

### En JavaScript:
- Los **tipos primitivos** (como `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, y `bigint`) son **inmutables**.
- Los **objetos** y **arrays** son **mutables**.

## Arrays y mutabilidad

Los **arrays** en JavaScript son **objetos mutables**, lo que significa que puedes cambiar sus elementos sin necesidad de crear un nuevo array. Sin embargo, algunos métodos te permiten trabajar de manera **inmutable**, creando nuevas versiones del array sin modificar el original.

### Ejemplos de arrays mutables e inmutables

### Arrays mutables

Cuando decimos que un array es **mutable**, significa que podemos cambiar su contenido directamente, ya sea añadiendo, eliminando o modificando sus elementos **sin crear un nuevo array**.

#### Ejemplo: Mutando un array con métodos mutables

1. **`push()`** - Agregar elementos al final del array.
   ```javascript
   let numeros = [1, 2, 3];
   numeros.push(4); // El array original se modifica
   console.log(numeros); // [1, 2, 3, 4]
   ```

2. **`pop()`** - Eliminar el último elemento del array.
   ```javascript
   let frutas = ["manzana", "banana", "naranja"];
   frutas.pop(); // El array original se modifica
   console.log(frutas); // ["manzana", "banana"]
   ```

3. **`splice()`** - Eliminar, agregar o reemplazar elementos.
   ```javascript
   let colores = ["rojo", "verde", "azul"];
   colores.splice(1, 1, "amarillo"); // El array original se modifica
   console.log(colores); // ["rojo", "amarillo", "azul"]
   ```

4. **Modificar un elemento directamente por su índice**:
   ```javascript
   let numeros = [1, 2, 3];
   numeros[0] = 10; // Modifica directamente el primer elemento
   console.log(numeros); // [10, 2, 3]
   ```

En estos casos, **el array original es modificado directamente**.

### Arrays inmutables

Si deseas trabajar con arrays de manera **inmutable**, en lugar de modificar el array original, los métodos inmutables te devuelven **un nuevo array** sin alterar el original.

#### Ejemplo: Trabajando con arrays inmutables

1. **`concat()`** - Combina arrays, creando uno nuevo.
   ```javascript
   let numeros = [1, 2, 3];
   let nuevosNumeros = numeros.concat(4); // Crea un nuevo array
   console.log(numeros); // [1, 2, 3] (array original)
   console.log(nuevosNumeros); // [1, 2, 3, 4] (nuevo array)
   ```

2. **`slice()`** - Extrae una porción del array sin modificar el original.
   ```javascript
   let frutas = ["manzana", "banana", "naranja"];
   let nuevaFrutas = frutas.slice(0, 2); // Crea un nuevo array
   console.log(frutas); // ["manzana", "banana", "naranja"] (array original)
   console.log(nuevaFrutas); // ["manzana", "banana"] (nuevo array)
   ```

3. **`map()`** - Aplica una función a cada elemento y crea un nuevo array.
   ```javascript
   let numeros = [1, 2, 3];
   let cuadrados = numeros.map(function(num) {
     return num * num;
   });
   console.log(numeros); // [1, 2, 3] (array original)
   console.log(cuadrados); // [1, 4, 9] (nuevo array)
   ```

4. **`filter()`** - Filtra elementos creando un nuevo array.
   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let mayores = numeros.filter(function(num) {
     return num > 3;
   });
   console.log(numeros); // [1, 2, 3, 4, 5] (array original)
   console.log(mayores); // [4, 5] (nuevo array)
   ```

En estos casos, **el array original permanece intacto**, y los cambios se reflejan en **un nuevo array**.

### Ejemplo de comparación: mutable vs inmutable

```javascript
let original = [1, 2, 3];

// Mutable: modifica el array original
original.push(4);
console.log(original); // [1, 2, 3, 4]

// Inmutable: no modifica el array original
let nuevoArray = original.concat(5);
console.log(original);   // [1, 2, 3, 4] (original intacto)
console.log(nuevoArray); // [1, 2, 3, 4, 5] (nuevo array)
```

## Resumen

- **Mutable**: Un array puede ser modificado directamente usando métodos como `push()`, `pop()`, `splice()`, y al acceder directamente por el índice.
- **Inmutable**: Puedes evitar modificar el array original y crear uno nuevo usando métodos como `concat()`, `slice()`, `map()`, y `filter()`.

### Consejos

- Trabajar de manera **inmutable** es útil cuando deseas evitar efectos secundarios no deseados al modificar un array original, lo que es importante especialmente en contextos como la **programación funcional** o al manejar **estado en aplicaciones** (por ejemplo, en frameworks como React).
- Trabajar de manera **mutable** puede ser más eficiente cuando no necesitas preservar el estado anterior del array y solo quieres realizar cambios directamente.