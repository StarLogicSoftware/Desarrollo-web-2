const tabla = document.querySelector("#tabla")

fetch("https://jsonplaceholder.typicode.com/users")
	.then((respuesta) => respuesta.json())
	.then((data) => {
		data.forEach((usuario) => {
			const tr = document.createElement("tr")
			const td_usuario = document.createElement("td")
			const td_website = document.createElement("td")
            const td_boton = document.createElement('td')
            const link = document.createElement('a')

			td_usuario.innerText = usuario.name
			td_website.innerText = usuario.website

            // http://127.0.0.1:5500/posts.html?userId=6
            link.innerText = `Ver posts de ${usuario.name}` // interpolacion
            // link.innerText = 'Ver posts de' + usuario.name // concatenacion
            link.setAttribute('href', `http://127.0.0.1:5500/posts.html?userId=${usuario.id}`)

            td_boton.appendChild(link)

			tr.appendChild(td_usuario)
			tr.appendChild(td_website)
            tr.appendChild(td_boton)

            tabla.appendChild(tr)
		})
	})
	.catch((error) => {
		console.log(error)
	})

// const promesa = new Promise( (resolve, reject) => {
//     let a = 4
//     let b = 0

//     if(b != 0){
//         resolve(a / b)
//     }
//     else{
//         reject('no se puede dividir por cero')
//     }
// } )

// promesa
//     .then( (respuesta) => {
//         console.log("la respuesta es: ", respuesta)
//     } )
//     .catch( (respuesta) => {
//         console.log("algo salio mal, error: ", respuesta)
//     })
