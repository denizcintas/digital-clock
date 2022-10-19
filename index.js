const hour = document.getElementById("hour")
const minut = document.getElementById("minutes")
const second = document.getElementById("seconds")
const ampm1 = document.getElementById("ampm")



function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }
    hour.innerText = h;
    minut.innerText = m;
    second.innerText = s;
    ampm1, (innerText = ampm)
    setTimeout(() => {
        clock();
    }, 1000)
}
clock();