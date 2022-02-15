//const array = []
//const string = 'je suis un string'
//const numbre = 48
//const boolean = true

const array = ["Paris", "Lyon", "Montreal", "Bordeaux"];
console.log(array[1]);
console.log(array[1][1]);

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
  console.log(typeof array[i]);
}

// array cheasheet dans le projet //

const array1 = [6, 49, 1000, 7];

array1.sort();
console.log(array1);

//////////////////////////////////////////
// https://www.youtube.com/embed/QB1DTl7HFnc?list=PLEiMYEzpB4QuviwNtxEcwqymS_us7gH8H --> code embed
// https://www.youtube.com/watch?v=QB1DTl7HFnc?list=PLEiMYEzpB4QuviwNtxEcwqymS_us7gH8H&t=517s --> code copié depuis la barre du navigateur
//////////////////////////////////////////

const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  changelink(e.target.value);

  if (link) {
    video.innerHTML = `<iframe width="1280" height="720" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
});

const changelink = (linktochange) => {
  let embed = linktochange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};
