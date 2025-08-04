const timer = 5;//5 обозначает пять минут
let amountTime = timer * 60;//переводим минуты в секунды

const button = document.querySelector('#myButton');
button.addEventListener('click' , function(){
    document.querySelector('#player').play();
    document.querySelector('#myVideo').play();
})

function calculateTime() {//создали функ
    const countdown = document.querySelector('#countdown');//выделили p
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10){
        seconds = "0"+ seconds
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    

    if (amountTime<0) {
        stoptimer();
        amountTime=0;
    }
} 

function stoptimer(){
    clearInterval(timerID);
}
let timerID = setInterval(calculateTime, 1000);