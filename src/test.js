let dictionary = {
  words: ["hello", "bye", "what", "pig", "panda", "rabbit"],
  hello: " 你好 </br> <em><small>nǐ hǎo</small></em> ",
  bye: "再见 </br> <em><small>zàijiàn</small></em>",
  what: "啥 </br> <em><small>shá</small></em>",
  pig: "猪 </br><em><small>zhū </small></em>",
  panda: "熊猫 </br><em><small>xióngmāo </small></em>",
  rabbit: "兔子 </br><em><small>tù zi </small></em>",
};

function translator() {
  let searching = document.querySelector("#search").value;

  if (searching === dictionary.words[0]) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = dictionary.hello;
  } else if (searching === dictionary.words[1]) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = dictionary.bye;
  } else if (searching === dictionary.words[2]) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = dictionary.what;
  } else if (searching === dictionary.words[3]) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = dictionary.pig;
  } else if (searching === dictionary.words[4]) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = dictionary.panda;
  } else if (searching === dictionary.words[5]) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = dictionary.rabbit;
  } else {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "sorry, cannot find";
  }
}
let search = document.querySelector("#searchButton");
searchButton.addEventListener("click", translator);
