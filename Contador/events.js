let counter = 0;

function onClickLess() {
  counter = counter - 1;
  document.getElementById("counter").textContent = counter;
}

function onClickReset() {
  counter = 0;
  document.getElementById("counter").textContent = counter;
}

function onClickMore() {
  counter = counter + 1;
  document.getElementById("counter").textContent = counter;
}
// this is a comment to test git
