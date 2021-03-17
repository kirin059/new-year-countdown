'use strict';

const year = document.querySelector('.year');
const days = document.querySelector('#days');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('.countdown');

const currentYear = new Date().getFullYear();
// console.log(currentYear)  2021

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
// console.log(newYear)   Sat Jan 01 2022 00:00:00

year.innerText = currentYear + 1
// 2022

function updateCountdown() {
    const currentTime = new Date();
    // 현재 시간 출력

    const diff = newYearTime - currentTime;
    // 2022년 1월 1일 에서 현재 시간 빼기

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// setTimeout(() => {
//     updateCountdown()
// }, 1000);

// 1초마다 시간 업데이트
setInterval(updateCountdown, 1000);