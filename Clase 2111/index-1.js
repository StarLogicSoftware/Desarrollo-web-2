import { guardarTareas, obtenerTareas } from './guardadoLocal.js'

const tareas = []

const agrearTareaAListado = ( {titulo, desc} ) => {
	const listado = document.querySelector("#listado")

	const li = document.createElement("li")
	li.style.fontWeight = "bold"
	li.style.fontSize = "20px"
	li.textContent = `${titulo} - ${desc} `

	listado.appendChild(li)
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

    guardarTareas(tareas)

	agrearTareaAListado(tarea)
})
