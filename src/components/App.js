import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <ArticleList/>
      <Article/>
    </div>
  );
}

export default App;
