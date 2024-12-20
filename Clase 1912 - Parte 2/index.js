const tabla = document.querySelector("#tabla")

fetch("https://jsonplaceholder.typicode.com/users")
	.then((respuesta) => {

		if(respuesta.ok){
			return respuesta.json()
		}
		else{
			if(respuesta.status == 404){
				console.log('la direccion url no es valida')
			}
			else{
				console.log('fallo el servidor')
			}

			throw new Error('El error fue en el fetch')
		}

	})
	.then((data) => {
		data.forEach((usuario) => {
			const tr = document.createElement("tr")
			const td_usuario = document.createElement("td")
			const td_website = document.createElement("td")
			const td_boton = document.createElement("td")
			const link = document.createElement("a")

			td_usuario.innerText = usuario.name
			td_website.innerText = usuario.website

			link.innerText = `Ver posts de ${usuario.name}` // interpolacion
			// link.innerText = 'Ver posts de' + usuario.name // concatenacion
			link.setAttribute(
				"href",
				`http://127.0.0.1:5500/posts.html?id=${usuario.id}`
			)

			td_boton.appendChild(link)

			tr.appendChild(td_usuario)
			tr.appendChild(td_website)
			tr.appendChild(td_boton)

			tabla.appendChild(tr)
		})
	})
	.catch((error) => {
		alert('hubo un problema, intente mas tarde')
	})

const funcion = (uno) => uno * 2

const funcion2 = (uno) => {
	return uno * 2
}
