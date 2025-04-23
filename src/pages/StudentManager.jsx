import React, { useState } from "react";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";

function StudentManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyễn Văn A", class: "12A", age: 18 },
    { id: 2, name: "Trần Thị B", class: "12B", age: 17 },
    { id: 3, name: "Lê Văn C", class: "12A", age: 19 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const editStudent = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  const filterStudents = () => {
    if (!searchTerm && !selectedClass) return students;
    return students.filter((student) => {
      const matchesSearchTerm =
        student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesClass = selectedClass
        ? student.class === selectedClass
        : true;
      return matchesSearchTerm && matchesClass;
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Danh sách sinh viên</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Chọn lớp</option>
          <option value="12A">12A</option>
          <option value="12B">12B</option>
          <option value="12C">12C</option>
        </select>
      </div>

      <StudentForm onAdd={addStudent} />
      <StudentList
        students={filterStudents()}
        onDelete={deleteStudent}
        onEdit={editStudent}
      />
    </div>
  );
}

export default StudentManager;
