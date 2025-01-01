
import { db } from "./firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";

// Add a new student
export const addStudent = async (student) => {
  try {
    const docRef = await addDoc(collection(db, "students"), student);
    console.log("Student added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding student: ", error);
  }
};

// Get all students
export const getStudents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "students"));
    const students = [];
    querySnapshot.forEach((doc) => {
      students.push({ id: doc.id, ...doc.data() });
    });
    return students;
  } catch (error) {
    console.error("Error fetching students: ", error);
  }
};

// Update a student
export const updateStudent = async (id, updatedData) => {
  try {
    const studentRef = doc(db, "students", id);
    await updateDoc(studentRef, updatedData);
    console.log("Student updated: ", id);
  } catch (error) {
    console.error("Error updating student: ", error);
  }
};

// Delete a student
export const deleteStudent = async (id) => {
  try {
    const studentRef = doc(db, "students", id);
    await deleteDoc(studentRef);
    console.log("Student deleted: ", id);
  } catch (error) {
    console.error("Error deleting student: ", error);
  }
};

// Add a new course
export const addCourse = async (course) => {
    try {
      const docRef = await addDoc(collection(db, "courses"), course);
      console.log("Course added with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding course: ", error);
    }
  };

  // Add a new grade
export const addGrade = async (grade) => {
    try {
      const docRef = await addDoc(collection(db, "grades"), grade);
      console.log("Grade added with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding grade: ", error);
    }
  };

// Get all courses
export const getCourses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const courses = [];
      querySnapshot.forEach((doc) => {
        courses.push({ id: doc.id, ...doc.data() });
      });
      return courses;
    } catch (error) {
      console.error("Error fetching courses: ", error);
    }
  };

  // Get grades for a specific student
export const getGradesByStudent = async (studentId) => {
    try {
      const gradesQuery = query(
        collection(db, "grades"),
        where("studentId", "==", studentId)
      );
      const querySnapshot = await getDocs(gradesQuery);
      const grades = [];
      querySnapshot.forEach((doc) => {
        grades.push({ id: doc.id, ...doc.data() });
      });
      return grades;
    } catch (error) {
      console.error("Error fetching grades: ", error);
    }
  };

