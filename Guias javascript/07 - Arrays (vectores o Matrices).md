# Tutorial de JavaScript: Arrays y Métodos Comunes

## Introducción

Un **array** en JavaScript es una estructura de datos que permite almacenar múltiples valores en una sola variable. Los arrays son especialmente útiles cuando necesitamos agrupar datos relacionados y luego manipularlos de manera eficiente.

## ¿Qué es un array?

Un array es una **colección ordenada** de elementos, donde cada elemento tiene una **posición** a la que llamamos **índice**. Los índices en JavaScript comienzan en **0**, es decir, el primer elemento tiene el índice `0`, el segundo el índice `1`, y así sucesivamente.

### Declaración de un array

Un array se puede declarar utilizando corchetes `[]` o el constructor `Array()`. Aquí hay dos formas de crear un array:

1. Usando corchetes:

   ```javascript
   let numeros = [1, 2, 3, 4, 5]
   ```

2. Usando el constructor `Array`:
   ```javascript
   let frutas = new Array("manzana", "banana", "naranja")
   ```

En general, la forma más común es usar los corchetes `[]`.

Si queremos crear un array donde este aún no posee elementos en su interior, lo podemos crear usando dos corchetes vacios `[]`

```javascript
let arrayVacio = []
```

Crear un array vacio es especialmente util si lo vamos a utilizar para guardar elementos que aun no estan disponibles, por ejemplo, si armamos un carrito de compras podemos guardar dentro del array los productos que el usuario quiera comprar, pero inicialmente estará vacio dado que al inicio no hay productos agregados.

Esto lo haremos más adelante cuando exploremos los metodos con los que podemos manipular los arrays.

### Acceder a los elementos de un array

Para acceder a un elemento del array, se usa el índice del elemento dentro de corchetes.

```javascript
let colores = ["rojo", "verde", "azul"]
console.log(colores[0]) // "rojo"
console.log(colores[1]) // "verde"
console.log(colores[2]) // "azul"
```

## Métodos comunes de arrays en JavaScript

JavaScript ofrece muchos métodos útiles para trabajar con arrays. A continuación, te explico los más comunes:

### 1. **`push()`** - Agregar elementos al final del array

Este método agrega uno o más elementos al **final** del array.

```javascript
let numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros) // [1, 2, 3, 4]
```

### 2. **`pop()`** - Eliminar el último elemento

El método `pop()` elimina el **último** elemento de un array y lo devuelve.

```javascript
let numeros = [1, 2, 3]
let ultimo = numeros.pop()
console.log(numeros) // [1, 2]
console.log(ultimo) // 3
```

### 3. **`shift()`** - Eliminar el primer elemento

Este método elimina el **primer** elemento del array y devuelve ese elemento. El array se reorganiza.

```javascript
let frutas = ["manzana", "banana", "naranja"]
let primera = frutas.shift()
console.log(frutas) // ["banana", "naranja"]
console.log(primera) // "manzana"
```

### 4. **`unshift()`** - Agregar elementos al inicio

El método `unshift()` agrega uno o más elementos al **inicio** del array.

```javascript
let frutas = ["banana", "naranja"]
frutas.unshift("manzana")
console.log(frutas) // ["manzana", "banana", "naranja"]
```

### 5. **`length`** - Longitud del array

La propiedad `length` devuelve el número de elementos que tiene el array.

```javascript
let numeros = [1, 2, 3, 4]
console.log(numeros.length) // 4
```

### 6. **`indexOf()`** - Encontrar el índice de un elemento

Este método devuelve el **índice** del primer elemento coincidente en el array. Si el elemento no existe, devuelve `-1`.

```javascript
let colores = ["rojo", "verde", "azul"]
console.log(colores.indexOf("verde")) // 1
console.log(colores.indexOf("amarillo")) // -1 (no existe)
```

### 7. **`includes()`** - Verificar si un elemento existe en el array

