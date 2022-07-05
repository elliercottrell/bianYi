let dictionary = {
  hello: " 你好 </br> <em><small>nǐ hǎo</small></em> ",
  bye: "再见 </br> <em><small>zàijiàn</small></em>",
  what: "啥 / 什么 </br> <em><small>shá /shénme </small></em>",
  pig: "猪 </br><em><small>zhū </small></em>",
  panda: "熊猫 </br><em><small>xióngmāo </small></em>",
  rabbit: "兔子 </br><small> tù zi</small>",
  cat: "猫  </br><em><small>māo </small></em>",
};

let explain = {
  hello: ``,
  bye: `<center><em>See you again</em></center>`,
  what: `啥意思 <em>sháyìsī : What meaning?(I don't understand)</em> </br> 没有什么 <em> méi yǒu shén me : It's nothing </em></br> 什么鬼？<em> shén me guǐ : What ghost?(What the hell)</em> `,
  pig: `<center><em>Measure:</em> 口 <em>kŏu</em></center>`,
  panda: `<em>Variant:</em> 猫熊 <em>māoxióng </br> Measure:</em> 只 <em> zhī</em>`,
  rabbit: `<em>Variants:</em> 兔 <em>tù</em> / 兔儿 <em>tù-r </br> Measure:</em> 只 <em> zhī</em>`,
  cat: `猫仔 māozǎi <em> kitten</em> </br> 猫叫 māojiào <em> purring; mewing </br> Measure:</em> 只 <em> zhī</em>`,
};

function translator() {
  let search = document.querySelector("#search").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = dictionary[search];
  let p = document.querySelector("p");
  p.innerHTML = explain[search];
}
let = document.querySelector("#searchButton");
searchButton.addEventListener("click", translator);
