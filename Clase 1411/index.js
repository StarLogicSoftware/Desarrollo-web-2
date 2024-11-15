const tareas = []

function CargarTarea() {
	let continuar = true
	do {
		let nombreTarea = prompt("Ingrese el nombre de la tarea")
		tareas.push(nombreTarea)

		continuar = confirm("Quiere agregar otro item?")
	} while (continuar)

	const ul = document.querySelector("#listado")

	tareas.forEach((contenido) => {
		const li = document.createElement("li")
		li.innerText = contenido
		li.classList.add("item")
		//li.classList.remove('item')
		//console.log(li.classList.contains('item'))
		//li.classList.toggle('item')
		// li.style.backgroundColor = 'red'
		// li.style.color = 'gray'
		ul.appendChild(li)
	})
}
