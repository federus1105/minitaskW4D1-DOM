const body = document.querySelector("body");

const profile = {
  name: "john Doe",
  age: 30,
  profession: "web Developer",
  hobbies: ["reading", "hiking", "photography"],
};

// A
const di = document.createElement("div");
di.classList.add("profile-card");
body.append(di);

// B
let heading = document.createElement("h2");
const fild = document.createTextNode(profile.name);
heading.append(fild);
di.append(heading);

// C
let paragraph = document.createElement("p")
const fildParagraph = document.createTextNode(`umur saya ${profile.age} profesi saya ${profile.profession}`)
paragraph.append(fildParagraph)
di.append(paragraph)

// D 
//list 1
let underet = document.createElement("ul")
let list1 = document.createElement("li")
const listOne = document.createTextNode(`${profile.hobbies[0]}`)
list1.append(listOne);
underet.append(list1);
// list 2
let list2 = document.createElement("li");
const listwo = document.createTextNode(`${profile.hobbies[1]}`)
list2.append(listwo)
underet.append(list2);
// list 3
let list3 = document.createElement("li");
const listhree = document.createTextNode(`${profile.hobbies[2]}`);
list3.append(listhree);
underet.append(list3);
di.append(underet)