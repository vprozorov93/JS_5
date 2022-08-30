const timer = document.getElementById('timer')
const arrayOfTimer = timer.textContent.split(':')
var time = Number(arrayOfTimer[0])*3600 + Number(arrayOfTimer[1])*60 + Number(arrayOfTimer[2])

idSetInterval = setInterval(() => {
    time --  
    let hour = Math.trunc(time/3600)
    let minutes = Math.trunc(time%3600/60)
    let seconds = time - hour*3600 - minutes*60
    
    if (hour<10) {
        hour = `0${hour}`
    }
    
    if (minutes<10) {
        minutes = `0${minutes}`
    }
    
    if (seconds<10) {
        seconds = `0${seconds}`
    }

    timer.textContent = `${hour}:${minutes}:${seconds}`
    if (time === 0) {
        location.assign("file:///Users/vladislavprozorov/Library/Mobile%20Documents/com~apple~CloudDocs/VS%20Code/JS_task_5/timer/file")
        alert('Вы победили в конкурсе!')
        clearInterval(idSetInterval)
    }
}, 1000)



