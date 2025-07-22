let merah = document.getElementById("red");
let kuning = document.getElementById("yellow");
let hijau = document.getElementById("green");

function lampured() {
  merah.style.opacity = 1;
  kuning.style.opacity = 0.5;
  hijau.style.opacity = 0.5;
  setTimeout(lampuyellow, 3000);
}

function lampuyellow() {
  merah.style.opacity = 0.5;
  kuning.style.opacity = 1;
  hijau.style.opacity = 0.5;
  setTimeout(lampugreen, 2000);
}
function lampugreen() {
  merah.style.opacity = 0.5;
  kuning.style.opacity = 0.5;
  hijau.style.opacity = 2;
  setTimeout(lampured, 3000);
}

lampured();
  