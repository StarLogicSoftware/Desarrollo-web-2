
const p = document.getElementById('parrafo')

//p.classList.add('usuario')
p.classList.remove('seleccionado')
p.classList.toggle('parrafo')
p.style.backgroundColor = 'red'

if(p.classList.contains('usuario')){
    p.classList.remove('usuario')
}
else{
    p.classList.add('usuario')
}

// const persona = {
//     nombre:'nicolas'
// }

// persona.nombre = 'pepe'

// console.log(persona)

const ul = document.querySelector('ul')
const li = document.querySelector('#eliminar')

ul.remove(li)