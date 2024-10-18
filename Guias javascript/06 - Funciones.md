# Tutorial de JavaScript: Funciones

## Introducción

En JavaScript, las funciones son uno de los bloques fundamentales de construcción del lenguaje. Una **función** es un conjunto de instrucciones que realiza una tarea o calcula un valor. Las funciones permiten organizar el código, hacerlo reutilizable y modular, además de evitar la repetición.

En este tutorial aprenderás qué son las funciones, cómo declararlas, cómo invocarlas y diferentes formas de definirlas en JavaScript.

## ¿Qué es una función?

Una función es un bloque de código diseñado para realizar una tarea en particular. En JavaScript, las funciones pueden recibir **parámetros** (valores de entrada) y devolver un **resultado**. Esto las hace sumamente versátiles y reutilizables.

## Sintaxis básica de una función

La sintaxis de una función en JavaScript es la siguiente:

```javascript
function nombreFuncion(parámetro1, parámetro2, ...) {
  // Bloque de código
  return resultado; // (Opcional)
}
```

### Partes de una función:
1. **Palabra clave `function`**: Indica que se está declarando una función.
2. **Nombre de la función**: Un identificador para la función. Debe ser un nombre significativo que describa lo que hace la función.
3. **Parámetros (opcionales)**: Valores de entrada que la función puede recibir. Estos se colocan entre paréntesis.
4. **Bloque de código**: El cuerpo de la función, donde se escribe el código que se ejecutará cuando se llame a la función.
5. **Valor de retorno (opcional)**: Usando la palabra clave `return`, la función puede devolver un valor al terminar su ejecución.

### Ejemplo básico:

```javascript
function saludar(nombre) {
  return "Hola, " + nombre;
}
```

Aquí hemos definido una función llamada `saludar` que recibe un parámetro (`nombre`) y devuelve un saludo personalizado.

### ¿Cómo invocar o llamar a una función?

Para ejecutar el código dentro de una función, debes **invocarla**. Esto se hace escribiendo el nombre de la función seguido de paréntesis, con los argumentos (si los hay) dentro.

```javascript
let saludo = saludar("Carlos");
console.log(saludo); // Imprimirá: Hola, Carlos
```

En este ejemplo, estamos llamando a la función `saludar` con el argumento `"Carlos"`, y almacenando el resultado en la variable `saludo`.

## Funciones sin parámetros

Una función no siempre necesita recibir parámetros. Si no necesita valores de entrada, simplemente puedes omitir los paréntesis vacíos.

### Ejemplo:

```javascript
function mostrarHora() {
  let fecha = new Date();
  console.log("La hora actual es: " + fecha.toLocaleTimeString());
}

mostrarHora(); // Imprime la hora actual en la consola
```

Esta función no tiene parámetros y simplemente muestra la hora actual.

## Funciones con múltiples parámetros

Puedes pasar tantos parámetros como necesites a una función separándolos por comas. Veamos un ejemplo de una función que suma dos números:

### Ejemplo:

```javascript
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // Imprimirá: 8
```

En este caso, la función `sumar` recibe dos parámetros (`a` y `b`), los suma y devuelve el resultado.

## El valor de retorno (`return`)

La palabra clave `return` se usa para devolver un valor desde la función. Cuando la función encuentra un `return`, su ejecución termina inmediatamente, y se devuelve el valor especificado.

### Ejemplo:

```javascript
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  }
  return false;
}

console.log(esPar(4)); // Imprimirá: true
console.log(esPar(7)); // Imprimirá: false
```

En este ejemplo, la función `esPar` devuelve `true` si el número es par, y `false` si no lo es. Una vez que la función encuentra un `return`, deja de ejecutar el resto del código.

## Funciones que no devuelven un valor

No todas las funciones necesitan devolver un valor. Si una función no tiene una declaración `return`, devolverá `undefined` de forma implícita, pero aún puede realizar una tarea útil, como imprimir algo en la consola.

### Ejemplo:

```javascript
function saludar() {
  console.log("¡Hola mundo!");
}

saludar(); // Imprime: ¡Hola mundo!
```

Aquí, la función `saludar` no devuelve nada, pero imprime un mensaje en la consola.

## Funciones anónimas

En JavaScript, también es posible declarar **funciones anónimas**, es decir, funciones que no tienen un nombre. Estas funciones suelen usarse cuando deseas pasar una función como argumento a otra función o asignarla a una variable.

### Ejemplo:

```javascript
let saludar = function(nombre) {
  return "Hola, " + nombre;
};

console.log(saludar("Ana")); // Imprimirá: Hola, Ana
```

En este caso, hemos asignado una función anónima a la variable `saludar`. Aunque la función no tiene nombre, aún podemos invocarla usando el nombre de la variable.

## Funciones flecha (Arrow Functions)

Las **funciones flecha** son una forma más concisa de escribir funciones en JavaScript. Se introdujeron en ECMAScript 6 (ES6) y son especialmente útiles cuando deseas escribir funciones cortas y simples.

### Sintaxis de una función flecha:

```javascript
const nombreFuncion = (parámetro1, parámetro2, ...) => {
  // Bloque de código
  return resultado; // (Opcional)
};
```

### Ejemplo:

```javascript
const saludar = (nombre) => {
  return "Hola, " + nombre;
};

console.log(saludar("Pedro")); // Imprimirá: Hola, Pedro
```

Si la función tiene un solo parámetro y solo una línea de código que devuelve un valor, puedes simplificarla aún más:

### Ejemplo simplificado:

```javascript
const saludar = nombre => "Hola, " + nombre;

console.log(saludar("Lucía")); // Imprimirá: Hola, Lucía
```

En este caso, hemos omitido los paréntesis alrededor del parámetro `nombre` y las llaves, ya que solo hay una línea de código.

## Funciones como argumentos

En JavaScript, las funciones son **objetos de primera clase**, lo que significa que puedes pasarlas como argumentos a otras funciones.

### Ejemplo:

```javascript
function procesar(funcion, valor) {
  return funcion(valor);
}

function cuadrado(x) {
  return x * x;
}

console.log(procesar(cuadrado, 5)); // Imprimirá: 25
```

En este ejemplo, estamos pasando la función `cuadrado` como argumento a `procesar`, y esta se invoca dentro de `procesar`.

## Funciones dentro de funciones

También es posible definir una función dentro de otra función. Estas se llaman **funciones anidadas**. La función anidada solo puede ser utilizada dentro de la función en la que se ha definido.

### Ejemplo:

```javascript
function exterior() {
  function interior() {
    return "Soy la función interior";
  }
  return interior();
}

console.log(exterior()); // Imprimirá: Soy la función interior
```

## Funciones predeterminadas (valores por defecto)

A partir de ES6, puedes asignar **valores por defecto** a los parámetros de una función, lo que significa que si no se pasa un argumento, la función utilizará el valor predeterminado.

### Ejemplo:

```javascript
function saludar(nombre = "amigo") {
  return "Hola, " + nombre;
}

console.log(saludar());      // Imprimirá: Hola, amigo
console.log(saludar("Juan")); // Imprimirá: Hola, Juan
```

En este caso, si no se pasa un nombre, la función usará `"amigo"` como valor por defecto.

## Conclusión

Las funciones son uno de los pilares de JavaScript y te permiten estructurar el código de manera modular y eficiente. Al aprender a declarar funciones, invocarlas, trabajar con parámetros y valores de retorno, usar funciones anónimas y flecha, estarás mejor preparado para escribir código más limpio, reutilizable y fácil de mantener.