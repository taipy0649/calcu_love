let button = document.querySelector("button");
button.addEventListener(
  "click",
  () => {
    const userAnswerClass = new userAnswer();
    
    // test
    console.log(
      "expected like [1, 2, 1]",
      userAnswerClass.returnArrayCheckedAnswerValue()
    );
    // test end
    
    const calcuClass= new calcuProbability();
    let score = calcuClass.calcuProbability(userAnswerClass.returnArrayCheckedAnswerValue())

    const show = new showScore();
    show.showScore(score)
  },
  false
);
