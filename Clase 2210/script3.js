let total = 0
let precio = 0
let continuar
let cantidad

do {
	precio = parseInt(prompt("Ingrese el precio del producto"))
    cantidad = parseInt(prompt("Cuantos productos hay?"))

	total += precio * cantidad
    
	continuar = confirm("¿Quiere agregar más productos?")
    
} while (continuar)

const pago =  parseInt(prompt(`Total a pagar: ${total}. Ingrese el pago del cliente`))

const vuelto = pago - total

alert(`El vuelto es de ${vuelto} pesos`)