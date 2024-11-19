# Tutorial de JavaScript: Bucles `while` y `do...while`

## Introducción

En programación, los bucles son estructuras que te permiten ejecutar repetidamente un bloque de código mientras se cumpla una condición. JavaScript proporciona varias formas de crear bucles, y en este tutorial nos enfocaremos en dos de ellas: `while` y `do...while`.

Ambos bucles ejecutan un bloque de código mientras una condición sea verdadera, pero tienen pequeñas diferencias en cómo verifican esa condición. Vamos a ver cómo funcionan, su sintaxis y algunos ejemplos prácticos.

## Bucle `while`

El bucle `while` ejecuta un bloque de código **mientras** la condición especificada sea verdadera. Antes de cada iteración, se evalúa la condición, lo que significa que si la condición es falsa desde el principio, el bloque de código nunca se ejecutará.

### Sintaxis de `while`

```javascript
while (condición) {
  // Código que se ejecuta mientras la condición sea verdadera
}
```

### Partes del bucle `while`:

- **`while`**: Es la palabra clave que indica el inicio del bucle.
- **`condición`**: Es una expresión que se evalúa antes de cada iteración. Si es `true` (verdadera), el bucle continúa. Si es `false`, el bucle se detiene.
- **Bloque de código**: El código que se ejecuta en cada iteración mientras la condición sea verdadera.

### Ejemplo básico:

```javascript
let contador = 1;

while (contador <= 5) {
  console.log("El contador es: " + contador);
  contador++; // Incrementa el contador
}
```

En este ejemplo:
- Inicialmente, la variable `contador` es 1.
- El bucle `while` sigue ejecutándose **mientras** `contador` sea menor o igual a 5.
- En cada iteración, el valor de `contador` aumenta en 1, hasta que llega a 6, momento en el cual la condición `contador <= 5` es falsa, y el bucle se detiene.

### Condición falsa desde el principio

Si la condición es falsa al comienzo, el bucle nunca se ejecutará:

```javascript
let contador = 10;

while (contador <= 5) {
  console.log("Esto nunca se ejecutará.");
}
```

En este caso, dado que `contador` es 10 y la condición inicial es `contador <= 5` (que es falsa), el bloque de código no se ejecuta.

### Bucle infinito

Debes tener cuidado con los bucles `while`, ya que si la condición **nunca se vuelve falsa**, el bucle seguirá ejecutándose indefinidamente, lo que puede causar que el programa se bloquee.

```javascript
let contador = 1;

while (contador <= 5) {
  console.log("Esto se ejecutará indefinidamente.");
  // Faltaría incrementar el contador, por lo que el bucle será infinito
}
```

Para evitar un bucle infinito, asegúrate de que la condición pueda cambiar a `false` en algún momento.

## Bucle `do...while`

El bucle `do...while` es similar al `while`, pero con una diferencia importante: **el bloque de código se ejecuta al menos una vez**, **incluso si la condición es falsa** al principio. Esto se debe a que la condición se evalúa después de ejecutar el bloque de código, no antes.

### Sintaxis de `do...while`

```javascript
do {
  // Código que se ejecuta al menos una vez
} while (condición);
```

### Partes del bucle `do...while`:

- **`do`**: Indica el inicio del bloque de código que se ejecutará.
- **Bloque de código**: El código que se ejecuta primero, antes de evaluar la condición.
- **`while`**: La condición que se evalúa después de cada iteración. Si es `true`, el bucle continúa; si es `false`, se detiene.

### Ejemplo básico:

```javascript
let contador = 1;

do {
  console.log("El contador es: " + contador);
  contador++; // Incrementa el contador
} while (contador <= 5);
```

Este ejemplo es similar al bucle `while`, pero con una diferencia clave: el bloque de código se ejecutará al menos una vez **antes** de evaluar la condición.

### Condición falsa desde el principio

A diferencia del `while`, el bucle `do...while` **siempre ejecutará el bloque de código una vez**, incluso si la condición es falsa desde el principio.

```javascript
let contador = 10;

do {
  console.log("El contador es: " + contador);
} while (contador <= 5);
```

En este ejemplo, el valor inicial de `contador` es 10, por lo que la condición `contador <= 5` es falsa. Aun así, el mensaje `"El contador es: 10"` se imprimirá **una vez** antes de que el bucle se detenga.

## Diferencias entre `while` y `do...while`

| Característica         | `while`                                   | `do...while`                              |
|------------------------|-------------------------------------------|-------------------------------------------|
| **Evaluación de la condición** | Antes de ejecutar el bloque de código   | Después de ejecutar el bloque de código   |
| **Ejecución mínima**    | El bloque de código podría no ejecutarse   | El bloque de código se ejecuta al menos una vez |

### Ejemplo comparativo:

```javascript
// Bucle while
let contadorWhile = 0;

while (contadorWhile < 1) {
  console.log("Este mensaje no se mostrará.");
}

// Bucle do...while
let contadorDoWhile = 0;

do {
  console.log("Este mensaje se mostrará una vez.");
} while (contadorDoWhile < 1);
```

- En el bucle `while`, la condición es falsa desde el principio, por lo que el código no se ejecuta.
- En el bucle `do...while`, el código se ejecuta al menos una vez antes de evaluar la condición.

## Usos comunes de los bucles `while` y `do...while`

- **Bucle `while`**: Se usa cuando no sabes exactamente cuántas veces necesitarás repetir un bloque de código, pero tienes una condición que controlará el fin del bucle.
  
  Ejemplo: Leer datos de un archivo mientras haya líneas que procesar.

- **Bucle `do...while`**: Es útil cuando necesitas que el código se ejecute al menos una vez antes de evaluar la condición.
  
  Ejemplo: Mostrar un menú interactivo al usuario, asegurando que el menú se muestre al menos una vez antes de que el usuario decida salir.

## Ejemplo adicional: Contador decreciente con `while`

Vamos a crear un bucle `while` que cuenta hacia atrás desde 5 hasta 1.

```javascript
let contador = 5;

while (contador > 0) {
  console.log(contador);
  contador--; // Disminuye el contador
}
```

El bucle seguirá ejecutándose mientras `contador > 0`, imprimiendo `5`, `4`, `3`, `2`, `1` en la consola. Cuando `contador` llegue a 0, el bucle se detendrá.

## Conclusión

- Usa `while` cuando no necesites que el bloque se ejecute si la condición es falsa desde el principio.
- Usa `do...while` cuando necesites ejecutar el bloque de código al menos una vez antes de evaluar la condición.