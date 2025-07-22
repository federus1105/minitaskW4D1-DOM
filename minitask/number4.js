// A
let newdata = document.createElement("td");
const nama = document.createTextNode("Charlie");
newdata.append(nama);

const idelement = document.querySelector("#data-tabel tbody");
const tr = document.createElement("tr");
idelement.append(tr);
tr.append(newdata);

let newdata2 = document.createElement("td");
const nilai = document.createTextNode("92");
newdata2.append(nilai);

const id = document.querySelector("#data-tabel tbody");
id.append(tr);
tr.append(newdata2);

// B
let ubah = document.querySelector(
  "#data-tabel tbody tr:nth-child(2) td:nth-child(2)"
);

ubah.innerHTML = "89";

// C
let addClass = document.querySelector(
  "#data-tabel tbody tr:nth-child(1) td:nth-child(1)"
);

addClass.classList = "top-scorer";

// D
let dataaverage = document.createElement("td");
const rata = document.createTextNode("Average");
dataaverage.append(rata);

const elem = document.querySelector("#data-tabel");
const tfoot = document.createElement("tfoot");
const tr2 = document.createElement("tr");
elem.append(tfoot);
tfoot.append(tr2);
tr2.append(dataaverage);

// Search Average
const fildOne = document.querySelectorAll("#data-tabel tbody tr");

let hasil = 0;
for (let i = 0; i < fildOne.length; i++) {
  hasil += parseInt(fildOne[i].cells[1].firstChild.data);
}
let bagi = hasil / fildOne.length;

let fildaverage = document.createElement("td");
let totalAverage = document.createTextNode(`${bagi}`)
fildaverage.append(totalAverage)
tr2.append(fildaverage)

