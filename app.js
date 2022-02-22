const square = document.querySelectorAll('.square')
const gremlin = document.querySelectorAll('.gremlin')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('gremlin')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('gremlin')

    //assign the id of the randomPosition to hitPosition 
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup' , () => {
        if (id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})


function moveGremlin() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveGremlin()