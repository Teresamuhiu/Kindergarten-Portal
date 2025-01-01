'use client';

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-200 p-4 flex flex-col space-y-4">
      <h2 className="text-xl font-bold mb-4">Student Portal</h2>
      <Link href="/dashboard">
        <a className="block px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Dashboard
        </a>
      </Link>
      <Link href="/students">
        <a className="block px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Students
        </a>
      </Link>
      <Link href="/students/add-student">
        <a className="block px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Add Student
        </a>
      </Link>
      <Link href="/auth/login">
        <a className="block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Logout
        </a>
      </Link>
    </div>
  );
}
