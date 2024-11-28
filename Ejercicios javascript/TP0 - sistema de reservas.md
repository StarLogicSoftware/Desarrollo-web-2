### Trabajo Práctico: **Sistema de Reservas para una Sala**

#### Descripción del ejercicio

El objetivo es crear un sistema de reservas para una sala utilizando JavaScript, centrado en la manipulación del DOM, el uso de arrays, el guardado en `localStorage` y una interfaz interactiva. Los usuarios podrán registrar reservas, visualizar una lista de reservas en una tabla y marcar reservas como realizadas. El sistema debe ser funcional y mantener los datos almacenados incluso si la página se recarga.

---

#### Instrucciones

1. **Formulario de registro de reservas**:
   - Crear un formulario en HTML con los siguientes campos:
     - Nombre de la empresa (texto).
     - Nombre del encargado (texto).
     - Horario de la reserva (campo de tipo `datetime-local`).
     - Tiempo de la reserva en horas (número).
     - Un botón para agregar la reserva.

2. **Tabla de reservas**:
   - Diseñar una tabla que muestre todas las reservas registradas con las siguientes columnas:
     - Nombre de la empresa.
     - Nombre del encargado.
     - Horario de la reserva.
     - Tiempo de la reserva.
     - Estado de la reserva (pendiente o realizada).
     - Un botón en cada fila para marcar la reserva como realizada.

3. **Manipulación de datos con arrays**:
   - Usar un array en JavaScript para manejar las reservas. Cada reserva debe ser un objeto con las propiedades: 
     `empresa`, `encargado`, `horario`, `tiempo` y `estado`.

4. **Uso de `localStorage`**:
   - Guardar las reservas en `localStorage` cada vez que se agregue una nueva reserva.
   - Al cargar la página, leer los datos de `localStorage` y mostrarlos automáticamente en la tabla.

5. **Interactividad y eventos**:
   - Al enviar el formulario, agregar la reserva al array y actualizar la tabla.
   - Al hacer clic en el botón de "Marcar como realizada", actualizar el estado de la reserva en el array y en la tabla.
   - Actualizar el `localStorage` con cada cambio en los datos.

6. **Validación de datos (opcional de momento)**:
   - Validar que todos los campos del formulario estén completos antes de agregar una reserva.
   - Asegurarse de que el tiempo de la reserva sea mayor a 0.

---

#### Requisitos adicionales

- **Estilo visual**:
  - La tabla debe ser clara y fácil de leer.
  - Agregar un diseño básico al formulario y a la tabla para mejorar la experiencia del usuario.
  
- **Persistencia de datos**:
  - Los datos deben permanecer guardados aunque el usuario cierre o recargue la página.

- **Buen manejo de errores**:
  - Mostrar mensajes de error amigables si el usuario intenta enviar el formulario con campos vacíos o inválidos.

---

#### Puntos a evaluar

1. Correcta creación y actualización del array de reservas.
2. Implementación de `localStorage` para la persistencia de datos.
3. Manipulación efectiva del DOM para agregar, actualizar y eliminar filas en la tabla.
4. Uso adecuado de validaciones y manejo de errores.
5. Claridad y limpieza en el código JavaScript.

¡Buena suerte con la implementación! 🎉