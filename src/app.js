let dictionary = {
  hello: `你好 </br> <em><small>nǐ hǎo</small></em>`,
  bye: `再见 </br> <em><small>zàijiàn</small></em>`,
  what: `啥 / 什么 </br> <em><small>shá /shénme </small></em>`,
  pig: `猪 </br><em><small>zhū </small></em>`,
  panda: `熊猫 </br><em><small>xióngmāo </small></em>`,
  rabbit: `兔子 </br><small> tù zi</small>`,
  cat: `猫  </br><em><small>māo </small></em>`,
  dog: `狗 </br><em><small>gǒu</small></em>`,
  monkey: `猴子 </br><em><small>hóuzi</small></em>`,
  koala: `树袋熊 </br><em><small>shùdàixióng</small></em>`,
  bear: `熊 </br><em><small>xióng</small></em>`,
};

let explain = {
  //characters are <b>, pinyin is plain, english is <em><small>

  hello: ``,
  bye: `<center><em><small>See you again</small></em></center>`,

  what: `<b>啥意思</b> sháyìsī <em><small>: What meaning?(I don't understand)</em></small> 
  </br><b>没有什么</b> méi yǒu shén me <em><small>: It's nothing</small></em>
  </br><b>什么鬼</b> shén me guǐ <em><small>: What ghost?(What the hell)</small</em> `,

  pig: `<center><em><small>Measure: </small></em><b>口<b> kŏu</center>`,

  panda: `<em><small>Variant: </small></em><b>猫熊</b> māoxióng 
  </br><em><small>Measure:</small> </em><b>只</b> zhī`,

  rabbit: `<em><small>Variants:</small></em><b> 兔 </b>tù /<b> 兔儿
  </b> tù-r </br><em><small>Measure: </small></em><b>只</b> zhī`,

  cat: `<b>猫仔</b> māozǎi <em><small>: kitten</small></em> 
  </br><b>猫叫</b> māojiào <em><small>: purring; mewing 
  </br>Measure: </small></em><b>只</b> zhī`,

  dog: `<b>狗东西</b> gǒu dōngxi <em><small>: That son of a bitch</em></small>
  </br><em><small>Measure:</small></em><b>只</b> zhī `,

  monkey: `<center><em><small>Measure: </small></em><b>只</b> zhī</center>`,

  koala: `<em><small>Variants:</small></em><b> 考拉 </b>kǎolā
  </br><em><small>Measure: </small></em><b>只</b> zhī`,

  bear: `<b>幼熊</b> yòu xióng <em><small>: bear cub</small></em> 
  </br><b>玩具熊</b> wánjù xióng <em><small>: teddy bear 
  </br>Measure: </small></em><b>头</b> tóu`,
};

function translator() {
  let search = document.querySelector("#search").value.toLowerCase();
  let h1 = document.querySelector("h1");
  h1.innerHTML = dictionary[search];
  let p = document.querySelector("p");
  p.innerHTML = explain[search];
}
let = document.querySelector("#searchButton");
searchButton.addEventListener("click", translator);
