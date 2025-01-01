'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth/login");
  };

  return (
    <nav className="bg-[var(--secondary-bg)] text-[var(--secondary-text)] p-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/dashboard">
        <h1 className="font-bold text-xl text-[var(--secondary-text)]">Student Portal</h1>
        </Link>
        <button
          className="md:hidden text-[var(--secondary-text)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-6">
          <Link href="/dashboard">
            <span className="text-[var(--secondary-text)] hover:underline cursor-pointer">
              Dashboard
            </span>
          </Link>
          <Link href="/students">
            <span className="text-[var(--secondary-text)] hover:underline cursor-pointer">
              Students
            </span>
          </Link>
          <Link href="/students/add-student">
            <span className="text-[var(--secondary-text)] hover:underline cursor-pointer">
              Add Student
            </span>
          </Link>
          <Link href="/courses">
            <span className="text-[var(--secondary-text)] hover:underline cursor-pointer">Courses</span>
          </Link>
          <Link href="/grades">
            <span className="text-[var(--secondary-text)] hover:underline cursor-pointer">Grades</span>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-[var(--primary-bg)] text-[var(--primary-text)] px-4 py-2 rounded hover:bg-[var(--secondary-bg)] hover:text-[var(--secondary-text)]"
          >
            Logout
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col mt-4 md:hidden space-y-4">
          <Link href="/dashboard">
            <span className="text-[var(--secondary-text)] hover:underline cursor-pointer">
              Dashboard
            </span>
          </Link>
          <Link href="/students">
            <span className="text-[var(--secondary-text)] hover:underline cursor-pointer">
              Students
            </span>
          </Link>
          <Link href="/students/add-student">
            <span className="text-[var(--secondary-text)] hover:underline cursor-pointer">
              Add Student
            </span>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-[var(--primary-bg)] text-[var(--primary-text)] px-4 py-2 rounded hover:bg-[var(--secondary-bg)] hover:text-[var(--secondary-text)]"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
