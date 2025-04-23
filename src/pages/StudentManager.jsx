import React, { useState, useEffect } from "react";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";

function StudentManager() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students"));
    if (savedStudents) {
      setStudents(savedStudents);
    }
  }, []);
  useEffect(() => {
    if (students.length > 0) {
      console.log("Lưu danh sách sinh viên vào localStorage:", students);
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students]);

  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem("students", JSON.stringify(students));
    }
  }, [students]);

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
