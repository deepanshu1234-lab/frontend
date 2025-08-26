import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Articles";
import Tutorials from "./Tutorials";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Articles />
      <Tutorials />
      <Footer />
    </div>
  );
}

export default App;