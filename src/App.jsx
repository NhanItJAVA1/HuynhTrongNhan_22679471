import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import StudentManager from './pages/StudentManager';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Quản lý sinh viên</h1>
      <StudentManager />
    </div>
  );
}

export default App
