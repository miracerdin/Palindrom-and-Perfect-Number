const buttons = document.getElementsByClassName("buttons")[0];
const palinBtn = document.getElementById("palinBtn");
const perfectBtn = document.getElementById("perfectBtn");
const low = document.getElementById("low");
const high = document.getElementById("high");

console.log(typeof low.value);

const palindromeList = document.getElementsByClassName("palindromeList")[0];
const perfectNumberList =
  document.getElementsByClassName("perfectNumberList")[0];

palinBtn.addEventListener("click", () => {
  if (Number(low.value) >= Number(high.value)) {
    alert("Higher value shoul be higher than lower value");
  } else {
    for (let i = Number(low.value); i < Number(high.value); i++) {
      if (palindrom(i)) {
        palindromeList.innerHTML += i + `</br>`;
      }
    }
  }
});

perfectBtn.addEventListener("click", () => {
  for (let i = Number(low.value); i < Number(high.value); i++) {
    if (perfectNumber(i)) {
      console.log(perfectNumberList);
      perfectNumberList.innerHTML += i + `</br>`;
    }
  }
});

function palindrom(num) {
  let reversed = num.toString().split("").reverse().join("");
  return num == reversed;
}

function perfectNumber(num) {
  let count = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      count += i;
    }
  }
  return count == num;
}
