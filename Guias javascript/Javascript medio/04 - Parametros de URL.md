# Parametros de URL
Muchas veces, necesitamos enviar datos entre una pagina y otra, o que al compartir un link con una persona, esta pueda ir a un sitio especifico de nuestro sitio web, para eso usamos los parámetros de url, son pares clave-valor que nos ayudan a que podamos obtener los datos desde esa URL y luego utilizarla en nuestro código

``Ejemplo de URL: https://ejemplo.com/?nombre=Juan&edad=30``

Aqui los parametros son nombre y edad, donde el dato que le corresponde a cada uno es Juan para el nombre y 30 para la edad, que luego podremos guardar en una variable para usar en nuestro código.

### Ejemplo 1: Obtener todos los parámetros de la URL actual

```javascript
// Obtener la URL completa del navegador
const url = window.location.href;

// Crear un objeto URL
const urlObj = new URL(url);

// Obtener los parámetros de query string
const params = new URLSearchParams(urlObj.search);

// Recorrer los parámetros
params.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
```

---

### Ejemplo 2: Obtener un parámetro específico por nombre

```javascript
// Ejemplo de URL: https://ejemplo.com/?nombre=Juan&edad=30

// Crear un objeto URL basado en la URL actual
const url = new URL(window.location.href);

// Crear un objeto URLSearchParams
const params = new URLSearchParams(url.search);

// Obtener un parámetro específico
const nombre = params.get('nombre');
const edad = params.get('edad');

console.log('Nombre:', nombre); // Juan
console.log('Edad:', edad);     // 30
```

---

### Ejemplo 3: Obtener parámetros desde una URL específica

Si tienes una URL externa o cualquier cadena de texto que represente una URL:

```javascript
// URL externa
const urlString = 'https://ejemplo.com/?pais=Argentina&ciudad=BuenosAires';

// Crear un objeto URL
const url = new URL(urlString);

// Obtener los parámetros de query string
const params = new URLSearchParams(url.search);

// Obtener un parámetro específico
const pais = params.get('pais');
const ciudad = params.get('ciudad');

console.log('País:', pais);       // Argentina
console.log('Ciudad:', ciudad);   // BuenosAires
```

---

### Ejemplo 4: Obtener los parámetros sin usar `URL` (más manual)

Si no quieres usar el objeto `URL` y prefieres manipular la cadena directamente:

```javascript
// URL con query string
const url = 'https://ejemplo.com/?producto=lapiz&cantidad=5';

// Extraer la parte del query string
const queryString = url.split('?')[1];

// Convertir los parámetros en un objeto
const params = queryString.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=');
    acc[key] = decodeURIComponent(value);
    return acc;
}, {});

console.log(params); // { producto: "lapiz", cantidad: "5" }
```

---

### Resultado esperado para cualquiera de los ejemplos:

Si la URL es:
```
https://ejemplo.com/?nombre=Juan&edad=30
```

La salida será:
```
Nombre: Juan
Edad: 30
```