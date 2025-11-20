// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Lab Portfolio",
  description: "My portfolio and learning journey as a frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <a href="/" className="font-semibold tracking-tight">
              Dev Lab
            </a>
            <div className="flex gap-4 text-sm">
              <a href="#top" className="hover:text-sky-400">
                Home
              </a>
              <a href="#skills" className="hover:text-sky-400">
                Skills
              </a>
              <a href="#projects" className="hover:text-sky-400">
                Projects
              </a>
              <a href="#contact" className="hover:text-sky-400">
                Contact
              </a>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}


