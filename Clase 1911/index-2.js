const fechaActual = new Date()
const fechaVencimiento = agregarDias(fechaActual, 10)

console.log(fechaActual)
console.log(fechaVencimiento)

if(Date.now() > fechaVencimiento){
    console.log('Esta vencida la suscripcion')
}
else{
    
    console.log('Esta activa tu suscripcion al curso')
}

function agregarDias(fecha, dias) {
	const nuevaFecha = new Date(fecha)
	nuevaFecha.setDate(fecha.getDate() + dias)
	return nuevaFecha
}
