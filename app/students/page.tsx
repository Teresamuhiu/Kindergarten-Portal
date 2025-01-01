'use client';

import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function StudentsPage() {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      setStudents(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Students List</h1>
      <table className="w-full bg-white rounded shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
