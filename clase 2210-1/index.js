
// hoisting

let cantidad = parseInt('50')

const pizza1 = prepararPizza("huevo", "tomate")
const pizza2 = prepararPizza("cheddar", "kiwi")
const pizza3 = prepararPizza("tomate", "roquefort")

console.log(pizza1)
console.log(pizza2)
console.log(pizza3)

alert('muestra esto y nada mas')

function prepararPizza(ingrediente1, ingrediente2) {
	console.log("agregar " + ingrediente1)
	console.log("agregar " + ingrediente2)
	console.log("cocinar")

    return "pizza lista!"
}