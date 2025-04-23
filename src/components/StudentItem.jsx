import React, { useState } from "react";

function StudentItem({ student, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStudent, setEditedStudent] = useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(editedStudent);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center p-4 bg-gray-100 rounded-md mb-2">
      {isEditing ? (
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            name="name"
            value={editedStudent.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="class"
            value={editedStudent.class}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            name="age"
            value={editedStudent.age}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Lưu
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="font-semibold">{student.name}</p>
            <p>Lớp: {student.class}</p>
            <p>Tuổi: {student.age}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
            >
              Sửa
            </button>
            <button
              onClick={() => onDelete(student.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Xóa
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default StudentItem;
