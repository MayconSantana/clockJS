// Seleção dos Elementos
const hrsEl = document.querySelector('.hrs');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');

// Funções
const formatDigits = (el) => {
    if (el < 10) {
       return '0' + el;
    } else {
        return el;
    }
}

const relogio = () => {
    let dayToday = new Date();

    let hrs = dayToday.getHours();
    let min = dayToday.getMinutes();
    let sec = dayToday.getSeconds();

    hrs = formatDigits(hrs)
    min = formatDigits(min)
    sec = formatDigits(sec)

    hrsEl.innerHTML = hrs;
    minEl.innerHTML = min;
    secEl.innerHTML = sec;
}

// Chamada do Interval
setInterval(relogio);