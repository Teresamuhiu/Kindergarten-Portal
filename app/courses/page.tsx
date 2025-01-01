'use client';

import { useEffect, useState } from "react";
import { getCourses } from "../../firebaseUtils";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <ul className="space-y-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id} className="bg-red-100 p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <p>{course.description}</p>
              <p><strong>Teacher:</strong> {course.teacher}</p>
            </li>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </ul>
    </div>
  );
}
