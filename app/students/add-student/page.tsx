'use client';

import { useState } from "react";
import { addStudent } from "../../../firebaseUtils";

export default function AddStudentPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [className, setClassName] = useState("");
  const [parentContact, setParentContact] = useState("");

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    const student = {
      name,
      age: parseInt(age),
      class: className,
      parentContact,
    };
    try {
      await addStudent(student);
      alert("Student added successfully!");
      setName("");
      setAge("");
      setClassName("");
      setParentContact("");
    } catch (error) {
      alert("Failed to add student: " + error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Add Student</h1>
      <form onSubmit={handleAddStudent} className="space-y-4">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Parent Contact"
          value={parentContact}
          onChange={(e) => setParentContact(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          Add Student
        </button>
      </form>
    </div>
  );
}
