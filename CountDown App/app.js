const enddate = "26 JUNE 2024 3:40 AM"

document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("input")
function clock() {

    const end = new Date (enddate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if(diff < 0 ) return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff / 3600) %24;
    inputs[2].value = Math.floor(diff/60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
 clock()


 setInterval(
    () => {
      clock()
    },
    1000

 )

