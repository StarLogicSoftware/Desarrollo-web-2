const tareas = []

const form = document.querySelector('#formulario')


form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const titulo = evento.target.titulo.value
    const descripcion = evento.target.descripcion.value

    const tarea = {
        id:Date.now(),
        titulo,
        descripcion,
        fecha: Date.now(),
    }

    const listado = document.querySelector('#listado')

    const li = document.createElement('li')
    li.style.fontWeight = 'bold'
    const fechaTarea = new Date(tarea.fecha).toLocaleDateString('es-AR')
    li.textContent = `${tarea.titulo} - ${tarea.descripcion} - ${fechaTarea}`

    listado.appendChild(li)

    tareas.push(tarea)

    console.log(tareas)
})