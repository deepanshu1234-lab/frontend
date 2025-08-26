import React from "react";

function Newsletter() {
  return (
    <div className="newsletter">
      <h3 className="newsletter-title">SIGN UP FOR OUR DAILY INSIDER</h3>
      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
