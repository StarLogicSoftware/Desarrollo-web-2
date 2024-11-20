
const tareasJson = localStorage.getItem('tareasPendientes')

const tareas = JSON.parse(tareasJson)

const listado = document.querySelector('#listado')

tareas.forEach((item)=>{
    const li = document.createElement('li')
    li.style.fontWeight = 'bold'
    li.textContent = `${item.titulo} - ${item.desc} `

    listado.appendChild(li)
})
