const counter = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
var click = true

cookie.onclick = () => {
    if (click) {
        cookie.width = cookie.width + 50
        click = false
    } else {
        cookie.width = cookie.width - 50
        click = true
    }
    counter.textContent = Number(counter.textContent) + 1
}