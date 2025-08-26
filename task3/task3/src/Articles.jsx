import React from "react";

export default function FeaturedArticles() {
  return (
    <section style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Featured Articles</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
    
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", width: "350px" }}>
          <img src="https://picsum.photos/200/300?random=1" alt="React Basics" style={{ width: "100%", borderRadius: "6px" }} />
          <h3>React Basics</h3>
          <p>Web development is moving towards faster frameworks and AI-powered tools that simplify coding.</p>
          <p>Emily Johnson</p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", width: "350px" }}>
          <img src="https://picsum.photos/200/300?random=2" alt="Node.js" style={{ width: "100%", borderRadius: "6px" }} />
          <h3>Mastering JavaScript in 2025</h3>
          <p>JavaScript remains the backbone of modern apps. Learn the latest ES features to stay ahead.</p>
          <p>Sophia Lee</p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", width: "350px" }}>
          <img src="https://picsum.photos/200/300?random=3" alt="React Hooks" style={{ width: "100%", borderRadius: "6px" }} />
          <h3>Why React Hooks Changed Everything</h3>
          <p>React Hooks have made state management and lifecycle handling much simpler for developers.</p>
          <p>Rahul Mehta</p>
        </div>
      </div>

      <button style={{ marginTop: "20px", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}>
        See all Articles
      </button>
    </section>
  );
}
