let total = 0
let precio = 0
let continuar

do {
	precio = parseInt(prompt("Ingrese el precio del producto"))

	//total = total + precio
	total += precio
    
	continuar = confirm("¿Quiere agregar más productos?")
} while (continuar)

const pago = prompt(`Total a pagar: ${total}. Ingrese el pago del cliente`)

const vuelto = pago - total

alert(`El vuelto es de ${vuelto} pesos`)
