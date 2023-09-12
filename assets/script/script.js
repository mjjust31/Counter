let decreaseEl = document.querySelector("#decrease");
let resetEl = document.querySelector("#reset");
let increaseEl = document.querySelector("#increase");
let counterEl = document.querySelector(".counter");
let counterValue = counterEl.innerText;
console.log(decreaseEl);
console.log(resetEl);
console.log(increaseEl);
console.log(counterEl);

let count = counterValue;

resetEl.addEventListener("click", function () {
  count = 0;
  counterEl.textContent = count;
  changeCounterColor();
});

decreaseEl.addEventListener("click", function () {
  count -= 1;
  changeCounterColor();
  counterEl.textContent = count;
});

increaseEl.addEventListener("click", function () {
  // count = count + 1;
  count += 1;
  changeCounterColor();
  counterEl.textContent = count;
});

function changeCounterColor() {
  if (count > 0) {
    counterEl.setAttribute("style", "color:green");
  } else if (count < 0) {
    counterEl.setAttribute("style", "color:red");
  } else {
    counterEl.setAttribute("style", "color:black");
  }
}
