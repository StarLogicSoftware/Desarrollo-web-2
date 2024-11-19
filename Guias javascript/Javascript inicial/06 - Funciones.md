# Tutorial de JavaScript: Funciones

## Índice de Contenidos
1. [¿Qué es una función en JavaScript?](#que-es-una-funcion-en-javascript)
2. [¿Para qué se usa una función?](#para-que-se-usa-una-funcion)
3. [Beneficios de usar funciones](#beneficios-de-usar-funciones)
4. [Cómo se declara una función](#como-se-declara-una-funcion)
5. [Cómo se llama o invoca una función](#como-se-llama-o-invoca-una-funcion)
6. [Parámetros en funciones](#parametros-en-funciones)
    - [Ejemplo con un parámetro](#ejemplo-con-un-parametro)
    - [Ejemplo con varios parámetros](#ejemplo-con-varios-parametros)
7. [Valor de retorno en funciones](#valor-de-retorno-en-funciones)
    - [Ejemplo simple con retorno](#ejemplo-simple-con-retorno)
    - [Ejemplo con operaciones más complejas](#ejemplo-con-operaciones-mas-complejas)
8. [Ejemplos adicionales de funciones](#ejemplos-adicionales-de-funciones)
    - [Ejemplo de función sin parámetros y sin retorno](#ejemplo-de-funcion-sin-parametros-y-sin-retorno)
    - [Ejemplo de función con parámetros pero sin retorno](#ejemplo-de-funcion-con-parametros-pero-sin-retorno)
    - [Ejemplo de función sin parámetros pero con retorno](#ejemplo-de-funcion-sin-parametros-pero-con-retorno)
    - [Ejemplo de función con parámetros y con retorno](#ejemplo-de-funcion-con-parametros-y-con-retorno)

---

## ¿Qué es una función en JavaScript?

Una función en JavaScript es un bloque de código organizado y reutilizable que está diseñado para realizar una tarea específica. Imagina que tienes una receta de cocina que puedes seguir cada vez que quieras hacer el mismo platillo. Una función es similar: agrupa instrucciones bajo un nombre, y cada vez que quieras ejecutar esas instrucciones, solo necesitas llamar al nombre de la función en lugar de escribir todo el código otra vez.

### Estructura básica de una función:
```javascript
function nombreDeLaFuncion() {
    // Bloque de código
}
```

El código dentro de la función no se ejecuta inmediatamente cuando la función se define, sino que se ejecuta cuando llamas o invocas la función. Las funciones son muy útiles porque te permiten evitar la repetición de código y hacen que tu programa sea más modular y fácil de mantener.

---

## ¿Para qué se usa una función?

Las funciones se usan principalmente para:
- **Organizar el código**: Al dividir un programa en pequeñas piezas de código, puedes hacer que sea más comprensible y fácil de mantener.
- **Reutilización**: Escribes el código una sola vez y lo puedes usar tantas veces como necesites.
- **Abstracción**: Puedes ocultar detalles complejos dentro de una función, dejando solo la interfaz de uso, lo que simplifica el trabajo con el código.
- **Modularización**: Permiten que el código sea más fácil de leer al dividir grandes tareas en funciones más pequeñas y manejables.

Ejemplo simple:
```javascript
function saludar() {
    console.log('¡Hola!')
}
```
Esta función se puede usar cada vez que quieras saludar en la consola, en lugar de escribir `console.log('¡Hola!')` repetidamente.

---

## Beneficios de usar funciones

Los principales beneficios de las funciones en JavaScript son:
1. **Reutilización de código**: Puedes definir una función una vez y llamarla múltiples veces en diferentes partes del programa. Esto evita que tengas que escribir el mismo código varias veces.
   
   Ejemplo: Si tienes que sumar dos números muchas veces en tu código, puedes usar una función en lugar de repetir la operación:
   ```javascript
   function sumar(a, b) {
       return a + b
   }
   
   let resultado = sumar(4, 5)
   console.log(resultado) // Muestra: 9
   ```

2. **Mantenimiento y legibilidad**: Dividir el código en funciones pequeñas y específicas hace que sea más fácil de leer y mantener. Si hay un error o quieres modificar algo, puedes hacerlo en una sola función sin afectar el resto del programa.
   
3. **Reducción de errores**: Al encapsular una tarea en una función, es menos probable que cometas errores al duplicar código o hacer cambios repetidos.

4. **Flexibilidad y reutilización**: Puedes parametrizar una función para que trabaje con diferentes datos, lo que te da mayor flexibilidad al desarrollar.

---

## Cómo se declara una función

Para declarar una función en JavaScript, usas la palabra clave `function`, seguida de un nombre para la función, paréntesis `()` y, dentro de llaves `{}`, escribes el código que la función debe ejecutar.

### Ejemplo básico de declaración:
```javascript
function decirHola() {
    console.log('¡Hola!')
}
```
En este caso, `decirHola` es el nombre de la función y `console.log('¡Hola!')` es el código que se ejecuta cuando se llama a la función.

---

## Cómo se llama o invoca una función

Para invocar o llamar a una función, simplemente escribes el nombre de la función seguido de paréntesis. Esto le indica a JavaScript que debe ejecutar el código dentro de la función.

### Ejemplo de llamada:
```javascript
decirHola() // Muestra: ¡Hola!
```
Cuando invocas `decirHola()`, la función muestra el mensaje "¡Hola!" en la consola.

---

## Parámetros en funciones

Los **parámetros** son valores que puedes pasarle a una función para que la función trabaje con ellos. Son como datos que le das a la función para que use en su ejecución. Los parámetros se definen entre los paréntesis cuando declaras la función.

### Ejemplo con un parámetro:
```javascript
function saludar(nombre) {
    console.log('¡Hola, ' + nombre + '!')
}

// Llamando a la función con un valor
saludar('Carlos') // Muestra: ¡Hola, Carlos!
```
Aquí, `nombre` es un **parámetro**. La función espera que cuando la invoques, le pases un nombre para usar en el saludo.

### Ejemplo con varios parámetros:
```javascript
function sumar(a, b) {
    console.log(a + b)
}

// Llamando a la función con dos valores
sumar(3, 5) // Muestra: 8
```
En este caso, la función `sumar` toma dos parámetros (`a` y `b`), que se suman dentro de la función y se muestran con `console.log`.

---

## Valor de retorno en funciones

El **valor de retorno** es lo que una función **devuelve** después de hacer su tarea. Para devolver un valor de una función, usamos la palabra clave `return`. Esto te permite que una función realice cálculos o transforme datos y te entregue un resultado que puedas usar.

### Ejemplo simple con retorno:
```javascript
function restar(a, b) {
    return a - b
}

let resultado = restar(10, 3) // resultado es 7
console.log(resultado) // Muestra: 7
```
La función `restar` devuelve el resultado de restar `a` y `b`, que luego podemos usar fuera de la función.

### Ejemplo con operaciones más complejas:
```javascript
function calcularPromedio(a, b, c) {
    let suma = a + b + c
    return suma / 3
}

let promedio = calcularPromedio(8, 7, 9) // promedio es 8
console.log(promedio) // Muestra: 8
```
Esta función suma tres valores y devuelve su promedio.

---

## Ejemplos adicionales de funciones

### Ejemplo de función sin parámetros y sin retorno:
```javascript
function mostrarMensaje() {
    console.log('Esto es una función sin parámetros y sin retorno')
}

mostrarMensaje() // Muestra: Esto es una función sin parámetros y sin retorno
```

### Ejemplo de función con parámetros pero sin retorno:
```javascript
function mostrarSuma(a, b) {
    console.log('La suma de', a, 'y', b, 'es', a + b)
}

mostrarSuma(2, 3) // Muestra: La suma de 2 y 3 es 5
```

### Ejemplo de función sin parámetros pero con retorno:
```javascript
function obtenerNumeroAleatorio() {
    return Math.random() // Retorna un número aleatorio entre 0 y 1
}

let aleatorio = obtenerNumeroAleatorio()
console.log(aleatorio) // Muestra un número aleatorio, como 0.7532
```

### Ejemplo de función con parámetros y con retorno:
```javascript
function dividir(a, b) {
    if (b === 0) {
        return 'No se puede dividir por cero'
    }
    return a / b
}

let division = dividir(10, 2) // division es 5
console.log(division) // Muestra: 5

let

 error = dividir(10, 0)
console.log(error) // Muestra: No se puede dividir por cero
```

---

Y eso es todo. Este documento cubre una explicación completa sobre las funciones en JavaScript, con ejemplos prácticos y beneficios teóricos.
