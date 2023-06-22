adviceData = [
  10,
  "自信をもって。改善できるところから徐々にやっていこう",
  20,
  "一歩前進だ。改善を続けよう。",
  30,
  "改善を続けよう",
  40,
  "もう少し距離を縮めていこう",
  50,
  "悪い人ではない。もう少し仲良くなってみよう",
  60,
  "好意を抱いてくれていそう。この調子で続けよう。",
  70,
  "成功まであと一歩。自信をもって。",
  80,
  "向こうもあなたのことが好き化も！いい雰囲気になったら告白してみよう",
  90,
  "今すぐに告白しよう。夕方から夜にかけてが効果的だぞ！",
];

class advice {
  showAdvice(score) {
    var advicePlace = document.getElementById("advice");
    if (score <= 10) {
      advicePlace.innerHTML = `自信をもって。改善できるところから徐々にやっていこう`;
    } else if (score <= 20) {
      advicePlace.innerHTML = `一歩前進だ。改善を続けよう。`;
    } else if (score <= 30) {
      advicePlace.innerHTML = `改善を続けよう`;
    } else if (score <= 40) {
      advicePlace.innerHTML = `悪い人ではない。もう少し仲良くなってみよう`;
    } else if (score <= 50) {
      advicePlace.innerHTML = `好意を抱いてくれていそう。この調子で続けよう。`;
    } else if (score <= 60) {
      advicePlace.innerHTML = `好意を抱いてくれていそう。この調子で続けよう。`;
    } else if (score <= 70) {
      advicePlace.innerHTML = `成功まであと一歩。自信をもって。`;
    } else if (score <= 80) {
      advicePlace.innerHTML = `向こうもあなたのことが好き化も！いい雰囲気になったら告白してみよう`;
    } else if (score <= 90) {
      advicePlace.innerHTML = `今すぐに告白しよう。夕方から夜にかけてが効果的だぞ！`;
    } else if (score <= 100) {
      advicePlace.innerHTML = `これで付き合えなかったら、明日、世界が滅びるでしょう。今すぐ告白しよう。`;
    }
  }
}

// test
const testAdvice = new advice();
// testAdvice.showAdvice(15)
