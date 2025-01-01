'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if a user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Redirect logged-in users to the dashboard
        router.push('/dashboard');
      } else {
        // Redirect guests to login page
        router.push('/auth/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--primary-bg)] text-[var(--primary-text)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Student Portal</h1>
      <p className="text-lg">Please wait while we redirect you...</p>
    </div>
  );
}
