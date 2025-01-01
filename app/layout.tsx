import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--primary-bg)] text-[var(--primary-text)]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
