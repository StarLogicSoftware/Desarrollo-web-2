---
title: Hola mundo
layout: ../../layouts/Layout.astro
---

### ¿Qué es el método `forEach`?
`forEach` es un método de los arrays en JavaScript que permite **ejecutar una función para cada elemento** del array. A diferencia de `filter` o `map`, `forEach` **no crea un nuevo array** y **no devuelve ningún valor**. Se utiliza principalmente para realizar operaciones con cada elemento del array sin modificarlo.

### Sintaxis

```javascript
array.forEach(callback(elemento, índice, array));
```

- **`callback`**: Es la función que se ejecuta para cada elemento en el array.
- **Parámetros del callback**:
  - **`elemento`**: El elemento actual que se está procesando en el array.
  - **`índice`** (opcional): La posición del elemento en el array.
  - **`array`** (opcional): El array completo sobre el que se está iterando.

### ¿Cómo funciona?
`forEach` simplemente recorre cada elemento en el array y ejecuta la función que le pasemos. Es útil para tareas en las que queremos **aplicar una acción** a cada elemento, como imprimir, modificar una variable externa, realizar cálculos, etc.

### Ejemplos prácticos

1. **Imprimir cada elemento de un array**
   ```javascript
   const numeros = [1, 2, 3, 4, 5];
   numeros.forEach(numero => {
     console.log(numero);
   });
   // Salida:
   // 1
   // 2
   // 3
   // 4
   // 5
   ```
   Aquí, `forEach` ejecuta `console.log` en cada número del array, imprimiéndolos uno por uno.

2. **Sumar los valores de un array**
   ```javascript
   const numeros = [1, 2, 3, 4, 5];
   let suma = 0;
   numeros.forEach(numero => {
     suma += numero;
   });
   console.log(suma); // 15
   ```
   En este ejemplo, usamos `forEach` para recorrer el array y sumar cada número a la variable `suma`.

3. **Actualizar propiedades de objetos en un array**
   ```javascript
   const productos = [
     { nombre: "Laptop", precio: 1200 },
     { nombre: "Teléfono", precio: 800 },
     { nombre: "Tablet", precio: 400 }
   ];
   productos.forEach(producto => {
     producto.precio *= 0.9; // Aplicar un 10% de descuento a cada producto
   });
   console.log(productos);
   // [
   //   { nombre: "Laptop", precio: 1080 },
   //   { nombre: "Teléfono", precio: 720 },
   //   { nombre: "Tablet", precio: 360 }
   // ]
   ```
   En este caso, `forEach` aplica un descuento del 10% a cada producto, modificando la propiedad `precio` directamente en cada objeto del array.

4. **Contar elementos que cumplen una condición**
   ```javascript
   const edades = [12, 17, 20, 14, 25];
   let mayoresDeEdad = 0;
   edades.forEach(edad => {
     if (edad >= 18) {
       mayoresDeEdad++;
     }
   });
   console.log(mayoresDeEdad); // 2
   ```
   Aquí usamos `forEach` para recorrer las edades y contar cuántas personas son mayores de edad.

5. **Mostrar el índice y valor de cada elemento**
   ```javascript
   const nombres = ["Ana", "Luis", "Carlos", "Sofía"];
   nombres.forEach((nombre, index) => {
     console.log(`Índice ${index}: ${nombre}`);
   });
   // Salida:
   // Índice 0: Ana
   // Índice 1: Luis
   // Índice 2: Carlos
   // Índice 3: Sofía
   ```
   En este ejemplo, `forEach` accede al índice de cada elemento junto con su valor, permitiendo que ambos se muestren en la salida.

### Resumen
- `forEach` ejecuta una función en cada elemento de un array, pero **no devuelve ningún valor** y **no crea un nuevo array**.
- Es útil para **recorrer** el array y realizar acciones o cálculos con cada elemento, como imprimir, modificar valores o realizar operaciones de conteo.
- No es adecuado si quieres crear un nuevo array basado en una condición o transformar elementos; en esos casos, usa métodos como `map` o `filter`.