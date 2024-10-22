let precio = 0
let total = 0
let continuar

do {
	precio = parseInt( prompt("Ingrese el precio del producto") )

	//total = total + precio
	total += precio

	continuar = confirm("¿Quiere agregar más productos?")
    
} while (continuar)

console.log(precio)

alert(`total a pagar: ${total}`) // interpolacion
//alert("total a pagar: " +  total) // concatenacion
