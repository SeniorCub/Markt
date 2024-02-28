function updateTime() {
     var d = new Date();

     document.getElementById("hour").innerText = d.getHours();
     document.getElementById("mins").innerText = d.getMinutes();
     document.getElementById("secs").innerText = d.getSeconds();

}
// Initial update
updateTime();

// Refresh time every 1 second (1000 milliseconds)
setInterval(updateTime, 1000);