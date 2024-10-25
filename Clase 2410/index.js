let frutas = []
let continuar
do {
	let frutaComprada = prompt("que fruta desea comprar?")

	frutas.push(frutaComprada)

	continuar = confirm("Desea comprar otra fruta?")
} while (continuar)

console.log("Usted compro las siguientes frutas: ")

for (let i = 0; i < frutas.length; i++) {
	console.log(frutas[i])
}
