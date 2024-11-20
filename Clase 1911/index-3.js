

const tareas = [
    {
        titulo:'a',
        desc:'b'
    },
    {
        titulo:'c',
        desc:'d'
    },
    {
        titulo:'e',
        desc:'f'
    },
]

const jsonTarea = JSON.stringify(tareas);

const objetoDeNuevo = JSON.parse(jsonTarea)
console.log(jsonTarea)
