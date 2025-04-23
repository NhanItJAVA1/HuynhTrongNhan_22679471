import StudentItem from "./StudentItem"

function StudentList({ students, onDelete, onEdit }) {
  const groupedByClass = students.reduce((groups, student) => {
    const classGroup = student.class || "Chưa phân lớp"
    if (!groups[classGroup]) {
      groups[classGroup] = []
    }
    groups[classGroup].push(student)
    return groups
  }, {})

  if (students.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
        <div className="text-5xl mb-4">📚</div>
        <p className="text-gray-500 text-lg">Chưa có sinh viên nào trong danh sách</p>
        <p className="text-gray-400 mt-2">Hãy thêm sinh viên mới để bắt đầu</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {Object.keys(groupedByClass).length > 1 ? (
        Object.entries(groupedByClass).map(([classGroup, classStudents]) => (
          <div key={classGroup} className="mb-6">
            <div className="flex items-center mb-3 bg-blue-50 p-2 rounded-lg">
              <span className="text-blue-500 mr-2">📚</span>
              <h3 className="text-lg font-medium text-blue-700">
                {classGroup}{" "}
                <span className="text-sm text-blue-500 font-normal">({classStudents.length} sinh viên)</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {classStudents.map((student) => (
                <div
                  key={student.id}
                  className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <StudentItem student={student} onDelete={onDelete} onEdit={onEdit} />
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <StudentItem student={student} onDelete={onDelete} onEdit={onEdit} />
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
        <p className="text-gray-500">
          Tổng số: <span className="font-medium text-blue-600">{students.length}</span> sinh viên
        </p>
      </div>
    </div>
  )
}

export default StudentList
