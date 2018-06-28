"use strict";
window.onload = function () {
    setInterval(fSec, 1000);

    function fSec() {

        let time = document.querySelector('.time');
        let circle;
        let textIntoCircle = 0;

        for (let h = 0; h < 12; h++) {
            circle = document.createElement('div');
            let clock = document.querySelector('.clock');
            let coordsClock = clock.getBoundingClientRect();
            const centerClockX = coordsClock.left + coordsClock.width / 2;
            const centerClockY = coordsClock.top + coordsClock.height / 2;

            clock.appendChild(circle);
            circle.setAttribute('style', 'width: 50px;height:50px;border-radius:50px;background: #41b9b9;display: inline-block;position: absolute;text-align: center;line-height: 50px;font-size: 20px;');

            let radiusCircles = 165;   //радиус расположения кружков
            let centerCircleX = centerClockX - radiusCircles * Math.cos(h * 30 * (Math.PI / 180) + Math.PI / 2);
            let centerCircleY = centerClockY - radiusCircles * Math.sin(h * 30 * (Math.PI / 180) + Math.PI / 2);
            circle.style.top = centerCircleY - 25 - coordsClock.top + 'px';
            circle.style.left = centerCircleX - 25 - coordsClock.left + 'px';
            circle.textContent = textIntoCircle;
            textIntoCircle++;
            if (h === 0) {
                circle.textContent = 12;
            }
        }

        let timeNow = new Date();
        let hourNow = timeNow.getHours();
        let minutsNow = timeNow.getMinutes();
        let secondNow = timeNow.getSeconds();
        let sec = secondNow * 6;
        let min = minutsNow * 6;
        let hour = hourNow * 30 / 2;

        if (sec + 6 === 366) {
            sec = 0;
            min += 6;
            if (min + 6 === 366) {
                min = 0;
                hour += 30;
                if (hour + 30 === 366) {
                    hour = 0;
                }
            }
        }
        sec += 6;

        time.innerText = addNull(hourNow) + ":" + addNull(minutsNow) + ":" + addNull(secondNow);
        document.querySelector('.arrow-sec').style.transform = 'rotate(' + sec + 'deg)';
        document.querySelector('.arrow-min').style.transform = 'rotate(' + min + 'deg)';
        document.querySelector('.arrow-hour').style.transform = 'rotate(' + hour + 'deg)';


    }


    function addNull(value) {
        let result = value.toString();
        if (result.length === 1) {
            result = "0" + value;
        }
        return result
    }
}