
let intervalId;
const startChange = document.getElementById('start')
const stopChange = document.getElementById('stop')

const randColor = () => {
    // const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta']
    // const ranNum = Math.floor(Math.random() * 9);
    // return colors[ranNum]

    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color
}

startChange.addEventListener('click', () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = randColor()
    }, 1000)
})

stopChange.addEventListener('click', () => clearInterval(intervalId))