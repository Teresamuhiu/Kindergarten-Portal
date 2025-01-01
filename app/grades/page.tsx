'use client';

import { useEffect, useState } from "react";
import { getGradesByStudent } from "../../firebaseUtils";

export default function GradesPage() {
  const [grades, setGrades] = useState([]);
  const studentId = "student1"; // Replace with dynamic student ID

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGradesByStudent(studentId);
      setGrades(data);
    };
    fetchData();
  }, [studentId]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Grades</h1>
      <ul className="space-y-4">
        {grades.map((grade) => (
          <li key={grade.id} className="bg-red-100 p-4 rounded shadow-md">
            <p><strong>Course:</strong> {grade.courseId}</p>
            <p><strong>Grade:</strong> {grade.grade}</p>
            <p><strong>Comments:</strong> {grade.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
