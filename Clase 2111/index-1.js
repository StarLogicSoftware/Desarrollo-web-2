import { guardarTareas, obtenerTareas } from "./guardadoLocal.js"

let tareas = []
const tareasfinalizadas = []

const form = document.querySelector("#formulario")
const botonfinalizarTareas = document.querySelector("#boton-finalizados")
const ulFinalizados = document.querySelector("#listado-finalizado")
const listado = document.querySelector("#listado")

botonfinalizarTareas.addEventListener("click", () => {
	// tareasfinalizadas = [...tareasfinalizadas, ...tareas]

	tareas.forEach((item) => {
		tareasfinalizadas.push(item)
	})
	tareas = []

	ulFinalizados.innerHTML = ""
	listado.innerHTML = ""

	tareasfinalizadas.forEach((item) => {
		agrearTareaAListado(ulFinalizados, item)
	})
})

const agrearTareaAListado = (lista, { titulo, desc }) => {
	const li = document.createElement("li")
	li.style.fontWeight = "bold"
	li.style.fontSize = "20px"
	li.textContent = `${titulo} - ${desc} `
	lista.appendChild(li)
}

document.addEventListener("DOMContentLoaded", () => {
	obtenerTareas(tareas)
	tareas.forEach( (item) => {
		agrearTareaAListado(listado, item)
	})
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

	agrearTareaAListado(listado, tarea)
})
