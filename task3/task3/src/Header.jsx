import React from "react";
function Header() {
  return (
    <header className="header">
      
      <div className="navbar">
       
        <div className="logo">DEV@Deakin</div>

        <input type="text" placeholder="Search..." className="search-bar" />

        <div className="header-buttons">
          <button>Post</button>
          <button>Login</button>
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <img
          src="https://picsum.photos/1200/300"
          alt="Banner"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "6px",
            display: "block",
          }}
        />
      </div>
    </header>
  );
}

export default Header;
