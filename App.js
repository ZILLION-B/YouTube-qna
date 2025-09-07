import { useState } from "react";

export default function App() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim().length === 0) return;
    console.log("New Question:", question);
    setSubmitted(true);
    setQuestion("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #6a11cb, #2575fc)",
      padding: "20px"
    }}>
      <div style={{
        maxWidth: "500px",
        width: "100%",
        background: "white",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          Submit Your Question 🎤
        </h1>
        <p style={{ color: "#555", marginBottom: "20px" }}>
          Drop your question below. It might get answered in a YouTube video!
        </p>

        {submitted ? (
          <div style={{ color: "green", fontWeight: "600", textAlign: "center" }}>
            ✅ Thanks! Your question was submitted.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                marginBottom: "15px",
                resize: "none"
              }}
              rows="4"
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                background: "#6a11cb",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Submit Question
            </button>
          </form>
        )}

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Share this page so more people can drop questions:
          </p>
          <button
            style={{
              marginTop: "10px",
              padding: "10px 15px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              cursor: "pointer"
            }}
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}
