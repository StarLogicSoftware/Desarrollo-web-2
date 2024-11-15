const tareas = []
const formulario = document.querySelector("#formulario-tarea")

formulario.addEventListener("submit", (parametroEvento) => {
	parametroEvento.preventDefault()

	let nombreTarea = parametroEvento.target.titulo.value
	let descripcionTarea = parametroEvento.target.descripcion.value

    const tarea = {
        titulo:nombreTarea,
        descripcion:descripcionTarea,
    }

    tareas.push(tarea)

    console.log(tareas)

	const ul = document.querySelector("#listado")

	const li = document.createElement("li")
	li.innerText = `Titulo: ${tarea.titulo}, Descripcion: ${tarea.descripcion}`
	li.classList.add("item")
	ul.appendChild(li)
})
