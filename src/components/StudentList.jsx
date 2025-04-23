import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, onDelete, onEdit }) {
  return (
    <div>
      {students.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Không có sinh viên nào. Hãy thêm sinh viên mới!
        </div>
      ) : (
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
      )}
      
      {students.length > 0 && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200 text-center">
          <p className="text-gray-500">
            Tổng số: <span className="font-medium text-blue-600">{students.length}</span> sinh viên
          </p>
        </div>
      )}
    </div>
  );
}

export default StudentList;
