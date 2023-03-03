// getting hands
const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hrHand = document.querySelector(".hr-hand");

function setDate(){
    // calling inbuilt date
    const now = new Date();
    // getting the values of time
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();
    // converting the time into degree for rotation
    const secDeg = ((sec / 60) * 360) + 90;
    const minDeg = ((min / 60) * 360) + 90;
    const hrDeg = ((hr / 60) * 360) + 90;
    // changing the transform property every time the func is executed
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;
}

// calling function at every 1s
setInterval(setDate, 1000);