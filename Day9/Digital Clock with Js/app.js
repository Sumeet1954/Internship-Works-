
function Update()
{
const now = new Date();
const hours = String(now.getHours());
const Min = String(now.getMinutes());
const Sec = String(now.getSeconds());

let hour = document.getElementById("hr");
hour.innerText = hours;
let minutes = document.getElementById("mn");
minutes.innerText = Min;
let seconds = document.getElementById("sc");
seconds.innerText = Sec;
}

let intervalId = setInterval(Update, 1000);

let stop = document.querySelector(".stp");
stop.addEventListener("click", () => {
    clearInterval(intervalId);
});
let start = document.querySelector(".str");
start.addEventListener("click",()=>{
    intervalId = setInterval(Update, 1000);
})