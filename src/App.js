import React, { Component } from "react";
import firebase from "./config/Firabase.config";
import SignInOrSignUp from "./Components/SignInOrSignUp/SignInOrSignUp";
import Container from "./Components/Container/Container";
import Navbar from "./Components/Navbar/Navbar";
import QuizHome from "./Components/QuizHome/QuizHome";
import QuizCategories from "./Components/QuizCategories/QuizCategories";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      enterInQuizHome: null,
      quizes: [
        {
          name: "HTML",
          Info: "Total Questions: 3"
        },
        {
          name: "CSS",
          Info: "Total Questions: 3"
        },
        {
          name: "JS",
          Info: "Total Questions: 3"
        }
      ],
      enterInQuizCatalog: null,
      quizCategories: [
        {
          name: "Quiz #1",
          Info: "Total Questions: 3"
        },
        {
          name: "Quiz #2",
          Info: "Total Questions: 3"
        },
        {
          name: "Quiz #3",
          Info: "Total Questions: 3"
        }
      ],
      enterInQuiz: null,
      quiz1: [
        {
          question: "HTML Stands for?",
          correct_answer: "Hyper Text Markup Language",
          answers: ["Hyper Text Markup Language", "Hyper Text Marking Language"]
        },
        {
          question: "<p> tag is used for?",
          correct_answer: "Paragraph",
          answers: ["Paragraph", "Picture"]
        },
        {
          question: "Latest HTML version is?",
          correct_answer: "HTML5",
          answers: ["HTML4.1", "HTML5"]
        }
      ]
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      // console.log(user);
      user
        ? this.setState({ user, enterInQuizHome: true })
        : this.setState({ user: null, enterInQuizHome: false });
      // localStorage.setItem("user", user.uid);
      // localStorage.removeItem("user");
    });
  };

  enterInQuizCatalog = () => {
    this.setState({
      enterInQuizHome: false,
      enterInQuizCatalog: true
    })
  }

  render() {
    const { user, quizes, enterInQuizHome, quizCategories, enterInQuizCatalog } = this.state;
    return (
      <div>
        {user ? (
          <div>
            <Navbar />
            {/* <SignOut click={this.signout}/> */}
            <Container>
              {enterInQuizHome && <QuizHome quizes={quizes} enterInQuizCatalog={this.enterInQuizCatalog}/>}
              {enterInQuizCatalog && <QuizCategories quizCategories={quizCategories} />}
              {/* {console.log(this.state.)} */}
            </Container>
          </div>
        ) : (
          <SignInOrSignUp />
        )}
      </div>
    );
  }
}

export default App;
