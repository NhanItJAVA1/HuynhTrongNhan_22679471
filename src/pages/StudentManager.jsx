
import { useState, useEffect } from "react"
import StudentForm from "../components/StudentForm"
import StudentList from "../components/StudentList"
import StudentItem from "../components/StudentItem"

function StudentManager() {
  const [students, setStudents] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("")

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students") || "[]")
    if (savedStudents) {
      setStudents(savedStudents)
    }
  }, [])

  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("students", JSON.stringify(students))
    }
  }, [students])

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }])
  }

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id))
  }

  const editStudent = (updatedStudent) => {
    setStudents((prev) => prev.map((student) => (student.id === updatedStudent.id ? updatedStudent : student)))
  }

  const filterStudents = () => {
    if (!searchTerm && !selectedClass) return students
    return students.filter((student) => {
      const matchesSearchTerm = student.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesClass = selectedClass ? student.class === selectedClass : true
      return matchesSearchTerm && matchesClass
    })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 border-b pb-4">Quản Lý Sinh Viên</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm theo tên"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">📚</span>
            </div>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="">Tất cả các lớp</option>
              <option value="12A">12A</option>
              <option value="12B">12B</option>
              <option value="12C">12C</option>
            </select>
          </div>
        </div>

        <StudentForm onAdd={addStudent} />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <span className="text-blue-500 mr-2 text-xl">👥</span>
          <h2 className="text-xl font-semibold text-gray-800">Danh Sách Sinh Viên ({filterStudents().length})</h2>
        </div>

        {filterStudents().length === 0 ? (
          <div className="text-center py-8 text-gray-500">Không có sinh viên nào. Hãy thêm sinh viên mới!</div>
        ) : (
          <StudentList students={filterStudents()} onDelete={deleteStudent} onEdit={editStudent} />
        )}
      </div>
    </div>
  )
}

export default StudentManager
