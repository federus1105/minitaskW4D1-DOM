let catur = document.getElementById("catur");

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
  }
  if ((i + j) % 2 === 0) {
    box.classList.add("white");
  } else {
    box.classList.add("black");
  }
  catur.append(kotak)
}
