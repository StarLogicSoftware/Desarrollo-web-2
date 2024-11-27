
const lista = document.querySelector('#lista')

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        json.forEach(post=> {
            const {title, body} = post
           
            const li = document.createElement('li')
            li.textContent = title

            lista.appendChild(li)
        });
      })