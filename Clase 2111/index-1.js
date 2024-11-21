const tareas = []

const agrearTareaAListado = (tarea) => {
	const listado = document.querySelector("#listado")

	const li = document.createElement("li")
	li.style.fontWeight = "bold"
	li.style.fontSize = "20px"
	li.textContent = `${tarea.titulo} - ${tarea.desc} `

	listado.appendChild(li)
}

const guardarTareas = (listadoTareas) => {
    const tareasString = JSON.stringify(listadoTareas)
	localStorage.setItem("tareasPendientes", tareasString)
}

const obtenerTareas = (arrayOriginal) => {
    const tareasJson = localStorage.getItem("tareasPendientes")
	const tareasArray = JSON.parse(tareasJson)
    Array.prototype.push.apply(arrayOriginal, tareasArray)
}

const form = document.querySelector("#formulario")

document.addEventListener("DOMContentLoaded", () => {
	obtenerTareas(tareas)
	tareas.forEach(agrearTareaAListado)
})

form.addEventListener("submit", (evento) => {
	evento.preventDefault()

	const titulo = evento.target.titulo.value
	const desc = evento.target.descripcion.value

	const tarea = {
		id: Date.now(),
		titulo,
		desc,
		fecha: Date.now(),
	}

	tareas.push(tarea)

    guardarTareas(tarea)

	agrearTareaAListado(tarea)
})
