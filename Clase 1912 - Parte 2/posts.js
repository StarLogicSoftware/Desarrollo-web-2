const url = window.location.href
const urlObj = new URL(url)

const params = new URLSearchParams(urlObj.search)

const idUsuario = params.get("id")

fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${idUsuario}`)
	.then((res) => res.json())
	.then((data) => {
		const div = document.querySelector("#posts")

		data.forEach((post) => {
			console.log(post)
			const divTemporal = document.createElement("div")
			divTemporal.innerHTML = `<div class="alert alert-success" role="alert">  <h4 class="alert-heading">${post.title}</h4>  <p>${post.body}</p>  <hr>  <p class="mb-0">post id: ${post.id}</p></div>`

			div.appendChild(divTemporal)
		})
	})
	.catch((err) => {
		console.log("hubo un error")
	})

/*
body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione quios\nqui ihil ratione nemo velit ut aut id quo"
id: 17
title: "fugit voluptas sed molestias voluptatem provident"
userId: 2*/
