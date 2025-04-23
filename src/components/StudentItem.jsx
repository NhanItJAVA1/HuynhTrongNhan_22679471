import { useState } from "react"

function StudentItem({ student, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedStudent, setEditedStudent] = useState({ ...student })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedStudent((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    onEdit(editedStudent)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedStudent({ ...student })
    setIsEditing(false)
  }

  return (
    <li className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {isEditing ? (
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Chỉnh sửa thông tin</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">👤</span>
              </div>
              <input
                type="text"
                name="name"
                value={editedStudent.name}
                onChange={handleChange}
                placeholder="Họ tên"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">📚</span>
              </div>
              <select
                name="class"
                value={editedStudent.class}
                onChange={handleChange}
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
                name="age"
                value={editedStudent.age}
                onChange={handleChange}
                placeholder="Tuổi"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={handleCancel}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              ❌ Hủy
            </button>
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              💾 Lưu
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2 text-blue-500">📚</span>
                  <span>
                    Lớp: <span className="font-medium">{student.class}</span>
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2 text-blue-500">📅</span>
                  <span>
                    Tuổi: <span className="font-medium">{student.age}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                aria-label="Sửa"
              >
                ✏️ Sửa
              </button>
              <button
                onClick={() => onDelete(student.id)}
                className="flex items-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                aria-label="Xóa"
              >
                🗑️ Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}

export default StudentItem
