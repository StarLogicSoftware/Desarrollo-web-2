# Tutorial de JavaScript: Estructuras Condicionales con `if`

## Introducción

Una de las características esenciales de cualquier lenguaje de programación es la capacidad de tomar decisiones. En JavaScript, estas decisiones se toman utilizando estructuras condicionales como `if`. Con `if`, puedes ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa.

En este tutorial, aprenderás a usar la estructura condicional `if`, cómo funciona, y cómo utilizarla para controlar el flujo de tu programa.

## Sintaxis de `if`

La sintaxis básica de una declaración `if` en JavaScript es la siguiente:

```javascript
if (condición) {
  // Código a ejecutar si la condición es verdadera
}
```

### Partes de la declaración `if`:

- **`if`**: Es la palabra clave que indica una condición.
- **`condición`**: Es la expresión que será evaluada. Si es `true` (verdadera), el bloque de código dentro de las llaves `{}` se ejecutará.
- **Bloque de código**: El código que se ejecuta solo si la condición es verdadera.

### Ejemplo básico:

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
}
```

En este ejemplo, la variable `edad` tiene el valor 18. La condición `edad >= 18` se evalúa como verdadera, por lo que se ejecuta el bloque de código que imprime en la consola el mensaje `"Eres mayor de edad."`.

## Condición Falsa: El bloque no se ejecuta

Si la condición dentro de la declaración `if` es falsa, el bloque de código dentro de las llaves no se ejecutará. Aquí tienes un ejemplo de cómo funciona cuando la condición es falsa:

```javascript
let edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
}
```

En este caso, como `edad` es 16, la condición `edad >= 18` es falsa y no se ejecuta ningún código.

## Usando `else` para manejar casos falsos

A veces, querrás ejecutar un código si la condición es falsa. Para esto, puedes usar la cláusula `else`, que se ejecutará si la condición en el `if` no es verdadera.

### Sintaxis de `if...else`:

```javascript
if (condición) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

### Ejemplo con `else`:

```javascript
let edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}
```

En este caso, como `edad` es 16, la condición es falsa, por lo que se ejecuta el bloque de código dentro de `else`, imprimiendo `"Eres menor de edad."`.

## Usando `else if` para múltiples condiciones

¿Qué pasa si tienes más de una condición que quieres verificar? Puedes encadenar varias condiciones usando `else if`.

### Sintaxis de `if...else if...else`:

```javascript
if (condición1) {
  // Código si condición1 es verdadera
} else if (condición2) {
  // Código si condición2 es verdadera
} else {
  // Código si ninguna de las condiciones es verdadera
}
```

### Ejemplo con `else if`:

```javascript
let temperatura = 25;

if (temperatura > 30) {
  console.log("Hace mucho calor.");
} else if (temperatura >= 20 && temperatura <= 30) {
  console.log("El clima es agradable.");
} else {
  console.log("Hace frío.");
}
```

En este ejemplo, se verifican tres casos:
1. Si la temperatura es mayor a 30, se imprime `"Hace mucho calor."`.
2. Si la temperatura está entre 20 y 30 (incluidos ambos valores), se imprime `"El clima es agradable."`.
3. Si ninguna de las condiciones anteriores se cumple, se imprime `"Hace frío."`.

## Ejemplos adicionales

### Comparaciones directas

Puedes usar cualquier expresión dentro de una condición `if`, incluyendo comparaciones numéricas, de cadena, booleanos, y más.

#### Comparación de cadenas:

```javascript
let nombre = "Juan";

if (nombre === "Juan") {
  console.log("Hola, Juan.");
} else {
  console.log("No te conozco.");
}
```

#### Comparación booleana:

```javascript
let esActivo = true;

if (esActivo) {
  console.log("El usuario está activo.");
} else {
  console.log("El usuario no está activo.");
}
```

### Operadores lógicos

También puedes combinar múltiples condiciones usando operadores lógicos como `&&` (AND) y `||` (OR).

#### Ejemplo con `&&` (AND):

```javascript
let edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir.");
} else {
  console.log("No puedes conducir.");
}
```

En este caso, para que se permita conducir, ambas condiciones deben ser verdaderas: `edad >= 18` y `tieneLicencia`.

#### Ejemplo con `||` (OR):

```javascript
let tieneDinero = false;
let tieneTarjeta = true;

if (tieneDinero || tieneTarjeta) {
  console.log("Puedes realizar la compra.");
} else {
  console.log("No puedes realizar la compra.");
}
```

Aquí, la compra puede hacerse si el usuario tiene dinero **o** una tarjeta, no es necesario que ambas sean verdaderas.

## Uso de "==" o de "==="

En JavaScript, la diferencia entre `==` y `===` en una condición `if` radica en cómo comparan los valores:

1. **`==` (Comparación débil o suelta)**:
   - Compara **solo los valores**.
   - Si los valores son de tipos diferentes, **JavaScript convierte** automáticamente uno de ellos al tipo del otro para intentar hacer la comparación.
   - Esta conversión se llama **coerción de tipos**.
   
   Ejemplo:
   ```javascript
   if (5 == "5") {
     console.log("Son iguales"); // Se ejecuta porque convierte "5" a número.
   }
   ```

2. **`===` (Comparación estricta)**:
   - Compara tanto el **valor** como el **tipo** de los dos elementos.
   - Si los dos valores no son del **mismo tipo**, la comparación da `false` sin hacer ninguna conversión.
   
   Ejemplo:
   ```javascript
   if (5 === "5") {
     console.log("Son iguales"); // No se ejecuta porque son de tipos diferentes (número y cadena).
   }
   ```

### Ejemplo con ambos:
```javascript
let a = 5;
let b = "5";

if (a == b) {
  console.log("Con ==: Son iguales"); // Se ejecuta, porque convierte "5" a número.
}

if (a === b) {
  console.log("Con ===: Son iguales"); // No se ejecuta, porque son de tipos diferentes.
}
```

### Resumen:
- `==` permite la **coerción de tipos** (conversión automática de tipos) y solo compara los valores.
- `===` es más **estricto** porque compara **tanto los valores como los tipos**.

Por lo tanto, es **más seguro** usar `===` en la mayoría de los casos para evitar comparaciones inesperadas debido a la conversión automática de tipos.