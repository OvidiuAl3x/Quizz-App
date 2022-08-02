const correctAnswers = ["B", "A", "C", "A", "A", "B", "B", "C", "C", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  let scorePercent = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];

  // check answers number

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });

  // check answers percent
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      scorePercent += 10;
    }
  });

  // Scroll top
  scrollTo(0, 0);

  // show result on page
  result.classList.remove("d-none");

  //  score number
  result.querySelector(".number").textContent = `${score}`;

 // animated score percent
  let outputPrecent = 0;

  const timerProcent = setInterval(() => {
    result.querySelector(".percent").textContent = `${outputPrecent}%`;
    if (outputPrecent === scorePercent) {
      clearInterval(timerProcent);
    } else {
      outputPrecent++;
    }
  }, 20);


  // color score
  let colorNumber = document.querySelector('.number');
  if (score < 5) {
    colorNumber.style.color = "red";
  }else if (score >= 4 && score < 8){
      colorNumber.style.color = "rgb(247, 231, 9)";
  }else if (score >=7 && score < 10){
      colorNumber.style.color = "green";
  }else{
    colorNumber.style.color = "limegreen";
  };

  let colorPercent = document.querySelector('.percent');
  if (score < 5) {
    colorPercent.style.color = "red";
  }else if (score >= 4 && score < 8){
      colorPercent.style.color = "rgb(247, 231, 9)";
  }else if (score >=7 && score < 10){
      colorPercent.style.color = "green";
  }else{
    colorPercent.style.color = "limegreen";
  };

  // color answers
  let correct = document.querySelectorAll(".correct");
  correct.forEach((c) => {
    c.className = "B";
  });

  let wrong = document.querySelectorAll(".wrong");
  wrong.forEach((w) => {
    w.className = "A";
  });
});
