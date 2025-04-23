import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, onDelete, onEdit }) {
  return (
    <ul className="space-y-4">
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default StudentList;
