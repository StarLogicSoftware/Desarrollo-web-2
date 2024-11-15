const tareas = []
let continuar = true

do {
	let nombreTarea = prompt("Ingrese el nombre de la tarea")
	tareas.push(nombreTarea)

    continuar = confirm('Quiere agregar otro item?')

} while (continuar)

const ul = document.querySelector("#listado")

tareas.forEach((contenido) => {
	const li = document.createElement("li")
	li.innerText = contenido

	ul.appendChild(li)
})
