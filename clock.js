
const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#minute-hand');
const hourHand = document.querySelector('#hour-hand');

function timely(){
    let currently = new Date()
    let hr = currently.getHours(currently);
    let min = currently.getMinutes(currently);
    let sec = currently.getSeconds(currently);
    if (hr>12){
        let theHour = 24-hr;
        let hourDeg = 'rotate('+theHour*30+'deg)';
        hourHand.style.transform = ''+hourDeg;
        let minuteDeg = 'rotate('+min*6+'deg)';
        minuteHand.style.transform = ''+minuteDeg;
        let secondDeg = 'rotate('+sec*6+'deg)';
        secondHand.style.transform = ''+secondDeg;
    }
}
setInterval(timely,1000)