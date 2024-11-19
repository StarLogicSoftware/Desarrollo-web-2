### **Guía Completa para Trabajar con Fechas en JavaScript**

JavaScript ofrece diversas maneras de trabajar con fechas y horas, principalmente a través del objeto nativo `Date`. Exploraremos en detalle cómo manejar fechas y horarios con ejemplos prácticos.

---

## **1. Crear una Fecha**

Puedes crear una fecha con el constructor `Date` de varias maneras.

### **Ejemplo 1: Fecha actual**
```javascript
const fechaActual = new Date();
console.log(fechaActual); // Imprime la fecha y hora actual
```

### **Ejemplo 2: Fecha específica**
```javascript
// Año, mes (0 = enero, 11 = diciembre), día, hora, minutos, segundos, milisegundos
const fechaEspecifica = new Date(2023, 10, 18, 14, 30, 0); // 18 de noviembre de 2023, 14:30:00
console.log(fechaEspecifica);
```

### **Ejemplo 3: Fecha desde un string**
```javascript
const fechaString = new Date('2023-11-18T14:30:00');
console.log(fechaString); // ISO 8601 (más común y recomendado)
```

### **Ejemplo 4: Desde milisegundos**
```javascript
const fechaDesdeMs = new Date(0); // Marca de tiempo UNIX (1 de enero de 1970)
console.log(fechaDesdeMs);
```

---

## **2. Métodos para Obtener Componentes de una Fecha**

El objeto `Date` tiene métodos `get` para extraer partes específicas de una fecha.

### **Métodos comunes**
```javascript
const fecha = new Date(2023, 10, 18, 14, 30, 0);

console.log(fecha.getFullYear()); // Año: 2023
console.log(fecha.getMonth());    // Mes: 10 (noviembre, ya que enero = 0)
console.log(fecha.getDate());     // Día del mes: 18
console.log(fecha.getDay());      // Día de la semana: 6 (sábado, ya que domingo = 0)
console.log(fecha.getHours());    // Hora: 14
console.log(fecha.getMinutes());  // Minutos: 30
console.log(fecha.getSeconds());  // Segundos: 0
console.log(fecha.getMilliseconds()); // Milisegundos: 0
```

### **Obtener la marca de tiempo**
```javascript
console.log(fecha.getTime()); // Milisegundos desde el 1 de enero de 1970
```

---

## **3. Métodos para Establecer Componentes de una Fecha**

Puedes modificar una fecha con métodos `set`:

### **Ejemplo: Modificar una fecha**
```javascript
const fecha = new Date();
fecha.setFullYear(2025);
fecha.setMonth(11);  // Diciembre
fecha.setDate(25);   // Día 25
fecha.setHours(18, 45, 30); // Hora: 18:45:30
console.log(fecha); // 25 de diciembre de 2025, 18:45:30
```

---

## **4. Comparar Fechas**

Puedes comparar fechas con los operadores de comparación (`<`, `>`, `<=`, `>=`, `==`, `===`).

### **Ejemplo: Comparar dos fechas**
```javascript
const fecha1 = new Date(2023, 10, 18);
const fecha2 = new Date(2023, 10, 19);

console.log(fecha1 < fecha2); // true
console.log(fecha1 > fecha2); // false
console.log(fecha1.getTime() === fecha2.getTime()); // false
```

---

## **5. Formatear Fechas**

### **Ejemplo: Convertir a string legible**
```javascript
const fecha = new Date(2023, 10, 18);
console.log(fecha.toString()); // Sáb Nov 18 2023 00:00:00 GMT+0000
console.log(fecha.toDateString()); // Sat Nov 18 2023
console.log(fecha.toISOString()); // 2023-11-18T00:00:00.000Z
console.log(fecha.toLocaleDateString('es-ES')); // 18/11/2023
```

---

## **6. Calcular Diferencias entre Fechas**

Usa marcas de tiempo (`getTime`) para calcular diferencias en milisegundos y conviértelas a días, horas, etc.

### **Ejemplo: Diferencia en días**
```javascript
const fechaInicio = new Date(2023, 10, 1);
const fechaFin = new Date(2023, 10, 18);

const diferenciaMs = fechaFin - fechaInicio; // Diferencia en milisegundos
const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24); // Convertir a días
console.log(`Diferencia en días: ${diferenciaDias}`);
```

---

## **7. Operaciones Comunes**

### **Agregar o Restar Días**
```javascript
function agregarDias(fecha, dias) {
  const nuevaFecha = new Date(fecha);
  nuevaFecha.setDate(fecha.getDate() + dias);
  return nuevaFecha;
}

const hoy = new Date();
console.log(agregarDias(hoy, 5)); // Fecha 5 días después de hoy
console.log(agregarDias(hoy, -5)); // Fecha 5 días antes de hoy
```

---

### **Resumen de Métodos Importantes**

| Método               | Descripción                                   | Ejemplo                                   |
|----------------------|-----------------------------------------------|-------------------------------------------|
| `getFullYear()`      | Obtiene el año                               | `fecha.getFullYear()`                     |
| `getMonth()`         | Obtiene el mes (0-11)                        | `fecha.getMonth()`                        |
| `getDate()`          | Obtiene el día del mes (1-31)                | `fecha.getDate()`                         |
| `getDay()`           | Obtiene el día de la semana (0 = domingo)    | `fecha.getDay()`                          |
| `setFullYear()`      | Establece el año                             | `fecha.setFullYear(2025)`                 |
| `setMonth()`         | Establece el mes (0-11)                      | `fecha.setMonth(11)`                      |
| `setDate()`          | Establece el día del mes                     | `fecha.setDate(25)`                       |
| `getTime()`          | Marca de tiempo en milisegundos              | `fecha.getTime()`                         |
| `toISOString()`      | Convierte la fecha a formato ISO 8601        | `fecha.toISOString()`                     |
| `toLocaleDateString` | Convierte la fecha a un formato local         | `fecha.toLocaleDateString('es-ES')`       |