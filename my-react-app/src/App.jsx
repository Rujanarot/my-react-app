import { useState } from "react"

function App() {
  const [score, setScore] = useState(0)
  const [open, setOpen] = useState(false)

  // กดแมว
  const handleClick = () => {
    setScore(score + 1)
    setOpen(!open)
  }

  // รีเซ็ตคะแนน
  const resetScore = () => {
    setScore(0)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5d6a1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial",
        paddingTop: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "20px",
        }}
      >
        POPCAT 😺
      </h1>

      {/* คะแนน */}
      <div
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          backgroundColor: "white",
          padding: "10px 30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        Score: {score}
      </div>

      {/* ปุ่ม Reset */}
      <button
        onClick={resetScore}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "18px",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#ef4444",
          color: "white",
          cursor: "pointer",
        }}
      >
        Reset Score
      </button>

      {/* ระยะห่าง */}
      <div style={{ marginTop: "120px" }}>
        {/* แมว */}
        <div
          onClick={handleClick}
          style={{
            fontSize: open ? "160px" : "140px",
            cursor: "pointer",
            transition: "0.1s",
            userSelect: "none",
          }}
        >
          {open ? "😺" : "🐱"}
        </div>
      </div>

      <p 
  style={{ 
    marginTop: "80px",
    fontSize: "20px"
  }}
>
  คลิกแมวเพื่อเพิ่มคะแนน!
</p>
    </div>
  )
}

export default App