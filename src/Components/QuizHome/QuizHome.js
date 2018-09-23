import React, { Fragment } from "react";
import "../../App.css";

const QuizHome = ({ quizes, enterInQuizCatalog }) => {
  return (
    <Fragment>
      {quizes.map((quiz, index) => {
        console.log(quiz)
        return (
          <div className="row" key={index}>
            <div className="col s12 m12">
              <div className="card yellow lighten-3">
                <div className="card-content blue-grey-text text-darken-1">
                  <span className="card-title center">{quiz.name}</span>
                </div>
                <div className="card-action center">
                  <a onClick={enterInQuizCatalog}>Start Now</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default QuizHome;
