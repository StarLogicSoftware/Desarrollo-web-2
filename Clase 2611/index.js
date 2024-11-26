//import {sumar, restar} from "./js/app.js"

const persona = {
    apellido:'fumo',
    edad:21,
    nombre:'nicolas',
}

const {nombre,edad} = persona

saludar(persona)


function saludar( {nombre, edad} ){
    console.log(nombre)
    console.log(edad)
}



