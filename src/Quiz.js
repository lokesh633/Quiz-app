import React from "react";
import { useState } from "react";
import "./quizStyle.css";

export default function Quiz() {
  const [queInd, setQueInd] = useState(0);

  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "1, Who is the President of india ?",
      option: [
        "A. P. J. Abdul Kalam",
        "Droupadi Murmu",
        "M. Venkaiah Naidu",
        "Nitin Gadkari",
      ],
      answer: 1,
    },
    {
      question: "2, Who is the Chief Justice of india ?",
      option: [
        "DY Chandrachud",
        "Kapil Sibal",
        "Ranganath Misra",
        "Kamal Narain Singh",
      ],
      answer: 0,
    },
    {
      question: "3, Who is the Director of Chandrayaan-3 ?",
      option: [
        "Mylswamy Annadurai",
        "Nambi Narayanan",
        "K Sivan",
        "P Veeramuthuvel",
      ],
      answer: 3,
    },
    {
      question: "4, Who is the winner of chess world cup 2023 ?",
      option: [
        "Praggnanandhaa",
        "Fabiano Caruana",
        "Magnus Carlsen",
        "Viswanathan Anand",
      ],
      answer: 2,
    },
  ];

  const question = questions[queInd];

  const incrementIndex = (index) => {
    setQueInd(queInd + 1);
    if (index === questions[queInd].answer) {
      setScore(score + 1);
    }

    if (queInd >= 3) {
      setShowScore(true);
    }
  };

  const reset = () => {
    setQueInd(0);
    setScore(0);
    setShowScore(!showScore);
  };

  return (
    <>
      <div className="quiz-container">
        {showScore ? (
          <div className="score">
            <h2>
              Your score is : {score}
              <div className="btn-div">
                <button className="btn btn-primary" onClick={reset}>
                  Restart
                </button>
              </div>
            </h2>
          </div>
        ) : (
          <div className="quiz-container-question">
            <h2>Take Quiz</h2>
            <h3>{question.question}</h3>
            <div className="quiz-container-option">
              <ul className="quiz-container-ul">
                {question.option.map((item, index) => {
                  return (
                    <li
                      onClick={() => incrementIndex(index)}
                      className="quiz-container-li"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
