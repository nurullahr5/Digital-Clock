const clock = document.getElementById('clock')
const day = document.getElementById('date')



setInterval( function (){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
    day.innerHTML = date.toDateString();
}, 1000)
