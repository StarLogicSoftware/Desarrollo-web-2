# Ejercicio: Simulador de Cajero de Supermercado (con tarea)

Este ejercicio pretende practicar todo lo relacionado a variables ``let`` y ``const``, condicionales ``if``, bucles ``while`` y/o ``do-while`` e interacciónes con el usuario mediante ``alert``, ``prompt`` y ``confirm``.

En clase desarrollaremos la idea y los primeros 3 puntos, de tarea vamos a dejar el punto 4 para que puedan practicar su lógica de programación.

## Parte 1: Ingresar productos y calcular el total

En esta parte, vamos a simular una ticketera de un supermercado (de manera básica no?), donde iremos pidiendo precios de los diferentes productos, donde cuando lo ingresamos, le vamos a preguntar al cajero si hay mas productos, si los hay, el proceso se repite por la cantidad de productos que tenga el cliente, si el cajero nos afirma que no hay mas productos, debemos informarle el total que debe abonar el cliente.

**Descripción**:
   - El programa debe pedir el precio de un producto.
   - Luego debe preguntar al usuario si desea agregar otro producto.
   - Si el usuario responde "sí", debe volver a pedir otro precio.
   - Si el usuario responde "no", el programa debe mostrar el **total** de la compra.

---

## Parte 2: Calcular el vuelto

Ya tenemos la primer parte funcionando!, ahora nos piden que nos deje ingresar el monto con el que abona el cliente, para saber cuánto debemos de entregarle de vuelto.

**Descripción**:
   - Después de calcular el total de la compra, el programa debe pedir al usuario la cantidad de dinero entregada por el comprador.
   - Si el dinero entregado es suficiente, debe calcular y mostrar el **vuelto**.
   - Si el dinero entregado no es suficiente, debe seguir pidiendo al usuario que ingrese una cantidad válida.

---

## Parte 3: Ingresar cantidad de productos

Otro cambio más! 🫢, ahora nos indican que pueden existir mas de un producto de misma caracteristica (ejemplo, 3 latas de atun, dos paquetes de algodon, etc), por lo que ademas del precio del producto, vamos a necesitar que se indique **la cantidad de cada uno de ellos**, donde eso va a dar lugar a un subtotal de cada producto, luego, calcularemos el total y el vuelto.

**Descripción**:
   - Ahora el programa debe permitir al usuario ingresar no solo el precio, sino también la **cantidad** de cada producto.
   - Debe calcular el **subtotal** para cada producto (precio \* cantidad) y sumarlo al total.
   - Luego, debe seguir el flujo de la segunda parte para pedir el dinero y calcular el vuelto.

---

## Parte 4 (**``Tarea``**): Validar si el dinero es insuficiente

**Descripción**:
   - Si el **dinero entregado** es **menor** al total de la compra, el programa debe mostrar un mensaje que diga: **"El dinero es insuficiente, vuelva a pedir dinero al cliente"**.
   - El programa debe seguir pidiendo dinero al usuario hasta que la cantidad sea suficiente para cubrir el total.
   - Una vez que el dinero sea suficiente, calcular el vuelto y mostrarlo.

**Puntos clave**:
- Asegúrate de seguir solicitando dinero si es insuficiente.
- Cuando el dinero sea suficiente, el programa calculará y mostrará el vuelto.

---

### Resumen:

1. **Parte 1**: El programa permite al usuario ingresar los precios de los productos y calcular el total.
2. **Parte 2**: Se pide el dinero entregado por el comprador y se calcula el vuelto.
3. **Parte 3**: Además de ingresar el precio, el usuario también ingresa la cantidad de cada producto, y el programa calcula el subtotal por cada producto y el total final.
4. **Parte 4 (``Tarea``)**: Si el dinero es insuficiente, se vuelve a pedir al usuario que ingrese más dinero hasta que sea suficiente para cubrir el total de la compra.