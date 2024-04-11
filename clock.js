const date = document.querySelector('.date');

function myClock() {
  setTimeout(function () {
    const d = new Date();
    const n = d.toLocaleTimeString();
    const clocks = document.querySelectorAll('.clock');
    clocks.forEach((clock) => {
      clock.innerHTML = n;
    });
    myClock();
  }, 1000);
}
myClock();

date.innerHTML = new Date().toLocaleDateString();
