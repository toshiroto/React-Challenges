import React from "react";
import { render } from "react-dom";

let isLoggedIn = true

function renderConditionally () {
  if (isLoggedIn === false) {
    return <h1>Hello</h1>
  } else {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    )
  }
  }


function App() {
  return (
    <div className="container">
    {renderConditionally()}

    </div>
  );
}

export default App;
