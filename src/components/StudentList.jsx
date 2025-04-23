function StudentList({ students, onDelete }) {
    return (
      <div className="space-y-2">
        {students.map((s) => (
          <div
            key={s.id}
            className="flex justify-between items-center border p-3 rounded shadow-sm bg-white"
          >
            <div className="text-sm">
              <p className="font-semibold">{s.name}</p>
              <p className="text-gray-600">Lớp: {s.class} - Tuổi: {s.age}</p>
            </div>
            <button
              onClick={() => onDelete(s.id)} // Xử lý khi xóa sinh viên
              className="text-red-500 hover:underline text-sm"
            >
              Xoá
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default StudentList;
  