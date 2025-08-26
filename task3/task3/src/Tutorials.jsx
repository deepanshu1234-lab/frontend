import React from "react";

export default function FeaturedTutorials() {
  return (
    <section>
      <h2>Featured Tutorials</h2>
      <div className="cards">

        <div className="card">
          <img src="https://picsum.photos/200?random=1" alt="JavaScript Essentials" />
          <h3>JavaScript Essentials</h3>
          <p>Learn the fundamentals of modern JavaScript step by step.</p>
          <p> Simran Kaur</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200?random=2" alt="Mastering CSS Flexbox" />
          <h3>Mastering CSS Flexbox</h3>
          <p>Understand how to build responsive layouts using Flexbox.</p>
          <p> Gaurav Singh</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200?random=3" alt="React State Management" />
          <h3>React State Management</h3>
          <p>A beginner’s guide to handling state effectively in React.</p>
          <p> Aisha Khan</p>
        </div>

      </div>
      <button className="btn">See all tutorials</button>
    </section>
  );
}
