let count = 0;

const value = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    changeCounterColor();
  });
});

function changeCounterColor() {
  if (count > 0) {
    value.setAttribute("style", "color:green");
  } else if (count < 0) {
    value.setAttribute("style", "color:red");
  } else {
    value.setAttribute("style", "color:black");
  }
}
