const questions = [
  ["夜二人でLINEをしましたか？", 0.1, 0.4, 0.95],
  ["デートしましたか", 0.1, 0.4, 0.95],
  ["ふとした時に、目が合いますか？", 0.1, 0.4, 0.95],
];

const questionString = [
  "夜二人でLINEやDMをしましたか？(電話でも可)",
  "デートしましたか",
  "ふとした時に、目が合いますか？",
  "共通の趣味がありますか？",
  "あなたはがりがりだったり、太っていたりしますか？",
  "二人で会話しているときに相手がよく笑っていますか？",
  "相談や恋愛の話をされたことがありますか？",
  "あなたと話しているときに、声のトーンが上がりますか？",
  "二人っきりでご飯を食べたことはありますか？",
  "出会ってから6か月以内ですか？",
];

// class Question {
//   makeQuestion(arrayQuestions) {
//     /* arrayQuestions is expected like below
//     const questionString = [
//       "夜二人でLINEをしましたか？",
//       "デートしましたか",
//       "ふとした時に、目が合いますか？",]; */
//     let questionsPlaceHtml = "";
//     for (let index = 0; index < arrayQuestions.length; index++) {
//       questionsPlaceHtml += `${arrayQuestions[index]}<br>`;
//       console.log(arrayQuestions[index]);
//     }

//     let questionsPlace = document.getElementById("questions");
//     questionsPlace.innerHTML = questionsPlaceHtml;
//   }
// }

class Question {
  makeQuestion(arrayQuestions) {
    /* arrayQuestions is expected like below
    const questionString = [
      "夜二人でLINEをしましたか？",
      "デートしましたか",
      "ふとした時に、目が合いますか？",]; */
    let questionsPlaceHtml = "";
    for (let index = 0; index < arrayQuestions.length; index++) {
      questionsPlaceHtml += ` <form>
      <p>${arrayQuestions[index]}</p>
      <label
        ><input type="radio" name="question" value="0.1" checked />いいえ</label
      >
      <label><input type="radio" name="question" value="0.4" />どちらでもない</label>
      <label><input type="radio" name="question" value="0.95" />はい</label>
    </form>`;
      console.log(arrayQuestions[index]);
    }

    let questionsPlace = document.getElementById("questions");
    questionsPlace.innerHTML = questionsPlaceHtml;
  }
}

class userAnswer {
  returnArrayCheckedAnswerValue() {
    var checked = document.querySelectorAll("input:checked");
    let value = [];

    for (let index = 0; index < checked.length; index++) {
      value.push(Number(checked[index].value));
    }

    return value;
  }
}

class calcuProbability {
  calcuProbability(array) {
    var score = 0;
    var arrayLength = array.length;
    array.forEach((element) => {
      score += (element * 100) / arrayLength;
    });
    return score;
  }
}

class showScore {
  showScore(score) {
    const scorePlace = document.getElementById("score");
    scorePlace.innerHTML = `${score}%`; //hard code hogehoge
    return true;
  }
}

// test
console.log("-- start test --");
const test = new userAnswer();
console.log("expected like [1, 1, 1]: ", test.returnArrayCheckedAnswerValue());
const testCalcu = new calcuProbability();
console.log("expected value is 1100: ", testCalcu.calcuProbability([1, 10]));
console.assert(550 == testCalcu.calcuProbability([1, 10]));

const testQuestion = new Question();
testQuestion.makeQuestion(questionString);
