import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";


function StudentManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyễn Văn A", class: "12A", age: 18 },
    { id: 2, name: "Trần Thị B", class: "12B", age: 17 },
    { id: 3, name: "Lê Văn C", class: "12A", age: 19 },
  ]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div>
      <StudentForm onAdd={addStudent} />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
}

export default StudentManager;
