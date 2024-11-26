### Tutorial: Uso de Desestructuración y Operador Spread en JavaScript

#### **1. Introducción a la Desestructuración**

La desestructuración en JavaScript permite extraer valores de arrays u objetos literales y asignarlos a variables de una manera más sencilla y legible.

#### **1.1. Desestructuración de Arrays**

Cuando trabajamos con arrays, podemos desestructurarlos para acceder a elementos específicos.

##### **Ejemplo Básico**
```javascript
const numeros = [10, 20, 30, 40];

// Usando desestructuración
const [primero, segundo] = numeros;

console.log(primero); // 10
console.log(segundo); // 20
```

##### **Saltear Elementos**
```javascript
const frutas = ["Manzana", "Banana", "Naranja", "Uva"];

// Queremos solo la primera y la tercera
const [primera, , tercera] = frutas;

console.log(primera); // Manzana
console.log(tercera); // Naranja
```

##### **Usar el Resto con `...`**
```javascript
const colores = ["Rojo", "Verde", "Azul", "Amarillo"];

// Extraemos los dos primeros y agrupamos el resto
const [primero, segundo, ...resto] = colores;

console.log(primero); // Rojo
console.log(segundo); // Verde
console.log(resto);   // ["Azul", "Amarillo"]
```

---

#### **1.2. Desestructuración de Objetos**

Con los objetos, podemos desestructurar sus propiedades para asignarlas a variables.

##### **Ejemplo Básico**
```javascript
const persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };

// Desestructuramos las propiedades
const { nombre, ciudad } = persona;

console.log(nombre); // Juan
console.log(ciudad); // Madrid
```

##### **Renombrar Variables**
```javascript
const auto = { marca: "Toyota", modelo: "Corolla", año: 2021 };

// Renombramos las variables
const { marca: fabricante, modelo } = auto;

console.log(fabricante); // Toyota
console.log(modelo);     // Corolla
```

##### **Propiedades Faltantes con Valores por Defecto**
```javascript
const producto = { nombre: "Laptop", precio: 1000 };

// Si la propiedad no existe, usamos un valor por defecto
const { nombre, stock = 0 } = producto;

console.log(nombre); // Laptop
console.log(stock);  // 0
```

---

#### **2. Introducción al Operador Spread (`...`)**

El operador `...` se utiliza para expandir arrays u objetos, lo que resulta útil para copiar, combinar o agregar elementos.

---

#### **2.1. Spread en Arrays**

##### **Copiar Arrays**
```javascript
const originales = [1, 2, 3];
const copia = [...originales];

console.log(copia); // [1, 2, 3]
```

##### **Combinar Arrays**
```javascript
const frutas1 = ["Manzana", "Banana"];
const frutas2 = ["Naranja", "Uva"];

const todas = [...frutas1, ...frutas2];

console.log(todas); // ["Manzana", "Banana", "Naranja", "Uva"]
```

##### **Agregar Elementos**
```javascript
const numeros = [1, 2, 3];
const conExtras = [0, ...numeros, 4];

console.log(conExtras); // [0, 1, 2, 3, 4]
```

---

#### **2.2. Spread en Objetos**

##### **Copiar Objetos**
```javascript
const persona = { nombre: "Ana", edad: 30 };
const copiaPersona = { ...persona };

console.log(copiaPersona); // { nombre: "Ana", edad: 30 }
```

##### **Combinar Objetos**
```javascript
const infoBase = { nombre: "Carlos", edad: 40 };
const ubicacion = { ciudad: "Barcelona", pais: "España" };

const completo = { ...infoBase, ...ubicacion };

console.log(completo);
// { nombre: "Carlos", edad: 40, ciudad: "Barcelona", pais: "España" }
```

##### **Sobrescribir Propiedades**
```javascript
const configuracion = { tema: "oscuro", idioma: "español" };
const actualizacion = { tema: "claro" };

const nuevaConfig = { ...configuracion, ...actualizacion };

console.log(nuevaConfig); // { tema: "claro", idioma: "español" }
```

---

#### **3. Ejercicios Prácticos**

1. **Intercambiar Variables**
   ```javascript
   let a = 5;
   let b = 10;

   [a, b] = [b, a];

   console.log(a); // 10
   console.log(b); // 5
   ```

2. **Desestructuración en Funciones**
   ```javascript
   const usuario = { id: 1, nombre: "Luis", correo: "luis@mail.com" };

   function mostrarUsuario({ nombre, correo }) {
       console.log(`Usuario: ${nombre}, Correo: ${correo}`);
   }

   mostrarUsuario(usuario);
   // Usuario: Luis, Correo: luis@mail.com
   ```

3. **Añadir Elementos a un Array de Forma Inmutable**
   ```javascript
   const tareas = ["Estudiar", "Comprar comida"];
   const nuevasTareas = [...tareas, "Hacer ejercicio"];

   console.log(nuevasTareas);
   // ["Estudiar", "Comprar comida", "Hacer ejercicio"]
   ```

4. **Combinar Configuraciones por Defecto**
   ```javascript
   const configPorDefecto = { idioma: "español", tema: "oscuro" };
   const configUsuario = { tema: "claro" };

   const configuracionFinal = { ...configPorDefecto, ...configUsuario };

   console.log(configuracionFinal);
   // { idioma: "español", tema: "claro" }
   ```