import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import StudentManager from "./pages/StudentManager"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<StudentManager />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
