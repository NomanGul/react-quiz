import React, { Fragment } from "react";
import "../../App.css";

const QuizCategories = ({ quizCategories }) => {
  return (
    <Fragment>
      {quizCategories.map((quiz, index) => {
        console.log(quiz)
        return (
          <div className="row" key={index}>
            <div className="col s12 m12">
              <div className="card yellow lighten-3">
                <div className="card-content blue-grey-text text-darken-1">
                  <span className="card-title center">{quiz.name}</span>
                  <p>{quiz.Info}</p>
                </div>
                <div className="card-action center">
                  <a>Start Now</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default QuizCategories;
