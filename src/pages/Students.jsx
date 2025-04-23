import React from 'react'
const students = [
  { id: 1, name: "Nguyễn Văn A", class: "12A", age: 18 },
  { id: 2, name: "Trần Thị B", class: "12B", age: 17 },
  { id: 3, name: "Lê Văn C", class: "12A", age: 19 },
  { id: 4, name: "Phạm Thị D", class: "12C", age: 18 },
  { id: 5, name: "Nguyễn Văn E", class: "12B", age: 17 },
  { id: 6, name: "Trần Thị F", class: "12A", age: 19 },
];
  const Students = () => {
    return (
      <div className="space-y-2">
        {students.map((s) => (
          <div
            key={s.id}
            className="flex justify-between items-center border p-3 rounded shadow"
          >
            <div>
              <p><strong>Họ tên:</strong> {s.name}</p>
              <p><strong>Lớp:</strong> {s.class}</p>
              <p><strong>Tuổi:</strong> {s.age}</p>
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Xoá
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default Students