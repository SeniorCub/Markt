// function updateTime() {
//      var d = new Date();

//      document.getElementById("hour").innerText = d.getHours();
//      document.getElementById("mins").innerText = d.getMinutes();
//      document.getElementById("secs").innerText = d.getSeconds();

// }
// // Initial update
// updateTime();

// // Refresh time every 1 second (1000 milliseconds)
// setInterval(updateTime, 1000);

const countDownDisplay = document.getElementById("countdown");

let countdownTime = 1 * 60 * 60; // 1 hours
const countdownDate = new Date().getTime() + countdownTime * 1000;

setInterval(count, 1000);

function count() {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(this);
    document.getElementById("productOfDay").innerHTML = `<h1 class="no-offer">No Offer Available</h1>`
  } else {
    countDownDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
}