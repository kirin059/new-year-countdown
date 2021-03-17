# new-year-countdown 만들기
## css, javascript

![image](https://user-images.githubusercontent.com/71425369/111398886-86249f80-8707-11eb-8046-4a20142e9c55.png)

---

1️⃣ background에 투명 블랙 배경을 입힌 후,` z-index`를 사용하여 text의 위치 조절

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: #fff;
    background-image: url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100vh;
    text-align: center;
    overflow: hidden;
}

body::after {
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

body * {
    z-index: 1;  /* 검정 배경보다 앞에 깔리도록 */
}

.year {
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: -1;  /* 검정 배경의 뒤로 깔리도록 */
    opacity: 0.2;
    font-size: 200px;
    transform: translateX(-50%);
}
```

2️⃣ countdown 계산하기

2022년 1월 1일에서 현재 시각을 빼면  countdown 시각 계산 가능

```js
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

// 1초마다 시간 업데이트
setInterval(updateCountdown, 1000);
```
