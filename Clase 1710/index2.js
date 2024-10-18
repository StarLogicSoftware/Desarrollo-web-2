const n1 = parseInt(prompt("ingrese el primer numeroooooo"))
const n2 = parseInt(prompt("ingrese el segundo numero"))

if (n1 > 0) {
    let resultado
    resultado = n1 + n2

    alert("El resultado de la suma es: " + resultado)
    console.log(`El resultado es: ${resultado}`) //backsticks
}
else {
    alert("EL VALOR NO PUEDE SER NEGATIVO")
}
