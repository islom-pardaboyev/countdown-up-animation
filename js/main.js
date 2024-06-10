let valuesDisplays= document.querySelectorAll('.num');
let interval = 4000;

valuesDisplays.forEach(valuesDisplay => {
    let startValue = 0;
    let endValue = Number(valuesDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function(){
        startValue += 1;
        valuesDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter)
        }
    }, duration)
})