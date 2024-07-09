let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");
debugger;
function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)} : ${padStart(seconds)}`;
}

function timer() {
  // secondsElapsed di tambah 1
  secondsElapsed++;
  //   memanggil function setTime(),lalu di const time diset secondsElapsed
  setTime();
}

function startClock() {
  if (interval) stopClock();

  // tiap 1000 ms memanggil timer
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}
