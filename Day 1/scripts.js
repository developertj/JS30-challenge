const a = document.getElementById("a");
const audio = document.getElementById("audio");
a.onclick = function () {
  audio.play();
};

const s = document.getElementById("s");
const audio1 = document.getElementById("audio1");
s.onclick = function () {
  audio1.play();
};

const d = document.getElementById("d");
const audio3 = document.getElementById("audio3");
d.onclick = function () {
  audio3.play();
};

// a.addEventListener("click", () => {
//   audio.play();
// });
