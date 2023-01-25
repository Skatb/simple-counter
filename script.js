let min = sec = ms = "0" + 0, startTimer;

let reset = document.querySelector('.reset')
let stop = document.querySelector('.stop')
let start = document.querySelector('.start')

start.addEventListener("click", startFunction)
stop.addEventListener("click", stopFunction)
reset.addEventListener("click", resetFunction)

function startFunction () {
  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if(ms == 100) {
      sec++
      sec = sec < 10 ? "0" + sec : sec
      ms = "0" + 0
    }
    if(sec == 60) {
      min++
      min = min < 10 ? "0" + min : min
      sec = "0" + 0
    }
    
  put()
  }, 10)
}

function stopFunction () {
  clearInterval(startTimer)
}
function resetFunction () {
  clearInterval(startTimer)
  min = sec = ms = "0" + 0;
  put()
}

function put () {
  document.querySelector('.millisecond').innerHTML = ms
  document.querySelector('.second').innerHTML = sec
  document.querySelector('.minute').innerHTML = min
}