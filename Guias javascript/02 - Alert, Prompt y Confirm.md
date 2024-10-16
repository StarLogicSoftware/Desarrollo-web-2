# Conceptos de javascript

Aqui iremos subiendo teoria relacionada sobre javascript para tener un leve resumen a mano

## Metodos para interactuar con el usuario

### 1. **`alert()`**
   - **Propósito:** Mostrar un mensaje informativo al usuario.
   - **Sintaxis:** `alert('mensaje');`
   - **Comportamiento:** Muestra un cuadro de diálogo con un mensaje y un botón "Aceptar". No permite capturar ninguna entrada del usuario.
   - **Ejemplo:**
     ```javascript
     alert("Este es un mensaje de alerta");
     ```

### 2. **`prompt()`**
   - **Propósito:** Solicitar al usuario que ingrese un valor.
   - **Sintaxis:** `prompt('mensaje');`
   - **Comportamiento:** Muestra un cuadro de diálogo con un mensaje, un campo de entrada de texto, y botones "Aceptar" y "Cancelar". Devuelve el texto ingresado por el usuario o `null` si cancela.
   - **Ejemplo:**
     ```javascript
     let nombre = prompt("¿Cuál es tu nombre?");
     alert("Hola, " + nombre);
     ```

### 3. **`confirm()`**
   - **Propósito:** Solicitar confirmación del usuario.
   - **Sintaxis:** `confirm('mensaje');`
   - **Comportamiento:** Muestra un cuadro de diálogo con un mensaje y dos botones: "Aceptar" y "Cancelar". Devuelve `true` si el usuario hace clic en "Aceptar", y `false` si hace clic en "Cancelar".
   - **Ejemplo:**
     ```javascript
     let respuesta = confirm("¿Estás seguro de que quieres continuar?");
     if (respuesta) {
         alert("Continuando...");
     } else {
         alert("Cancelado.");
     }
     ```