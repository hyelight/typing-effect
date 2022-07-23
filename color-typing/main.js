const texting = document.querySelector(".dynamic");

function randomString() {
  const stringArr = [
    "I LIKE PINK !",
    "I LIKE BLUE !",
    "I LIKE YELLOW !",
    "I LIKE PURPLE !",
    "I LIKE BROWN !",
  ];
  const selectArr = stringArr[Math.floor(Math.random() * stringArr.length)];
  const splitSelectArr = selectArr.split("");

  return splitSelectArr;
}

function resetTyping() {
  texting.textContent = "";
  startDynamic(randomString());
}

function startDynamic(randomArr) {
  if (randomArr.length > 0) {
    texting.textContent += randomArr.shift();
    setTimeout(function () {
      startDynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 2000);
  }
}
startDynamic(randomString());

function blink() {
  texting.classList.toggle("active");
}

setInterval(blink, 500);
