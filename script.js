var sec = 0
var min = 0
var hr = 0

var interval

function dois(digit){
    if (digit<10) {
        return ('0'+digit)
    } else {
        return (digit)
    }

}
function start (){

  interval= setInterval(counter,1000)
}
function stop(){
    clearInterval(interval)
}
function restart(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('tempo').innerText='00:00:00'

}

function counter (){
   sec++
    if (sec==60){
        min++
        sec=0
        if (min==60) { 
        min=0
        hr++ 
    }
    }
  document.getElementById('tempo').innerText=dois(hr)+':'+dois(min)+':'+dois(sec)
}