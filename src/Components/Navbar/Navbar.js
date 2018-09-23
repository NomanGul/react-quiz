import React from "react";
import firebase from "../../config/Firabase.config";

const Navbar = () => {
  const signout = () => {
    firebase.auth().signOut();
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-2">
        <a className="brand-logo center">Quiz</a>
        <a
          onClick={signout}
          className="btn-floating btn-large halfway-fab waves-effect waves-light red"
        >
          <i className="material-icons">account_circle</i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
