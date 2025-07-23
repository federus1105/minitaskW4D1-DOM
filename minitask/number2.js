// let catur = document.getElementById("#catur");
let papan = document.createElement("div");
papan.className = "catur";

for (let baris = 0; baris < 8; baris++) {
  for (let kolom = 0; kolom < 8; kolom++) {
    const box = document.createElement("div")
    box.classList.add("box")

    if((baris + kolom) % 2 === 0) {
      box.classList.add("white")
    } else {
      box.classList.add("black")
    }
    papan.append(box)
  }
}

document.body.append(papan);
