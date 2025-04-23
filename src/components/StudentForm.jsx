import { useState } from "react";

function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !studentClass || !age) return;
    onAdd({ name, class: studentClass, age: Number(age) });
    setName("");
    setStudentClass("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-4">
      <div className="grid grid-cols-3 gap-2 mb-2">
        <input
          type="text"
          placeholder="Họ tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Lớp"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Tuổi"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
      >
        Thêm sinh viên
      </button>
    </form>
  );
}

export default StudentForm;
