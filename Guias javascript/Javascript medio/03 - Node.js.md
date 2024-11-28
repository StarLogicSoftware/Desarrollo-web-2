# **Guía completa de Node.js utilizando ES6 Modules**

Node.js es un entorno de ejecución para JavaScript que permite ejecutar aplicaciones y scripts en el lado del servidor. Una de sus características es el uso de módulos para organizar el código. En esta guía, exploraremos cómo usar **ES6 Modules** en lugar del sistema tradicional `require`.

---

## **¿Qué es Node.js?**

Node.js es un entorno de ejecución que permite usar JavaScript fuera del navegador. Fue creado para construir aplicaciones escalables y rápidas, principalmente en el backend.

### **Ventajas de Node.js**
1. **JavaScript en todas partes:** Usa el mismo lenguaje en frontend y backend.
2. **Velocidad:** Basado en el motor V8 de Google Chrome.
3. **Escalabilidad:** Ideal para aplicaciones en tiempo real y de alta concurrencia.
4. **Gran ecosistema:** Más de un millón de paquetes en npm.

---

## **Instalar Node.js y npm**

1. **Descarga Node.js:**  
   Ve a la página oficial: [https://nodejs.org](https://nodejs.org).

2. **Instala Node.js según tu sistema operativo:**  
   Sigue las instrucciones del instalador.

3. **Verifica la instalación:**  
   ```bash
   node -v    # Ver versión de Node.js
   npm -v     # Ver versión de npm (Node Package Manager)
   ```

---

## **Inicializar un proyecto en Node.js**

Para comenzar un proyecto Node.js, es necesario crear un archivo `package.json`, que almacenará información del proyecto y las dependencias necesarias.

1. **Inicia un proyecto:**  
   Desde la terminal, ejecuta el siguiente comando en el directorio donde deseas crear tu proyecto:  
   ```bash
   npm init
   ```
   Este comando te pedirá información básica como el nombre del proyecto, la versión y el punto de entrada. Puedes aceptar los valores predeterminados o personalizarlos.

2. **Usa el comando rápido (sin preguntas):**  
   ```bash
   npm init -y
   ```
   Esto crea un archivo `package.json` con valores predeterminados.

3. **Revisa el archivo `package.json`:**  
   Un archivo básico puede verse así:
   ```json
   {
     "name": "mi-proyecto",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "type": "module",
     "scripts": {
       "start": "node index.js"
     },
     "keywords": [],
     "author": "",
     "license": "ISC"
   }
   ```

4. **Configura el campo `type` para usar ES6 Modules:**  
   Asegúrate de incluir `"type": "module"`.

---

## **Ejecutar código JavaScript con Node.js**

1. **Crea un archivo `index.js` con el siguiente contenido:**
   ```javascript
   console.log("¡Hola, mundo desde Node.js!");
   ```

2. **Ejecuta el archivo:**
   ```bash
   node index.js
   ```

   Resultado esperado:  
   ```
   ¡Hola, mundo desde Node.js!
   ```

---

## **Usar ES6 Modules en Node.js**

### **1. Crear un módulo**

Crea un archivo `utilidades.js` con funciones exportadas:
```javascript
// Exportación nombrada
export function sumar(a, b) {
  return a + b;
}

// Exportación por defecto
export default function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}
```

### **2. Importar el módulo**

En el archivo `index.js`, importa y utiliza las funciones:
```javascript
// Importación nombrada
import { sumar } from './utilidades.js';

// Importación por defecto
import saludar from './utilidades.js';

console.log(sumar(5, 3)); // 8
console.log(saludar("Mundo")); // ¡Hola, Mundo!
```

Ejecuta el archivo:
```bash
node index.js
```

---

## **Instalar y usar paquetes con npm**

1. **Instala un paquete, por ejemplo, `chalk`:**  
   ```bash
   npm install chalk
   ```

2. **Usa el paquete en tu proyecto:**  
   ```javascript
   import chalk from 'chalk';

   console.log(chalk.green("¡Texto en verde!"));
   console.log(chalk.blue("¡Texto en azul!"));
   ```

3. **Ejecuta tu archivo:**  
   ```bash
   node index.js
   ```

   Resultado esperado: texto coloreado en la terminal.

---

## **Servidor básico con ES6 Modules**

Crea un servidor HTTP básico con Node.js usando ES6 Modules.

### **Archivo: `index.js`**
```javascript
import http from 'http';

// Crear el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Estado HTTP
  res.setHeader("Content-Type", "text/plain"); // Encabezado
  res.end("¡Hola, mundo desde Node.js con ES6 Modules!"); // Respuesta
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
```

Ejecuta el servidor:
```bash
node index.js
```

Abre tu navegador y ve a `http://localhost:3000`. Verás el mensaje **"¡Hola, mundo desde Node.js con ES6 Modules!"**.