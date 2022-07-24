function translator() {
  let search = document.querySelector("#search").value.toLowerCase();
  let h1 = document.querySelector("h1");
  h1.innerHTML = dictionary[search];
  let p = document.querySelector("p");
  p.innerHTML = explain[search];
}
let = document.querySelector("#searchButton");
searchButton.addEventListener("click", translator);
