import { useState } from "react"

function StudentForm({ onAdd }) {
  const [name, setName] = useState("")
  const [studentClass, setStudentClass] = useState("")
  const [age, setAge] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !studentClass || !age) {
      setError("Vui lòng điền đầy đủ thông tin")
      return
    }

    onAdd({ name, class: studentClass, age: Number(age) })
    setName("")
    setStudentClass("")
    setAge("")
    setError("")
  }

  return (
    <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <span className="text-blue-500 mr-2">➕</span>
        Thêm Sinh Viên Mới
      </h2>

      {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">👤</span>
            </div>
            <input
              type="text"
              placeholder="Họ tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">📚</span>
            </div>
            <select
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Chọn lớp</option>
              <option value="12A">12A</option>
              <option value="12B">12B</option>
              <option value="12C">12C</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">📅</span>
            </div>
            <input
              type="number"
              placeholder="Tuổi"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
        >
          <span className="mr-2">➕</span>
          Thêm sinh viên
        </button>
      </form>
    </div>
  )
}

export default StudentForm
