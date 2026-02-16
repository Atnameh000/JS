
const buttons = document.getElementsByClassName('button')
const body  = document.body

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => body.style.backgroundColor = e.target.id)
})
