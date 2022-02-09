const fireworkContent = document.querySelector('.fireWork-content');
const daysSpan = document.querySelector('#days');
const hoursSpan = document.querySelector('#hours');
const minutesSpan = document.querySelector('#minutes');
const secondsSpan = document.querySelector('#seconds');
const newYear = document.querySelector('#new-year');

const now = new Date();


newYear.innerHTML = now.getFullYear() + 1;


const countToDate = new Date(now.getFullYear() + 1,0,1).getTime(); // 2023 ngày 1 tháng 1
const countdown = () =>{

    const now = new Date().getTime()

    const distance = countToDate - now; //lấy milisecond

    const days = Math.floor(distance / (1000*60*60*24)) //để chia từ milisecond lên ngày - 1000mili = 1s
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000)
    daysSpan.innerHTML = days;
    hoursSpan.innerHTML = hours;
    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;

    if (distance < 0){
        clearInterval(countdownInterval);
    }
}

countdown()

countdownInterval = setInterval(countdown,1000)

const fireworks = new Fireworks(fireworkContent, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 1000,
    explosion: 10
})
fireworks.start()