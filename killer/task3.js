getHole = index => document.getElementById(`hole${index}`)
var dead = document.getElementById('dead')
var lost = document.getElementById('lost')

function abc (index) {
    if (getHole(index).classList.contains('hole_has-mole')) {
        dead.textContent = Number(dead.textContent) + 1
    } else {
        lost.textContent = Number(lost.textContent) + 1
    }

    if (dead.textContent === '10') {
        alert('Вы выиграли')
        dead.textContent = '0'
        lost.textContent = '0'
        return
    }


    if (lost.textContent === '5') {
        alert('Вы проиграли')
        dead.textContent = '0'
        lost.textContent = '0'
        return
    }
}

getHole(1).onclick = () => {abc(1)}
getHole(2).onclick = () => {abc(2)}
getHole(3).onclick = () => {abc(3)}
getHole(4).onclick = () => {abc(4)}
getHole(5).onclick = () => {abc(5)}
getHole(6).onclick = () => {abc(6)}
getHole(7).onclick = () => {abc(7)}
getHole(8).onclick = () => {abc(8)}
getHole(9).onclick = () => {abc(9)}

