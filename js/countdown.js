let daysToNewyear = document.getElementById("days-to-newyear");
let hoursToNewyear = document.getElementById("hours-to-newyear");
let minutesToNewyear = document.getElementById("minutes-to-newyear");
let secondsToNewyear = document.getElementById("seconds-to-newyear");
let newyearTitle = document.getElementById("newyear-title");
let newYearDate = new Date(2023, 2, 3);
let neyYearTime = newYearDate.getTime();

let oneMin = 60 * 1000;
let oneHour = 60 * oneMin;
let oneDay = 24 * oneHour;

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();

  if (neyYearTime >= todayTime) {
    let remainingTime = neyYearTime - todayTime;
    daysToNewyear.textContent = Math.floor(remainingTime / oneDay);
    hoursToNewyear.textContent = Math.floor((remainingTime % oneDay) / oneHour);
    minutesToNewyear.textContent = Math.floor(
      (remainingTime % oneHour) / oneMin
    );
    secondsToNewyear.textContent = Math.floor((remainingTime % oneMin) / 1000);
  } else {
    newyearTitle.setAttribute("style", "color: red");
    newyearTitle.textContent = "WINTERLUDE HAS STARTED!!!";
    document.getElementById("counter-wraper").style.display = "none";
    document.getElementById("content").style.display = "block";
  }
}
setInterval(countdown, 1000);
countdown();