El método `includes()` devuelve `true` si el array contiene el elemento, y `false` en caso contrario.

```javascript
let colores = ["rojo", "verde", "azul"]
console.log(colores.includes("verde")) // true
console.log(colores.includes("amarillo")) // false
```

### 8. **`slice()`** - Extraer una parte del array

El método `slice()` devuelve una copia de una parte del array sin modificar el original. Se le pasan dos argumentos: el índice de inicio y el índice de fin (no incluido).

```javascript
let numeros = [1, 2, 3, 4, 5]
let subArray = numeros.slice(1, 4)
console.log(subArray) // [2, 3, 4]
```

### 9. **`splice()`** - Eliminar o reemplazar elementos

El método `splice()` modifica un array, eliminando, reemplazando o agregando elementos. Se le pasan tres parámetros: el índice de inicio, la cantidad de elementos a eliminar, y opcionalmente, los nuevos elementos para agregar.

- **Eliminar elementos**:

  ```javascript
  let numeros = [1, 2, 3, 4, 5]
  numeros.splice(2, 2)
  console.log(numeros) // [1, 2, 5]
  ```

- **Reemplazar elementos**:
  ```javascript
  let numeros = [1, 2, 3, 4, 5]
  numeros.splice(1, 2, 10, 11)
  console.log(numeros) // [1, 10, 11, 4, 5]
  ```

### 10. **`concat()`** - Combinar arrays

El método `concat()` se utiliza para combinar dos o más arrays en uno nuevo, sin modificar los arrays originales.

```javascript
let array1 = [1, 2]
let array2 = [3, 4]
let nuevoArray = array1.concat(array2)
console.log(nuevoArray) // [1, 2, 3, 4]
```

### 11. **`forEach()`** - Recorrer un array

El método `forEach()` ejecuta una función para cada elemento del array.

```javascript
let numeros = [1, 2, 3]
numeros.forEach(function (numero) {
	console.log(numero) // 1, 2, 3
})
```

### 12. **`map()`** - Crear un nuevo array transformando elementos

El método `map()` crea un nuevo array aplicando una función a cada elemento del array original.

```javascript
let numeros = [1, 2, 3]
let cuadrados = numeros.map(function (numero) {
	return numero * numero
})
console.log(cuadrados) // [1, 4, 9]
```

### 13. **`filter()`** - Filtrar elementos según una condición

El método `filter()` devuelve un nuevo array con los elementos que cumplen con una condición.

```javascript
let numeros = [1, 2, 3, 4, 5]
let mayoresQueTres = numeros.filter(function (numero) {
	return numero > 3
})
console.log(mayoresQueTres) // [4, 5]
```

### 14. **`reduce()`** - Reducir un array a un solo valor

El método `reduce()` aplica una función acumulativa a cada elemento del array para reducirlo a un solo valor.

```javascript
let numeros = [1, 2, 3, 4]
let suma = numeros.reduce(function (acumulador, valorActual) {
	return acumulador + valorActual
}, 0)
console.log(suma) // 10
```

### 15. **`reverse()`** - Invertir el orden de los elementos

El método `reverse()` invierte el orden de los elementos en el array.

```javascript
let numeros = [1, 2, 3]
numeros.reverse()
console.log(numeros) // [3, 2, 1]
```

### 16. **`sort()`** - Ordenar elementos

El método `sort()` ordena los elementos de un array de acuerdo a la función de comparación proporcionada.

- **Ordenar números**:

  ```javascript
  let numeros = [4, 1, 3, 2]
  numeros.sort(function (a, b) {
  	return a - b // Orden ascendente
  })
  console.log(numeros) // [1, 2, 3, 4]
  ```

- **Ordenar strings**:
  ```javascript
  let frutas = ["banana", "manzana", "naranja"]
  frutas.sort()
  console.log(frutas) // ["banana", "manzana", "naranja"]
  ```
