const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault()
      console.log(event)
      
      const input = document.querySelector("#searchByID")
      console.log(input.value)
      
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
          console.log(data)
          const title = document.querySelector("#title")
          const summary = document.querySelector("#summary")

          title.innerText = data.title
          summary.innerText = data.summary
      })
    

    });
}

document.addEventListener('DOMContentLoaded', init);