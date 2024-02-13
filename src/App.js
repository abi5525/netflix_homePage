import React from "react";
import "./App.js";
import NavBar from "./Components/NavBar/NavBar.js";
import { action, originals, comedy, horror, romance } from "./urls.js";
import "./App.css";
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
    </div>
  );
}

export default App;
