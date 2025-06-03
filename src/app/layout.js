// app/layout.js
import './globals.css';
import Link from 'next/link';
import { Home, Info, Briefcase, Mail } from 'lucide-react'; // Optional: for nav icons

export const metadata = {
  title: 'Carlos Velarde - Portfolio', // More specific title
  description: "Carlos Velarde's Full-Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased"> 
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 min-h-screen flex flex-col">
        {/*
          - bg-slate-50/dark:bg-slate-900: Default page background.
          - text-slate-800/dark:text-slate-200: Default text color.
          - min-h-screen: Body takes at least full viewport height.
          - flex flex-col: Header and main content stack vertically, main can grow.
        */}
        <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50 w-full">
          {/*
            - sticky top-0 z-50: Makes header sticky at the top.
            - w-full: Ensures header bar is full width.
          */}
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            {/*
              - max-w-7xl mx-auto px-4...: Constrains the NAV CONTENT, not the header bar.
              - h-16: Give header a fixed height.
            */}
            <Link href="/" className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 hover:opacity-80 transition-opacity">
              Michael Velarde
            </Link>
            <ul className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base font-medium">
              <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-md flex items-center"><Home size={18} className="sm:hidden" /><span className="hidden sm:inline">Home</span></Link></li>
              <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-md flex items-center"><Info size={18} className="sm:hidden" /><span className="hidden sm:inline">About</span></Link></li>
              <li><Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-md flex items-center"><Briefcase size={18} className="sm:hidden" /><span className="hidden sm:inline">Projects</span></Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-md flex items-center"><Mail size={18} className="sm:hidden" /><span className="hidden sm:inline">Contact</span></Link></li>
            </ul>
          </nav>
        </header>

        {/* THIS IS THE KEY CHANGE for the main layout wrapper */}
        <main className="flex-grow w-full">
          {/*
            - flex-grow: Allows this main area to take up remaining vertical space.
            - w-full: Ensures it can be full width.
            - Padding (p-4) and max-width (max-w-6xl) have been REMOVED from here.
              These will be handled by the HomePage component itself or its inner sections.
          */}
          {children}
        </main>

        {/* Optional: Footer example */}
        {/* <footer className="bg-slate-100 dark:bg-slate-800 text-center p-4 text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Carlos Velarde. All rights reserved.
        </footer> */}
      </body>
    </html>
  );
}